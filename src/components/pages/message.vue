<template>
	<div id="main">
	<el-collapse accordion>
  <el-collapse-item>
    <template slot="title">
      2019<i class="header-icon el-icon-info"></i>
    </template>
    <div>个人博客</div>
    <div>本留言功能实现与2019年4-5月；</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback">
    <div>留言反馈：给我个人博客做一些反馈；</div>
    <div>页面反馈：</div>
  </el-collapse-item>
</el-collapse>
	<h4>已有{{comments.length}}条评论:</h4>
	<el-divider></el-divider>
	<div class="pinglun" v-for="comment in comments">
	<div class="comment-item">
          <img src="../../../static/photo/touxiang.jpg" alt="">
          <div class="comment-text">
            <p class="comment-author">{{comment.username}}</p>
            <p class="comment-time">{{comment.time|formatDate}}</p>
          </div>
    </div>
	    <div id="pinglu_">
	        <p class="comment-content">{{comment.review}}</p>
	    	<p class="huifu">回复</p>
	    </div>
	</div>
	<div class="pinglunqu">
	<h4>评论区:</h4>
	<el-divider></el-divider>
	<el-input
	  type="textarea"
	  :autosize="{ minRows: 8, maxRows: 12}"
	  placeholder="请输入你的评论"
	  v-model="review" name='review'>
	</el-input>
	<div style="margin: 10px 0;"></div>
	<el-input
	  type="text"
	  placeholder="昵称"
	  v-model="username"
	  maxlength="10"
	  show-word-limit
	  name='username'
	  style='width: 50%;'
	>
	</el-input>
	 <el-button type="info" plain @click="MessageIn">提交评论</el-button>
	</div>
	</div>
</template>

<script>
import {Messagein} from "../../api/articlelist";
import {Comment} from "../../api/articlelist";
import { formatDate } from '@/libs/formdate.js'
export default {
  data() {
    return {
      username: '',
      review:'',
      comments:[],
    }
  },
  filters: {
		    formatDate(time) {
		    var date = new Date(time);
		    return formatDate(date, 'yyyy-MM-dd h:m:s');
		   }
		},
  methods: {
    init(){
      Comment().then(res => {
        this.comments = res.data
        console.log(res)
      })
    },
  	MessageIn(){
  		Messagein({
  			username:this.username,
  			review:this.review
  		}).then(res => {
			if(res.code === 0){
				this.$notify.success('评论成功')
        this.init()
			}else{
				this.$notify.error(res.msg)
			}
			console.log(res)
  		})
  	}
  },
created(){
	this.init()
}

}
</script>

<style scoped="scoped">
#main {
   position: absolute;
   width: 55%;
   height: 170%;
   left: 23.3%;
/*   background-color: #DDDDDD;*/
}
img{
	width: 40px;
	height: 40px;
	float: left;
}
.comment-text .comment-author{
	font-size: 15px;
	font-weight: 1000;
}
.comment-text .comment-time{
	font-size: 10px;
	margin-top: -10px;
	font-weight: 700;
}
.pinglun{
	width: 100%;
	height: 90px;
}
.huifu{
	cursor:pointer;
	float: right;
	margin-top: -31px;
}
.huifu:hover{
	cursor:pointer;
	font-weight: 1000;
}
.pinglunqu{
	margin-bottom: 100px;
}
</style>
