<template>
	<div class="content bg">
		<div class="d-flex">
			<!-- left -->
			<div class="left">
				<div class="d-flex tabs">
					<div class="tab_tetx mr-1" :class="{active: active=='xt'}" @click="active
					 = 'xt'">系统</div>
					<div class="tab_tetx" :class="{active: active=='zn'}" @click="active
					 = 'zn'">站内</div>
					<div class="tab_tetx ml-auto font-size-1">全部已读</div>
				</div>
				<div class="msg_list scroll-box">
					<ul v-infinite-scroll="queryMsg" :infinite-scroll-disabled="disabled">
						<li 
							class="pt-3 cursor-p mb-2" 
							:style="{background: content.id==msg.id ? '#F0F2F5' :'#fff'}" 
							@click="readMsgHandle(msg)"
							v-for="msg in xt_list" 
							:key="msg.id">
							<div class="d-flex align-items-center">
								<div class="sign" :class="{sign_bg: msg.state == 0}"></div>
								<i class="el-icon-message ml-1 mr-1 font-size-3"></i>
								<div class="msg_title font-size-2">{{msg.title}}</div>
								<div class="ml-auto font-size-1 color-b8c4ce pr-1">{{msg.sendTime}}</div>
							</div>
							<div class="pl-2 mt-1 color-b8c4ce font-size-1">{{ msg.content }}</div>
							<div class="mt-2" style="border-bottom: 1px solid #F0F2F5;"></div>
						</li>
					</ul>
					<p v-if="!disabled" class="text-center font-size-1">加载中...</p>
					<p v-if="disabled" class="text-center font-size-1">没有更多了</p>
				</div>
				
				<!-- 可以放广告信息 -->
				<img class="w-100 mt-5" src="upload/xzwang/bg/jkGcars9XmwkeVAz5DcEddxs.jpg" alt="">
			</div>
			
			<!-- center -->
			<div class="center ml-3 mr-3">
				<div class="d-flex align-items-center">
					<div class="title pr-2">{{content.title}}</div>
					<div class="ml-auto color-b8c4ce font-size-1">{{content.sendTime}}</div>
				</div>
				<div class="mt-3" v-if="content.content">{{content.content}}</div>
				<div class="text-center m-auto" v-else>
					<img src="../../static/img/zwnr.jpg" class="mt-5" alt="">
					<div class="text-center mb-5 color-b8c4ce">暂无内容</div>
				</div>
				<div class="ad nav-bg mt-2 text-center">
					我这里是不是还可以放点东西
				</div>
			</div>
			
			<!-- right -->
			<div class="ml-3 ml-auto border-left" style="width: 250px;">
				<courseInfoRight></courseInfoRight>
			</div>
		</div>
	</div>
</template>
<script>
	import service from './service.js'
	import courseInfoRight from "../learn/courseInfoRight.vue"
	export default {
		components:{
			courseInfoRight
		},
		data(){
			return{
				show: false,
				xt_list: [],
				currentPage: 1,
				active: "xt",
				content: {},
				page:{ pageSize: 15, currentPage: 0 },
				disabled: false,
				routeQuery: {}
			}
		},
		mounted(){
			this.routeQuery = this.$route.query;
			if(this.routeQuery.row){
				this.content = this.routeQuery.row;
				this.readMsgHandle(this.content);
				this.active = this.routeQuery.active;
			}
		},
		methods:{
			// 获取U信
			queryMsg(){
				this.page.currentPage++;
				service.getMsg({
					...this.page
				}).then(res =>{
					let data = res.data;
					if(data.code){
						data.data.forEach(item =>{
							item.sendTime = item.sendTime.slice(0, 10);
							this.xt_list.push(item)
						})
						if(!this.content.id){
							this.content = data.data[0];
						}
						this.disabled = data.data.length > 0 ? false : true;
					}
				})
			},
			readMsgHandle(msg){
				this.content = msg;
				service.updateMsgState({
					...msg
				}).then( res=>{
					if(res.data.code){
						this.xt_list.forEach(item=>{
							if(item.id == this.content.id){
								item.state = 1;
							}
						})
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.left{
		width: 300px;
	}
	.tabs{
		height: 30px;
		border-bottom: 1px solid #ccc;
	}
	.tab_tetx{
		height: 30px;
		color: #000;
		padding: 0 10px;
		font-size: 14px;
		cursor: pointer;
	}
	.active{
		border-bottom: 2px solid #ff787e;
	}
	.sign{
		width: 5px;
		height: 5px;
		border-radius: 50%;
	}
	.sign_bg{
		background-color: #ff787e;
	}
	.msg_list{
		max-height: 450px;
		/* overflow: hidden;
		overflow-y: auto; */
	}
	.center{
		position: relative;
		flex:1;
		border-left: 1px solid #CCC;
		padding-left: 25px;
	}
	.ad{
		/* position: absolute; */
		width: 95%;
		height: 80px;
		line-height: 80px;
		/* bottom: 0px; */
	}
	
</style>
