<template>
  <div class="content">
    <div class="w-100 bg d-flex font-size-2 ">
      <div>这里可以是一句很长很长的说明</div>
    </div>
    <div class="d-flex">
      <div class=" mr-3">
        <div class="bg w-100">
          <!-- 教程标题信息 -->
          <div class="title">标题：Ps知识点：快速上手插画风</div>
          <div class="d-flex mt-3 sourse-info font-size-2">
            <div class="mr-4">原创作品</div>
            <div class="mr-4 color-b8c4ce">版权：<i class="el-icon-s-check icon"></i></div>
            <div class="mr-4 color-b8c4ce"><i class="el-icon-view icon"></i>1000</div>
            <div class="mr-4 color-b8c4ce"><i class="el-icon-s-comment icon"></i>99+</div>
            <div class="mr-4 color-b8c4ce"><i class="el-icon-star-on icon"></i>9</div>
            <div class="mr-4 color-b8c4ce"><i class="el-icon-time icon"></i>2020-06-29</div>
          </div>
          <!-- 教程内容 -->
          <div class="mt-3 border-bottom" style="padding-bottom:60px">
            <div>
              <div class="title">成品展示(点击图片预览大图)</div>
              <div class="text-center">
                <div class="demo-image__preview">
                  <el-image 
                    style="width: 300px"
                    :src="url" 
                    :preview-src-list="srcList">
                  </el-image>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <div class="title">设计思路</div>
              <p class="step-con">PS的隐藏地图，我还没有完全发现，让我们一起慢慢探索，没有手绘板，打开photoshop就行了。近来，插画风越来越流行，翻看618的商家图，成以上都用上了插画，今天带大家用ps快速上手插画风。本篇教程需要一丢丢软件基础，弄不清楚的欢迎留言。</p>
            </div>
            
            
            <div class="mt-3">
              <div class="title">素材下载</div>
              <ul class="list-group w-50 m-auto">
                <li class="list-group-item">
                  Cras justo odio
                  <span class="badge badge-pill float-right cursor-p">
                    <i class="el-icon-download font-size-2"></i>
                  </span>
                </li>
                <li class="list-group-item">
                  Dapibus ac facilisis in
                  <span class="badge badge-pill float-right cursor-p">
                    <i class="el-icon-download font-size-2"></i>
                  </span>
                </li>
              </ul>
            </div>
            
            <div class="mt-3">
              <div class="title">开始制作</div>
              <div class="ml-3" v-for="item in stepData" :key="item.id">
                <p class="step-con"><b>{{ item.step }}</b><span v-html="resetVal(item.explain)" @click="see(item, $event)"></span></p>
                <el-collapse-transition>
                  <div v-show="showItem == item.step" class="zwq-prompt">
                    <div class="d-flex align-items-center">
                      <div class="items-alignm-center">
                        <p>讲解：{{ explainMsg }}</p>
                        <el-button size="mini" icon="el-icon-microphone ab" round>语音讲解</el-button>
                        <el-button size="mini" icon="el-icon-video-camera ab" round>视频讲解</el-button>
                      </div>
                      <i class="el-icon-close ml-auto cursor-p font-size-5" @click="closeHandle()"></i>
                    </div>
                  </div>
                </el-collapse-transition>
                <div class="text-center">
                  <img :src="item.img" alt="">
                </div>
              </div>
            </div>
          </div>

          <!-- 课程尾部 -->
          <div class="d-flex justify-content-between sourse-foot align-items-center">
            <div>
              <div class="d-flex">
                <div class="icon-box cursor-p">
                  <el-tooltip class="item" effect="dark" content="生成海报并分享" placement="top-start">
                    <i class="iconfont icontupian icon-size"></i>
                  </el-tooltip>
                </div>
                <div class="icon-box cursor-p">
                  <el-tooltip class="item" effect="dark" content="分享到微信" placement="top-start">
                    <i class="iconfont iconweixin1 icon-size"></i>
                  </el-tooltip>
                </div>
                <div class="icon-box cursor-p">
                  <el-tooltip class="item" effect="dark" content="分享到朋友圈" placement="top-start">
                    <i class="iconfont iconpengyouquan icon-size"></i>
                  </el-tooltip>
                </div>
                <div class="icon-box cursor-p">
                  <el-tooltip class="item" effect="dark" content="分享到QQ" placement="top-start">
                    <i class="iconfont iconQQ icon-size"></i>
                  </el-tooltip>
                </div>
              </div>
              <div class="color-b8c4ce font-size-2 mt-1">快给朋友分享吧！</div>
            </div>
            <div class="awesome d-flex align-items-center">
              <i class="el-icon-thumb awesome-icon"></i>
              <span class="awesome-text">赞</span>
              <span class="awesome-count ml-auto">2</span>
            </div>
            <div>
              <div class="collect">
                <i class="el-icon-star-on collect-icon"></i>收藏
              </div>
            </div>
          </div>
          
          <!-- 未登陆状态下显示 -->
          <div class="no-login d-flex align-items-center font-size-2">
            <div class="ml-4">对就你，别默默的看了，快登录帮我点评一下吧！:)</div>
            <div class="ml-auto mr-4">
              <span class="mr-3 cursor-p">立即注册</span>
              <span class="login-btn">登录</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧部分 -->
      <div class="bg right">
        <courseInfoRight></courseInfoRight>
      </div>
    </div>
    
  </div>
