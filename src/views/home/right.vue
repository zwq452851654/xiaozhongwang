<template>
  <div>
    <!-- 技术栏 -->
    <el-card class="box-card mt-3">
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
    <el-card class="box-card mt-3">
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
    <el-card class="box-card mt-3">
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

  </div>
</template>
<script>

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
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }
      ]
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
      this.$http.get('/nav/queryNav', {
        parentValue: '001'
      }).then( res =>{
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
      })
    },
    // 获取设计类网站
    query_design_nav(){
      this.$http.get('/nav/queryNav', {
        parentValue: '002'
      }).then(res =>{
        let data = res.data.data;
        data.forEach(item => {
          if(item.icon){
            item.icon = require('../../static/icon/'+ item.icon)
          }
        })
        this.designNav = data;
      })
    },
    // 获取工具类网站
    query_tool_nav(){
      var url = "/query_tool_nav";
      this.$http.get('/nav/queryNav', {
        parentValue: '003'
      }).then(res =>{
        let data = res.data.data;
        data.forEach(item => {
          if(item.icon){
            item.icon = require('../../static/icon/'+ item.icon)
          }
        })
        this.toolNav = data;
      })
    },
    // 跳往第三方导航地址
    toThirdParty(item){
      let a = document.createElement("a");
      a.setAttribute("href", item.url);
      a.setAttribute("target", "_blank");
      a.click();
    },
    // 遗漏补充
    addNewNavHandle(){
      // name: "", icon: "", url: "", parentName: "", parentValue: "", childName:"", childvalue:""
      this.addNewNavDialog = true;
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