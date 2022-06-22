<template>
	<div class="container">

		<category title="美食">
			<img slot="test1" src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/cn/mkt/pdp/wearables-new/img/watch-gt-runner-small.jpg" />
			<a slot="test2" href="test2">hhhhh</a>
		</category>


		<category title="游戏">
			<ul slot="test1">
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
		</category>
		
		
		<category title="电影">
			<ul slot="test1">
				<li v-for="(f,index) in films" :key="index">{{f}}</li>
			</ul>
		</category>
	</div>
</template>

<script>
	import category from './components/category.vue'
	export default {
		name: "App",
		components: {
			category
		},
		data() {
			return {
				foods: ["烧烤", "豆包"],
				games: ["dnf", "lol"],
				films: ["黑客帝国", "教父"]
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: space-around;
	}
</style>
