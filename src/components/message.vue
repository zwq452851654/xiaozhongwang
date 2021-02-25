<template>
	<div>
		<div class="d-flex tabs">
			<div class="tab_tetx mr-1" :class="{active: active=='xt'}" @click="active
			 = 'xt'">系统</div>
			<div class="tab_tetx" :class="{active: active=='zn'}" @click="active
			 = 'zn'">站内</div>
			<div class="tab_tetx ml-auto">全部已读</div>
		</div>
		<div class="msg_list scroll-box">
			<div v-if="!isLogin" class="p text-center">
				登录后查看， <router-link tag="span" class="to-login" to="/user/login">去登录</router-link>
			</div>
			<div v-else>
				<ul
					v-infinite-scroll="queryMsg" 
					:infinite-scroll-disabled="disabled" 
					infinite-scroll-delay>
					<li 
						class="pt-3 pb-2 cursor-p"
						v-for="msg in xt_list"
						:key="msg.id"
						 @click="toMsg(msg)">
						<div class="d-flex align-items-center">
							<div class="sign" :class="{sign_bg: msg.state === 0}"></div>
							<i class="el-icon-message ml-1 mr-1 font-size-3"></i>
							<div class="msg_title">{{msg.title}}</div>
							<div class="ml-auto">{{msg.sendTime}}</div>
						</div>
						<div class="pl-2 mt-1 color-b8c4ce font-size-1">{{ msg.content }}</div>
						<div class="border-bottom mt-2"></div>
					</li>
				</ul>
				<p v-if="!disabled" class="text-center font-size-1">加载中...</p>
				<p v-if="disabled" class="text-center font-size-1">没有更多了</p>
			</div>
		</div>
		<div style="height: 50px;line-height: 50px;" class="nav-bg mt-2 text-center">
			我这里是不是还可以放点东西
		</div>
	</div>
</template>

<script>
	import service from "@/service/service.js"
	import { mapState } from 'vuex';
	
	export default{
		model:{
			prop:"value",
			event: 'change'
		},
		data(){
			return {
				msg: {},
				xt_list: [],
				active: "xt",
				page:{ pageSize: 15, currentPage: 0 },
				disabled: false
			}
		},
		computed:{
		  ...mapState({
		    isLogin: state=> state.isLogin
		  })
		},
		watch:{
			isLogin(boo){
				if(boo){
					this.queryMsg();
				}
			}
		},
		mounted() {
			// this.queryMsg();
		},
		methods:{
			//获取消息列表
			queryMsg(){
				this.page.currentPage++;
				service.getMsg({
					...this.page
				}).then(res =>{
					let data = res.data;
					if(data.code){
						let count = 0;
						data.data.forEach(item =>{
							item.sendTime = item.sendTime.slice(0, 10);
							if(item.state === 0) count++
							this.xt_list.push(item)
						})
						if(count>0) this.$emit('change', count)
						this.disabled = data.data.length > 0 ? false : true;
					}
				})
			},
			toMsg(query){
				if(this.$route.path == '/message') return false;
				this.$router.push({ path: '/message', query:{ row:query, active: this.active } })
			}
		}
	}
</script>

<style scoped="scoped">
	.tabs{
		height: 30px;
		border-bottom: 1px solid #ccc;
	}
	.tab_tetx{
		height: 30px;
		color: #000;
		padding: 0 10px;
		cursor: pointer;
		font-size: 12px;
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
	.msg_title{
		font-size: 12px;
		width: 160px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.msg_list{
		max-height: 300px;
	}
	.to-login{
	  color: #409EFF;
	  cursor: pointer;
	}
</style>
