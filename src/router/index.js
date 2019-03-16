import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'
Vue.use(Router)
import Beauty from "@/components/common/beauty"
import Fqa from "@/components/common/fqa"
import Help from "@/components/common/help"
import Login from "@/components/common/login"
import LoginPhone from "@/components/common/loginPhone"
import OwnSephora from "@/components/common/ownsephora"
import PhoneSephora from "@/components/common/phoneSephora"
import Promised from "@/components/common/promise"
import Register from "@/components/common/register"
import Vclub from "@/components/common/Vclub"
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },{
      path:"/login",
      component:Login
    },{
      path:"/beauty",
      component:Beauty
    },{
      path:"/faq",
      component:Fqa 
    },{
      path:"/help",
      component:Help
    },{
      path:"/login-phone",
      component:LoginPhone
    },{
      path:"/ownsephora",
      component:OwnSephora
    },{
      path:"/phone-sephora",
      component:PhoneSephora
    },{
      path:"/promise",
      component:Promised
    },{
      path:"/register",
      component:Register
    },{
      path:"/v-club",
      component:Vclub
    }
  ]
})
