import Vue from "vue";
import VueRouter from "vue-router";
// 默认导入目录下的 index.vue 文件，等价于 ./views/login/index.vue
import Login from "../views/login"
import Layout from "../components/Layout"
import Home from "../views/home"
import Member from "../views/member"
import Goods from "../views/goods"
import Supplier from "../views/supplier"
import Staff from "../views/staff"
import User from "../views/user"
Vue.use(VueRouter);

const routes = [
  {
    path : "/login",
    name : "login",
    component : Login
  },
  {
    path : "/",
    name : "layout",
    component : Layout,
    redirect : "/home",
    children : [
      {
        path : "/home",
        name : "home",
        meta : {
          title : "首页"
        },
        component : Home
      }
    ]
  },
  {
    path : "/member",
    name : "member",
    component : Layout,
    children : [
        {
          path : "/",
          component : Member,
          meta : {
            title : "会员管理"
          }
        }
    ]
  },
  {
    path : "/goods",
    name : "goods",
    component : Layout,
    children : [
        {
          path : "/",
          component : Goods,
          meta : {
            title : "商品管理"
          }

        }
    ]
  },
  {
    path : "/supplier",
    name : "supplier",
    component : Layout,
    children : [
        {
          path : "/",
          component : Supplier,
          meta : {
            title : "供应商管理"
          }
        }
    ]
  },
  {
    path : "/staff",
    name : "staff",
    component : Layout,
    children : [
        {
          path : "/",
          component : Staff,
          meta : {
            title : "员工功能"
          }
        }
    ]
  },
  {
    path : "/user",
    name : "user",
    component : Layout,
    children : [
        {
          path : "/",
          component : User,
          meta : {
            title : "用户列表"
          }
        }
    ]
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
