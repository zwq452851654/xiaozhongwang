<template>
	<div>
		<el-dialog append-to-body :visible.sync="dialogVisible" :show-close="false" :close-on-click-modal="false"
		 :close-on-press-escape="false" id="edit_bg" width="500">
			<div slot="title">
				<ul class="d-flex ">
					<li v-for="item in tabs" :key="item.type" @click="changeItem(item)" :class="{active: item.type == activeType}"
					 class="mr-3 title_li">
						{{item.title}}
					</li>
					<li class="mr-3 ml-3 title_li color-b8c4ce" v-show="$store.state.userInfo.path" @click="setBgPic()">
						不使用皮肤
					</li>
					<li class="ml-auto" @click="closed()"><i class="el-icon-close"></i></li>
				</ul>
			</div>
			<div class="pic">
				<!-- 图片展示区域 -->
				<div v-show="activeType != 'zdy'">
					<div class="h-100 d-flex align-items-center font-size-5">
						<i class="el-icon-arrow-left"></i>
						<div style="height: 170px;" class="p cursor-p pic_item" v-for="img in picList" :key="img.bh">
							<img :src="img.path" class="w-100 h-100">
							<div class="btn_con">
								<div class="d-flex align-items-center justify-content-center" style="position: relative;top: -85px;z-index: 9;">
									<div class="mr-2 btn">预览</div>
									<div class="ml-2 btn" @click="setBgPic(img)">使用</div>
								</div>
							</div>
						</div>
						<i class="el-icon-arrow-right"></i>
					</div>
				</div>

				<!-- 自定义上传时显示的内容 -->
				<div v-show="activeType == 'zdy'" :class="{'d-flex': briefFile.path}">
					<div class="zdy">
						<autoUpload :limit="1" @success="successHandle">
							<el-button icon="el-icon-plus" size="mini" type="primary">选择本地图片</el-button>
							<div class="mt-1">仅支持jpg、png图片，图片尺寸不小于1000*1600像素，4M以内（高质量图片效果更佳）</div>
						</autoUpload>
					</div>
					<div style="height: 170px;" class="p" v-if="briefFile.path">
						<img :src="briefFile.path" class="h-100">
						<div class="d-flex align-items-center justify-content-center" style="position: relative;top: -85px;z-index: 9;">
							<div class="mr-2 btn">预览</div>
							<div class="ml-2 btn" @click="setBgPic(briefFile)">使用</div>
						</div>
					</div>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import autoUpload from '../autoUpload.vue'
	export default {
		components: {
			autoUpload
		},
		model: {
			prop: "dialogVisible",
			event: "close"
		},
		props: {
			dialogVisible: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				tabs: [{
						id: "001",
						title: "热门",
						type: "rm"
					},
					{
						id: "001",
						title: "自定义",
						type: "zdy"
					}
				],
				activeType: "rm",
				picList: [],
				briefFile: {}
			}
		},
		watch: {
			dialogVisible(boo) {
				if (boo) {
					this.query();
				}
			}
		},
		methods: {
			changeItem(item) {
				this.activeType = item.type;
			},
			// 获取初始背景图
			query() {
				this.$http.get("/bg/queryBgPic", {}).then(res => {
					if (res.data.code) {
						this.picList = res.data.data;
					}
				})
			},
			// 自定义上传图片的回调
			successHandle(data) {
				let res = data[0].response.data[0];
				this.$http.post('/bg/uploadBg', {
					bh: res.bh,
					bs: ""
				}).then(res => {
					if (res.data.code) {
						this.briefFile = res.data.data[0];
					}
				})
			},
			// 关闭弹框
			closed() {
				this.$emit('close', false)
			},
			// 设置背景图
			setBgPic(img) {
				if (img === undefined) {
					img = new Object();
					img.bh;
				}

				if (this.$store.state.isLogin) {
					this.$http.post('/bg/setBg', {
						bh: img.bh
					}).then(res => {
						if (res.data.code) {
							this.$store.dispatch('dis_user_info', res.data.data[0] || {});
						} else {
							this.$message({
								type: "warning",
								message: "更换失败，请重试"
							})
						}
					})
				} else {
					this.$message({
						type: "warning",
						message: "请先登录"
					})
				}
			}
		}
	}
</script>

<style>
	#edit_bg .el-dialog__body {
		padding-top: 10px;
	}
</style>
<style scoped="scoped">
	.pic {
		height: 170px;
		border: 1px solid #F0F0F0;
		border-radius: 15px;
		overflow: hidden;
	}

	.zdy {
		height: 170px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #efefef;
		user-select: none;
	}

	#edit_bg ul li {
		cursor: pointer;
	}

	.title_li {
		font-size: 12px;
		border-bottom: 2px solid #fff;
	}

	.active {
		border-bottom-color: #66b1ff;
	}

	.pic_item .btn_con {
		display: none;
	}

	.pic_item:hover .btn_con {
		display: block;
	}

	.btn {
		padding: 3px 10px;
		background: #f2f9fab3;
		border-radius: 5px;
		font-size: 12px;
	}
</style>
