<template>
  <div class="nav">
    <div class="d-flex align-items-center" style="width:1300px;margin:0 auto">
      <div class="mr-5"><b>小众网</b></div>
      <div class="ml-5">
        <ul class="m-0 d-flex anv-ul align-items-center font-size-1">
          <li class="mr-5">首页</li>
          <li class="mr-5">毒鸡汤</li>
          <li class="mr-5">博客</li>
          <li class="mr-5">提需求</li>
          <li class="mr-5">学习</li>
          <li class="mr-5">资料共享</li>
        </ul>
      </div>
      <div class="ml-auto font-size-1">登录</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    
  }
}
</script>

<style scoped>
  .nav{
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .anv-ul li {
    list-style: none;
  }
</style>
