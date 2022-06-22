<template>
	<div>
		<button>按钮</button>
		<input type="text" />
		<el-date-picker v-model="value1" type="date" placeholder="选择日期">
		</el-date-picker>
		<el-row>
		  <el-button plain>朴素按钮</el-button>
		  <el-button type="primary" plain>主要按钮</el-button>
		  <el-button type="success" plain>成功按钮</el-button>
		  <el-button type="info" plain>信息按钮</el-button>
		  <el-button type="warning" plain>警告按钮</el-button>
		  <el-button type="danger" plain>危险按钮</el-button>
		</el-row>
	</div>
	
</template>

<script>
	export default {
		name: "App",
		
	}
</script>

<style>

</style>
