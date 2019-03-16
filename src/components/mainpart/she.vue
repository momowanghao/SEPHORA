<template>
  <div>
    <div class="search">
      <div class="logo1">
        <a href="">
        <img :src="logo1" alt="">
        </a>
      </div>
      <div class="search1">
        <div>
          <input type="text" placeholder="请输入">
          <button>搜索</button>
        </div>
        <div>
          <span v-for="item in rot" :key="item.id">
            <a href="">{{item.name}}</a>
          </span>
        </div>
      </div>
      <div class="search2">
          <el-button slot="reference">
            <i class="icon iconfont icon-gouwudai"></i>
            <span >购物车{{gouwu}}件</span>
          </el-button>
      </div>
    </div>
    <div>
      <div class="navi">
        <div class="navi1">
          <img :src="logo2" alt="">
          <a href="">全部商品类目</a>
        </div>
        <div class="navi2">
          <ul>
            <li v-for="item in nav" :key="item.id">
              <a href="">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <div class="navi3">
          <img :src="logo3" alt="">
        </div>
      </div>
    </div>
    <div>
      <div class="bar">
        <ul>
           <!-- @mouseover="over(item.id)" @mouseout="out(item.id)" -->
          <li v-for="item in bar" :key="item.id" class="barr" @mouseover="over(item.id)" @mouseout="out(item.id)">
            <p><a href="">{{item.name1}}</a></p>
            <span><a href="">{{item.name2}}</a></span>
            <span><a href="">{{item.name3}}</a></span>
            <span><a href="">{{item.name4}}</a></span>
          </li>
        </ul>
      </div>
      <!-- <link rel="stylesheet" href=""> -->
      <div class="bar-banner">
        <div>
          <div class="banner">
            <!-- <el-carousel indicator-position="outside" class="banner1">
              <el-carousel-item v-for="item in ban" :key="item.id" class="banner2">
              <img :src="item.url" alt="">
              </el-carousel-item>
            </el-carousel> -->
            <el-carousel trigger="click" class="banner1">
              <el-carousel-item v-for="item in ban" :key="item.id" class="banner2">
                <img :src="item.url" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="v-footer">
            <ul>
              <li v-for="item in bann" :key="item.id">
                <a href="" >
                  <img :src="item.name" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="d1" v-for="item in navv" :key="item.id" v-show="item.show" :data-index="item.id">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      show:"",
      logo1: require("../../assets/sep_top_Logo.png"),
      logo2: require("../../assets/classified.png"),
      logo3: require("../../assets/navigation_shopping.png"),
      ban: [
        { id: 0, url: require("../../assets/hp_urban_20190221.jpg") },
        { id: 1, url: require("../../assets/hp_wday_20190305.jpg") },
        { id: 2, url: require("../../assets/hp_wvday_20190305.jpg") }
      ],
      rot: [
        { id: 0, name: "黑金卡护肤8折" },
        { id: 1, name: "拯救熬夜脸" },
        { id: 3, name: "OMG口红清单" },
        { id: 4, name: "热销护肤套组" },
        { id: 5, name: "光感肌底妆" },
        { id: 6, name: "都市新妆" }
      ],
      visible: false,
      gouwu: 0,
      nav: [
        { id: 0, name: "热销榜单" },
        { id: 1, name: "独家发售" },
        { id: 2, name: "礼物套装" },
        { id: 3, name: "全部品牌" },
        { id: 4, name: "预约中心" },
        { id: 5, name: "美丽学院" }
      ],
      navv:[
        {id:0,name:"热门",show:false},
        {id:1,name:"功效",show:false},
        {id:2,name:"护肤",show:false},
        {id:3,name:"彩妆",show:false},
        {id:4,name:"香水",show:false},
        {id:5,name:"工具",show:false},
        {id:6,name:"男士护肤",show:false},
        {id:7,name:"洗浴护体",show:false},
        {id:8,name:"美发护发",show:false},
        ],
      bar: [
        {
          id: 0,
          name1: "热门",
          name2: "魅惑唇釉",
          name3: "塑造立体轮廓",
          name4: "热销气垫"
        },
        {
          id: 1,
          name1: "功效",
          name2: "保湿补水",
          name3: "底妆修容",
          name4: "美白"
        },
        {
          id: 2,
          name1: "护肤",
          name2: "面膜",
          name3: "美容仪器",
          name4: "隔离防晒"
        },
        {
          id: 3,
          name1: "彩妆",
          name2: "质感哑光唇",
          name3: "九色中国肌",
          name4: ""
        },
        {
          id: 4,
          name1: "香水",
          name2: "MaisonMargiela新香",
          name3: "罗意威随身装礼盒",
          name4: ""
        },
        {
          id: 5,
          name1: "工具",
          name2: "美妆蛋套装",
          name3: "丝芙兰豪华刷具套装",
          name4: ""
        },
        {
          id: 6,
          name1: "男士护肤",
          name2: "换季护肤必备",
          name3: "精英男士之选",
          name4: ""
        },
        {
          id: 7,
          name1: "洗浴护体",
          name2: "缤纷沐浴",
          name3: "保湿手霜",
          name4: "多彩唇釉"
        },
        {
          id: 8,
          name1: "美发护发",
          name2: "佩妍丽特惠礼盒",
          name3: "塞巴斯汀明星造型",
          name4: ""
        }
      ],
      bann:[
        {id:0,name:require("../../assets/hp_weeklyspecial_20190228.jpg")},
        {id:1,name:require("../../assets/hp_miniherolauder_20190228.jpg")},
        {id:2,name:require("../../assets/hp_miniherolancome_20190228.jpg")},
      ]
    };
  },
  mounted(){
    // this.shownav();
  },
  methods: {
    over(e){
      var tage=document.getElementsByClassName("d1");
        for(var a=0;a<tage.length;a++){
          if(e==tage[a].getAttribute("data-index")){
              this.navv[a].show=true;
            }
          }
        },
    out(e){
       var tage=document.getElementsByClassName("d1");
        for(var a=0;a<tage.length;a++){
          if(e==tage[a].getAttribute("data-index")){
              this.navv[a].show=false;
            }
          }
    },
    // shownav(){
    //   var tag=document.getElementsByClassName("barr");
    //   var tage=document.getElementsByClassName("d1");
    //   // console.log(tag);
    //   // console.log(tage);
    //   // console.log(tag[1].getAttribute("data-index"))
    //   for(var i=0;i<tag.length;i++){
    //     tag[i].addEventListener('mouseover',function(){
    //        var barrindex=this.getAttribute("data-index");
    //         // console.log(barrindex);
    //         for(var a=0;a<tage.length;a++){
    //           if(barrindex==tage[a].getAttribute("data-index")){
    //             this.navv[a].show=true;
    //           }
    //         }
    //     })
    //     tag[i].addEventListener('mouseout',function(){
    //       var barrindex=this.getAttribute("data-index");
    //         for(var a=0;a<tage.length;a++){
    //           if(barrindex==tage[a].getAttribute("data-index")){
    //             this.navv[a].show=false;
    //           }
    //         }
    //     })
    //   }
    // }
  }
};
</script>
<style scoped>
.search {
  width: 1190px;
  height: 84px;
  /* border:1px solid red; */
  margin: auto;
}
.logo1 {
  width: 320px;
  height: 36px;
  float: left;
  margin: 20px 0px 0px 0px;
}
.logo1 > a > img {
  width: 100%;
  height: 100%;
}
.logo1 > a {
  color: #000;
  font-weight: 400;
  margin: 2px 0;
  height: 32px;
  float: left;
  text-decoration: none;
}
.search1 {
  width: 650px;
  height: 60px;
  margin: 20px 0px 0px -18px;
  float: left;
}
.search1 > div:nth-child(1) {
  width: 100%;
  height: 34px;
  margin: 0px 0px 0px 0px;
}
.search1 > div:nth-child(1) > input {
  width: 542px;
  height: 30px;
  float: left;
}
.search1 > div:nth-child(1) > button {
  width: 100px;
  height: 36px;
  float: left;
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
  margin-left: 2px;
  cursor: pointer;
}
.search1 > div:nth-child(2) {
  width: 100%;
  height: 19px;
}
.search1 > div:nth-child(2) > span {
  padding: 0 4px;
}
.search1 > div:nth-child(2) > span > a {
  text-decoration: none;
  font-size: 12px;
  color: #acacac;
}
.search2 {
  width: 209px;
  height: 36px;
  float: left;
  margin: 20px 0px 0px 29px;
}
.search2 > button {
  width: 100%;
  height: 100%;
}
.search2 > button > span {
  font-size: 18px;
  color: red;
}
.navi {
  width: 1190px;
  height: 36px;
  margin-left:370px;
  /* border:1px solid red; */
  /* margin: 0 auto; */
  /* margin-top: 5px; */
  position: relative;
  /* margin: */
}
.navi1 {
  width: 240px;
  height: 36px;
  float: left;
}
.navi2 {
  width: 760px;
  height: 100%;
  float: left;
}
.navi2 > ul {
  width: 100%;
  height: 100%;
  margin-top:10px;
}
.navi2 > ul > li {
  list-style: none;
  float: left;
}
.navi2 > ul > li > a {
  text-decoration: none;
  float: left;
  margin: 0px 0px 0px 25px;
  color: #000;
  font-size: 18px;
}
.navi > .navi1 > img {
  width: 240px;
  height: 36px;
  display: block;
  position: absolute;
}
.navi > .navi1 > a {
  color: #fff;
  text-decoration: none;
  margin: 5px 0px 0px 15px;
  float: left;
  font-size: 18px;
  z-index: 10;
  position: absolute;
}
.navi3 {
  width: 153px;
  height: 40px;
  float: left;
}
.navi3 > img {
  width: 100%;
  height: 100%;
}
.bar {
  width: 238px;
  height: 550px;
  margin: 0px 0px 0px 370px;
}
.bar > ul {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.bar > ul > li {
  width: 100%;
  height: 61px;
  list-style: none;
  padding: 0;
  border: 1px solid #f5f5f5;
  /* box-shadow:1px 1px 1px #dddbdb inset; */
  border-top: 0;
  border-right:0;
  line-height: 25px;
  cursor: pointer;
}
a {
  text-decoration: none;
}
.bar > ul > li > span > a {
  font-size: 12px;
  color: #8a8a8a;
}
.bar > ul > li > p > a {
  font-size: 14px;
  color: #000;
  line-height: 22px;
  font-weight: bolder;
}
.bar > ul > li > p {
  margin: 0px 0px 0px 17px;
}
.bar > ul > li > span {
  margin: 0px 0px 0px 13px;
}
.bar-banner {
  width: 950px;
  height: 550px;
  position: relative;
  margin: -550px 0px 0px 610px;
  /* float:left; */
  /* border: 1px solid red; */
}
.banner {
  width: 950px;
  height: 400px;
  /* position: absolute; */
  /* z-index:10; */
  
}
.banner1 {
  width: 100%;
  height: 400px;
  position: absolute;
}
.banner2{
  height: 400px;
  position: absolute;
}
.v-footer{
  width:950px;
  height:140px;
  margin:18px 0px 0px 0px;
}
.v-footer>ul{
  width:100%;
  height:100%;
   margin:0px 0px 0px -40px;
}
.v-footer>ul>li{
  list-style:none;
  float:left;
  margin:0px 0px 0px 10px;
}
.d1{
  width: 950px;
  height: 556px;
  position: relative;
  margin: -558px 0px 0px 0px;
  border-top: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  position:absolute;
  background-color: #fff;
  z-index:10;
  box-shadow:1px 1px 1px #dddbdb inset;
}
</style>

