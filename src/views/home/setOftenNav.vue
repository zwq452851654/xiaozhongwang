<template>
  <div class="content">
    <div class="d-flex">
      <div class="bg mr-3">
        <div class="title">
          常用地址
          <i class="prompt-text">常用地址将会在首页首栏进行展示</i>
        </div>
        <!--  常用地址-展示区域   -->
        <div class="d-flex flex-wrap mb-3">
          <div class="text-center p-2 ml-2 mr-2 often-box" v-for="t in oftenNav" :key="t.id">
            <div>
              <img :src="t.icon" class="navIcon" alt="" v-if="t.icon">
              <i class="iconfont iconmorentu often-icon" v-else></i>
            </div>
            <div class="font-size-1">{{ t.name }}</div>
            <div class="del-often-icon cursor-p" @click="delOften(t)">
              <i class="el-icon-error"></i>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="d-flex justify-content-between align-items-center">
          <div class="title" style="margin-bottom: 0">
            全部地址
            <i class="prompt-text">点击加号添加至常用栏</i>
          </div>
          <div>
            <el-input style="width: 200px" v-model="searchAims" size="mini" clearable placeholder="输入名称搜索" @input="searchAimsHandle"></el-input>
          </div>
        </div>

        <!--    模糊匹配-展示区    -->
        <div class="d-flex flex-wrap">
          <div class="text-center p-2 ml-2 mr-2 mb-3 often-box" v-for="child in vagueList" :key="child.dhbh">
            <div>
              <img :src="child.icon" class="navIcon" alt="" v-if="child.icon">
              <i class="iconfont iconmorentu often-icon" v-else></i>
            </div>
            <div class="font-size-1 prompt-name">{{ child.name }}</div>
            <div class="add-often-icon cursor-p" @click="addOften(child)">
              <i class="el-icon-circle-plus"></i>
            </div>
          </div>
        </div>


        <div>
          <div v-for="(value,key,index) in allNav" :key="index">
            <div style="width:200px;margin:0 auto;">
              <el-divider>{{allNav[key][0].parentName ? allNav[key][0].parentName : '其它'}}</el-divider>
            </div>
            <div class="d-flex flex-wrap">
              <div class="text-center p-2 ml-2 mr-2 mb-3 often-box" v-for="child in allNav[key]" :key="child.id">
                <div>
                  <img :src="child.icon" class="navIcon" alt="" v-if="child.icon">
                  <i class="iconfont iconmorentu often-icon" v-else></i>
                </div>
                <div class="font-size-1 prompt-name">{{ child.name }}</div>
                <div class="add-often-icon cursor-p" @click="addOften(child)">
                  <i class="el-icon-circle-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="right">
        <div class="customize">
          <div class="text-center title pt-3 pb-2 border-bottom">添加自定义快捷访问网址</div>
          <div class="customize-form">
            <el-form :model="navForm" label-width="90px" label-position="left">
              <el-form-item label="网站名称：" placeholder="输入网站名称">
                <el-input v-model="navForm.name" size="small" clearable></el-input>
              </el-form-item>
              <el-form-item label="图标选择：">
                <el-button class="w-100" size="mini">点击选择图标</el-button>
              </el-form-item>
              <el-form-item label="网站类型：">
                <el-select v-model="navForm.t_k" size="small" placeholder="选择网站类型">
                  <el-option label="类型一" value="shanghai"></el-option>
                  <el-option label="类型二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="网站地址：" placeholder="输入网站地址：">
                <el-input v-model="navForm.url" size="small" clearable></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" class="w-100 mt-2" size="small">提交添加</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import service from './service.js'
  export default {
    data() {
      return {
        oftenNav: [],
        allNav: {},
        navForm: {},
        input: "",
        navArr: [],
        searchAims: "",
        listData: [],
        vagueList: []
      };
    },
    mounted() {
      this.query_all_nav();
      this.query_often_nav();
    },
    methods: {
      // 获取常用导航地址
      query_all_nav() {
        service.queryAllNav().then(res => {
          if (res.data.code) {
            let data = res.data.data;
            this.listData = res.data.data;
            this.listHandle(data, true);
          }
        })
      },
      // 数据处理
      listHandle(data) {
        let obj_A = {};
        this.allNav = {};
        data.forEach(item => {
          if (item.icon) {
            item.icon = require('../../static/icon/' + item.icon)
          }
          if (obj_A[item.parentValue]) {
            obj_A[item.parentValue].push(item);
          } else {
            if (!item.parentValue) {
              item.parentValue = '999';
              if (obj_A[item.parentValue]) {
                obj_A[item.parentValue].push(item);
              } else {
                obj_A['999'] = [];
              }
            } else {
              obj_A[`${item.parentValue}`] = [];
            }
          }
        })
        this.allNav = obj_A;
      },
      // 对全部导航信息进行模糊匹配
      searchAimsHandle(v) {
        let list = this.listData;
        let len = list.length;
        let arr = [];
        if (v) {
          for (let i = 0; i < len; i++) {
            if (list[i].name.indexOf(v) >= 0) {
              arr.push(list[i]);
            }
          }
        }
        this.vagueList = arr;
      },
      // 获取常用导航地址
      query_often_nav() {
        service.queryOften().then(res => {
          if (res.data.code) {
            let data = res.data.data;
            data.forEach(item => {
              if (item.icon) {
                item.icon = require('../../static/icon/' + item.icon)
              }
            })
            this.oftenNav = data;
          }
        })
      },
      // 添加
      addOften(item) {
        let d = this.oftenNav;
        for(let i=0; i<d.length; i++){
          if(d[i].dhbh == item.dhbh){
            this.$message({ type:"warning", message: "已重复添加" })
            return false;
          }
        }
        service.addOftenNav({
          dhbh: item.dhbh,
          len: this.oftenNav.length
        }).then(res => {
          if (res.data.code) {
            this.query_often_nav();
          }
        })
      },
      // 删除
      delOften(item) {
        if (this.oftenNav.length < 7) {
          this.$message({
            type: "warning",
            message: "常用导航数量不得小于6项"
          })
          return false;
        }
        this.$http.post('/nav/delOftenNav', {
          dhbh: item.dhbh
        }).then(res => {
          if (res.data.code) {
            this.query_often_nav();
          }
        })
      }
    }
  };
</script>
<style>
  .customize .el-form-item {
    margin-bottom: 0px;
  }
</style>
<style scoped>
  .often-icon {
    font-size: 25px;
    /* color: #9abdf2; */
  }

  .often-box {
    position: relative;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  }

  .prompt-name {
    width: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .often-box:hover {
    background: #f5f7faba;
  }

  .del-often-icon,
  .add-often-icon {
    position: absolute;
    top: 0;
    right: 0;
    color: #ccc;
    display: none;
  }

  .often-box:hover .del-often-icon {
    display: block;
    color: #fb7e13;
  }

  /* .del-often-icon:hover {
  color: #fb7e13;
} */
  .add-often-icon {
    color: #9abdf2;
  }

  .often-box:hover .add-often-icon {
    display: block;
    color: #06f7b5;
  }

  .title {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .prompt-text {
    font-size: 10px;
    font-style: normal;
    margin-left: 6px;
    color: #9f9f9f;
  }

  .right {
    min-width: 300px;
    max-width: 300px;
  }

  .customize {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 15px;
  }

  .customize-form {
    padding: 0 20px 20px 20px;
  }
</style>
