<template>
    <div class="head">
        <div class="head-one">
            <span>欢迎来到丝芙兰</span>
            <router-link to="/login">
                <span>请登录</span>
            </router-link>
                <span>|</span>
            <router-link to="/register">
                <span>免费注册</span> 
            </router-link>
            <router-link to="/login-phone">
                <span>手机验证码登录</span>
            </router-link>
        </div>
        <div class="head-tow" id="headrun">
            <div class="head-tow-1">
                <router-link to="/faq">
                    <span>常见问题</span>
                </router-link>
            </div>
            <div class="head-tow-1">
                <router-link to="/promise">
                    <span>丝芙兰正品保障</span>
                </router-link>
            </div>
        </div>
        <div class="head-three">
            <ul>
                <li>
                    <div>
                        <img :src="imgsrc1" alt="">
                    </div>
                    <router-link to="/ownsephora">
                        <span>我的丝芙兰</span>
                    </router-link>
                </li>
                <li>
                    <div>
                        <img :src="imgsrc2" alt="">
                    </div>
                     <router-link to="/v-club">
                        <span>会员俱乐部</span>
                    </router-link>
                </li>
                <li>
                    <div>
                        <img :src="imgsrc3" alt="">
                    </div>
                    <router-link to="/phone-sephora">
                        <span>手机丝芙兰</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/beauty">
                        <span>美丽事业</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/help">
                        <span>帮助中心</span>
                    </router-link>
                </li>
            </ul>  
        </div>
    </div>
</template>
<script>
export default {
  name: "toubu",
  data() {
    return {
      imgsrc1: require("../../assets/headerlog1.png"),
      imgsrc2: require("../../assets/headerlog2.png"),
      imgsrc3: require("../../assets/headerlog3.png")
    };
  },
  methods: {
    getrun() {
      var items = document.getElementsByClassName("head-tow-1");
      // console.log(items);
      var item = 0;
      var clearActive = function() {
        for (var i = 0; i < items.length; i++) {
          items[i].className = "head-tow-1";
        }
      };
      var goIndex = function() {
        clearActive();
        items[item].className = "head-tow-1 active";
      };
      var gon= function() {
        if (item < items.length - 1) {
          item++;
        } else {
          item = 0;
        }
        goIndex();
      };
      setInterval(function() {
          gon();
      },4000);
    }
  },
  created(){
      this.getrun();
  }
}
</script>
<style scoped>
.head {
  width: 100%;
  height: 30px;
  background-color: rgb(36, 35, 35);
  line-height: 30px;
}
span {
  color: #fff;
  font-size: 12px;
}
.head-one,
.head-tow,
.head-tree {
  float: left;
  height: 100%;
}
ul {
  height: 100%;
  width: 100%;
  display: block;
}
li {
  list-style: none;
  float: left;
  text-align: center;
  line-height: 30px;
  margin-left: 10px;
  height: 100%;
  /* display: block; */
  padding:0;
}
a {
  text-decoration: none;
}
.head-one {
  width: 420px;
  margin-left: 377.5px;
}
.head-tow {
  width: 230px;
  margin-left: 0px;
  position: relative;
}
.head-tow-1 {
  background-color: #000;
  position: absolute;
}
.head-three {
  width: 449px;
  height: 30px;
  margin-left: 1157.5px;
  line-height: 30px;
  text-align: center;
}
.head-one > span,
.head-one > a {
  margin-left: 12px;
}
.head-three > ul {
  width: 100%;
  height: 100%;
}
.head-tow > div,
.head-tow > div > a {
  width: 100%;
  height: 100%;
  display: block;
  text-align: left;
}
.head-three > ul > li > div {
  width: 12px;
  height: 12px;
  float: left;
  margin: 2px 6px 0px 0px;
}
.head-three > ul > li > a {
  float: left;
}
.active {
  z-index: 10;
}
a>span:hover{
  color:red;
 
}
a>span{
  cursor: pointer;
}
</style>


