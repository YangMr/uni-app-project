<template>
	<view class="index-container">
		
	</view>
</template>

<script>
	import {IndexModel} from "../../models/index.js";
	const indexModel = new IndexModel();
	export default {
		methods: {
		
		},
		onLoad(){
			indexModel.getPostClass().then(res=>{
				console.log(res)
			})
		}
	}
</script>

<style>
</style>
