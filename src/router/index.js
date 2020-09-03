import Vue from "vue";
import VueRouter from "vue-router";
// 默认导入目录下的 index.vue 文件，等价于 ./views/login/index.vue
import Index from "../views/index"
import Layout from "../components/Layout"
Vue.use(VueRouter);

const routes = [
  {
    path : "/",
    name : "index",
    component : Index
  },
  {
    path : "/layout",
    component : Layout
  }
 
];

const router = new VueRouter({
  routes
});

export default router;
