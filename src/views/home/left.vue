<template>
  <div>
    <!-- 资讯顶置 -->
    <div class="bg">
      <div class="d-flex align-items-center">
        <i class="iconfont iconshuxian"></i>
        <span class="font-size-2">定制一个属于你的资讯栏</span>
        <div class="ml-auto cursor-p">
          <i class="el-icon-plus" v-if="!showForm" @click="showForm = true"></i>
          <i class="el-icon-minus" v-else @click="showForm = false"></i>
        </div>
      </div>
      <div>
        <el-collapse-transition name="el-zoom-in-top">
          <div v-show="showForm" class="transition-box mt-3">
            <el-form :model="newsForm" label-width="85px" label-position="left">
              <el-form-item label="栏目标题：">
                <el-input v-model="newsForm.age" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="资讯来源：">
                <el-input v-model="newsForm.age" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="资讯类型：">
                <el-input v-model="newsForm.age" size="mini"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary"  size="mini" class="w-100">提交</el-button>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <!-- 新闻资讯 -->
    <div class="bg mb-3">
      <el-tabs v-model="activeName" :stretch="true">
        <el-tab-pane :label="tab.label" :name="tab.name" v-for="tab in newTabs" :key="tab.name">
          <ul class="newa">
            <li class="list-item" v-for="(list,index) in 6" :key="index">
              <span>Cras justo odio </span>
              <i>100W</i>
            </li>
          </ul>
          <div class="text-right font-size-1 text-primary">
            <i class="el-icon-refresh mr-1 font-size-2"></i>换一换
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 技术栏 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span><i class="iconfont iconshuxian"></i>技术资讯</span>
      </div>
      <ul class="newa">
        <li class="list-item" v-for="(list,index) in 6" :key="index">
          <span>Cras justo odio </span>
          <i>100W</i>
        </li>
      </ul>
      <div class="text-right font-size-1 text-primary">
        <i class="el-icon-refresh mr-1 font-size-2"></i>换一换
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "wb",
      newTabs:[
        { label:'微博', name:'wb' },
        { label:'百度', name:'bd' },
        { label:'头条', name:'tt' },
        { label:'本地', name:'city' }
      ],
      showForm: false,
      newsForm: {}
    };
  }
};
</script>
<style scoped>
  .bg{
    padding: 20px 20px 10px 20px;
  }
  .newa{
    height: 196px;
    padding: 0;
    margin: 0;
  }
  .list-item{
    height: 30px;
    line-height: 30px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    color: #626366;
    font-size: 15px;
    cursor: pointer;
  }

  .list-item span:hover{
    text-decoration: underline;
  }

  .list-item i{
    font-size: 14px;
    font-style: inherit;
  }
  .iconshuxian{
    font-size: 16px;
    color: #1393f1;
  }
  .transition-box .el-form-item{
    margin: 0;
  }
</style>