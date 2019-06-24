<template>
	<div id="xue">
	 <div id="about">
        <h3>关于我</h3>
        <ul class="about-wrap">
        <div id="a">
        </div>
            <li>以下信息更新于2019/4/18</li>
            <li><h3>自我剖析</h3></li>
            <img id='img_1' src="../../assets/图标.png"/>
            <p>
               	薛奎浩，暂时坐标宜宾，大四在读，前方路途不知多遥远，终有一方宁静始在心。
                            学的计算机，软件，都说工资高，但是别提有多累。做龙马，不做码农。毕竟我心
                            自由嘛。我面临的着时间的磨炼，岁月的摧残，也许是岁月在下一秒之前想考验我。
                            但是我会前行，我会在时间的下一秒来之前享受这一秒，怀念上一秒或者是上上秒。
            </p>
            <img id='img_2' src="../../assets/图标.png"/>
            <li><h3>关于爱好</h3></li>
            <p>
            	老实说，明明白白的谈爱好，有点羞于启齿，可能是我骨子里就不是一个革新派。
            	但是呢，我还是有必要小小的谈论谈论。在以前的我被我妈嘲笑过唱歌臭，我还记
            	那时候应该是初中，我还唱的是至上励合的“降临”，什么当爱情降临在大地之类的
            	歌词，现在的我是不敢苟同我以前的欣赏水平，现在都是听老歌多一点。比如那几位
            	张大佬，果然人随着年龄的越大越懂得了以前孩童时父母的那种所谓的情感。可能这
            	就是唱歌和听歌，越符合了自己的空虚和寂寞..哈哈谈了这么多，应该也明白了我唱
            	歌就是爱好之一。
            </p>
            <p>
            	其实我还有很多的想了解的东西，我暂且都把他们规定在爱好这一类。
            </p>
            <p>
            	不过我还是得说一下我这二十多年来最靠近我心灵的两种爱好之一，第一种也说了，
            	那就谈谈我的第二种吧，那就是我对书法的热衷，如果你有幸目睹我的草稿本，你一
            	定会看到我上面密密麻麻全是写的字，什么钢笔字啊，什么签字笔写的，软笔写的，
            	这也造就了我很喜欢钢笔的原因。所谓字如其人，就是想被人看到字的时候能够想象
            	出一个丰神如玉，谦谦君子的模型。哈哈，不错，够自恋。
            </p>
            <li><h3>关于本博客</h3></li>
            <img id='img_3' src="../../assets/图标.png"/>
            <p>
            	关于本博客，要写的东西真的很多，实在是太多了。简单点説就是一个毕业设计，做就完事
            	，想想很多时候，就是狠不下心来逼自己一把。唯有送上门来的时候。<br />
            	遇到的问题很多，就说几个折磨我的，什么路由，跨域，数据库这类的太多了。就先写到这儿吧。
            	总的来说，书读少了，写出来的话太通俗。
            </p>
        </ul>
         <div id="footer">
		<div id="footer_1">
			<ul>
				<li><p>Copyright @ 2019 Powered by Vue and node Designed by me </p></li>
				<li><router-link to="/login" id='router-login' style='color: #222222; text-decoration: none;'>登录/注册</router-link></li>
			</ul>
		</div>
	</div>
        </div>
       
    </div>
</template>

<script>
import Blogfooter from './Blogfooter'
export default {
components: {
        Blogfooter
    }
}
</script>

<style scoped>
#xue{
width: 100%;
height: 230%;
}
#about{
	position: absolute;
	width: 55%;
	height: 100%;
    left: 23.3%;
}
#about > h3{
    font-size: 1.3rem;
    padding: 1rem 2rem;
    border-bottom: 1px dashed #DDD;
}
#about > ul{
    text-align: left;
    line-height: 1.5rem;
    padding: 1rem 1.5rem;
    /*list-style-type: disc;*/
    font-size: 0.7rem;
}
#a{
	position: absolute;
	width: 7px;
	height: 30px;
	background-color: #6a625d;
}
#img_1{
	position: absolute;
	width: 12px;
	height: 24px;
	top: 26.5%;
}
#img_2{
	position: absolute;
	width: 12px;
	height: 24px;
	top: 52.5%;
}
#img_3{
	position: absolute;
	width: 12px;
	height: 24px;
	top: 105.1%;
}
@media screen and (min-width: 768px){ 
    #about {
        height: 100vh;
        text-align: center;
    }
    #about > h3{
        font-size: 1.3rem;
        padding: 1rem 2rem;
        border-bottom: 1px dashed #DDD;
    }
    #about .about-wrap li{
        list-style-type: none;
        text-align: left;
        line-height: 0.6rem;
        padding: 0.6rem 1.5rem;
        font-size: 1rem;
    }
}
#footer{
	position: relative;
	height: 180px;
	width: 182%;
/*	top: 100%;*/
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