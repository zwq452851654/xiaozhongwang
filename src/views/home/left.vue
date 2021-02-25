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
          <ul class="newa" v-if="tab.name == 'weibo'">
            <li class="font-size-2 text-center" v-if="weiboObj.list.length == 0">(⊙o⊙)…我好像遇到了点小麻烦</li>
            <li class="list-item" v-else v-for="(list,index) in weiboObj.list" :key="list.rank">
              <span class="heat" :style="{background: reatColor[index]}">{{ list.rank }}</span>
              <span class="news-title" @click="seeNews(list)">{{ list.title }}</span>
              <i class="ml-auto">{{ list.hotValue }}</i>
            </li>
          </ul>
          <ul class="newa" v-if="tab.name == 'baidu'">
            <li class="font-size-2 text-center" v-if="baiduObj.list.length == 0">(⊙o⊙)…我好像遇到了点小麻烦</li>
            <li class="list-item" v-else v-for="(list,index) in baiduObj.list" :key="list.rank">
              <span class="heat" :style="{background: reatColor[index]}">{{ list.rank }}</span>
              <span class="news-title" @click="seeNews(list)">{{ list.title }}</span>
              <i class="ml-auto">{{ list.hotValue }}</i>
            </li>
          </ul>
          <ul class="newa" v-if="tab.name == 'city'">
            <li class="list-item">内容暂定</li> 
          </ul>
          <div class="text-right font-size-1 text-primary cursor-p change-btn" @click="changeList(tab.name)">
            <el-button type="text" icon="el-icon-refresh" class="mr-1 font-size-2">换一换</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 技术资讯 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span><i class="iconfont iconshuxian"></i>技术资讯</span>
      </div>
      <ul class="newa">
        <li class="font-size-2 text-center" v-if="jishuObj.list.length == 0">(⊙o⊙)…我好像遇到了点小麻烦</li>
          <li class="list-item" v-else v-for="(list,index) in jishuObj.list" :key="index">
            <span class="heat" :style="{background: reatColor[index]}">{{ list.rank }}</span>
            <span class="news-title" @click="seeNews(list)">{{ list.title }}</span>
            <i class="ml-auto">999+</i>
          </li>
      </ul>
      <div class="text-right font-size-1 text-primary cursor-p change-btn" @click="changeList('jishu')">
        <el-button type="text" icon="el-icon-refresh" class="mr-1 font-size-2">换一换</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
import service from './service.js'
export default {
  data() {
    return {
      activeName: "weibo",
      newTabs:[
        { label:'微博', name:'weibo' },
        { label:'百度', name:'baidu' },
        { label:'北京', name:'city' }
      ],
      showForm: false,
      newsForm: {},
      reatColor:['#fdcd14', '#b6d3f2', '#efdac6'],
      weibo: [],
      weiboObj:{
        list: [],
        page: 0
      },
      baidu: [],
      baiduObj:{
        list: [],
        page: 0
      },
      jishu: [],
      jishuObj:{
        list: [],
        page: 0
      },
    };
  },
  mounted(){
    this.queryHotData('weibo');
    this.queryHotData('baidu');
    this.queryHotData('jishu');
		// setInterval(()=>{
		// 	this.queryHotData('weibo');
		// },3000)
  },
  methods:{
    // 获取微博热搜数据
    queryHotData(name){
      service.queryNews({
        'q': name + '_hot'
      }).then( res =>{
        let data = res.data;
        if(data.code){
          if(name == 'jishu'){
            data.data.forEach((item,i) =>{
              item.rank = ++i;
            })
          }
          this[name] = data.data;
          this.changeList(name)
        }
      })
    },
    // 点击换一换执行
    changeList(m){
      let page = this[m+'Obj']['page'];
      this[m+'Obj']['list'] = [];
      let s,e;
      if(page > 0){
        s = Number(page * 6);
      }else{
        s = Number(page * 5);
      }
       e = s + 6;
      this[m+'Obj']['list'] = this[m].slice(s, e);
      this[m+'Obj']['page'] = ++page;
      if(e >= this[m].length) this[m+'Obj']['page'] = 0;
    },
    seeNews(item){
      let a = document.createElement('a');
      a.setAttribute("href", item.link);
      a.setAttribute("target", "_blank");
      a.click();
    }
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
    align-items: center;
    color: #626366;
    font-size: 15px;
    margin-bottom: 3px;
    cursor: pointer;
  }

  .list-item span:hover{
    text-decoration: underline;
  }
  .heat{
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background: #ccc;
    text-align: center;
    border-radius: 5px;
    margin-right: 5px;
    color: #fff;
  }

  .list-item i{
    font-size: 14px;
    font-style: inherit;
  }
  .list-item .news-title{
    width: 180px;
    font-size: 12px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .change-btn{
    user-select:none;
  }
  .iconshuxian{
    font-size: 16px;
    color: #1393f1;
  }
  .transition-box .el-form-item{
    margin: 0;
  }
</style>