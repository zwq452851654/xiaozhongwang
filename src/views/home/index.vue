<template>
  <div>
		<!-- 搜索栏 -->
    <div class="search" :class="{'nav-bg':bgImg}">
      <ul class="d-flex justify-content-center">
        <li 
          class="search-tag mr-1" 
          v-for="item in searchList" 
          :key="item.value"
          :class="{'search-active': curSearchAim == item.value}"
          @click="setSearch(item)">
          <i class="iconfont iconduigou" v-if="curSearchAim == item.value"></i>
          <i class="iconfont iconyuandianxiao" v-else></i>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div class="search-text">
        <el-input 
          placeholder="请输入搜索内容" 
          size="medium" 
          @keyup.enter.native="searchHandle" 
          v-model="searchValue"
          clearable>
          <el-button slot="append" class="search-btn" @click="searchHandle()">立即搜索</el-button>
        </el-input>
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
		
		<!-- 左侧悬浮 -->
		
  </div>
</template>
<script>
import often from "./often.vue"
import right from './right.vue'
import left from './left.vue'
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  components: {
    often,
    right,
    left
  },
  computed:{
    ...mapState({
      bgImg: state=> state.bgImg
    })
  },
  data(){
    return{
      searchList: [],
      curSearchAim: "",
      searchValue: ""
    }
  },
  mounted(){
    this.queryList();
  },
  methods:{
    // 搜索目标list
    queryList(){
      this.$http.get('/nav/querySearchList').then(res =>{
        if(res.data.code){
          let data = res.data.data;
          if(data.length == 0) return false;
          this.curSearchAim = data[0].searchIAims;
          this.searchList = data;
        }
      })
    },
    setSearch(item){
      this.$http.get('/nav/setSearchAims', {
        'value': item.value
      }).then( res =>{
        if(res.data.code){
          this.curSearchAim = item.value;
        }
      })
      
    },
    searchHandle(){
      // let p = window.location.protocol;
      let a = document.createElement("a");
      a.setAttribute("href", `${this.aimsObj.url}${this.searchValue}`);
      a.setAttribute("target", "_blank");
      a.click();
    }
  }
}
</script>

<style>
  .search-text{
    width: 600px;
    margin: 25px auto;
  }
  .search-text .el-input__inner{
    /* border-radius: 25px; */
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .search-btn{
    width: 100px;
  }
  .search-text .el-input-group__append{
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
</style>

<style scoped="scoped">
  .search{
    width: 100%;
    padding: 30px 30px 6px 30px;
    background: #fff;
  }
  .search-tag{
    height: 27px;
    line-height: 27px;
    padding: 0 8px;
    background: #eeeeee94;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }
  .search-tag:hover{
    background: #7f9eff;
    color: #fff;
  }
  .iconyuandianxiao{
    display: inline-grid;
    vertical-align: middle;
    font-size: 16px;
    color: #bfbfc080;
  }
  .iconduigou{
    margin-right: 3px;
  }
  .search-active{
    font-weight: bold;
    background: #7f9eff;
    color: #fff;
  }
  .left{
    min-width: 300px;
    max-width: 300px;
  }
  .right{
    width: 100%;
  }

</style>
