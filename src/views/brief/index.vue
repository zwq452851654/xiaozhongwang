<template>
  <div class="content">
    <div class="box-card bg">
      <el-container>
        <el-aside style="width: 300px;" class="border-right">
          <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-link"></i>
              <span slot="title">导航管理</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-lock"></i>
              <span slot="title">权限管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-form :model="queryForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="审核状态">
              <el-select v-model="queryForm.value" size="mini">
                <el-option label="未审核" value="0"></el-option>
                <el-option label="拒绝" value="1"></el-option>
                <el-option label="通过" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-table :data="tableData" border style="width: 100%" size="small">
            <el-table-column prop="name"  label="名称" align="center"></el-table-column>
            <el-table-column prop="icon" label="图标" align="center"></el-table-column>
            <el-table-column prop="url" label="链接" align="center"></el-table-column>
            <el-table-column prop="parentName" label="一级名称" align="center"></el-table-column>
            <el-table-column prop="childName" label="二级名称" align="center"></el-table-column>
            <el-table-column prop="other" label="其他" align="center"></el-table-column>
            <el-table-column prop="state" label="状态" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button size="mini" @click="sh_handle(scope.row)">审核</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
      
      <!-- 审核弹窗 -->
      <el-dialog
        title="导航审核"
        :visible.sync="sh_dialog"
        width="400px">
        <el-form label-width="80px" :model="navForm">
          <el-form-item label="名称">
            <el-input v-model="navForm.name" size="mini" disabled></el-input>
          </el-form-item>
          <el-form-item label="图标">
            <el-input v-model="navForm.icon" size="mini" disabled></el-input>
          </el-form-item>
          <el-form-item label="链接">
            <el-input v-model="navForm.url" size="mini" disabled></el-input>
          </el-form-item>
          <el-form-item label="导航类型">
            <el-input v-model="navForm.dhlx" size="mini" disabled></el-input>
          </el-form-item>
          <el-form-item label="审核意见">
            <el-input v-model="navForm.content" size="mini"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" @click="sh_dialog = false">关 闭</el-button>
          <el-button size="mini" type="warning" @click="sh_dialog = false">拒 绝</el-button>
          <el-button size="mini" type="primary" @click="tg_handle()">通 过</el-button>
        </span>
      </el-dialog>
      
    </div>
  </div>
</template>

<script>
  import service from './service.js'
  export default {
    data() {
      return {
        queryForm: {},
        tableData: [],
        sh_dialog: false,
        navForm: {}
      }
    },
    mounted() {
      this.queryYlbc();
    },
    methods:{
      queryYlbc(){
        service.queryYlbc().then(res =>{
          let data = res.data;
          if(data.code){
            this.tableData = data.data;
          }
        })
      },
      // 审核
      sh_handle(row){
        this.navForm = row;
        this.navForm['dhlx'] = row.parentName +'/'+ row.childName;
        this.sh_dialog = true;
      },
      // 通过
      tg_handle(){
        service.sendMsg({
          type: 0,
          title: '遗漏补充通过审核', 
          descriptio: `"${this.navForm.name}"遗漏补充提交`, 
          content: this.navForm.content, 
          read_user: this.navForm.userId, 
          relation: this.navForm.relation
        }).then(res =>{
          
        })
      }
    }
  }
</script>

<style>
</style>
