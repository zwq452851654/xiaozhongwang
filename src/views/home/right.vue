<template>
  <div>
    <!-- 技术栏 -->
    <el-card class="box-card mt-3 set-bg-color">
      <div slot="header" class="clearfix">
        <b class="font-size-2">技术栏</b>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addNewNavHandle()">遗漏补充</el-button>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="itemName[key]" :name="key" v-for="(item, key) in itemName" :key="key">
            <div class="skill-div">
                <div class="skill-con">
                    <div class="col skill-con-item font-size-1" v-for="child in skillNav[key]" :key="child.id" @click="toThirdParty(child)">
                      <img v-if="child.icon" :src="child.icon" class="navIcon" alt="">
                      {{ child.name }}
                    </div>
                </div>
            </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- 设计/视觉 -->
    <el-card class="box-card mt-3 set-bg-color">
      <div slot="header" class="clearfix">
        <b class="font-size-2">设计/视觉</b>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addNewNavHandle()">遗漏补充</el-button>
      </div>
      <div class="design-div">
          <div class="skill-con">
              <div class="col skill-con-item font-size-1" v-for="item in designNav" :key="item.id" @click="toThirdParty(item)">
                <img v-if="item.icon" :src="item.icon" class="navIcon" alt="">
                {{ item.name }}
              </div>
          </div>
      </div>
    </el-card>

    <!-- 辅助工具 -->
    <el-card class="box-card mt-3 set-bg-color">
      <div slot="header" class="clearfix">
        <b class="font-size-2">辅助工具</b>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addNewNavHandle()">遗漏补充</el-button>
      </div>
      <div class="design-div">
          <div class="skill-con">
              <div 
                class="col skill-con-item font-size-1" 
                v-for="item in toolNav" 
                :key="item.id"
                @click="toThirdParty(item)">
                <img v-if="item.icon" :src="item.icon" class="navIcon" alt="">
                {{ item.name }}
              </div>
          </div>
      </div>
    </el-card>
  
		<!-- 遗漏补充 -->
		<el-drawer
		  title="遗漏补充"
		  :visible.sync="drawer">
		  <div>
				<el-form :model="newForm" ref="newForm" :rules="rules" style="padding: 20px;">
					<el-form-item prop="name">
						<span class="mr-2" style="color: red;">*</span>
						<el-input style="width: 95%;" v-model="newForm.name" placeholder="输入名称"></el-input>
					</el-form-item>
					<el-form-item prop="url">
						<span class="mr-2" style="color: red;">*</span>
						<el-input v-model="newForm.url" style="width: 95%;" placeholder="输入网址"></el-input>
					</el-form-item>
					<el-form-item>
						<span class="mr-2" style="opacity: 0;">*</span>
						<el-input v-model="newForm.icon" style="width: 95%;" placeholder="图标" disabled></el-input>
					</el-form-item>
					<el-form-item prop="type">
						<span class="mr-2" style="color: red;">*</span>
						<el-cascader
							v-model="newForm.type"
							placeholder="选择类型"
							style="width: 95%;"
							:options="options"
							clearable>
						</el-cascader>
					</el-form-item>
					<el-form-item v-if="newForm.type == '006'" >
						<span class="mr-2" style="opacity: 0;">*</span>
						<el-input v-model="newForm.other" style="width: 95%;" placeholder="输入您认为的所属类型名称"></el-input>
					</el-form-item>
				</el-form>
				<div class="pl-4 pb-4 font-size-1 color-b8c4ce">注：所提交内容在管理员审核通过后进行展示</div>
				<div style="display: flex;justify-content: center;">
					<el-button type="primary" style="width: 40%;" round @click="addMeun('newForm')">添加</el-button>
					<el-button style="width: 40%;" round>取消</el-button>
				</div>
			</div>
		</el-drawer>
	</div>
</template>
<script>
	
let options = [
	{
		value: '001',
		label: '技术栏',
		children: [{
			value: '001001',
			label: '前端技术'
		}, {
			value: '001002',
			label: '后端技术'
		}, {
			value: '001003',
			label: '服务端'
		}, {
			value: '001004',
			label: '博客/论坛'
		},{
			value: '001006',
			label: '其他'
		}]
	},
	{
		value: '002',
		label: '设计/视觉',
		children: [{
			value: '002001',
			label: '设计'
		}, {
			value: '002002',
			label: '视觉'
		}]
	},
	{
		value: '003',
		label: '辅助工具',
	},
	{
		value: '006',
		label: '其他',
	}]


