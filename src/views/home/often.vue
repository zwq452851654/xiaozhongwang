<template>
  <div>
    <div class="text-right mb-3">
      <el-switch v-model="edit" :inactive-text="edit ? '拖拽移动' : ''"></el-switch>
    </div>
    <div v-if="!edit">
      <div class="item" v-for="(item, index) in divList" :key="index">{{item.name}}</div>
    </div>
    <div v-else>
      <div
        class="item"
        v-for="(item, index) in divList"
        :key="index"
        draggable="true"
        @dragstart="handleDragStart($event, item)"
        @dragenter="handleDragEnter($event, item)"
        @dragover.prevent="handleDragover($event, item)"
        @dragleave="dragLeave($event, item)"
        @drop="handleDrop($event, item)"
        @dragend="handleDragEnd($event, item)"
      >
        {{item.name}}
        <i class="el-icon-close delete-icon" v-show="edit" @click="delItem(item)"></i>
      </div>
    </div>
    <div class="text-right">
      <i class="el-icon-menu ml-1 font-size-5 cursor-p" @click="setOftenDialog = true"></i>
    </div>

    <!-- 设置常用导航 -->
    <el-dialog :visible.sync="setOftenDialog" width="900px">
      <div class="title">常用地址<i class="prompt-text">你可以将常用的地址添加到首页首栏</i></div>
      <div class="d-flex flex-wrap">
        <div class="text-center p-3 often-box" v-for="t in divList" :key="t.id">
          <div><i class="el-icon-platform-eleme often-icon"></i></div>
          <div class="font-size-1">{{ t.name }}</div>
          <div class="del-often-icon cursor-p"><i class="el-icon-error"></i></div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="title">全部地址</div>
      <div class="d-flex flex-wrap">
        <div class="text-center p-3 often-box" v-for="t in divList" :key="t.id">
          <div><i class="el-icon-platform-eleme often-icon"></i></div>
          <div class="font-size-1">{{ t.name }}</div>
          <div class="add-often-icon cursor-p"><i class="el-icon-circle-plus"></i></div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setOftenDialog = false" size="mini">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      divList: [
        { id: 1, name: "百度", icon: "", url: "" },
        { id: 2, name: "google", icon: "", url: "" },
        { id: 3, name: "知乎", icon: "", url: "" },
        { id: 4, name: "简书", icon: "", url: "" },
        { id: 5, name: "github", icon: "", url: "" },
        { id: 6, name: "csdn", icon: "", url: "" },
        { id: 7, name: "掘金", icon: "", url: "" },
        { id: 8, name: "oschina", icon: "", url: "" },
        { id: 9, name: "思否", icon: "", url: "" },
        { id: 10, name: "必应", icon: "", url: "" },
        { id: 11, name: "UI中国", icon: "", url: "" },
        { id: 12, name: "千图网", icon: "", url: "" },
        { id: 13, name: "小众网", icon: "", url: "" }
      ],
      dragging: null,
      curEl: "",
      edit: false,
      setOftenDialog: true
    };
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
      const newItems = [...this.divList];
      const from = newItems.indexOf(this.dragging);
      const to = newItems.indexOf(item);
      newItems[from] = item;
      newItems[to] = this.dragging;
      this.divList = newItems;
    },
    // 完成元素拖动后触发
    handleDragEnd() {
      this.dragging = null;
    },
    delItem(item) {
      console.log("删除", item);
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
.often-icon{
  font-size: 25px;
  color: #9abdf2;
}
.often-box{
  position: relative;
}
.often-box:hover{
  background: #f5f7faba;
}
.del-often-icon, .add-often-icon{
  position: absolute;
  top: 0;
  right: 0;
  color: #ccc;
}
.del-often-icon:hover{
  color: #fb7e13;
}
.add-often-icon{
  color: #9abdf2;
}
.add-often-icon:hover{
  color: #06f7b5;
}
.title{
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 16px;
}
.prompt-text{
  font-size: 10px;
  font-style: normal;
  margin-left: 6px;
  color: #9f9f9f;
}
</style>