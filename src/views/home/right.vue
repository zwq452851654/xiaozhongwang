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

    <!-- 新增导航 -->
    <el-dialog title="遗漏补充" :visible.sync="addNewNavDialog" width="350px">
      <el-form :model="newForm" size="mini" label-width="90px">
        <el-form-item label="网站名称" >
          <el-input v-model="newForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="所属大类">
          <el-cascader
            v-model="newForm.type"
            class="w-100"
            :options="options"
            clearable>
          </el-cascader>
        </el-form-item>
        <el-form-item label="网站地址">
          <el-input v-model="newForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="">
          <div class="font-size-1 color-b8c4ce">注:您所提交的将会在审核通过后进行展示</div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addNewNavDialog = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="addNewNavDialog = false" size="mini">提 交</el-button>
      </div>
    </el-dialog>
  
		<!-- 遗漏补充 -->
		<el-drawer
		  title="遗漏补充"
		  :visible.sync="drawer">
		  <div>
				<el-form :model="newForm" style="padding: 20px;">
					<el-form-item>
						<el-input v-model="newForm.name" placeholder="输入名称"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input v-model="newForm.icon" placeholder="图标" disabled></el-input>
					</el-form-item>
					<el-form-item>
						<el-input v-model="newForm.url" placeholder="输入网址"></el-input>
					</el-form-item>
					<el-form-item>
						<el-cascader
							v-model="newForm.type"
							placeholder="选择类型"
							class="w-100"
							:options="options"
							clearable>
						</el-cascader>
					</el-form-item>
					<el-form-item v-if="newForm.type == '006'" >
						<el-input v-model="newForm.name" placeholder="输入您认为的所属类型名称"></el-input>
					</el-form-item>
				</el-form>
				<div style="display: flex;justify-content: center;">
					<el-button type="primary" style="width: 40%;" round @click="addMeun()">添加</el-button>
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
      addNewNavDialog: false,
      newForm: {},
      options: options,
			drawer: false,
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
		addMeun(){
			let t_all = this.newForm.type;
			if(t_all[0] == '006'){
				this.newForm['other'] = t_all[0]
			}else{
				this.newForm['parentValue'] = t_all[0];
				this.newForm['childValue'] = t_all.length > 1 ? t_all[1] : "";
			}
			this.editDataHandle(t_all)
			console.log(this.newForm)
			this.newForm = {}
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