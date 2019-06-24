<template>
	<div id="footer">
		<div id="footer_1">
			<ul>
				<li><p>Copyright @ 2019 Powered by Vue and node Designed by me </p></li>
				<li><router-link to="/login" id='router-login' style='color: #222222; text-decoration: none;'>登录/注册</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Blogfooter',
	}
</script>

<style>
#footer{
	position: relative;
	height: 180px;
	width: 182%;
	top: 100%;
	left: -43%;
	bottom: 0;
	background-color: #F5F5F5;
}
#footer_1{
	position: absolute;
	width: 55%;
	height: 100%;
    left: 23.3%;
}
#router-login:hover{
	background-color: #E1E1E1;
}
</style>