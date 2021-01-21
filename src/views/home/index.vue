<template>
  <div>
		<!-- 搜索栏 -->
    <div class="search" :class="{'nav-bg':img_url}">
			<div style="margin: 0 auto;" class="d-flex justify-content-center">
				<div class="d-flex align-items-center search-tag" @click="showHandle()">
					<div v-for="item in searchList" :key="item.value" >
						<img :src="item.icon" v-if="curSearchAim == item.value">
					</div>
					<i class="el-icon-caret-bottom ml-1 color-b8c4ce"></i>
					<el-divider direction="vertical"></el-divider>
				</div>
				<div class="search_new" style="width: 285px;">
					<el-input
						placeholder="请输入搜索内容" 
						size="medium" 
						clearable
						@keyup.enter.native="searchHandle" 
						v-model="searchValue">
					</el-input>
				</div>
			</div>
			<div v-show="!showSearchList">
				<div class="d-flex justify-content-center font-size-1" >
					<div v-for="i in 10" :key="i" class="p">资讯 {{i}}</div>
				</div>
			</div>
			<div class="search_list" v-show="showSearchList">
				<div 
					v-for="item in searchList" 
					:key="item.value" 
					@click="setSearch(item)"
					class="search_item">
					<img :src="item.icon">
					<div>{{ item.name}}</div>
				</div>
			</div>
    </div>
    
		<!-- 内容区 -->
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
import { mapState } from 'vuex';
import service from './service.js'

export default {
  components: {
    often,
    right,
    left
  },
  computed:{
    ...mapState({
      img_url: state=> state.userInfo.path
    })
  },
  data(){
    return{
      searchList: [],
      curSearchAim: "",
      searchValue: "",
			aimsObj: {},
			imgV: "",
			showSearchList: false
    }
  },
  mounted(){
    this.queryList();
  },
  methods:{
    // 搜索目标list
    queryList(){
      service.querySearchList().then(res =>{
        if(res.data.code){
          let data = res.data.data;
          if(data.length == 0) return false;
          this.curSearchAim = data[0].searchIAims;
          this.searchList = data;
					data.forEach(item =>{
						if(item.icon){
							item.icon = require('../../static/icon/'+ item.icon)
						}
						if(this.curSearchAim == item.value){
							this.aimsObj = item;
						}
					})
        }
      })
    },
    showHandle(){
			this.showSearchList = !this.showSearchList;
		},
		setSearch(item){
      service.setSearchAims({
        'value': item.value
      }).then( res =>{
        if(res.data.code){
					this.showSearchList = false;
          this.curSearchAim = item.value;
					this.aimsObj = item;
        }
      })
      
    },
    searchHandle(){
      // let p = window.location.protocol;
      let a = document.createElement("a");
      a.setAttribute("href", `${this.aimsObj.url}${this.searchValue}`);
      a.setAttribute("target", "_blank");
      a.click();
    }
  },
	destroyed(){
		console.log('组件被销售....')
	}
}
</script>

<style>
  .search-text{
    width: 600px;
    margin: 25px auto;
  }
  .search-text .el-input__inner{
    /* border-radius: 25px; */
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .search-btn{
    width: 100px;
  }
  .search-text .el-input-group__append{
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
	.search_new .el-input__inner{
		height: 100%;
		height: 34px !important;
		padding-left: 0px;
		border-radius: 8px;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
		border: none;
	}
</style>

<style scoped="scoped">
  .search{
		width: 100%;
    padding: 80px 0px 70px 0;
    background: #f1f1f19e;
		/* #f5f5f59e */
  }
  .search-tag{
    padding: 0 6px;
    height: 34px;
    background-color: #fff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    cursor: pointer;
  }
	.search-tag img{
		width: 20px;height: 20px;border-radius: 50%;
	}
	.search_list{
		margin: 2px auto;
		width: 355px; 
		border-radius: 5px;
		background-color: #fff;
		color: #000000;
		overflow-x: auto;
	}
  .left{
    min-width: 300px;
    max-width: 300px;
  }
  .right{
    width: 100%;
  }
	.search_item{
		float: left;
		width: 70px;
		text-align: center;
		margin: 4px 0px;
		cursor: pointer;
		color: #000000;
		font-size: 12px;
	}
	.search_item img{
		width: 24px;
		height: 24px;
		border-radius: 50%;
	}
	.search_item:hover{
		background-color: #ccc;
	}

</style>
