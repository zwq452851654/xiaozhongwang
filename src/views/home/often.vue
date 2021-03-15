<template>
  <div>
    <div class="mb-3 d-flex align-items-center" >
      <span class="" style="display: block;">快速通道</span>
      <div class="font-size-1 ml-2" v-if="!isLogin">
        <el-popover
          placement="top-end"
          title="展示"
          trigger="hover">
          <img src="../../static/img/often_nav.jpg" style="width: 600px" alt="">
          <div slot="reference">
            <span>登录后可设置属于自己的快捷通道，</span>
            <span class="to-login" @click="toLogin()">去登录</span>
          </div>
        </el-popover>
      </div>
      <el-switch class="ml-auto" v-show="isLogin" v-model="edit" :inactive-text="edit ? '拖拽移动' : ''"></el-switch>
    </div>
    <!-- v-if="isLogin" -->
    <div>
      
      <div v-if="!edit">
        <div 
					class="item" 
					v-for="(item, index) in oftenNav" 
					:key="index"
					@click="toThirdParty(item)">
          <img :src="item.icon" class="navIcon" alt="">
          {{item.name}}
        </div>
      </div>
      <div v-else>
        <div
          class="item"
          v-for="(item, index) in oftenNav"
          :key="index"
          draggable="true"
          @dragstart="handleDragStart($event, item)"
          @dragenter="handleDragEnter($event, item)"
          @dragover.prevent="handleDragover($event, item)"
          @dragleave="dragLeave($event, item)"
          @drop="handleDrop($event, item)"
          @dragend="handleDragEnd($event, item)">
          <img :src="item.icon" class="navIcon" alt="">
          {{item.name}}
          <i class="el-icon-close delete-icon" v-show="edit" @click="delItem(item)"></i>
        </div>
      </div>
    </div>

    <!-- <div v-else class="text-center font-size-2">
      <el-popover
        placement="top-end"
        title="展示"
        trigger="hover">
        <img src="../../static/img/often_nav.jpg" style="width: 600px" alt="">
        <div slot="reference">
          <span>登录后可设置属于自己的常用导航，</span>
          <span class="to-login" @click="toLogin()">去登录</span>
        </div>
      </el-popover>
    </div> -->
    <div class="text-right" v-show="isLogin">
      <router-link to="/home/setOftenNav" tag="i" class="el-icon-menu ml-1 font-size-5 cursor-p"></router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import service from './service.js'
export default {
  data() {
    return {
      allNav: [],
      oftenNav: [],
      dragging: null,
      curEl: "",
      edit: false,
      activeName: '',
      initiative: {}, //主动项
      passive: {},  //被动项（被替换项）
    };
  },
  computed:{
    ...mapState({
      isLogin: state=> state.isLogin
    })
  },
	watch:{
		isLogin(boo){
			if(boo){
				this.query_often_nav();
			}
		},
		$route(to,from){
			if(from.path == '/home/setOftenNav'){
				this.query_often_nav();
			}
		}
	},
  mounted(){
    // if(this.isLogin) this.query_often_nav();
    this.query_often_nav();
  },
  methods: {
    // 当某元素被拖拽时，记录拖拽项
    handleDragStart(e, item) {
      this.initiative = item;
      this.dragging = item;
      this.curEl = e;
      event.target.style.border = "1px solid #736efe";
    },
    // 当被拖拽元素进入被替换项时
    handleDragEnter(e, item) {
      // 为需要移动的元素设置dragstart事件
      e.dataTransfer.effectAllowed = "move";
      if (item.id !== this.dragging.id) {
        event.target.style.border = "1px solid red";
      } else {
        event.target.style.border = "1px solid #736efe";
      }
    },
    // 离开被替换项时执行
    dragLeave(e, item) {
      event.target.style.border = "1px solid #fff";
    },
    // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
    handleDragover(e) {
      // 首先把div变成可以放置的元素，即重写dragenter/dragover
      // 在dragenter中针对放置目标来设置!
      e.dataTransfer.dropEffect = "move";
    },
    // 当放置被拖元素时
    handleDrop(e, item) {
      e.dataTransfer.dropEffect = "move";
      event.target.style.border = "1px solid #fff";
      this.curEl.target.style.border = "1px solid #fff";
      if (item === this.dragging) {
        return;
      }
      this.passive = item;
      const newItems = [...this.oftenNav];
      const from = newItems.indexOf(this.dragging);
      const to = newItems.indexOf(item);
      newItems[from] = item;
      newItems[to] = this.dragging;
      this.oftenNav = newItems;
    },
    // 完成元素拖动后触发
    handleDragEnd() {
      this.setOftenNavOrder();
      this.dragging = null;
    },
    delItem(item) {
      if(this.oftenNav.length < 7){
        this.$message({
          type: "warning",
          message: "常用导航数量不得小于6项"
        })
        return false;
      }
      service.delOftenNav({
        dhbh: item.dhbh
      }).then( res => {
        if(res.data.code){
          this.query_often_nav();
        }
      })
    },
    // 获取常用导航地址
    query_often_nav() {
      service.queryOften().then( res =>{
        if(res.data.code){
          let data = res.data.data;
          data.forEach(item => {
            if(item.icon){
              item.icon = require('../../static/icon/'+ item.icon)
            }
          })
          this.oftenNav = data;
        }
      })
    },
    setOftenNav(){
      this.$router.push({path: '/setoftenNav'})
    },
    setOftenNavOrder(){
      let zd = this.initiative.order;
      let bd = this.passive.order;
      if(!zd || !bd || zd==bd){
        return false;
      }
      service.setOftenNavOrder({
        zd: zd,
        bd: bd
      }).then( res =>{
        if(res.data.code){
          this.initiative = {};
          this.passive = {};
          this.query_often_nav();
        }
      })
    },
    toLogin(){
      this.$router.push({path: '/user/login'});
    },
		// 打开新的页面
		toThirdParty(item){
		  let a = document.createElement("a");
		  a.setAttribute("href", item.url);
		  a.setAttribute("target", "_blank");
		  a.click();
		},
	}
};
</script>
<style scoped="scoped">
  .item {
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 15px;
    width: 180px;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.2);
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
  }
	.item:hover{
		color: deepskyblue;
	}
  .delete-icon {
    float: right;
    margin-top: 12px;
  }
  .to-login{
    color: #409EFF;
    cursor: pointer;
  }
</style>