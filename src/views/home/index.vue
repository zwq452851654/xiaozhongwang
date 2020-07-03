<template>
  <div>
    <div class="search">
      <ul class="d-flex justify-content-center">
        <li 
          class="search-tag mr-1" 
          v-for="item in searchList" 
          :key="item.value"
          :class="{'search-active': curSearchAim == item.value}"
          @click="setSearch(item)">
          <i class="iconfont iconduigou" v-if="curSearchAim == item.value"></i>
          <i class="iconfont iconyuandianxiao" v-else></i>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div class="search-text">
        <el-input placeholder="请输入内容" size="medium" v-model="input2">
          <el-button slot="append" class="search-btn">立即搜索</el-button>
        </el-input>
      </div>
    </div>
    <div class="content">
      <div class="bg">
        <div class="text-right mb-3">
          <el-switch
            v-model="edit"
            :inactive-text="edit ? '拖拽移动' : ''">
          </el-switch>
        </div>
        <div class="item" v-for="(item, index) in divList" :key="index" draggable="true"
          @dragstart="handleDragStart($event, item)"
          @dragenter="handleDragEnter($event, item)"
          @dragover.prevent="handleDragover($event, item)"
          @dragleave="dragLeave($event, item)"
          @drop="handleDrop($event, item)"
          @dragend="handleDragEnd($event, item)">
          {{item.name}}
          <i class="el-icon-close delete-icon" v-show="edit"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  components: {
    
  },
  data(){
    return{
      searchList:[
        { name: '百度一下', value: 'baidu' },
        { name: 'github', value: 'github' },
        { name: 'google', value: 'google' },
        { name: 'csdn', value: 'csdn' },
        { name: '掘金', value: 'juejin' },
        { name: 'oschina', value: 'oschina' },
        { name: '思否', value: 'sifou' },
        { name: '知乎', value: 'zhihu' },
        { name: '必应', value: 'biying' },
        { name: '简书', value: 'jianshu' }
      ],
      curSearchAim: "baidu",
      input2:"",
      divList: [
        { key: 1, name: '1'},
        { key: 2, name: '2'},
        { key: 3, name: '3'},
        { key: 4, name: '4'},
        { key: 5, name: '5'},
        { key: 6, name: '6'},
        { key: 7, name: '7'},
        { key: 8, name: '8'},
        { key: 9, name: '9'},
        { key: 10, name: '10'},
        { key: 11, name: '11'},
        { key: 12, name: '12'},
        { key: 13, name: '13'},
      ],
      dragging: null,
      curEl:"",
      edit: false,
    }
  },
  methods:{
    setSearch(item){
      this.curSearchAim = item.value;
    },
    // 当某元素被拖拽时，记录拖拽项
    handleDragStart(e, item) {
      this.dragging = item;
      this.curEl = e;
      event.target.style.border = "1px solid #736efe";
    },
    // 当被拖拽元素进入被替换项时
    handleDragEnter(e, item) {
      // 为需要移动的元素设置dragstart事件
      e.dataTransfer.effectAllowed = 'move';
      if(item.key !== this.dragging.key){
        event.target.style.border = "1px solid red";
      }else{
        event.target.style.border = "1px solid #736efe";
      }
    },
    // 离开被替换项时执行
    dragLeave(e, item) {
      if(item.key !== this.dragging.key){
        event.target.style.border = "";
      }
    },
    // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
    handleDragover(e) {
      // 首先把div变成可以放置的元素，即重写dragenter/dragover
      // 在dragenter中针对放置目标来设置!
      e.dataTransfer.dropEffect = 'move'
    },
    // 当放置被拖元素时
    handleDrop(e, item) {
      e.dataTransfer.dropEffect = 'move'
      event.target.style.border = "";
      this.curEl.target.style.border = "";
      if(item === this.dragging){
        return
      }
      const newItems = [...this.divList]
      const from = newItems.indexOf(this.dragging)
      const to = newItems.indexOf(item)
      newItems[from] = item
      newItems[to] = this.dragging
      this.divList = newItems;
    },
    // 完成元素拖动后触发
    handleDragEnd() {
      this.dragging = null
    }
  }
}
</script>

<style>
  .search-text{
    width: 30%;
    margin: 25px auto;
  }
  .search-text .el-input__inner{
    border-radius: 25px;
  }
  .search-btn{
    width: 100px;
  }
  .search-text .el-input-group__append{
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
</style>

<style scoped="scoped">
  .search{
    width: 100%;
    padding: 30px 30px 6px 30px;
    background: #fff;
  }
  .search-tag{
    height: 27px;
    line-height: 27px;
    padding: 0 8px;
    background: #eeeeee94;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }
  .search-tag:hover{
    background: #7f9eff;
    color: #fff;
  }
  .iconyuandianxiao{
    display: inline-grid;
    vertical-align: middle;
    font-size: 16px;
    color: #bfbfc080;
  }
  .iconduigou{
    margin-right: 3px;
  }
  .search-active{
    font-weight: bold;
    background: #7f9eff;
    color: #fff;
  }

  .item {
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 20px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    box-shadow: 0 0 10px hsla(0,0%,40%,.2);
    border-radius: 10px;
    cursor: pointer;
  }

  .delete-icon{
    float: right;
    margin-top: 12px;
  }

</style>
