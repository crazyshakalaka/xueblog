<template>
  <div id="home">
  	<Blogheader></Blogheader>
    <div id="main">
      <div id="article" v-for="(item,key) in articles" :key="key">
        <div id="article_title" @click="articleDetail(item.id )">
          {{item.title}}
        </div>
        <div id="article_info">
					<span id="article_date">
						发表于{{item.create_time| formatDate}}
					</span>
          <span id="fenge">&nbsp;</span>
          <span id="article_tag">
							分类于{{item.classify}}
					</span>
        </div>
        <div id="article_gist">
          {{item.decd}}
        </div>
        <div id="article_all">
          <router-link :to="{path:'/article',query:{ id:item.id }}" style='color: #222222; text-decoration: none;'>
          	阅读全文>>
          </router-link>
        </div>
        <div id="article_underline"></div>
      </div>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total" style='position: relative;margin-top:50px;margin-bottom: 50px;'>
        </el-pagination>
      </div>
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
  import {articleList} from "../../api/articlelist";
  import Blogfooter from './Blogfooter'
  import { formatDate } from '@/libs/formdate.js'
  import Blogheader from './Blogheader'
  export default {
    components: {
      Blogfooter,
      Blogheader
    },
    data() {
      return {
        articles: [],
        total:0,
        page:1,
        size:10,
      }
    },
		filters: {
		    formatDate(time) {
		    var date = new Date(time);
		    return formatDate(date, 'yyyy-MM-dd h:m:s');
		   }
		},
    methods:{
      init(){
      	let cl  = this.$route.query.classify
        articleList({page:this.page,size:this.size,classify:cl}).then(res =>{
          if (res.code === 0){
            let data = res.data
            this.articles = data.data
            this.total = data.total
          }
        })
      },
      handleSizeChange(size){
          this.size = size
        this.init()
      },
      handleCurrentChange(page){
        this.page = page
        this.init()
      },
      articleDetail(id){
					
      }
    },
    mounted() {
        this.init()
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    /*height: 100%;*/
  }

  #main {
  	top: 200px;
    position: absolute;
    width: 55%;
/*    height: 100%;*/
    left: 23.3%;
    /*    background-color: #DDDDDD;*/
  }

  #article {
    /*	position: absolute;*/
    height: 200px;
    width: 100%;
    /*	background-color: red;*/
    margin-top: 50px;
  }

  #article_title {
    font-size: 1.5rem;
    height: 40px;
  }

  /*#article_title:hover{
      font-size: 1.5rem;
      border-bottom: 1px solid;
  }*/
  #article_info {
    height: 30px;
    width: 100%;
    /*	background-color: bisque;*/
    float: left;
    font-size: 0.3rem;
    line-height: 30px;
  }

  #article_date {
    color: #999999;
  }

  #fenge {
    width: 2px;
    background-color: #999999;
  }

  #article_tag {
    color: #999999;
  }

  #article_all {
    position: relative;
    top: 60px;
    left: 85%;
    display: inline-block;
  }

  #article_underline {
    position: relative;
    top: 70px;
    border-bottom: 1px solid #ccc;
  }

  #article_all:hover {
    text-decoration: underline;
  }
  #footer{
	position: relative;
	height: 180px;
	width: 182%;
/*	top: 100%;*/
	left: -43%;
	bottom: -100px;
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
