<template>
    <div class="footer1">
        <ul>
            <li>顺丰EMS速达</li>
            <li>丰富礼赠</li>
            <li>100%官方正品</li>
            <li>无障碍退款</li>
            <li>安全支付</li>
        </ul>
        <div class="line"></div>
        <ul class="footer-one">
            <li><a href="">团购流程</a></li>
            <li><a href="">大宗采购/团购</a></li>
            <li><a href=""> 丝芙兰预付卡章程</a></li>
        </ul>
        <ul class="foote-tow">
            <li><a href="">支付/配送</a></li>
            <li><a href="">货到付款</a></li>
            <li><a href="">在线支付</a></li>
            <li><a href="">配送时间</a></li>
        </ul>
        <ul class="footer-three">
            <li><a href="">售后服务</a></li>
            <li><a href="">退换货规定</a></li>
            <li><a href="">退换及退款说明</a></li>
        </ul>
        <ul class="footer-four">
            <li><a href="">关于丝芙兰</a></li>
            <li><a href="">公司介绍</a></li>
            <li><a href="">联系我们</a></li>
        </ul>
        <div class="last">网上订购咨询热线 : 400 670 0055</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.footer1{
  width: 1190px;
  margin-left: 370px;
  margin-top: 140px;
}
.footer1>ul>li{
    list-style: none;
    float:left;
    text-align: center;
    margin-left:120px;
}
.line{
    width:1190px;
    border:2px solid black;
    clear: both;
}
.footer-one,.foote-tow,.footer-three,.footer-four{
    float:left;
    width:220px;
    padding:0;
    margin-top:10px;
}
.footer-one>li,.foote-tow>li,.footer-three>li,.footer-four>li{
    list-style:none;
 
}
.footer-one>li>a,.foote-tow>li>a,.footer-three>li>a,.footer-four>li>a{
    text-decoration: none;
    color:#696969;
    font-size:12px;
}
.footer-one>li:nth-child(1)>a,.foote-tow>li:nth-child(1)>a,.footer-three>li:nth-child(1)>a,.footer-four>li:nth-child(1)>a{
     color:black;
     font-size:16px;
}
.last{
    float:left;
    margin-top:14px;
    margin-left:55px;
}
</style>


