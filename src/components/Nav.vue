<template>
  <div class="nav">
    <div class="d-flex align-items-center" style="width:1300px;margin:0 auto">
      <!-- <div class="mr-5"><b>小众网</b></div> -->
      <div class="logo">
        <img src="../static/img/xzw-logo.png" alt="">
      </div>
      <div class="ml-5">
        <ul class="m-0 d-flex anv-ul align-items-center font-size-2">
          <router-link tag="li" class="mr-5" to="/" exact >首页</router-link>
          <router-link tag="li" class="mr-5" to="/soup" >营养鸡汤</router-link>
          <router-link tag="li" class="mr-5" to="/blog" >博客</router-link>
          <router-link tag="li" class="mr-5" to="/levae" >留言墙</router-link>
          <router-link tag="li" class="mr-5" to="/learn" >爱学习</router-link>
          <router-link tag="li" class="mr-5" to="/shared" >资料共享</router-link>
        </ul>
      </div>
      <div class="d-flex ml-auto font-size-2 align-items-center">
        <div class="mr-3"><i class="day">{{month}}</i>月<i class="day">{{day}}</i>日</div>
        <div class="mr-3">{{hours}}:{{minutes}}:{{seconds}}</div>
        <div class="mr-5">{{week}}</div>
        <div>登录</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    
  },
  data(){
    return {
      month:"",
      day:"",
      hours:"",
      minutes:"",
      seconds:"",
      week:"",
      url: require('../static/img/xzw-logo.png')
    }
  },
  mounted(){
    this.time();
    setInterval( ()=>{
      this.time();
    },1000)
  },
  methods:{
    time(){
      let vWeek,vWeek_s;
      vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
      let date =  new Date();
      // let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      vWeek_s = date.getDay();
      this.month = this.resetVal(month);
      this.day = this.resetVal(day);
      this.hours = this.resetVal(hours);
      this.minutes = this.resetVal(minutes);
      this.seconds = this.resetVal(seconds);
      this.week = vWeek[vWeek_s];
    },
    resetVal(v){
      return v<10 ? '0'+v : v;
    }
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
    color: #a3a3aa;
    cursor: pointer;
  }
  .login{
    color: #a3a3aa;
  }
  .anv-ul .active {
    font-weight: 700;
    color: #736efe;
  }
  .day{
    text-emphasis: none;
    font-size: 18px;
    font-style: inherit;
    font-weight: bold;
    margin: 0 8px;
  }
  .logo{
    width: 180px;
    height: 59px;
    overflow: hidden;
    position: relative;
  }
  .logo img{
    width: 320px;
    position: absolute;
    top: -120px;
    left: -70px;
  }
</style>
