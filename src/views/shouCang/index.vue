<template>
  <div>
    <el-drawer title="收藏夹" size="400px" :visible.sync="drawer" :before-close="closeHandle" :append-to-body="true" @open="open">
      <div class="p">
        <el-radio-group v-model="radio" @change="changeRadio">
          <el-radio label="all">全部</el-radio>
          <el-radio v-for="item in folderList" :label="item.bh" :key="item.bh" class="mb-3">{{item.mc}}</el-radio>
          <el-radio label="other">其他</el-radio>
        </el-radio-group>
        <div class="text-right">
          <el-button type="primary" size="mini" @click="editCollect()">添 加 收 藏</el-button>
        </div>
        <el-divider></el-divider>
        <div>
          <ul>
            <li class="font-size-2 coll-item" v-for="item in collectList" :key="item.bh" @click="openWebsite(item)" @contextmenu.prevent="rightClick($event, item)">
              · {{ item.mc }}
            </li>
          </ul>
          
          
          <!-- 右键菜单 -->
          <e-vue-contextmenu
          	ref="ctxshow"
          	id="contextStyle"
          	class="menu">
          	<ul>
          		<li 
          			v-if="rightClickRow.type == 1"
          			@click="openWebsite(rightClickRow)">
          			打开（{{rightClickRow.mc}})
          		</li>
          		<li @click="rightClickEdit(rightClickRow)">编辑</li>
          		<li @click="delCollectItem(rightClickRow)">删除</li>
          	</ul>
          </e-vue-contextmenu>
        </div>
      </div>
    </el-drawer>
    
    <el-dialog
      title="添加收藏"
      :visible.sync="editCollectDialog"
    	:modal="false"
      :append-to-body="true"
      width="550px">
      <div>
    		<el-form :inline="true" :model="collectForm" class="demo-form-inline" label-width="50px" label-position="left">
    		  <el-form-item label="名称:" >
    		    <el-input v-model="collectForm.mc" size="medium" style="width: 460px;" placeholder="名称"></el-input>
    		  </el-form-item>
    			<el-form-item label="网址:">
    			  <el-input v-model="collectForm.url" size="medium" style="width: 460px;" placeholder="网址"></el-input>
    			</el-form-item>
    		</el-form>
    		<div class="edit_cont">
    			<ul>
            <li @click="changeFolder({bh:'zdy_001', mc:'网络收藏夹', type: '1'})" :class="{active: activeID == 'zdy_001'}">网络收藏夹</li>
    				<li 
    					v-for="item in folderList" 
    					:key="item.bh"
    					@click="changeFolder(item)"
    					:class="{active: activeID == item.bh}">
    					<i v-if="item.type == 2" class="el-icon-folder mr-1 font-size-4 ml-4" style="color: #f6b95f;"></i>
    					<i v-else class="el-icon-user-solid font-size-5"></i>
    					<!-- @blur="editName($event, item)" -->
    					<span 
    						:contenteditable="item.bh == curEditBH" 
    						:ref="item.bh == curEditBH ? 'edSpan' : ''"
    						:class="item.bh == curEditBH ? 'ed-span' : ''"
    						>{{ item.mc }}</span>

              <div class="ml-auto mr-2">
                <i
                	v-if="item.type == 2 && curEditBH == ''" 
                	class="el-icon-delete font-size-4 mr-3 text-danger cursor-p" 
                	@click="delCollectItem(item)"></i>
                <i 
                	v-if="item.type == 2 && curEditBH == ''" 
                	class="el-icon-edit font-size-4 cursor-p" 
                	@click="updateFolderName(item)"></i>
                <i 
                	v-if="item.type == 2 && item.bh == curEditBH" 
                	@click="editName(item)"
                	class="el-icon-finished font-size-4 cursor-p"></i>
              </div>
    				</li>
    			</ul>
    		</div>
    	</div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" style="float: left;" @click="addFolder()">新建文件夹</el-button>
    		<el-button size="medium" type="primary" @click="saveWebsite()" v-if="saveFlag == 'add'">保 存</el-button>
    		<el-button size="medium" type="success" @click="updateWebsite()" v-else>修 改</el-button>
        <el-button size="medium" @click="editCollectDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    
    
    
    
  </div>
</template>

