<template>
	<div>
		<autoUpload v-model="form.file"></autoUpload>
		{{form.file}}
	</div>
</template>
<script>
	import autoUpload from '../../components/autoUpload.vue'
	export default {
		components:{
			autoUpload
		},
		data() {
			return {
				form: {
					file: ""
				}
			}
		},
		methods: {
		
		}
	}
</script>
