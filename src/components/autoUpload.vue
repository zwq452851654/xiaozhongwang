<template>
	<div class="upload-file">
		<el-upload 
			ref="upload" 
			:multiple="multiple" 
			:limit="limit"
			:headers="{'path': 'icon'}"
			:action="action" 
			:on-change="handleChange" 
			:on-remove="handleRemove"
			:on-exceed="handleExceed" 
			:on-success="success"
			:before-upload="beforeUpload"
			:file-list="fileList" 
			:auto-upload="false"
			:show-file-list="showList">
			<slot slot="trigger">
				<el-button size="mini" type="primary">{{btnText}}</el-button>
			</slot>
		</el-upload>
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
			action: { type: String, default: "/xzwang/autoUpload" },
			multiple: { type: Boolean, default: true },
			limit: { type: Number, default: 3 },
			showList: { type: Boolean, default: false },
			btnText:{ type: String, default: "选择文件" },
			value: { default: "" }
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
			beforeUpload(file){},
			success(response, file, fileList){
				this.$emit('changeData', fileList)
				this.$emit('success', fileList)
			},
			//移除
			handleRemove(file, fileList) {
				this.fileList = fileList;
			},
			// 选取文件超过数量提示
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			//监控上传文件列表
			handleChange(file, fileList) {
				if(file.status=='ready'){
					let existFile = fileList.slice(0, fileList.length - 1).find(f => f.name === file.name);
					if (existFile) {
						this.$message({ type: "warning", message: file.name + "已存在，未再次上传" });
						this.$refs.upload.abort();
						fileList.pop();
					}else{
						this.$refs.upload.submit();
					}
				}
			},
		}
	}
</script>
