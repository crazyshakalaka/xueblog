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
        <el-dropdown-menu slot="dropdown">
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
          <el-col>
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
          <h4>文章列表：</h4>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              fixed
              prop="create_time"
              :formatter="dateFormat"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="title"
              label="文章标题"
              width="300">
            </el-table-column>
            <el-table-column
              prop="classify"
              label="文章标签"
              width="120">
            </el-table-column>
            <el-table-column
              prop="decd"
              label="简介"
              width="300">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="160">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                <el-button slot="reference" type="text" @click="dlt(scope.row.id)" size="small">删除</el-button>
                <el-button type="text" size="small">查看评论</el-button>
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
    <el-dialog
      title="提示"
      width="600"
      :visible.sync="dialogVisible">
        <h4>分类标签:</h4>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入文章分类"
          v-model="editData.classify"
          name='classify'>
        </el-input>
        <h4>文章标题：</h4>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入文章标题"
          v-model="editData.title"
          name='title'>
        </el-input>
        <h4>文章简介：</h4>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入文章简介"
          v-model="editData.decd"
          name='decd'>
        </el-input>
        <h4>文章内容：</h4>
        <el-input
          type="textarea"
          :autosize="{ minRows: 10, maxRows: 16}"
          placeholder="请输入文章内容"
          v-model="editData.content"
          name='content'>
        </el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleEdit">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/index.css'
  import {islogin} from "../../api/admin";
  import {logOut} from "../../api/login";
  import {articleList,updateArticle} from "../../api/articlelist";
  import {deletearticle} from "../../api/houtai";
  import moment from 'moment'

  export default {
    name: '',
    data() {
      return {
        dialogVisible:false,
//      popoverModal:false,
        input: '',
        total: 0,
        page: 1,
        size: 10,
        tableData: [],
        editData:{}
      };
    },
    methods: {
      handleEdit(){
        updateArticle(this.editData).then(res => {
          console.log(res)
          if (res.code === 0){
            this.dialogVisible = false
            this.init()
            this.$notify.success(res.msg)
          }else{
          	this.$notify.error(res.msg)
          }
        })
      },
      handleClick(row){
        this.editData = row
        this.dialogVisible = true
      },
      dateFormat: function (row, column) {
        let date = row[column.property];
        if (date === undefined) {
          return ''
        }
        return moment(date).format("YYYY-MM-DD HH:mm:ss")
      },
      dlt(id) {
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          deletearticle({
            id: id
          }).then((res) => {
//          this.popoverModal = false
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
      init() {
        articleList({page: this.page, size: this.size}).then(res => {
          if (res.code === 0) {
            let data = res.data
            this.tableData = data.data
            this.total = data.total
          }
        })
      },
      handleSizeChange(size) {
        this.size = size
        this.init()
      },
      handleCurrentChange(page) {
        this.page = page
        this.init()
      },
    },
    created() {
      islogin().then(res => {
        if (res.code !== 0) {
          this.$notify.error(res.msg)
          this.$router.push({
            name: 'login'
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
  #admin {
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

  #aside {
    /*	background-color: #3C97BF;*/
    width: 200px;
    position: relative;
    height: 544px;
  }

  #main {
    background-color: #EEEEEE;
    border-left: 1px solid #DCDFE6;
    height: 544px;
  }

  .block {
    text-align: center;
    margin-top: -50px;
  }
</style>
