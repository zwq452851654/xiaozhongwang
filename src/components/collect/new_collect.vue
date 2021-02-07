<template>
	<div :class="{mask:showModal}" ref="mask" @click.self="hideMask">
		<div class="tools" ref="tools" v-show="showTools">
			<ul>
				<li
					class="tools_item" 
					v-for="(item, index) in toolsList" 
					:key="item.value"
					@click="changeItem(item, index)">
					<div v-if="item.show">
						<i class="seat mr-1" :class="item.icon"></i>
						<span>{{ item.mc }}</span>
						<i class="el-icon-arrow-right ml-auto" v-if="item.child"></i>
					</div>
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
				<li class="collect_item border-bottom" @click="editCollect()">
					<i class="el-icon-star-off mr-1"></i>添加当前收藏夹
				</li>
				<li 
					class="collect_item" 
					v-for="(item, index) in collect" 
					:key="item.bh"
					@mouseover="secondLevel(item, index)">
					<div 
						v-if="item.type == 1"
						style="display: flex;align-items: center;"
						@click="openWebsite(item)">
						<i class="seat mr-1" :class="item.icon"></i>
						<span>{{ item.mc }}</span>
					</div>
					<div 
						v-if="item.type == 2" 
						style="display: flex;align-items: center;">
						<i class="el-icon-folder mr-1 font-size-4" style="color: #f6b95f;"></i>
						<span>{{ item.mc }}</span>
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
				<li class="collect_item border-bottom" @click="editCollect()">
					<i class="el-icon-star-off mr-1"></i>添加收藏
				</li>
				<li class="collect_item" v-for="item in secondLeftList" :key="item.bh" @click="openWebsite(item)">{{item.mc}}</li>
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
							:key="item.bh"
							@click="clickFolder(item)"
							:class="{active: activeID == item.bh}">
							<i v-if="item.type == 2" class="el-icon-folder mr-1 font-size-4 ml-4" style="color: #f6b95f;"></i>
							<i v-else class="el-icon-user-solid font-size-5"></i>
							<span 
								:contenteditable="item.bh == curEditBH" 
								@blur="editName($event, item)">{{ item.mc }}</span>
							<i v-if="item.type == 2" class="el-icon-edit font-size-4 ml-auto mr-2 cursor-p" @click="updateFolderName(item)"></i>
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
		
		<!-- 更换皮肤 -->
		<editBg v-model="dialogVisible"></editBg>

	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import editBg from "./edit_bg.vue"
	export default{
		props:{
			showTools: false
		},
		components:{
			editBg
		},
		computed:{
		  ...mapState({
		    isLogin: state=> state.isLogin
		  })
		},
		data(){
		  return {
				toolsList:[
					{ mc:"个人中心", icon:"", value:"userCore", child: true, show: true },
					{ mc:"收藏夹", icon:"el-icon-star-off", value:"scj", child: true, show: true },
					{ mc:"更换皮肤", icon:"", value:"editBg", child: false, show: true },
					{ mc:"退出登录", icon:"", value:"logout", child: false, show: true }
				],
		    collect:[],
				folderList:[],
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
				activeID: "zdy_001",
				queryFlag: true,
				curEditBH: "",
				dialogVisible: false
		  }
		},
		watch:{
			showTools(boo){
				if(boo){
					this.toolsList.forEach(item =>{
						if(item.value == 'logout'){
							item.show = this.isLogin;
						}
					})
				}
			}
		},
		mounted(){
			this.CH = window.innerHeight;
		},
		methods:{
			// 新建一级文件夹时，在失去焦点之后执行
			editName(e, item){
				let text = e.target.innerText;
				if(text){
					item.mc = text;
					this.$http.post('/collect/addFolder', {
					  mc: item.mc,
						type: item.type
					}).then( res => {
					  if(res.data.code){
							this.queryCollect();
					  }
					})
				}else{
					this.folderList.forEach((row,i) =>{
						if(row.bh == item.bh){
							this.folderList.splice(i, 1)
						}
					})
				}
			},
			// 一级收藏夹列表查询
			queryCollect(){
				this.folderList = [];
				this.$http.get('/collect/queryCollect', {}).then(res =>{
					let data = res.data;
					if(data.code){
						this.collect = data.data;
						this.collect.forEach(item=>{
							item['list'] = [];
						})
						// 将type 为2 的进行过滤
						let newData = this.collect.filter(item =>{
							return item.type == 2
						})
						newData.unshift({
							bh:"zdy_001", mc:"网络收藏夹", type: "1"
						})
						this.collectForm['type'] = '1';
						this.folderList = newData;
					}else{
						this.$message({type: 'waring', message: data.msg});
					}
				})
			},
			changeItem(item, index){
				this.$refs.mask.style.height = "100%";
				this.showModal = false;
				this.second = false;
				switch (item.value){
					case 'scj':
						if(!this.isLogin) {
							this.$message({type:"info", message:"请先登录"});
							break;
						}
						this.clickCollect(index);
						break;
					case 'userCore':
						this.$message({type:"info", message:"功能暂未开放"})
						break;
					case 'editBg':
						this.dialogVisible = true;
						this.$emit('closeTools');
						break;
					case 'logout':
						this.$store.dispatch('loginFun', false);
						localStorage.removeItem('token');
						this.$store.dispatch('dis_user_info', {});
						localStorage.removeItem('userInfo');
						this.hideMask();
						break;
				}
			},
			// 二级收藏夹列表查询
			secondLevel(item, index){
				if(item.type == 1){
					this.second = false;
					return false;
				}
				if(!item.state && item.type == '2'){
					this.$http.get('/collect/querySecondCollect',{
						bh: item.bh
					}).then(res =>{
						if(res.data.code){
							this.collect.forEach(row =>{
								if(row.bh == item.bh){
									row.state = true;
									row.list = res.data.data;
									this.secondLeftList = res.data.data;
								}
							})
						}
					})
				}else{
					this.secondLeftList = item.list;
				}

				this.second = true;
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
			clickCollect(index){
				if(this.collect.length == 0){
					this.queryCollect();
				}
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
			},
			editCollect(){
				this.editCollectDialog = true;
				this.hideMask();
			},
			clickFolder(item){
				this.activeID = item.bh;
				if(item.type == 2){
					this.collectForm['parentID'] = item.bh;
				}
				this.collectForm['type'] = item.type;
			},
			// 点击添加时进行保存
			saveWebsite(){
				let reg = /^http(s)?:\/\//;
				if(!reg.test(this.collectForm.url)){
					this.$message({type: 'info', message: '请填写包含http://或https://开头的网址信息'});
					return false
				}
				this.$http.post('/collect/addCollect', {
				  ...this.collectForm
				}).then( res => {
				  if(res.data.code){
						this.queryCollect();
						this.$message({type: 'success', message: '添加成功'});
						this.editCollectDialog = false;
				  }
				})
			},
			// 新建收藏文件夹
			addFolder(){
				this.folderList.push({
					bh: 'SC0001', mc: '新建文件夹', type: '2'
				})
				this.curEditBH = "SC0001";
			},
			// 修改文件夹名称
			updateFolderName(item){
				// this.curEditBH = item.bh;
			},
			// 打开网址
			openWebsite(item){
				let a = document.createElement("a");
				a.setAttribute("href", item.url);
				a.setAttribute("target", "_blank");
				a.click();
				this.hideMask();
			},
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
		color: #000;
		font-size: 12px;
	}
	.tools_item div{
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
		color: #000;
		font-size: 12px;
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
