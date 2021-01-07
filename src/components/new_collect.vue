<template>
	<div :class="{mask:showModal}" ref="mask" @click.self="hideMask">
		<div class="tools" ref="tools" v-show="showTools">
			<ul>
				<li 
					class="tools_item" 
					v-for="(item, index) in toolsList" 
					:key="index"
					@mouseover="mouseItem(item, index)">
					<i class="seat mr-1" :class="item.icon"></i>
					<span>{{ item.mc }}</span>
					<i class="el-icon-arrow-right ml-auto" v-if="item.child"></i>
				</li>
			</ul>
		</div>
		
		<!-- 一级收藏 -->
		<div
			class="collect"
			ref="collect"
			v-show="showModal"
			:style="{top:top, left: left}">
			<ul>
				<li class="collect_item border-bottom" @click="editCollect()">添加当前收藏夹</li>
				<li 
					class="collect_item" 
					v-for="(item, index) in collect" 
					:key="index"
					@mouseover="secondLevel(item, index)">
					<div 
						v-if="item.type == 1">
						{{ item.title }}
					</div>
					<div 
						v-if="item.type == 2" 
						style="display: flex;align-items: center;">
						<i class="el-icon-folder mr-1 font-size-4" style="color: #f6b95f;"></i>
						<span>{{ item.title }}</span>
						<i class="el-icon-arrow-right font-size-4 ml-auto"></i>
					</div>
				</li>
			</ul>
		</div>
		
		<!-- 二级收藏 -->
		<div 
			class="collect"
			ref="secondLevel"
			v-show="second"
			:style="{top: secondTop, left: secondLeft}">
			<ul>
				<li class="collect_item border-bottom">添加当前收藏夹</li>
				<li 
					class="collect_item" 
					v-for="item in secondLeftList" 
					:key="item.id">
					{{item.title}}
				</li>
			</ul>
		</div>
		
		<el-dialog
		  title="添加收藏"
		  :visible.sync="editCollectDialog"
			:modal="false"
		  width="550px">
		  <div>
				<el-form :inline="true" :model="collectForm" class="demo-form-inline" label-width="50px" label-position="left">
				  <el-form-item label="名称:" >
				    <el-input v-model="collectForm.mc" size="medium" style="width: 460px;" placeholder="收藏链接名称"></el-input>
				  </el-form-item>
					<el-form-item label="网址:">
					  <el-input v-model="collectForm.url" size="medium" style="width: 460px;" placeholder="收藏链接网址"></el-input>
					</el-form-item>
				</el-form>
				<div class="edit_cont">
					<ul>
						<li 
							v-for="item in folderList" 
							:key="item.id"
							@click="clickFolder(item)"
							:class="{active: activeID == item.id}">
							<i v-if="item.type == 2" class="el-icon-folder mr-1 font-size-4 ml-4" style="color: #f6b95f;"></i>
							<i v-else class="el-icon-user-solid font-size-5"></i>
							<span :contenteditable="false">{{ item.title }}</span>
							<i v-if="item.type == 2" class="el-icon-edit font-size-4 ml-auto mr-2 cursor-p"></i>
						</li>
					</ul>
				</div>
			</div>
		  <span slot="footer" class="dialog-footer">
		    <el-button size="medium" style="float: left;" @click="addFolder()">新建文件夹</el-button>
				<el-button size="medium" type="primary" @click="saveWebsite()">添 加</el-button>
		    <el-button size="medium" @click="editCollectDialog = false">取 消</el-button>
		  </span>
		</el-dialog>
		
	</div>
</template>