import service from './service.js'
export default {
  data() {
    return {
      activeName: "001001",
      skillNav: [],
      itemName:{
        '001001': '前端',
        '001002': '后端',
        '001003': '服务端',
        '001004': '博客/论坛',
        '001006': '其他'
      },
      designNav: [],
      toolNav: [],
      newForm: {},
      options: options,
			drawer: false,
			rules:{
				name:[{ required: true, message: '请输入网址名称', trigger: 'blur' }],
				url:[{ required: true, message: '请输入网址', trigger: 'blur' }],
				type:[{ required: true, message: '请选择所属类型', trigger: 'change' }]
			}
		};
  },
  mounted() {
    this.query_skill_nav();
    this.query_design_nav();
    this.query_tool_nav();
  },
  methods: {
    // 获取技术类网站
    query_skill_nav() {
      service.queryNav({
        parentValue: '001'
      }).then( res =>{
        if(res.data.code){
          let data = res.data.data;
          let obj = {};
          obj['001006'] = [];
          data.forEach(item => {
            if(item.icon){
              item.icon = require('../../static/icon/'+ item.icon)
            }
            if (item.childvalue) {
              if (obj[item.childvalue]) {
                obj[item.childvalue].push(item);
              } else {
                obj[item.childvalue] = [];
                obj[item.childvalue].push(item);
              }
            }else{
                obj['001006'].push(item)
            }
          });
          this.skillNav = obj;
        }
        
      })
    },
    // 获取设计类网站
    query_design_nav(){
      service.queryNav({
        parentValue: '002'
      }).then(res =>{
        if(res.data.code){
          let data = res.data.data;
          data.forEach(item => {
            if(item.icon){
              item.icon = require('../../static/icon/'+ item.icon)
            }
          })
          this.designNav = data;
        }
        
      })
    },
    // 获取工具类网站
    query_tool_nav(){
      service.queryNav({
        parentValue: '003'
      }).then(res =>{
        if(res.data.code){
          let data = res.data.data;
          data.forEach(item => {
            if(item.icon){
              item.icon = require('../../static/icon/'+ item.icon)
            }
          })
          this.toolNav = data;
        }
        
      })
    },
    // 跳往第三方导航地址
    toThirdParty(item){
      let a = document.createElement("a");
      a.setAttribute("href", item.url);
      a.setAttribute("target", "_blank");
      a.click();
    },
    // 点击遗漏补充
    addNewNavHandle(){
			this.drawer = true;
    },
		// 数据处理
		editDataHandle(arr){
			this.options.forEach(parent=>{
				if(arr[0] == parent.value){
					this.newForm['parentName'] = parent.label;
					if(arr.length > 1){
						parent.children.forEach(child =>{
							if(child.value == arr[1]){
								this.newForm['childName'] = child.label;
							}
						})
					}
				}
			})
		},
		addMeun(formName){
			this.$refs[formName].validate((valid) => {
				if (valid) {
					let t_all = this.newForm.type;
					if(t_all[0] == '006'){
						
					}else{
						this.newForm['parentValue'] = t_all[0];
						this.newForm['childValue'] = t_all.length > 1 ? t_all[1] : "";
					}
					this.editDataHandle(t_all)
					service.addBcyl({
					  ...this.newForm
					}).then( data =>{
					  if(data.data.code){
					    this.$message({
					      type: "success",
					      message: "提交成功"
					    })
					    this.newForm = {}
					  }
					})
				} else {
					this.$message({
					  type: "warning",
					  message: "请填写带*的内容"
					})
					return false;
				}
			});
		}
  }
};
</script>
<style scoped>
.skill-div{
    height: 255px;
    overflow: hidden;
    overflow-y: auto;
}
.skill-div::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
.skill-div::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.skill-div::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
.skill-con{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    
}
.skill-con-item{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-bottom: 15px;
    cursor: pointer;
}
.skill-con-item:hover{
  color: deepskyblue;
}

</style>