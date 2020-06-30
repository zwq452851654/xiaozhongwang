<template>
  <div class="content">
    <div class="w-100 bg d-flex font-size-2 ">
      <div>这里可以是一句很长很长的说明</div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="mr-3 w-auto">
        <div class="w-100 bg course">
          <!-- 课程筛选条件 -->
          <div class="mb-5">
            <div class="d-flex font-size-2 mb-3 cursor-p" v-for="item in courseData" :key="item.value">
              <div class="mr-4">{{ item.name }}：</div>
              <span 
                class="mr-4"
                :class="{ 'course-active': child.active }"
                v-for="child in item.list" 
                :key="child.value"
                @click="setActive(item, child)">
                {{ child.name }}
              </span>
            </div>
          </div>
          

          <!-- 教程显示结构 -->
          <div class="mt-5" v-for="v in 10" :key="v">
            <div class="media position-relative" >
              <img src="../../static/img/img-001.gif" class="mr-3 shadow-sm icon-img cursor-p" alt="...">
              <div class="media-body">
                <div class="d-flex">
                  <!-- <h5 class="mt-0 cursor-p course-title"></h5> -->
                  <router-link target="_blank" class="mt-0 cursor-p course-title" to="/learn/courseInfo" >动效临摹</router-link>
                  <div class="ml-auto font-size-2 color-b8c4ce"><i class="el-icon-time icon"></i>2020 6-29 17:54</div>
                </div>
                <p class="sourse-synopsis">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                <div class="d-flex align-items-center font-size-1 related-info">
                  <div class="mr-5">
                    <img src="../../static/img/user-icon.jpg" class="avatar mr-2" alt="">
                    <span>数艺社</span>
                  </div>
                  <div class="mr-5 color-b8c4ce">教程</div>
                  <div class="mr-5 color-b8c4ce"><i class="el-icon-view icon"></i>1000</div>
                  <div class="mr-5 color-b8c4ce"><i class="el-icon-s-comment icon"></i>99+</div>
                  <div class="mr-5 color-b8c4ce"><i class="el-icon-star-on icon"></i>9</div>
                </div>
              </div>
            </div>
            <el-divider></el-divider>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="bg mb-3">
          <img src="../../static/img/0-item_pic.jpg" class="w-100" alt="">
        </div>
        <div class="bg mb-3">
          <img src="../../static/img/book.jpg" class="w-100" alt="">
        </div>
        
      </div>
    </div>
    
  </div>
</template>
<script>

const courseData = [
  { name:"课程", value:"001", list:[
      {name:"全部", value:"001001", active: true},
      {name:"PS", value:"001002", active: false},
      {name:"AI", value:"001003"}
    ]
  },
  { name:"专题", value:"002", list:[
      {name:"全部", value:"002001", active: true},
      {name:"字体", value:"002002", active: false},
      {name:"配色", value:"002003", active: false},
      {name:"合成", value:"002004", active: false},
      {name:"动画", value:"002005", active: false}
    ]
  },
  { name:"排序", value:"003", list:[
      {name:"全部", value:"003001", active: true},
      {name:"高推荐", value:"003002", active: false},
      {name:"高评分", value:"003003", active: false},
      {name:"最新", value:"003004", active: false},
      {name:"最热", value:"003005", active: false}
    ]
  }
]

export default {
  components: {

  },
  data(){
    return {
      courseData: courseData
    }
  },
  methods:{
    /*
    * 课程筛选高亮处理
    * parent: 父级，child:子级
    */
    setActive(parent, child){
      this.courseData.forEach( t => {
        if(t.value == parent.value){
          t.list.forEach(c =>{
            c.active = c.value == child.value ? true : false
          })
        }
      })
    }
  }
}
</script>

<style scope>
  .course span:hover{
    color: #3d7eff;
  }
  .course-active{
    color: #3d7eff;
    font-weight: 700;
  }
  .icon-img{
    width: 160px;
    height: 120px;
  }
  .related-info{
    height: 20px;
    line-height: 20px;
  }
  .avatar{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .icon{
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    color: #b8c4ce;
    margin-right: 5px;
    line-height: 13px;
  }
  .color-b8c4ce{
    color: #b8c4ce;
  }
  .right{
    min-width: 300px;
    max-width: 300px;
  }
  .course-title{
    font-weight: bold;
    font-size: 16px;
    color: #333;
  }
  .course-title:hover{
    color: #3d7eff;
  }
  .sourse-synopsis{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
