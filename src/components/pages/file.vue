<template>
	<div id="main">
    <div class="block">
  <el-timeline>
    <el-timeline-item  placement="top" v-for='(article,key) in articles' :key="key">
    <router-link :to="{path:'/article',query:{ id:article.id }}" style='text-decoration: none;'>
      <el-card>
        <h4>{{article.title}}</h4>
        <p>{{article.author}} 提交于 {{article.create_time| formatDate}}</p>
      </el-card>
      </router-link>
    </el-timeline-item>
  </el-timeline>
</div>
<div class="block1">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total" style='position: relative;margin-top:50px;margin-bottom: 50px;left: 170px;'>
        </el-pagination>
      </div>
	</div>
</template>

<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {articleList} from "../../api/articlelist";
import { formatDate } from '@/libs/formdate.js'
export default {
	data(){
		return{
			articles:[],
			total:0,
        	page:1,
        	size:10,
		};
	},
	filters: {
		    formatDate(time) {
		    var date = new Date(time);
		    return formatDate(date, 'yyyy-MM-dd h:m:s');
		   }
	},
	methods:{
      init(){
        articleList({page:this.page,size:this.size}).then(res =>{
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

<style scoped="scoped">
#main {
   position: absolute;
   width: 55%;
   height: 100%;
   left: 23.3%;
/*   background-color: #DDDDDD;*/
}
.block{
	margin-top: 50px;
}
.el-card:hover{
	cursor:pointer;
	box-shadow: 6px 4px 10px #E1E1E1 inset;
}
</style>