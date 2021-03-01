<template>
  <div>
    <div class="text-right mb-3">
      <el-button type="success" size="mini" @click="addHandle()">新增标准项</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%" size="mini">
      <el-table-column type="index" label="序号" align="center"></el-table-column>
      <el-table-column prop="bh" label="编号" align="center"></el-table-column>
      <el-table-column prop="bzmc" label="类型名称" align="center"></el-table-column>
      <el-table-column prop="bzbh" label="类型编号" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="editRow(scope.row)">修改</el-button>
          <el-button size="mini" type="warning" @click="delHandle(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增、修改 -->
    <el-dialog :title="title" :visible.sync="editVisible" width="400px">
      <el-form label-width="80px" :model="editForm">
        <el-form-item label="类型名称">
          <el-input v-model="editForm.bzmc" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="类型编号">
          <el-input v-model="editForm.bzbh" size="mini"></el-input>
          <span class="font-size-1 text-warning">注：谨慎修改，标准项为全局服务</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="editVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="saveHandle()">保 存</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import service from './service.js'
  export default {
    data() {
      return {
        tableData: [],
        editVisible: false,
        editForm: {},
        title: ""
      }
    },
    mounted() {
      this.queryWebType();
    },
    methods: {
      // 列表查询
      queryWebType() {
        service.queryWebType().then(res => {
          let data = res.data;
          if (data.code) {
            this.tableData = data.data;
          } else {
            this.$message({
              type: 'warning',
              message: data.msg
            });
          }
        })
      },
      // 点击新增按钮
      addHandle() {
        this.title = "新增";
        this.editVisible = true;
        this.editForm = {}
      },
      // 点击修改按钮
      editRow(row) {
        this.title = "修改";
        this.editForm = JSON.parse(JSON.stringify(row));
        this.editVisible = true;
      },
      // 新增、修改保存
      saveHandle() {
        service.editBzx({
          ...this.editForm
        }).then(res => {
          if (res.data.code) {
            this.queryWebType();
            this.editVisible = false;
            this.editForm = {};
          } else {
            this.$message({
              type: 'warning',
              message: data.msg
            });
          }
        })
      },
      // 删除
      delHandle(row) {
        this.$confirm(`此操作将删除类型名称：${row.bzmc}, 是否继续?`, '提示', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          service.delWebType({
            bh: row.bh
          }).then(res => {
            if (res.data.code) {
              this.queryWebType();
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            } else {
              this.$message({
                type: 'warning',
                message: res.data.msg
              });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style>
</style>
