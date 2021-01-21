<template>
	<div>
		<upload v-model="form.value1"></upload>
		<upload v-model="form.value2"></upload>
		<div>父组件1：{{form.value1}}</div>
		<div>父组件2：{{form.value2}}</div>
		<el-button @click="save()">保存</el-button>
	</div>
</template>
<script>
	import upload from '../../components/upload.vue'
	export default {
		components:{
			upload
		},
		data() {
			return {
				form:{
					value1: []
				}
			}
		},
		methods: {
			
		}
	}
</script>
