<template>
  <div id="article_1">
    <Blogheader></Blogheader>
    <div id="main">
      <div id="article_title">
        {{item.title}}
      </div>
      <div id="article_info">
					<span id="article_date">
						发表于：{{item.create_time| formatDate}}
					</span>
        <span id="fenge">&nbsp;</span>
        <span id="article_tag">
						分类于：{{item.classify}}
					</span>
      </div>
      <div id="article_" class="markdown-body" v-highlightB v-html="compiledMarkdown">
      </div>
      <div id="footer">
        <div id="footer_1">
          <ul>
            <li><p>Copyright @ 2019 Powered by Vue and node Designed by me </p></li>
            <li>
              <router-link to="/login" id='router-login' style='color: #222222; text-decoration: none;'>
                登录/注册
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
//import Blogfooter from './Blogfooter'
import Blogheader from './Blogheader'
import {articleDeil} from "../../api/articlelist";
import { formatDate } from '@/libs/formdate.js'
//import marked from 'marked'
import  hljs  from 'highlight.js'
import 'highlight.js/styles/default.css'
//import {marked }from '@/libs/marked.js'
import marked from 'marked'


  export default {
    name: 'article-gist',
    components: {
//    Blogfooter,
      Blogheader,
    },
    data() {
      return {
        item: {},
        compiledMarkdown:''
      }
    },
    filters: {
		    formatDate(time) {
		    var date = new Date(time);
		    return formatDate(date, 'yyyy-MM-dd h:m:s');
		   }
		},
    created() {
      let id = this.$route.query.id
      articleDeil({
        id: id
      }).then((res) => {
        if (res.code === 0){
        	this.item=res.data
          this.compiledMarkdown = marked(this.item.content || '',{sanitize: true}); 
        }
      })
   },

  }
</script>

<style scoped>
  #article_1 {
    width: 100%;
    /*height: 300%;*/
/*    top: 20%;*/
  }

  #main {
    position: absolute;
    width: 60%;
    height: 100%;
    left: 23.3%;
    top: 20%;
    /*    background-color: #DDDDDD;*/
  }

  #article_title {
    position: absolute;
    text-align: center;
    height: 30px;
    width: 100%;
    font-size: 1.5rem;
    top: 5%;
  }

  #article_info {
    position: absolute;
    text-align: center;
    height: 30px;
    width: 100%;
    /*	background-color: bisque;*/
    float: left;
    font-size: 0.3rem;
    line-height: 30px;
    margin-top: 9%;
  }

  #fenge {
    width: 2px;
    background-color: #999999;
  }

  #article_date {
    color: #999999;
  }

  #article_tag {
    color: #999999;
  }

  #article_ {
  	width: 100%;				
    margin-top: 18%;
  }

  #footer{
  position: relative;
	height: 180px;
	width: 182%;
	left: -43%;
	margin-top: 150px;
	background-color: #F5F5F5;
}
#footer_1{
	position: relative;
	width: 55%;
	height: 100%;
   left: 23.3%;
}

  #router-login:hover {
    background-color: #E1E1E1;
  }
</style>
