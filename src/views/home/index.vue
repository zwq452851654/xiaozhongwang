<template>
  <div>
    <div class="search">
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
        <el-input placeholder="请输入内容" size="medium" v-model="input2">
          <el-button slot="append" class="search-btn">立即搜索</el-button>
        </el-input>
      </div>
    </div>
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

export default {
  components: {
    often,
    right,
    left
  },
  data(){
    return{
      searchList:[
        { name: '百度一下', value: 'baidu' },
        { name: 'github', value: 'github' },
        { name: 'google', value: 'google' },
        { name: 'csdn', value: 'csdn' },
        { name: '掘金', value: 'juejin' },
        { name: 'oschina', value: 'oschina' },
        { name: '思否', value: 'sifou' },
        { name: '知乎', value: 'zhihu' },
        { name: '必应', value: 'biying' },
        { name: '简书', value: 'jianshu' }
      ],
      curSearchAim: "baidu",
      input2:"",
      
      
    }
  },
  methods:{
    setSearch(item){
      this.curSearchAim = item.value;
    }
  }
}
</script>

<style>
  .search-text{
    width: 30%;
    margin: 25px auto;
  }
  .search-text .el-input__inner{
    border-radius: 25px;
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

</style>
