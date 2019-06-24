<template>
	<div id="big">
		<header id='header_back'>
			<div id="header_in">
				<h2 id="header_in_1">
					{{name}}
				</h2>
				<ul id="herder_in_2">
						<router-link to="/blog"><span>首页</span></router-link>
						<router-link to="/about"><span>关于我</span></router-link>
						<router-link to="/file"><span>归档</span></router-link>
						<router-link to="classify"><span>分类页</span></router-link>
						<router-link to="label"><span>标签页</span></router-link>
						<router-link to="message"><span>留言</span></router-link>
						<router-link to="tool"><span>工具</span></router-link>
						<router-link to="links"><span>友链</span></router-link>
				</ul>
				
			</div>
			<i class="el-icon-search"></i>
			<input 
				type="search" 
				autocomplete="off" 
				name="baike-search" 
				id="input-search">
				
		</header>
		<div id="router-v">
			<router-view></router-view>					
		</div>
		<!--<el-button type='primary' @click='getArticle'>调用后台接口</el-button>
		<el-input v-model='inpContent'></el-input>-->
	</div>
</template>

<script>
	export default{
		name:'blog',
		data(){
			return{
			name:'薛奎浩',
		};
		},
 }
//	export default{
//		name:'blog',
//		data(){
//			return{
//				inpContent:'Blog'
//			}
//		},
//	methods:{
//		getArticle(){
//			this.$http.get('/api/getArticle')
//			.then((res) => {
//				console.log('res',res);
//				this.inpContent = res.data.data;
//			})
//		}
//	}
//}
</script>


<style scoped="scoped">
#big{
	margin: 0;
	padding: 0;
}
#header_back{
	background-color: #f5f5f5;
	position: absolute;
	width: 100%;
	height: 20%;
}
#header_in{
	position: absolute;
		
	width: 60%;
	height: 40%;
	top: 30%;
	left: 20%;
}
#header_in_1{
	position: absolute;
	top: -25%;
	display: block;
	left: 6%;
}
#herder_in_2{
	list-style-type: none;
	margin-left: 13%;
	top: 2%;
}
#herder_in_2 span{
	margin-left: 4%;
	float:left;
	color: #222222;
	font-style: "微软雅黑";
	font-size: 0.8rem;
	text-decoration: none;
	top:0;
}
#router-v{
	position: absolute;
	width: 100%;
	height: 60%;
	top:20% ;
}
#input-search{
	position: absolute;
	display : fixed;
	right: 21.8%;
	float:right;
	top: 43%;
	background-color: #f5f5f5;
	border:none;
	outline:none;
	border-bottom-color: rgb(153, 153, 153);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: 121px;
}
i{
	position: absolute;
	display : fixed;
	right: 30.8%;
	float:right;
	top: 44%;
	border-bottom-color: rgb(153, 153, 153);
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
</style>