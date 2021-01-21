<template>
	<div class="upload-file">
		<el-upload 
			ref="upload" 
			:multiple="multiple" 
			:limit="limit"
			action="/" 
			:on-change="handleChange" 
			:on-remove="handleRemove"
			:on-exceed="handleExceed" 
			:file-list="fileList" 
			:show-file-list="showList"
			:http-request="uploadFile" 
			:auto-upload="false">
			<el-button slot="trigger" size="small" type="primary">{{btnText}}</el-button>
			<el-button style="margin-left: 133px;" size="small" type="success" @click="submitUpload">上传到服务器
			</el-button>
			<!-- <div slot="tip" class="el-upload__tip">选择要上传的文件进行上传</div> -->
		</el-upload>
		子组件: {{value}}
	</div>
</template>
<script>
	/**
	 * $emit name：
	 * success: 上传成功时触发
	 * error: 上传失败时触发
	 * cheng: 选择文件时触发
	 * dalete: 删除已选文件时触发
	*/
	export default {
		name: 'upload',
		model:{
			prop:"value",
			event: 'changeData' //自定义事件名
		},
		props:{
			multiple: { type: Boolean, default: true },
			limit: { type: Number, default: 5 },
			action: { type: String, default: "/xzwang/upload" },
			showList: { type: Boolean, default: true },
			btnText:{ type: String, default: "选择文件" },
			value: { type: Array, default: function(){ return [] } },
		},
		data() {
			return {
				fileData: "",
				fileList: []
			}
		},
		created: function () {
			
		},
		methods: {
			uploadFile(file) {
				
				this.fileData.append('files', file.file);
			},
			// 上传到服务器
			submitUpload() {
				// 上传成功后返回的文件信息赋值给哪个字段
				
				this.fileData = new FormData();
				this.$refs.upload.submit();
				let FileController = this.action;
				let xhr = new XMLHttpRequest();
				xhr.open("post", FileController, true);
				xhr.onload = ()=> {
					let data = JSON.parse(xhr.response)
					this.$emit('changeData', data)
				};
				xhr.send(this.fileData);
			},
			//移除
			handleRemove(file, fileList) {
				this.fileList = fileList;
				// return this.$confirm(`确定移除 ${ file.name }？`);
			},

			// 选取文件超过数量提示
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},

			//监控上传文件列表
			handleChange(file, fileList) {
				let existFile = fileList.slice(0, fileList.length - 1).find(f => f.name === file.name);
				if (existFile) {
					this.$message.error('当前文件已经存在!');
					fileList.pop();
				}
				this.fileList = fileList;
			},
		}
	}
</script>
