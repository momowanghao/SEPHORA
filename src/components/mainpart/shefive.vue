<template>
    <div class="floor1">
        <div class="brandi">
            <div>
                <span>香氛品类</span>
                <span>FRAGRANCE</span>
            </div>
            <ul>
                <li v-for="item in goodtitle" :key="item.id">
                    <router-link :to="item.url">
                        <span>{{item.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="brandi1">
                <div class="brandi1-img">
                    <router-link to="">
                        <img :src="brand1img" alt="">
                    </router-link>
                </div>
            <div class="brandi1-goods">
                <ul >
                    <a v-for="item in goodlist" :key="item.id" >
                        <li class="brandi1-good" @mouseover="top(item.id)" @mouseout="down(item.id)">
                            <div>{{item.part1}}</div>
                            <div>{{item.part2}}</div>
                            <div>{{item.part3}}</div>
                            <div :id="item.id">
                                <img :src="item.img" alt="">
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="brandi3">
                <ul>
                    <li class="brandi-logo" v-for="item in goodimg" :key="item.id">
                        <a>
                            <img :src="item.img" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // created(){
    //     this.top();
    //     this.dowm();
    // },
    methods:{
        top(ele){
            var go=document.getElementById(ele);
            console.log(go)
            // go.className="";
            go.className="active";
        },
        down(ele){
            var go=document.getElementById(ele);
            go.className="return";
        }
    },
    data(){
        return{
            brand1img:require("../../assets/hp_frafloor_20190307.jpg"),
            goodtitle:[
                {id:0,name:"王俊凯许你美丽人生",url:""},
                {id:1,name:"缪缪莹铃新香",url:""},
                {id:2,name:"男士香氛精选",url:""},
                {id:3,name:"马丁马吉拉沙滩漫步",url:""},
                {id:4,name:"'小众'香水",url:""},
                {id:5,name:"新品女香大赏",url:""},
                {id:6,name:"兰蔻嘉年华礼盒",url:""},
                {id:7,name:"全部",url:""},
                // {id:8,name:"全部",url:""},
            ],
            goodlist:[
                {id:0,id1:0,part1:"Maison Margiela",part2:"Maison Margi...",part3:"￥1000.00",url:"",img:require("../../assets/1_n_06937_180x180.jpg")},
                {id:1,id1:1,part1:"LOEWE",part2:"罗意威001男款香水",part3:"￥690.00~￥990.00",url:"",img:require("../../assets/1_n_06817_180x180 (3).jpg")},
                {id:2,id1:2,part1:"GUCCI",part2:"古驰花悦绿意女士淡香水",part3:"￥680.00~￥1190.00",url:"",img:require("../../assets/1_n_06717_180x180.jpg")},
                {id:3,id1:3,part1:"MIUMIU",part2:"缪缪莹铃女士香氛",part3:"￥690.00~￥1180.00",url:"",img:require("../../assets/1_n_06827_180x180.jpg")},
                {id:4,id1:4,part1:"AtelierCologne",part2:"欧珑无极乌龙精醇古龙",part3:"￥680.00~￥1480.00",url:"",img:require("../../assets/1_n_06792_180x180.jpg")},
                {id:5,id1:5,part1:"TIFFANY&Co.",part2:"蒂芙尼女士香氛(Diam...",part3:"￥1130.00",url:"",img:require("../../assets/1_n_06941_180x180.jpg")},
                {id:6,id1:6,part1:"YSL",part2:"圣罗兰反转巴黎女士香水",part3:"￥770.00~￥1570.00",url:"",img:require("../../assets/1_n_06553_180x180.jpg")},
                {id:7,id1:7,part1:"GIORGIOARMANI",part2:"阿玛尼迷情挚爱女士香水",part3:"￥660.00~￥880.00",url:"",img:require("../../assets/1_n_06591_180x180.jpg")},
            ],
            goodimg:[
                {id:0,img:require("../../assets/loewe_144X60.png")},
                {id:1,img:require("../../assets/miumiu_144X60.png")},
                {id:2,img:require("../../assets/dior_144X60 (1).png")},
                {id:3,img:require("../../assets/marcjacobs_144X60.png")},
                {id:4,img:require("../../assets/kenzo_144X60.png")},
                {id:5,img:require("../../assets/acquadiparma_144X60.png")},
                {id:6,img:require("../../assets/bvlgari_144X60.png")},
                {id:7,img:require("../../assets/gucci_144X60.png")}
            ]
        }
    }
    
}
</script>
<style scoped>
    .floor1{
        width:1190px;
        margin-left:370px;
        margin-top:140px; 
        /* margin-bottom:-70px; */
        /* border:1px solid red; */
    }
    .brandi{
        width:100%;
        height:36px;
        margin:10px 0;
    }
    .brandi>div{
        /* width:387px; */
        height:100%;
        float:left;
        margin-top:10px;
    }
    .brandi>ul{
        height:100%;
        float:right;
        /* width:567px; */
        margin-right:10px;
        /* margin: 0; */
        /* padding: 0; */
    } 
    .brandi1{
        width:1190px;
        height:500px;
    }
    .brandi1-url{
        width:390px;
        height:500px;
        display: block;
    }
    .brandi1-img{
        width:390px;
        height:500px;
        float: left;
    }
    .brandi1-img>img{
        width:100%;
        height:100%;
    }
    .brandi1-goods{
        width:800px;
        height:500px;
        float: left;
    }
    .brandi1-goods>ul{
        width:100%;
        height:100%;
        /* margin:0; */
        padding:0;
        margin-top:-22px;
    }
    .brandi1-goods>ul>li{
        margin:0;
        padding:0;
    }
    .brandi1-good{
        width:199px;
        height:250px;
        float: left;
        overflow: hidden;
        border-right: 1px solid #f5f5f5;
        border-top: 1px solid #f5f5f5;
        box-sizing: border-box;
        padding: 15px 10px;
        padding-right: 0;
    }
    /* .brandi1-good>ul>a{
        display: block;
    } */
    .brandi3{
        width:100%;
        height:60px;
        margin-top:-10px;
        float: left;
    }
    .brandi3>ul{
        width:100%;
        height:100%;
        padding:0;
        margin:0;
    }
     .brandi3>ul>li{
         list-style:none;
         float: left;
         /* border:1px solid #afafaf; */
         margin-right:4px;
     }
     .brandi3>ul>li>a{
         width:1190px;
         height:60;
         display:block;
     }
    .brandi-logo{
        width:144px;
        height:60px;
        float:left;
    }
    .brandi-logo>a>img{
        width:144px;
        height:60px;
    }
    .brandi>div>span{
        font-size: 24px;
        font-weight: bold;  
        margin-left:0px; 
        /* cursor: pointer; */
    }
    .brandi>ul>li{
        list-style: none;
        float:left;
        margin-left:20px;
        cursor: pointer;
    }
    .brandi>ul>li>a{
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        color:#afafaf;
        cursor: pointer;
    }
    .brandi>ul>li>a:hover{
        color:#000;
    }
    .brandi1-good>div{
        color:#000;
        font-size:14px;
    }
    .brandi1-good>div>img{
        width:180px;
        height:180px;
    }
    .brandi1-good>div:nth-child(4){
        width:180px;
        height:180px;
        margin-top:-3px;
    }
    .active{
    transform: translateX(-8px)
    }
    .return{
    transform: translateX(0px)
    }
</style>
