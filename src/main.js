// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由
import router from './router'
// 公共css和js 
import './common/js/reset.js' 
import './common/css/reset.css'
// 导入axios
import axios from 'axios'
Vue.prototype.$axios = axios 

import {mutations } from './store'
import '../static/icon_font/iconfont.css'
// vant 
import 'vant/lib/index.css';  
import { Lazyload ,Dialog,PullRefresh ,Notify,Field,DropdownMenu, DropdownItem, Popup ,Swipe,SwipeItem, Tab,Tabs,Icon,Button,CellGroup,Loading,ImagePreview} from 'vant'; 
Vue.use(Lazyload).use(Dialog).use(PullRefresh).use(Notify).use(Field).use(DropdownMenu).use(DropdownItem).use(Popup).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(ImagePreview);
Vue.use(Icon).use(Button).use(CellGroup).use(Loading)
import { Toast } from 'vant'; 
Vue.prototype.$Toast = Toast 
import Vue2Editor from "vue2-editor";  // 富文本
Vue.use(Vue2Editor);   // 富文本 
// axios.defaults.baseURL = "http://192.168.0.37:8084"//37
// axios.defaults.baseURL = "http://192.168.0.108:8084" //本地地址
// axios.defaults.baseURL = "http://192.168.0.114:8084" //本地地址
axios.defaults.baseURL = 'https://refer.skyclound.com/'//服务器地址
Vue.config.productionTip = false

router.beforeEach((to,from,next) => { 
    if(to.path == '/') { 
      mutations.CHANGE_HOME_ICOM(false)
        var title = document.querySelector("title"); 
        title.innerHTML = "Flower-Floral-Art-floriculture-https://enflower.info/"
    }
    else {
      mutations.CHANGE_HOME_ICOM(true)
    }
    next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
