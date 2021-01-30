<template>
  <div class="nav" :class="{'nav-bg':img_url}">
    <div class="d-flex align-items-center" style="width:1300px;margin:0 auto">
      <!-- <div class="mr-5"><b>小众网</b></div> -->
      <div class="logo">
        <img src="../static/img/xzw-logo.png" alt="">
      </div>
      <div class="ml-5">
        <ul 
					class="m-0 d-flex anv-ul align-items-center font-size-2"
					:class="{ item_color: img_url }">
          <router-link tag="li" class="mr-5" to="/home" >首页</router-link>
          <router-link tag="li" class="mr-5" to="/levae" >留言墙</router-link>
          <router-link tag="li" class="mr-5" to="/learn" >学习园</router-link>
        </ul>
      </div>
      <div class="d-flex ml-auto font-size-2 align-items-center">
        <div class="mr-3"><i class="day">{{month}}</i>月<i class="day">{{day}}</i>日</div>
        <div class="mr-3">{{hours}}:{{minutes}}:{{seconds}}</div>
        <div class="mr-3">{{week}}</div>
				<div class="mr-3">
					<el-popover
					  placement="bottom"
					  width="230"
					  trigger="hover">
						<ul class="message">
						  <li class="d-flex align-items-center mb-3">
								<i class="el-icon-message font-size-4" style="color: #ea6f5a;"></i>
						    <span class="ml-2 msg_text">U信</span>
						    <span class="ml-auto msg_count">14</span>
						  </li>
							<li class="d-flex align-items-center mb-3">
								<i class="el-icon-star-off font-size-4" style="color: #ea6f5a;"></i>
							  <span class="ml-2 msg_text">关注和赞</span>
							  <span class="ml-auto msg_count">14</span>
							</li>
							<li class="d-flex align-items-center">
								<i class="el-icon-chat-line-round font-size-4" style="color: #ea6f5a;"></i>
							  <span class="ml-2 msg_text">评价</span>
							  <span class="ml-auto msg_count">14</span>
							</li>
						</ul>
						<div style="height: 50px;line-height: 50px;" class="border-top mt-2">
							我这里是不是还可以放点东西
						</div>
						<router-link to="/message" slot="reference" tag="i" class="el-icon-message font-size-4 cursor-p">
						</router-link>
					</el-popover>
				</div>
				<div class="mr-3 cursor-p" @click="showToolsHandle()"><i class="el-icon-s-tools font-size-5"></i></div>
        <router-link v-if="!isLogin" class="cursor-p" tag="div" to="/user/login">登录</router-link>
        <div v-else >
					<el-avatar
					  size="small" 
					  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
					</el-avatar>
        </div>
      </div>
    </div>
  
		<!-- 设置组件 -->
		<collect :showTools="showTools" @closeTools="closeToolsHandle()"></collect>
		
		
	</div>
</template>

<script>
import { mapState } from 'vuex';
import collect from './collect/new_collect.vue'


export default {
  props: {},
  components:{
		collect
	},
  data(){
    return {
      month:"",
      day:"",
      hours:"",
      minutes:"",
      seconds:"",
      week:"",
      url: require('../static/img/xzw-logo.png'),
			showTools: false
    }
  },
  computed:{
    ...mapState({
      isLogin: state=> state.isLogin,
      img_url: state=> state.userInfo.path
    })
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
    },
		showToolsHandle(){
			this.showTools = !this.showTools;
		},
		closeToolsHandle(){
			this.showTools = false
		}
  }
}
</script>

<style scoped>
  .nav{
		position: fixed;
		top: 0;
		width: 100%;
    height: 60px;
		z-index: 999;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .anv-ul li {
    list-style: none;
    color: #a3a3aa;
    cursor: pointer;
  }
	.item_color li{
		color: #fff;
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
	.message li{
		/* padding: 2px 0px; */
		border-bottom: 1px solid #fff;
		cursor: pointer;
		font-size: 16px;
	}
	.message li:hover{
		/* border-bottom: 1px solid #F4EDED; */
		font-weight: bold;
	}
	.msg_count{
		color: #ea6f5a;
		font-size: 12px;
		font-weight: bold;
	}
</style>
