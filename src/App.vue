<template>
  <div id="app" :style="{backgroundImage: 'url('+ img_url +')'}">
    <div class="content-1" :style="{width: CW, height: CH}" ref="content">
      <keep-alive>
        <Nav v-if="$route.meta.keepAlive"></Nav>
      </keep-alive>
			<router-view/>
      <keep-alive>
        <Foot v-if="!$route.meta.showFoot"></Foot>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Nav from './components/navCom/Nav.vue'
import Foot from './components/Foot'
import { mapState } from 'vuex';

export default {
  components: {
    Nav,
    Foot,
  },
	computed:{
	  ...mapState({
	    img_url: state=> state.userInfo.path
	  })
	},
  data(){
    return{
      CW: "",
      CH: ""
    }
  },
  mounted(){
    this.obtainClientWH();
		window.onresize = () => {
			this.obtainClientWH()
		}
  },
  methods:{
    obtainClientWH(){
      this.CW = document.documentElement.clientWidth + "px";
      this.CH = document.documentElement.clientHeight + "px";
    }
  }
}
</script>
<style>
  body{
    overflow: hidden;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* background: url('./static/img/bg-859.jpg'); */
    background-size: 100% 100%;
  }
  .content-1{
    /* padding-bottom: 15px; */
    padding-top: 60px;
    overflow-y: auto;
  }
  .content-1::-webkit-scrollbar {/*滚动条整体样式*/
      width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px;
  }
  .content-1::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      /* background: rgba(0,0,0,0.2); */
      background: #e4e7ed;
  }
  .content-1::-webkit-scrollbar-track {/*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      border-radius: 0;
      background: rgba(0,0,0,0.1);
  }
</style>
