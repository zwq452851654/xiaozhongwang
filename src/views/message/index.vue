<template>
	<div class="content bg">
		<div class="d-flex">
			<!-- left -->
			<div class="left">
				<div class="left_menu active">
					<i class="el-icon-message font-size-5 count_color"></i>
					<span class="ml-2 msg_text">U信</span>
					<span class="ml-auto count_color">14</span>
				</div>
				<div class="left_menu">
					<i class="el-icon-star-off font-size-5 count_color"></i>
					<span class="ml-2 msg_text">关注和赞</span>
					<span class="ml-auto count_color">14</span>
				</div>
				<div class="left_menu">
					<i class="el-icon-chat-line-round font-size-5 count_color"></i>
					<span class="ml-2 msg_text">评价</span>
					<span class="ml-auto count_color">14</span>
				</div>
				<el-divider></el-divider>
				<!-- 可以放广告信息 -->
				<img class="w-100" src="upload/xzwang/bg/jkGcars9XmwkeVAz5DcEddxs.jpg" alt="">
			</div>
			
			<!-- center -->
			<div class="center ml-3">
				<div class="mb-4 font-size-3 pb-1">
					<span>收到的消息</span>
					<span class="color-b8c4ce font-size-2 float-right cursor-p">全部已读</span>
				</div>
				<!-- 无消息时展示的内容 -->
				<div style="height: 500px;line-height: 500px;text-align: center;" v-show="show">
					这里还木有内容哦~
				</div>
				<!-- 有消息的时展示的内容 -->
				<div v-for="i in 4" :key="i">
					<el-divider></el-divider>
					<div class="media pl-3">
					  <img
							style="width: 50px;height: 50px;"
							class="rounded-circle mr-3"
							src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
					  <div class="media-body">
					    <div class="mt-0">Forget_180b评论了你的文章《Element,el-dialog弹出层拖拽及拉伸、双击全屏》</div>
							<div class="font-size-1 color-b8c4ce">2020.12.10 15:35</div>
					    <p class="mt-2">同志们 添加拖动后表单input 无法编辑和复制 怎么解决</p>
					  </div>
					</div>
					<div class="d-flex mt-4 pl-3">
						<div class="d-flex align-items-center color-b8c4ce">
							<i class="el-icon-chat-square font-size-4"></i>
							<span class="font-size-2 ml-1">回复</span>
						</div>
					</div>
					
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
	import courseInfoRight from "../learn/courseInfoRight.vue"
	export default {
		components:{
			courseInfoRight
		},
		data(){
			return{
				show: false
			}
		}
	}
</script>

<style scoped="scoped">
	.left{
		width: 280px;
	}
	.left_menu{
		display: flex;
		align-items: center;
		padding: 0 10px;
		height: 50px;
		line-height: 50px;
		border-radius: 5px;
		cursor: pointer;
	}
	.left_menu:hover{
		background-color: #f0f0f0;
	}
	.count_color{
		color: #ea6f5a;
	}
	.active{
		background-color: #f0f0f0;
	}
	.center{
		border-left: 1px solid #CCC;
		padding-left: 25px;
	}
</style>
