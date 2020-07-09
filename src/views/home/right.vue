<template>
  <div>
    <el-card class="box-card mt-3">
      <div slot="header" class="clearfix">
        <b class="font-size-2">技术栏</b>
        <el-button style="float: right; padding: 3px 0" type="text">遗漏补充</el-button>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="itemName[key]" :name="key" v-for="(item, key) in itemName" :key="key">
            <div class="skill-div">
                <div class="skill-con">
                    <div class="col skill-con-item font-size-1" v-for="child in skillNav[key]" :key="child.id">
                      <i class="el-icon-platform-eleme font-size-4"></i>
                      {{  child.name }}
                    </div>
                </div>
            </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card class="box-card mt-3">
      <div slot="header" class="clearfix">
        <b class="font-size-2">设计/视觉</b>
        <el-button style="float: right; padding: 3px 0" type="text">遗漏补充</el-button>
      </div>
      <div class="skill-div">
          <div class="skill-con">
              <div class="col skill-con-item font-size-1" v-for="item in designNav" :key="item.id">
                <i class="el-icon-platform-eleme font-size-4"></i>
                {{ item.name }}
              </div>
          </div>
      </div>
    </el-card>
  </div>
</template>
<script>
// const a = [
//     {lable:'前端技术', name:'a', list:"前端技术"},
//     {lable:'后端技术', name:'b', list:"后端技术"},
//     {lable:'服务端', name:'c', list:"服务端"},
//     {lable:'运维', name:'d', list:"运维"},
//     {lable:'其他', name:'e', list:"其他"}
// ]

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
      designNav: []
    };
  },
  mounted() {
    this.query_skill_nav();
    this.query_design_nav();
  },
  methods: {
    // 技术类型
    query_skill_nav() {
      var url = "/query_skill_nav";
      this.$axios
        .get(url)
        .then(res => {
          let data = res.data.data;
          let obj = {};
          obj['001006'] = [];
          data.forEach(item => {
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
        .catch(error => {
          console.log(error);
        });
    },
    // 获取设计类网站
    query_design_nav(){
      var url = "/query_design_nav";
      this.$axios
        .get(url)
        .then(res => {
          let data = res.data.data;
          this.designNav = data;
          console.log(this.designNav)
        })
        .catch(error => {
          console.log(error);
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
    }
</style>