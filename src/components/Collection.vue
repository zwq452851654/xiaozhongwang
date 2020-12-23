<template>
  <div>
    <div class="float-box">
      <div class="text-center">
        <div class="item" @click="collectHandle($event)">
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
    <!-- 收藏栏显示框 -->
    <div class="collect-box" v-if="collectShow" :style="{top: collectBoxTop}">
      <!-- 具体收藏的每项 -->
      <div v-if="recordList.length > 0">
        <div class="record">
          <div class="record-item border-bottom">添加收藏</div>
          <div class="d-flex">
            <div 
              v-for="(re, index) in recordList" 
              :key="index"
              class="list-box"
              :class="index > 0 ? 'border-left' : ''">
              <div class="record-item" v-for="item in re.list" :key="item.id">
                {{ item.title }}- {{ item.id }}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 文件夹 -->
      <div>
        <div class="folder">
          <div class="folder-item border-bottom">添加文件夹分类</div>
          <div 
            class="folder-item"
            :class="folderIndex == co.id ? 'folder-active' : ''"
            v-for="co in collect" 
            :key="co.id"
            @click="seeRecord(co)">
            {{ co.folder }}
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
        collectShow:false,
        collect:[
          { id:1, folder:"使用查询", list: list },
          { id:2, folder:"技术博客", list: list },
          { id:3, folder:"淘宝模板", list: list }
        ],
        recordList:[],
        folderIndex:"",
        boxItem: 0,
        collectBoxTop:""
      }
    },
    methods:{
      collectHandle(e){
        this.collectShow = true;
        this.collectBoxTop = '433px'
        console.log(e)
      },
      seeRecord(row){
        this.folderIndex = row.id;
        let n = Math.ceil(Number(row.list.length)/16);
        let arr = [];
        for(let i=0; i<n; i++){
          arr.push({
            list: row.list.slice(i*16, (i+1)*16)
          })
        }
        this.recordList = arr;
      }
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
  .collect-box{
    display: flex;
    position: absolute;
    right: 57px;
    font-size: 12px;
    z-index: 9;
  }
  /* 文件夹 */
  .folder{
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    margin-left: 2px;
  }
  .folder-item, .record-item{
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    cursor: pointer;
  }
  .folder-item:hover, .record-item:hover{
    background-color: #dcd5d542;
  }
  /* 网站地址 */
  .record{
    max-height: 510px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    overflow: hidden;
  }
  .folder-active{
    background-color: #dcd5d542;
  }
  .list-box{
    width: 230px;
  }
</style>
