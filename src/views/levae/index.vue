<template>
  <div>
    <div class="content bg">
			<div class="jumbotron">
			  <h1 class="display-4">Welcome to cuczz.com</h1>
			  <p class="lead">这是一个简单的网站，一个简单的想引起你注意的网站，用于唤起你对小众网内容或信息的额外关注.</p>
			  <p class="mt-1">如果你感兴趣，请留下你宝贵的意见及想法，期待你的留言.</p>
				<hr class="my-4">
				<div class="msg">
					<el-input
					  type="textarea"
						rows="4"
					  placeholder="快留下您想要与我分享的内容吧，可以是建议、想法、合作等等您想要说的!"
					  v-model="levaeForm.nr">
					</el-input>
					<el-form :inline="true" :model="levaeForm" class="mt-3">
					  <el-form-item>
					    <el-input v-model="levaeForm.nick" size="small" placeholder="昵称"></el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-input v-model="levaeForm.qq" size="small" placeholder="QQ"></el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-input v-model="levaeForm.wx" size="small" placeholder="微信" ></el-input>
					  </el-form-item>
					</el-form>
				</div>
        <el-button type="primary" size="small" class="float-right" @click="saveLevae()">留 言</el-button>
			</div>
		</div>
  </div>
</template>
<script>
import service from './service.js'

export default {
  data(){
		return{
			textarea: "",
			levaeForm: {}
		}
	},
	methods:{
		saveLevae(){
			service.saveLevae({
				...this.levaeForm
			}).then(res =>{
				let data = res.data;
				if(data.code){
					this.levaeForm = {};
					this.$message({ type: "success", message: "感谢您的留言，我将尽快阅读您的消息" });
				}else{
					this.$message({ type: "warning", message: data.msg });
				}
			})
		}
	}
}
</script>
<style scoped="scoped">
	.msg{
		width: 100%;
		min-height: 150px;
		/* background-color: #EFEFEF; */
	}
</style>
