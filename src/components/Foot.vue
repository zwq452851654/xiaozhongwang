<template>
  <div class="foot-bg">
    <div class="content" ref="content">
      <div>友情链接：</div>
      <ul class="d-flex mt-2 link">
        <li class="ml-4 mr-4">百度</li>
        <li class="mr-4">新浪</li>
        <li class="mr-4">腾讯</li>
        <li class="mr-4">阿里巴巴</li>
      </ul>
      <div class="text-center font-size-2">
        <p class="mt-2"><a href="http://beian.miit.gov.cn" class="text-white" target="_blank">京ICP备2021007291</a></p>
        <p class="pb-2">本站相关网址信息若侵害到您的利益，请联系我们删除处理，邮箱452851654@qq.com</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        
      }
    },
    mounted(){
      
    },
    methods:{
      
    }
  }
</script>
<style scope>
  .foot-bg {
    background: #313131;
    color: aliceblue;
    padding: 16px 0 2px 0;
    font-size: 14px;
    margin-top: 20px;
  }

  .link {
    height: 40px;
    line-height: 40px;
    text-decoration: underline;
    background: #454545;
  }
</style>
