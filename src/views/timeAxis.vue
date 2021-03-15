<template>
  <div class="content bg">
    <el-timeline>
      <el-timeline-item timestamp="2021/03/12" placement="top">
        <el-card>
          <b>域名备案通过初上-试运行</b>
          <div>
            <p class=" mb-2 font-size-2">初版功能：</p>
            <p class="color-b8c4ce mb-2 font-size-1" v-for="(item,index) in timeList" :key="index">- {{ item }}</p>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        timeList:['站内内容搜索','登录注册功能','快捷常用导航设定，可拖拽排序','热门资讯展示','遗漏补充(补充你想要访问的网址)','收藏夹功能(类似于浏览器收藏夹)','站内皮肤更换','站内消息','站内百度翻译入口','学习园(规划中)']
      }
    }
  }
</script>

<style>
</style>
