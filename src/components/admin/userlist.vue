<template>
	<div id="admin">
  			<el-header style='height: 13%;'>
  			<i class="el-icon-star-on"></i>
  			<i id="xue" style="font-size: 20px;">薛奎浩</i>
  			<i class="el-icon-star-on"></i>
  			<el-input
   				size="mini"
    			placeholder="请输入内容"
    			suffix-icon="el-icon-date"
    			:disabled="true"
    			style='position: relative;
    			margin-left: 400px;
    			width: 200px;'>
  			</el-input>
             <el-dropdown size="mini" split-button type="primary" style='position: relative;
    			left:240px;'>
                	薛奎浩先生
			  <el-dropdown-menu slot="dropdown" >
			    <el-dropdown-item><span @click="logOut">登出</span></el-dropdown-item>
			    <el-dropdown-item>1</el-dropdown-item>
			    <el-dropdown-item>2</el-dropdown-item>
			    <el-dropdown-item>3</el-dropdown-item>
			    <el-dropdown-item>4</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
			</el-header>
  			<div id="main_1">
  			<el-container>
  				<el-aside id="aside" style='width: 250px;'>
				  <el-col >
				    <el-menu
				      :default-active="$route.path"
				      class="el-menu-vertical-demo"
				      router>
				      <el-submenu index="1">
				        <template slot="title">
				          <i class="el-icon-location" style="color: #3C97BF;"></i>
				          <span>文章管理</span>
				        </template>
				        <el-menu-item-group>
				          <template slot="title">分组一</template>
				          <el-menu-item index="addarticle">添加文章</el-menu-item>
				          <el-menu-item index="articlelist">文章列表</el-menu-item>
				        </el-menu-item-group>
				        <el-menu-item-group title="分组2">
				          <el-menu-item index="1-3">选项3</el-menu-item>
				        </el-menu-item-group>
				        <el-submenu index="1-4">
				          <template slot="title">选项4</template>
				          <el-menu-item index="1-4-1">选项1</el-menu-item>
				        </el-submenu>
				      </el-submenu>
				      <el-menu-item index="messagelist">
				        <i class="el-icon-menu" style="color: #3C97BF;"></i>
				        <span slot="title">留言管理</span>
				      </el-menu-item>
				      <el-menu-item index="3" disabled>
				        <i class="el-icon-document"></i>
				        <span slot="title">关于我</span>
				      </el-menu-item>
				      <el-menu-item index="userlist">
				        <i class="el-icon-setting" style="color: #3C97BF;"></i>
				        <span slot="title">用户管理</span>
				      </el-menu-item>
				    </el-menu>
				  </el-col>
  				</el-aside>
  				<el-main id="main">
  					<h4>用户列表：'1' 代表是管理员，'0' 代表不是管理员</h4>
  					<el-table
				    :data="tableData"
				    border
				    style="width: 100%">
				    <el-table-column
				      fixed
				      prop="username"
				      label="用户名"
				      width="200">
				    </el-table-column>
				    <el-table-column
				      prop="password"
				      label="密码"
				      width="200">
				    </el-table-column>
				    <el-table-column
				      prop="type"
				      label="是否为管理员"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="200">
				      <template slot-scope="scope">
				        <el-button @click="dlt(scope.row.id)" type="text" size="small">注销用户</el-button>
				        <el-button @click="alter(scope.row.id)" type="text" size="small">用户权限</el-button>
				      </template>
				    </el-table-column>
				  </el-table>
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
  				</el-main>
				</el-container>
  			</div>
	</div>
</template>

<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {islogin} from "../../api/admin";
import {logOut} from "../../api/login";
import {userlist,deleteuser} from "../../api/houtai";
export default {
  name: '',
  data() {
    return {
      input: '',
      total:0,
      page:1,
      size:10,
      tableData: []
    };
  },
  methods: {
  	dlt(id) {
        this.$confirm('此操作将永久注销该用户, 是否继续?', '提示', {
          confirmButtonText: '注销',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          deleteuser({
            id: id
          }).then((res) => {
            if (res.code === 0) {
              this.init()
              this.$notify.success(res.msg)
            } else {
              this.$notify.error(res.msg)
            }
          })
        }).catch(() => {
                });  //取消出错解决
      },
//   alter(id) {
//   	this.$confirm('此操作将永久注销该用户, 是否继续?', '提示', {
//        confirmButtonText: '注销',
//        cancelButtonText: '取消',
//        type: 'warning',
//        center: true
//        }).then(() => {
//   }
  	init(){
        userlist({page:this.page,size:this.size}).then(res =>{
          if (res.code === 0){
            let data = res.data
            this.tableData = data.data
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
     logOut() {
        logOut().then(res => {
          console.log(res)
          if (res.code === 0) {
            this.$notify.success(res.msg)
            this.$router.push({
              name: 'blog'
            })
          } else {
            this.$notify.error(res.msg)
          }
        })
      },
  },
  created() {
    islogin().then(res => {
      if (res.code !== 0){
        this.$notify.error(res.msg)
        this.$router.push({
          name:'login'
        })
      }
    })
    },
    mounted() {
        this.init()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#admin{
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;	
}
.el-header {
    background-color: #FFFFFF;
    color: #333;
    position: relative;
    width: 80%;
	left: 10%;
    line-height: 80px;
    /*border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)*/
   border-bottom: 1px solid #DCDFE6;
 }
 #main_1 {
/*    background-color: red;*/
    color: #333;
    position: relative;
    width: 80%;
	left: 10%;
	height: 87%;
}
#aside{
/*	background-color: #3C97BF;*/
	width: 200px;
	position: relative;
	height: 544px;
}
#main{
	background-color: #F5F5F5;
	border-left:1px solid #DCDFE6 ;
}
.block{
	text-align: center;
	margin-top: -50px;
}
</style>