<script>
	
	const list = [
	  { id:1, title:"我是百度派来的----", url:"www.baidu.com", icon:"" },
	  { id:2, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:3, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:4, title:"我是百度派来的====", url:"www.baidu.com", icon:"" },
	  { id:5, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:6, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:7, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:8, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:9, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:10, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:11, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:12, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:13, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:14, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:15, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:16, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:17, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:18, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:19, title:"我是百度派来的", url:"www.baidu.com", icon:"" },
	  { id:20, title:"我是百度派来的", url:"www.baidu.com", icon:"" }
	]
	
	const list2 = [
	  { id:1, title:"我是腾讯派来的----", url:"www.baidu.com", icon:"" },
	  { id:2, title:"我是腾讯派来的", url:"www.baidu.com", icon:"" },
	  { id:3, title:"我是腾讯派来的", url:"www.baidu.com", icon:"" },
	  { id:4, title:"我是腾讯派来的====", url:"www.baidu.com", icon:"" }
	]
	
	export default{
		props:{
			showTools: false
		},
		data(){
		  return {
				toolsList:[
					{ id:"01", mc:"个人中心", icon:"", value:"grzx", child: true },
					{ id:"02", mc:"收藏夹", icon:"el-icon-star-off", value:"scj", child: true },
					{ id:"03", mc:"更换皮肤", icon:"", value:"ghpf", child: true },
					{ id:"04", mc:"退出登录", icon:"", value:"tcdl", child: false }
				],
		    collect:[
		      { id:1, title:"使用查询", type: "2", list: list },
		      { id:2, title:"技术博客", type: "2", list: list2 },
		      { id:3, title:"我是百度派来的", type: "1", url:"https://www.iviewui.com/", list: [] }
		    ],
				folderList:[
					{ id:1, title:"网络收藏夹", type: "1" },
					{ id:2, title:"使用查询", type: "2" },
					{ id:3, title:"技术博客", type: "2" },
				],
				showModal: false,
				top: "",
				left: "",
				second: false,
				secondLeftList: [],
				secondTop: "",
				secondLeft: "",
				CH: "",
				editCollectDialog: false,
				collectForm: {},
				activeID: "1",
		  }
		},
		mounted(){
			this.CH = window.innerHeight;
		},
		methods:{
			mouseItem(item, index){
				if(item.value == 'scj'){
					this.showModal = true;
					this.$refs.mask.style.height = this.CH + "px";
					this.$nextTick(()=>{
						let eH = this.collect.length * 38;
						let h;
						if((this.CH-70)> eH){
							this.top = index * 38 + 60 + "px";
							h = "auto";
						}else{
							this.top = "70px";
							h = this.CH - 80 + "px";
							this.$refs.collect.style.overflowY = "auto"
						}
						this.$refs.collect.style.height = h;
						this.left = this.$refs.tools.offsetLeft - this.$refs.collect.offsetWidth + "px";
					})
				}else{
					this.$refs.mask.style.height = "100%";
					this.showModal = false;
					this.second = false;
				}
			},
			secondLevel(item, index){
				let list = item.list;
				if(list.length == 0){
					this.second = false;
					return false;
				}
				this.second = true;
				this.secondLeftList = list;
				this.$nextTick(()=>{
					let eH = this.secondLeftList.length * 38;
					let h;
					if((this.CH-70)> eH){
						this.secondTop = index * 38 + this.$refs.collect.offsetTop + "px";
						h = "auto"
					}else{
						this.secondTop = '70px';
						h = this.CH - 80 + "px";
						this.$refs.secondLevel.style.overflowY = "auto"
					}
					this.$refs.secondLevel.style.height = h;
					this.secondLeft = this.$refs.collect.offsetLeft - this.$refs.secondLevel.offsetWidth + "px";
				})
			},
			// 点击遮罩层
			hideMask(){
				this.showModal = false;
				this.second = false;
				this.$refs.mask.style.height = "100%";
				this.$emit('closeTools');
			},
			editCollect(){
				this.editCollectDialog = true;
				this.hideMask();
			},
			clickFolder(item){
				this.activeID = item.id;
				if(item.type == 2){
					this.collectForm['parendID'] = item.id;
				}
				this.collectForm['type'] = item.type;
			},
			// 点击添加时进行保存
			saveWebsite(){
				this.$http.post('/collect/addCollect', {
				  ...this.collectForm
				}).then( res => {
				  if(res.data.code){
						
				  }
				})
			},
			// 新建收藏文件夹
			addFolder(){}
		}
	}
</script>

<style scoped="scoped">
	.mask{
		background: rgba(0, 0, 0, 0.01);
		width: 100%;
		position: absolute;
		z-index: 9;
		top: 0;
		color: #000;
	}
	.tools{
		width: 265px;
		background-color: #fff;
		border: 1px solid #ececec;
		position: absolute;
		top: 60px;
		right: 100px;
	}
	.tools_item{
		display: flex;
		align-items: center;
		padding: 7px;
		cursor: pointer;
	}
	.seat{
		width: 20px;
	}
	.tools_item:hover{
		background-color: #E4E4E4;
	}
	.collect{
		width: 280px;
		height: auto;
		background-color: #fff;
		border: 1px solid #ccc;
		position: absolute;
		z-index: 9;
	}
	.collect_item{
		padding: 7px;
		cursor: pointer;
	}
	.collect_item:hover{
		background-color: #E4E4E4;
	}
	
	.sc_box{
		position: absolute;
		width: 280px;
		border: 1px solid #ccc;
		background-color: #fff;
		font-size: 14px;
		z-index: 9;
	}
	
	/* 二级列表 */
	.collect{
		position: absolute;
		width: 300px;
		height: 500px;
		border:1px solid #ccc;
		overflow: hidden;
		z-index: 9;
		background-color: #fff;
	}
	.collect::-webkit-scrollbar {/*滚动条整体样式*/
	    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
	    height: 4px;
	}
	.collect::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
	    border-radius: 5px;
	    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	    /* background: rgba(0,0,0,0.2); */
	    background: #10f1e1;
	}
	.collect::-webkit-scrollbar-track {/*滚动条里面轨道*/
	    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	    border-radius: 0;
	    background: rgba(0,0,0,0.1);
	}
	.el-form--inline .el-form-item{
		margin-right: 0;
	}
	.edit_cont{
		width: 100%;
		border: 1px solid #ccc;
	}
	.edit_cont li{
		display: flex;
		align-items: center;
		height: 30px;
		padding: 2px 5px;
		line-height: 30px;
	}
	.edit_cont li:hover{
		background-color: #E4E4E4;
	}
	.active{
		background-color: #E4E4E4;
	}
</style>
