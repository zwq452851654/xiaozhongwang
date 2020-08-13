<template>
  <div>
    <div class="text-right mb-3">
      <el-switch v-model="edit" :inactive-text="edit ? '拖拽移动' : ''"></el-switch>
    </div>
    <div v-if="!edit">
      <div class="item" v-for="(item, index) in oftenNav" :key="index">
        <img :src="item.icon" class="navIcon" alt="">
        {{item.name}}
      </div>
    </div>
    <div v-else>
      <div
        class="item"
        v-for="(item, index) in oftenNav"
        :key="index"
        draggable="true"
        @dragstart="handleDragStart($event, item)"
        @dragenter="handleDragEnter($event, item)"
        @dragover.prevent="handleDragover($event, item)"
        @dragleave="dragLeave($event, item)"
        @drop="handleDrop($event, item)"
        @dragend="handleDragEnd($event, item)"
      >
        <img :src="item.icon" class="navIcon" alt="">
        {{item.name}}
        <i class="el-icon-close delete-icon" v-show="edit" @click="delItem(item)"></i>
      </div>
    </div>
    <div class="text-right">
      <router-link to="/home/setOftenNav" tag="i" class="el-icon-menu ml-1 font-size-5 cursor-p"></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allNav: [],
      oftenNav:[],
      dragging: null,
      curEl: "",
      edit: false,
      activeName: ''
    };
  },
  mounted(){
    this.query_often_nav()
  },
  methods: {
    // 当某元素被拖拽时，记录拖拽项
    handleDragStart(e, item) {
      this.dragging = item;
      this.curEl = e;
      event.target.style.border = "1px solid #736efe";
    },
    // 当被拖拽元素进入被替换项时
    handleDragEnter(e, item) {
      // 为需要移动的元素设置dragstart事件
      e.dataTransfer.effectAllowed = "move";
      if (item.id !== this.dragging.id) {
        event.target.style.border = "1px solid red";
      } else {
        event.target.style.border = "1px solid #736efe";
      }
    },
    // 离开被替换项时执行
    dragLeave(e, item) {
      if (item.id !== this.dragging.id) {
        event.target.style.border = "";
      }
    },
    // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
    handleDragover(e) {
      // 首先把div变成可以放置的元素，即重写dragenter/dragover
      // 在dragenter中针对放置目标来设置!
      e.dataTransfer.dropEffect = "move";
    },
    // 当放置被拖元素时
    handleDrop(e, item) {
      e.dataTransfer.dropEffect = "move";
      event.target.style.border = "";
      this.curEl.target.style.border = "";
      if (item === this.dragging) {
        return;
      }
      const newItems = [...this.oftenNav];
      const from = newItems.indexOf(this.dragging);
      const to = newItems.indexOf(item);
      newItems[from] = item;
      newItems[to] = this.dragging;
      this.oftenNav = newItems;
    },
    // 完成元素拖动后触发
    handleDragEnd() {
      this.dragging = null;
    },
    delItem(item) {
      console.log("删除", item);
    },
    // 获取常用导航地址
    query_often_nav() {
      this.$http.get('/nav/query_often_nav', {}).then( res =>{
        console.log(res.code)
        if(res.data.code){
          let data = res.data.data;
          data.forEach(item => {
            if(item.icon){
              item.icon = require('../../static/icon/'+ item.icon)
            }
          })
          this.oftenNav = data;
          console.log(data)
        }
      })


      // var url = "/query_often_nav";
      // this.$axios
      //   .get(url)
      //   .then(res => {
      //     let data = res.data.data;
      //     data.forEach(item => {
      //       if(item.icon){
      //         item.icon = require('../../static/icon/'+ item.icon)
      //       }
            
      //     })
      //     this.oftenNav = data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    setOftenNav(){
      this.$router.push({path: '/setoftenNav'})
    }
  }
};
</script>
<style scoped="scoped">
.item {
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 180px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.2);
  border-radius: 10px;
  cursor: pointer;
}
.delete-icon {
  float: right;
  margin-top: 12px;
}
</style>