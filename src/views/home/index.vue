<template>
  <div>
    <!--  :class="{'nav-bg':img_url}"  -->
    <div class="text-right p-1 search">
      <el-popover placement="bottom" width="500" trigger="click">
        <fanyi />
        <el-button slot="reference" size="mini" rows="4">百度翻译</el-button>
      </el-popover>
    </div>
    <!-- 搜索栏  :class="{'nav-bg':img_url}"  -->
    <div class="search">
      <div style="width: 420px;margin: 0 auto;position: relative;">
        <div class="d-flex justify-content-center" style="border: 1px solid #30bfc6;
    border-radius: 8px;">
          <div class="d-flex align-items-center search-tag" @click="showHandle()">
            <div v-for="item in searchList" :key="item.value">
              <img :src="item.icon" v-if="curSearchAim == item.value">
            </div>
            <i class="el-icon-caret-bottom ml-1 color-b8c4ce"></i>
            <el-divider direction="vertical"></el-divider>
          </div>
          <div class="search_new" style="width: 100%;">
            <el-input 
              placeholder="请输入搜索内容" 
              size="medium" clearable 
              @input="changeHandle"
              @keyup.enter.native="searchHandle" 
              v-model="searchValue" 
              @keyup.down.native="upAndDownHandle('down')" 
              @keyup.up.native="upAndDownHandle('up')">
            </el-input>
          </div>
        </div>
        <!-- 搜索框下的快捷入口 -->
        <div>
          <div class="d-flex justify-content-center font-size-1">
            <div v-for="i in 7" :key="i" class="p">列表 {{i}}</div>
          </div>
        </div>

        <!-- 搜索目标列表 -->
        <div class="search_list" v-show="showSearchList">
          <div v-for="item in searchList" :key="item.value" @click="setSearch(item)" class="search_item">
            <img :src="item.icon">
            <div>{{ item.name}}</div>
          </div>
        </div>

        <!-- 搜索模糊匹配列表 -->
        <div class="search_list border" style="z-index: 9;background-color: #fff;" v-show="sugrecList.length">
          <ul class="p-1">
            <li 
              class="font-size-2 p-1 cursor-p" 
              :style="{ color: (activeText == item.sa ? '#009CFF' : '#000')}"
              v-for="item in sugrecList" 
              @click="searchTarget(item)">{{item.q}}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="content">
      <div class="bg">
        <often />
      </div>
      <div class="d-flex">
        <div class="left mr-3">
          <left></left>
        </div>
        <div class="right w-100">
          <right></right>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import often from "./often.vue"
  import right from './right.vue'
  import left from './left.vue'
  import fanyi from './fanyi.vue'
  import {
    mapState
  } from 'vuex';
  import service from './service.js'

  export default {
    components: {
      often,
      right,
      left,
      fanyi
    },
    computed: {
      ...mapState({
        img_url: state => state.userInfo.path
      })
    },
    data() {
      return {
        searchList: [],
        curSearchAim: "",
        searchValue: "",
        aimsObj: {},
        imgV: "",
        showSearchList: false,
        timer: null,
        sugrecList: [],
        sugrecValue: "",
        activeText: "",
        num: -1,
        oldSearchValue: ""
      }
    },
    mounted() {
      this.queryList();
    },
    methods: {
      upAndDownHandle(action){
        let len = this.sugrecList.length;
        if(!len) return false;
        if(!this.oldSearchValue) this.oldSearchValue = this.searchValue;
        let n = this.num;
        n = action == 'down' ? n+1 : (n<0 ? Number(len-1) : n-1);
        this.num = n >= len ? -1 : (n<0 ? -1 : n);
        if(this.num >= 0){
          this.activeText = this.sugrecList[this.num].sa;
          this.searchValue = this.sugrecList[this.num].q;
        }else{
          this.activeText = "";
          this.searchValue = this.oldSearchValue;
        }
      },
      // 搜索目标list
      queryList() {
        service.querySearchList().then(res => {
          if (res.data.code) {
            let data = res.data.data;
            if (data.length == 0) return false;
            this.curSearchAim = data[0].searchIAims;
            this.searchList = data;
            data.forEach(item => {
              if (item.icon) {
                item.icon = require('../../static/icon/' + item.icon)
              }
              if (this.curSearchAim == item.value) {
                this.aimsObj = item;
              }
            })
          }
        })
      },
      showHandle() {
        this.showSearchList = !this.showSearchList;
      },
      // 设置搜索目标
      setSearch(item) {
        service.setSearchAims({
          'value': item.value
        }).then(res => {
          if (res.data.code) {
            this.showSearchList = false;
            this.curSearchAim = item.value;
            this.aimsObj = item;
          }
        })

      },
      // 输入搜索内容后回车执行的函数
      searchHandle() {
        if (!this.searchValue) return false;
        let a = document.createElement("a");
        a.setAttribute("href", `${this.aimsObj.url}${this.searchValue}`);
        a.setAttribute("target", "_blank");
        a.click();
        this.sugrecList = []
      },
      // 搜索提示-节流
      fnThrottle(method, duration) {
        var that = this;
        return function() {
          if (!that.timer) {
            that.timer = setTimeout(function() {
              method();
              clearTimeout(that.timer);
              that.timer = null;
            }, duration)
          }
        }
      },
      // 输入框事件
      changeHandle(q) {
        this.sugrecValue = q;
        if (!q) {
          this.sugrecList = [];
          return false;
        }
        this.fnThrottle(this.sugrecHandle, 500)();
      },
      // 查询提示内容
      sugrecHandle(q) {
        service.sugrec({
          prod: 'pc',
          wd: this.sugrecValue
        }).then(res => {
          if (res.data.code) {
            this.sugrecList = res.data.data;
          } else {
            this.sugrecList = [];
          }
        })
      },
      // 点击提示内容项执行
      searchTarget(item) {
        this.searchValue = item.q;
        this.searchHandle();
        this.sugrecList = [];
      }
    }
  }
</script>

<style>
  .search-text {
    width: 600px;
    margin: 25px auto;
  }

  .search-text .el-input__inner {
    /* border-radius: 25px; */
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  .search-btn {
    width: 100px;
  }

  .search-text .el-input-group__append {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .search_new .el-input__inner {
    height: 100%;
    height: 34px !important;
    padding-left: 0px;
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border: none;
  }
</style>

<style scoped="scoped">
  .search {
    width: 100%;
    padding: 80px 0px 70px 0;
    /* background: #f1f1f19e; */
    /* #f5f5f59e */
  }

  .search-tag {
    padding: 0 6px;
    height: 34px;
    background-color: #fff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    cursor: pointer;
  }

  .search-tag img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .search_list {
    margin: 2px auto;
    width: 420px;
    border-radius: 5px;
    background-color: #30bfc6;
    color: #000000;
    overflow-x: auto;
    position: absolute;
    left: 0px;
    top: 35px;
  }

  .left {
    min-width: 300px;
    max-width: 300px;
  }

  .right {
    width: 100%;
  }

  .search_item {
    float: left;
    width: 70px;
    text-align: center;
    padding: 5px 0px;
    cursor: pointer;
    color: #000000;
    font-size: 12px;
    /* background-color: #ccc; */
  }

  .search_item img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .search_item:hover {
    background-color: #e5e5e5ba;
  }

  .search_list li:hover {
    color: #009CFF;
    /* 009CFF */
  }
</style>
