<template>
    <div class="brand">
        <div class="brand1">
            <div>
                <span>全部品牌</span>
                <span>ALL BRANDS</span>
            </div>
            <div>
                <ul class="brand-name">
                    <li v-for="item in brand" :key="item.id"><span  @click="dindin(item.id)">{{item.name}}</span></li>
                </ul>
            </div>
        </div>
        <div >
            <div class="brand2">
                <el-carousel trigger="click" height="320px">
                    <el-carousel-item v-for="item in brands" :key="item.id" >
                        <img :src="item.url" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="all-brand">
                <div class="part-brand" v-for="item in brandlist" :key="item.id"  @mouseover="over(item.id)" @mouseout="out(item.id)">
                    <div class="brand-one">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="brand-tow" v-show="item.showbrand">
                        <p>{{item.name}}</p>
                        <p>
                            <a href="javascript:;">点击查看</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      brandlist:[],
      brand: [
        { id: 0, name: "热门品牌" },
        { id: 1, name: "独家品牌" },
        { id: 2, name: "全部品牌" }
      ],
      brands:[
          {id:0,url:require("../../assets/hp_superbrand1_20190307.jpg")},
          {id:1,url:require("../../assets/hp_superbrand2_20190307.jpg")}
      ],
      brand1:[
          {id:0,name:"丝芙兰0",img:require("../../assets/img/skii_144X60.png"),showbrand:false},
          {id:1,name:"丝芙兰1",img:require("../../assets/img/acquadiparma_144X60.png"),showbrand:false},
          {id:2,name:"丝芙兰2",img:require("../../assets/img/algenist_144X60.png"),showbrand:false},
          {id:3,name:"丝芙兰3",img:require("../../assets/img/beautyblender_144X60.png"),showbrand:false},
          {id:4,name:"丝芙兰4",img:require("../../assets/img/benefit_144X60.png"),showbrand:false},
          {id:5,name:"丝芙兰5",img:require("../../assets/img/biotherm_144X60.png"),showbrand:false},
          {id:6,name:"丝芙兰6",img:require("../../assets/img/bobbibrown_144X60.png"),showbrand:false},
          {id:7,name:"丝芙兰7",img:require("../../assets/img/bvlgari_144X60.png"),showbrand:false},
          {id:8,name:"丝芙兰8",img:require("../../assets/img/caudalie_144X60.png"),showbrand:false},
          {id:9,name:"丝芙兰9",img:require("../../assets/img/clarins_144X60.png"),showbrand:false},
          {id:10,name:"丝芙兰10",img:require("../../assets/img/dior_144X60.png"),showbrand:false},
          {id:11,name:"丝芙兰11",img:require("../../assets/img/dtrt_144X60.png"),showbrand:false},
          {id:12,name:"丝芙兰12",img:require("../../assets/img/esteelauder_144X60.png"),showbrand:false},
          {id:13,name:"丝芙兰13",img:require("../../assets/img/esthederm_144X60.png"),showbrand:false},
          {id:14,name:"丝芙兰14",img:require("../../assets/img/foreo_144X60.png"),showbrand:false},
          {id:15,name:"丝芙兰15",img:require("../../assets/img/fresh_144X60.png"),showbrand:false},
      ],
    brand2:[
          {id:0,name:"丝芙兰0",img:require("../../assets/img/giorgioarmani_144X60.png"),showbrand:false},
          {id:1,name:"丝芙兰1",img:require("../../assets/img/givenchy_144X60.png"),showbrand:false},
          {id:2,name:"丝芙兰2",img:require("../../assets/img/gucci_144X60.png"),showbrand:false},
          {id:3,name:"丝芙兰3",img:require("../../assets/img/guerlain_144X60.png"),showbrand:false},
          {id:4,name:"丝芙兰4",img:require("../../assets/img/benefit_144X60.png"),showbrand:false},
          {id:5,name:"丝芙兰5",img:require("../../assets/img/kenzoki_144X60.png"),showbrand:false},
          {id:6,name:"丝芙兰6",img:require("../../assets/img/labseries_144X60.png"),showbrand:false},
          {id:7,name:"丝芙兰7",img:require("../../assets/img/lancaster_144X60.png"),showbrand:false},
          {id:8,name:"丝芙兰8",img:require("../../assets/img/lancome_144X60.png"),showbrand:false},
          {id:9,name:"丝芙兰9",img:require("../../assets/img/loewe_144X60.png"),showbrand:false},
          {id:10,name:"丝芙兰10",img:require("../../assets/img/mac_144X60.png"),showbrand:false},
          {id:11,name:"丝芙兰11",img:require("../../assets/img/maisonmargiela_144X60.png"),showbrand:false},
          {id:12,name:"丝芙兰12",img:require("../../assets/img/makeupforever_144X60.png"),showbrand:false},
          {id:13,name:"丝芙兰13",img:require("../../assets/img/marcjacobs_144X60.png"),showbrand:false},
          {id:14,name:"丝芙兰14",img:require("../../assets/img/mariedalgarcolorstudio_144X60.png"),showbrand:false},
          {id:15,name:"丝芙兰15",img:require("../../assets/img/miumiu_144X60.png"),showbrand:false},
      ]

    };
  },
  created(){
      this.brandlist=this.brand1;
  },
  methods:{
      over(ele){
        this.brandlist[ele].showbrand=true;
      },
      out(ele){
        this.brandlist[ele].showbrand=false;
      },
      dindin(ele){
              if(ele==0){
                  this.brandlist=this.brand1;
              }else if(ele==1){
                  this.brandlist=this.brand2;
              }
      }
  }
};
</script>
<style scoped>
/* .shen{
    width:100%;
    background-color:#f5f5f5;
} */
.brand{
    width:1190px;
    margin-left:370px;
    margin-top:70px;    
}
.brand1{
    width:100%;
    height:36px;
    margin:10px 0;
}
.brand1>div:nth-child(1){
    width:387px;
    height:100%;
    float: left;
    margin-top:10px;
}
.brand1>div:nth-child(2){
    height:100%;
    float:right;
    width:216px;
    margin-right:10px;
}
.brand-name{
    width:216px;
    height:100%;
    margin-top:10px;
    /* padding:0; */
    
}
.brand-name>li{
    list-style:none;
    float:left;
    /* margin-right:5px; */
}
.brand-name>li>span{
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color:#afafaf;
    cursor: pointer;
}
.brand-name>li>span:hover{
    color:#000;
}
.brand1>div:nth-child(1) span{
    font-size: 24px;
    font-weight: bold;  
    margin-left: 5px; 
    cursor: pointer;
}
.brand2{
    width:590px;
    height:320px; 
}
.el-carousel{
    width:590px;
    height:320px; 
}
.el-carousel__container{
    /* width:590px;
    height:320px; */
    width:100%;
    height:100%;
    
}
.el-carousel__container>img{
     width:590px;
    height:320px; 
}
.all-brand{
    width:600px;
    height:320px;
    margin-left:590px;
    margin-top:-320px;    
}
.part-brand{
    width:150px;
    height:80px;
    position: relative;
    float:left;
    /* background-color: antiquewhite; */
}
.brand-one{
    width:150px;
    height:80px;
    position: absolute;
    cursor: pointer;
  
}
.brand-tow{
    width:150px;
    height:80px;
    position: absolute;  
    background-color: rgba(14, 13, 13,0.8);
    cursor: pointer;
}
.brand-one>img{
    margin:3px 10px;
}
.brand-tow>p:nth-child(1){
    width:80px;
    margin:0 auto;
    color:rgba(253, 252, 252,1);
    /* background-color:#000; */
    font-size:13px;
    text-align: center;
    margin-top:20px;
}
.brand-tow>p:nth-child(2){
    width:60px;
    height:20px;
    background-color: #f00;
    margin:0 auto;
    border:1px solid red;
    border-radius: 5px;
     text-align: center;
     line-height:20px;
     margin-top:10px;
}
.brand-tow>p:nth-child(2)>a{
    color:#fff;
    font-size: 12px;
    text-decoration: none;  
}
</style>