<script>
  import service from './service.js'
  export default {
    model: {
      prop: "value",
      event: 'close'
    },
    props: {
      drawer: false,
    },
    data() {
      return {
        radio: 'all',
        folderList: [],
        collectList: [],
        editCollectDialog: false,
        collectForm: {},
        activeID: "zdy_001",
        curEditBH: "",
        rightClickRow: {},
        saveFlag: ""
      };
    },
    mounted() {
      
    },
    methods: {
      // ------------------------------------------   收藏列表查询   -----------------------
      // 查询文件夹列表
      queryFolder(){
        service.queryFolder().then( res =>{
          let data = res.data;
          if(data.code){
            this.folderList = data.data;
          }
        })
      },
      // 查询具体收藏列表
      queryCollect(){
        service.queryCollect({
          tar: this.radio
        }).then( res =>{
          let data = res.data;
          if(data.code){
            this.collectList = data.data
          }else{
            
          }
        })
      },
      changeRadio(v){
        this.radio = v;
        this.queryCollect();
      },
      // ------------------------------------------   添加收藏   -----------------------
      // 点击收藏按钮
      editCollect(){
        this.collectForm = {};
        this.activeID ='zdy_001';
        this.collectForm['type'] = 1;
        this.saveFlag = 'add';
      	this.editCollectDialog = true;
      },
      // 新建收藏文件夹
      addFolder(){
      	this.folderList.push({
      		bh: 'SC0001', mc: '新建文件夹', type: '2'
      	})
      	this.curEditBH = "SC0001";
      },
      // 新建一级文件夹
      editName(item){
      	let text = this.$refs.edSpan[0].innerText;
      	if(text){
      		item.mc = text;
      		service.addFolder({
      		  mc: item.mc,
      			bh: item.bh,
      			type: item.type
      		}).then( res => {
      		  if(res.data.code){
      				this.queryFolder();
      				this.curEditBH = "";
      				this.activeID = "zdy_001";
      		  }
      		})
      	}else{
      		this.folderList.forEach((row,i) =>{
      			if(row.bh == item.bh){
      				this.folderList.splice(i, 1);
      				this.activeID = "zdy_001";
      			}
      		})
      	}
      },
      // 新增目录选择
      changeFolder(item){
      	this.activeID = item.bh;
      	if(item.type == 2){
      		this.collectForm['parentID'] = item.bh;
      	}
      	this.collectForm['type'] = item.type;
      },
      // 点击保存时执行
      saveWebsite(){
      	let reg = /^http(s)?:\/\//;
      	if(!reg.test(this.collectForm.url)){
      		this.$message({type: 'info', message: '请填写包含http://或https://开头的网址信息'});
      		return false
      	}
      	service.addCollect({
      	  ...this.collectForm
      	}).then( res => {
      	  if(res.data.code){
      			this.queryCollect();
      			this.$message({type: 'success', message: '添加成功'});
      			this.editCollectDialog = false;
      	  }
      	})
      },
      // 修改保存
      updateWebsite(){
        service.updateWeb({
          ...this.collectForm
        }).then( res =>{
          let data = res.data;
          if(data.code){
            this.$message({ type: 'success', message: '修改成功'})
            this.editCollectDialog = false;
            this.queryCollect();
          }else{
            this.$message({ type: 'warning', message: data.msg})
          }
        })
      },
      // 修改文件夹名称
      updateFolderName(item){
      	this.curEditBH = item.bh;
      },
      open(){
        this.queryFolder();
        this.queryCollect();
      },
      // ------------------------------------------   右键菜单   -----------------------
      // 右键菜单
      rightClick(e, item) {
      	this.rightClickRow = JSON.parse(JSON.stringify(item));
      	this.$refs.ctxshow.showMenu(e)
      },
      // 点击右键菜单里的-编辑
      rightClickEdit(item){
        this.saveFlag = 'update';
      	this.curEditBH = "";
      	// 1: 是网址
      	if(item.type == 1){
      		this.collectForm = item;
      		this.activeID = item.parentId ? item.parentId : "zdy_001";
      	}
      	// 2: 是目录
      	if(item.type == 2){
      		this.activeID = item.bh;
      		this.curEditBH = item.bh;
      	}
      	this.editCollectDialog = true;
      },
      // 右击菜单里的-删除
      delCollectItem(item){
        this.$confirm('此操作将永久删除该内容, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // delCollectItem
          service.delCollectItem({
          	...item
          }).then(res =>{
          	if(res.data.code){
          		this.second = false;
          		this.queryCollect();
              if(item.type == 2) this.queryFolder();
          		this.rightClickRow = {};
          		this.$refs.ctxshow.hideMenu();
          	}else{
          		this.$message({
          			type: "warning",
          			message: res.data.msg
          		})
          		this.$refs.ctxshow.hideMenu();
          	}
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      // ------------------------------------------
      // 打开网址
      openWebsite(item){
      	let a = document.createElement("a");
      	a.setAttribute("href", item.url);
      	a.setAttribute("target", "_blank");
      	a.click();
      },
      closeHandle() {
        this.$emit('close', false)
      }
    }
  };
</script>

<style scoped="scoped">
  .coll-item{
    padding: 3px 0;
    cursor: pointer;
  }
  .coll-item:hover{
    background-color: #e4e4e43b;
    color: #009CFF;
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
  .ed-span{
  	width: 80%;
  	height: 30px;
  	padding: 0 8px;
  	border: 1px solid #c0c4cc;
  	background-color: #fff;
  }
  
  /* 右键菜单 */
  .ctx-menu-container{
  	padding: 0px !important;
  	box-shadow: none !important;
  	border-radius: 0px !important;
  }
  .menu ul {
    margin: 0px;
    padding: 0px;
    text-align: center;
    list-style-type: none;
  }
  .menu ul li {
    padding: 5px 5px;
    font-size: 12px;
  }
  .menu ul li:hover {
    background: #e1dddd;
  }
  .menu ul li a:link {
    color: #000;
    text-decoration: none;
  }
  

</style>
