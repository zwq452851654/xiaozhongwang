<template>
  <div>
    <div class="float-box">
      <div class="text-center">
        <div class="item">
          <div class="item-con" slot="reference">
            <i class="el-icon-star-off font-size-3"></i>
            <div>收藏</div>
          </div>
        </div>
        <div class="item">
          <div class="item-con">
            <i class="el-icon-caret-top font-size-5"></i>
            <div>UP</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const list = [
    { id:1, title:"我是百度派来的----", url:"www.baidu.com", icon:"" },
    { id:2, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:3, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:4, title:"我是百度派来的====", url:"www.baidu.com", icon:"" },
    { id:5, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:6, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:7, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:8, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:9, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:10, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:11, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:12, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:13, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:14, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:15, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:16, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:17, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:18, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:19, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
    { id:20, title:"我是百度派来的", url:"www.baidu.com", icon:"" }
  ]
  
  export default{
    data(){
      return {
        collect:[
          { id:1, folder:"使用查询", list: list },
          { id:2, folder:"技术博客", list: list },
          { id:3, folder:"淘宝模板", list: list }
        ]
      }
    },
    methods:{
      
    }
  }
</script>

<style scoped="scoped">
  .float-box{
    position: fixed;
    right: 0;
    bottom: 45%;
    width: 55px;
    background-color: #F0F8FF;
    z-index: 9;
  }
  .float-box .item{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    border-bottom: 1px solid #fff;
    font-size: 12px;
    cursor: pointer;
  }
  .float-box .item:hover{
    background-color: #A0E3E3;
    color: #fff;
  }
  
</style>
