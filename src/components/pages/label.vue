<template>
	<div id="main">
		<div class="classify">
			<el-divider><p>目前共计{{classify_c}}个分类</p></el-divider>
		</div>
		<div class="fenlei">
<!--			{{item.classify}}-->
				xuekuihao(12)
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			classify_c:12,
		};
	}
}
</script>

<style scoped="scoped">
#main {
   position: absolute;
   width: 55%;
   height: 100%;
   left: 23.3%;
/*   background-color: #DDDDDD;*/
}
.classify{
	position: relative;
	text-align: center;
	top: 30px;
	margin-left:0 ;
}
.fenlei{
	position: relative;
	text-align: center;
	top: 100px;
}
</style>