</template>
<script>
import courseInfoRight from "./courseInfoRight.vue"

const stepData = [
  {
    step:'步骤1：',
    explain:"打开ps，导入图片，抠出中间主图，新建一个画布，把刚抠好的奶茶放到画布中间。给它一个背景色#f97b76.",
    img:require('../../static/img/step1.jpg')
  },
  {
    step:'步骤2：',
    explain:"选中奶茶，复制出新图层-奶茶2，在菜单中找到滤镜-杂色-蒙尘与划痕。阈值不动，半径越大，图片越模糊。我这里半径用了14，大家酌情凭感觉就好。",
    img:require('../../static/img/step2.jpg')
  },
  {
    step:'步骤3：',
    explain:"修理下细节，下边角弧度打磨大一些，去掉白光。图中光从右边来的，我习惯左上角光源，于是把奶茶左右翻转了，左侧高光部分适当增添一点颜色光。添加投影，物品由于环境影响，通常由投影、阴影与反光，三个影子组成。杯子底部加一点桌子返回来的暗光，冰上加一点粉红色。加杯垫，给杯垫加投影。",
    img:require('../../static/img/step3.jpg')
  },
  {
    step:'步骤4：',
    explain:"重点来了，选择画笔-笔刷-Kyle的绘画盒，分别贴着杯垫和投影的轮廓描一圈，注意尽量不要点着画，不断笔会更均匀，不要描的太粗了。接下来增加一些配件，自行搜索西柚、柠檬，下下来，按照刚才的方法，先摆好位置，画上投影，先用滤镜-杂色-蒙尘与划痕把图片转为插画风，再用画笔-笔刷-Kyle的绘画盒给他们描一层萌萌的边。现在样式如图：",
    img:require('../../static/img/step4.jpg')
  },
  {
    step:'步骤5：',
    explain:"最后加上文字，优化细节，完活儿。",
    img:require('../../static/img/step5.jpg')
  },
]

var keywords = ["滤镜","图层","投影","画布"];

export default {
  components:{
    courseInfoRight
  },
  data(){
    return {
      stepData: stepData,
      url: require('../../static/img/minT.jpg'),
      srcList: [
        require('../../static/img/maxT.png')
      ],
      showItem: "",
      explainMsg: "",
      keywords: keywords
    }
  },
  mounted(){
    
  },
  methods:{
    resetVal(value){
      let keywords = this.keywords;
      for(let i=0;i<keywords.length;i++){
          let reg = new RegExp(keywords[i],"g");
          if(value.indexOf(keywords[i])!=-1){
              let result = value.replace(reg, "<i class='step-con-i'>$&</i>");
              value = result;
          }
      }
      return value
    },
    see(item,e){
      let text = e.target.innerText;
      let keywords = this.keywords;
      for(let i=0; i<=keywords.length; i++){
        if(keywords[i] == text){
          this.explainMsg = ` 我是${text}，然后后面跟一系列的讲解`;
          this.showItem = item.step;
          break;
        }
      }
      
    },
    closeHandle(){
      this.showItem = "";
    }
  }
}
</script>
<style scoped="scope">
  .sourse-info{
    border-bottom: 1px solid #f4eded;
    padding-bottom: 10px;
  }
  .step-con{
    color: #333;
    font-size: 14px;
    padding: 10px;
  }

  .sourse-foot{
    padding: 50px 20px;
  }
  .awesome{
    width: 180px;
    padding: 15px 0;
    background: #3dbdffb3;
    color: #fff;
    border-top-left-radius: 45px;
    border-bottom-right-radius: 45px;
  }
  .awesome-icon{
    font-size: 30px;
    margin-left: 30px;
  }
  .awesome-text{
    font-size: 18px;
    margin-left: 5px;
  }
  .awesome-count{
    margin-right: 20px;
  }
  .icon-box{
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: 1px solid #b8c4ce;
    border-radius: 50%;
    margin-right: 12px;
  }
  .icon-box:hover{
    border:2px solid #3dbdffb3;
  }
  .icon-size{
    font-size: 20px;
  }
  .collect{
    border: 1px solid #333;
    width: 80px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 15px;
    font-size: 12px;
  }
  .collect-icon{
    position: relative;
    top: 2px;
    font-size: 20px;
  }

  .right{
    min-width: 300px;
    max-width: 300px;
    height: 100%;
  }
  .reviews{
    padding: 0 15px;
    height: 130px;
    background: #f0f0f0;
  }
  .no-login{
    width: 100%;
    height: 80px;
    border: 1px solid #ffeaea;
    background: #fff5f6;
  }
  .login-btn{
    display: inline-block;
    padding: 5px 22px;
    background: #a0e3e3;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
  .zwq-prompt{
    padding: 10px;
    max-height: 100px;
    background: #e4e4e4;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>