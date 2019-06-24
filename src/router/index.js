import Vue from 'vue'
import Router from 'vue-router'
import Blogheader from '@/components/pages/Blogheader'
import me from '@/components/pages/me'
import file from '@/components/pages/file'
import classify from '@/components/pages/classify'
import label from '@/components/pages/label'
import message from '@/components/pages/message'
import tool from '@/components/pages/tool'
import links from '@/components/pages/links'
import Home from '@/components/pages/Home'
import article from '@/components/pages/article'
import login from '@/components/pages/login'
import houtai from '@/components/admin/houtai'
import addarticle from '@/components/admin/addarticle'
import articlelist from '@/components/admin/articlelist'
import messagelist from '@/components/admin/messagelist'
import classifylist from '@/components/pages/classifylist'
import userlist from '@/components/admin/userlist'

Vue.use(Router)

export default new Router({
	mode:'history',
	scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        } else {
            return {x: 0, y: 0}
        }
    },
  routes: [
    {
    	path: '/',
    	name: 'home',
//  	redirect: 'blog',
    	component:Blogheader,
    	children: [
    			{path: 'blog', name: 'blog', component: Home, meta: {title: '首页'}},
                {path: 'about', name: 'about', component: me, meta: {title: '关于我'}},
                {path: 'file', name: 'file', component: file, meta: {title: '归档'}},
                {path: 'classify', name: 'classify', component: classify, meta: {title: '分类页'}},
                {path: 'label', name: 'label', component: label, meta: {title: '标签页'}},
                {path: 'message', name: 'message', component: message, meta: {title: '留言'}},
                {path: 'tool', name: 'tool', component: tool, meta: {title: '工具'}},
                {path: 'links', name: 'links', component: links, meta: {title: '友链'}}

            ]
    },
    {
    	path:'/article',
    	name:'article',
//  	redirect: 'blog',
    	component:article,
    },
    {
    	path:'/login',
    	name:'login',
//  	redirect: 'blog',
    	component:login,
    },
    {
    	path:'/admin',
    	name:'admin',
//  	redirect: 'blog',
    	component:houtai,
    },
    {
    	path:'/addarticle',
    	name:'addarticle',
//  	redirect: 'blog',
    	component:addarticle,
    },
    {
    	path:'/articlelist',
    	name:'articlelist',
//  	redirect: 'blog',
    	component:articlelist,
    },
    {
    	path:'/messagelist',
    	name:'messagelist',
//  	redirect: 'blog',
    	component:messagelist,
    },
    {
    	path:'/classifylist',
    	name:'classifylist',
//  	redirect: 'blog',
    	component:classifylist,
    },
    {
    	path:'/userlist',
    	name:'userlist',
//  	redirect: 'blog',
    	component:userlist,
    },
  ]
})
