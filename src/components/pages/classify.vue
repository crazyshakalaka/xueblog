<template>
	<div id="main">
		<div class="classify">
			<el-divider><p>目前共计{{articles.length}}个分类</p></el-divider>
		</div>
		<div class="fenlei" v-for="article in articles">
			<span class="clas" @click="articleclassify(article.classify)">{{article.classify}}</span><span class="count">({{article.count}})</span>
		</div>
	</div>
</template>

<script>
import {articleclassify} from "../../api/articlelist"
export default {
	data(){
		return{
			articles:[],
			classify_c:'',
			length:'',
		};
	},
	methods:{
		articleclassify(classify){
			this.$router.push({
				query:{classify:classify},
                name: 'classifylist'
              })
		}
	},
  mounted() {
    articleclassify().then(res => {
      this.articles = res.data
    })
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
	float: left;
	padding-left: 30px;
	top: 50px;
	padding-top: 30px;
}
.clas{
	color: #6A625D;
	cursor: pointer;
	text-decoration: underline;
	font-weight: bold;
}
.clas:hover{
	color: #222222;
	
}
 
.count{
	color: #bbbbbb;
}
</style>
