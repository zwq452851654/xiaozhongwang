<template>
  <div>
    <!-- <div class="color-b8c4ce mb-1">输入文字内容进行翻译</div> -->
    <div class="d-flex align-items-center mb-2">
      <el-select v-model="formValue" placeholder="请选择" size="mini" style="width: 110px;">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <div class="ml-2 mr-2"><i class="el-icon-right"></i></div>
      <el-select v-model="toValue" placeholder="请选择" size="mini" style="width: 120px;">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.value == 'auto'">
        </el-option>
      </el-select>
      <el-button class="ml-3" type="primary" size="mini" @click="translate()">翻 译</el-button>
    </div>
    <el-input type="textarea" rows="5" clearable v-model="fanyi_value" @keyup.enter.native="translate()"></el-input>
    <div class="text-center font-size-4"><i class="el-icon-caret-bottom"></i></div>
    <el-input type="textarea" rows="5" clearable v-model="translateValue.dst"></el-input>
    <!-- <div class="w-100 bg-light border p" style="min-height: 100px;">{{ translateValue.dst }}</div> -->
    
  </div>
</template>

<script>
  import service from './service.js'
  export default {
    data() {
      return {
        fanyi_value: "",
        formValue: "auto",
        toValue: "zh",
        options: [{
            value: 'auto',
            label: '自动检测'
          },
          {
            value: 'zh',
            label: '中文'
          },
          {
            value: 'en',
            label: '英文'
          }
        ],
        translateValue: {},
        timer: null
      }
    },
    methods: {
      fnThrottle(method, duration){
        var that = this;
        return function(){
          if(!that.timer){
            that.timer = setTimeout(function(){
              method();
              clearTimeout(that.timer);
              that.timer = null;
            },duration)
          }
        }
      },
      changeInput(v){
        if(v){
          this.fnThrottle(this.translate, 1000)();
        }
      },
      translate() {
        service.fanyi({
          from: this.formValue,
          to: this.toValue,
          q: this.fanyi_value
        }).then(res =>{
          let data = res.data;
          if(data.code){
            this.translateValue = data.data[0] || {};
          }else{
            this.$message({ type: "warning", message: data.msg })
          }
        })
      }
    }
  }
</script>

<style>
</style>
