<template>
    <div class="brand">
        <div class="brand1">
            <div>
                <span>精品推荐</span>
                <span>SEPHORA PICKS!</span>
            </div>
        </div>
        <div class="allpick">
            <router-link v-for="item in pick" :key="item.id" :to="item.url" class="picking">
                <div class="pick" :style="item.backgroundDiv">
                    <div class="pick1" @mouseover="left1(item.id1)" @mouseout="right1(item.id1)">
                        <div>{{item.part1}}</div>
                        <div>{{item.part2}}</div>
                        <div>{{item.part3}}</div>
                        <div :id="item.id1">
                            <img :src="item.img1" alt="">
                        </div>
                    </div>
                    <div class="pick2" @mouseover="left2(item.id2)" @mouseout="right2(item.id2)">
                        <div>{{item.part4}}</div>
                        <div>{{item.part5}}</div>
                        <div>{{item.part6}}</div>
                        <div :id="item.id2">
                            <img :src="item.img2" alt=""> 
                        </div>
                    </div>
                </div>
            </router-link>
            <div class="picks">
                <img :src="imggif" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imggif:require("../../assets/hp_beautymaster_20190214.gif"),
            pick:[
                {id:0,id1:1,id2:2,url:"/design1",part1:"SEPHORACOLLECTION",part2:"丝芙兰柔和面部眼部卸妆水双支装惠选套装",part3:"￥189.00",part4:"Fresh",part5:"馥蕾诗大马士革玫瑰花瓣水",part6:"￥220.00~￥390.00",img1:require("../../assets/1_n_06987_180x180.jpg"),img2:require("../../assets/1_n_06817_180x180.jpg"),backgroundDiv: {backgroundImage:'url(' + require('../../assets/hp_basicskincare_20190305.jpg') + ')',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}},
                {id:1,id1:3,id2:4,url:"/design2",part1:"LANCOME",part2:"兰蔻新精华肌底液",part3:"￥760.00~￥1720.00",part4:"SK-II",part5:"SK-II微肌因赋活修护精华霜(轻盈型)",part6:"￥860.00~￥1260.00",img1:require("../../assets/1_n_06797_180x180.jpg"),img2:require("../../assets/1_n_06976_180x180.jpg"),backgroundDiv: {backgroundImage:'url(' + require('../../assets/hp_advancedskincare_20190305.jpg') + ')',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}},
                {id:2,id1:5,id2:6,url:"/design3",part1:"GUERLAIN",part2:"娇兰臻彩宝石唇膏套装（唇膏+唇膏壳）",part3:"￥435.00~￥588.00",part4:"MAKEUPFOREVER",part5:"会“呼吸”的底妆CP套装（丝芙兰专供）",part6:"￥620.00",img1:require("../../assets/1_n_06931_180x180.jpg"),img2:require("../../assets/1_n_07017_180x180.jpg"),backgroundDiv: {backgroundImage:'url(' + require('../../assets/hp_trendymakeup_20190305.jpg') + ')',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}},
            ]
        }
    },
    methods:{
        left1(ele){
            var go=document.getElementById(ele)
            // go.className="";
            go.className="active"
        },
        right1(ele){
            var  go=document.getElementById(ele)
            // go.className="";
            go.className="return"
        },
        left2(ele){
            var go=document.getElementById(ele)
            // go.className="";
            go.className="active"
        },
        right2(ele){
            var  go=document.getElementById(ele)
            // go.className="";
            go.className="return"
        }
    }
};
</script>
<style scoped>
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
.brand1>div{
    width:387px;
    height:100%;
    float: left;
    margin-top:10px;
}
.brand1>div span{
    font-size: 24px;
    font-weight: bold;  
    margin-left: 5px; 
    /* cursor: pointer; */
}
.allpick{
    width:1190px;
    height:620px;
}
.pick{
    width:590px;
    height:300px;
    margin-bottom:10px;
    float: left;
    margin-right:5px;
}
/* .picking>div.pick:nth-child(1){
    
} */
/* .allpick>a:nth-child(2).picks{
    margin-left:10px;
    display:block;
    width:590px;
    height:300px;
} */
/* .allpick>a:nth-child(2),.picks{
    margin-right:210px;
} */
.pick1,.pick2{
    width:200px;
    height:130px;
    float: right;
    background-color: #fff;
    margin-top:15px;
    /* border:1px solid red; */
    margin-right:10px;
    /* position: relative; */
}
.pick1>div:nth-child(4),.pick2>div:nth-child(4){
    width:90px;
    height:90px;
     margin:-20px 0px 0px 110px;
     /* position:absolute; */
}
.pick1>div>img,.pick2>div>img{
    width:90px;
    height:90px;
   
}
.pick1>div ,.pick2>div{
    /* font-size: 12px;  */
    line-height: 20px;
    text-align: left;
    /* color:#000; */
}
.pick2{
    margin-left:210px;
}
.pick1>div:nth-child(1),.pick1>div:nth-child(2),.pick1>div:nth-child(3),.pick2>div:nth-child(1),.pick2>div:nth-child(2),.pick2>div:nth-child(3){
    width:160px;    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px; 
    color:#000;
    /* margin-top:2px; */
    /* margin-left:1px; */
    /* position:absolute;
    z-index:1; */
}
.pick1>div:nth-child(1),.pick2>div:nth-child(1){
    font-weight:bold;
}
.active{
    transform: translateX(-8px)
}
.return{
    transform: translateX(0px)
}
</style>


