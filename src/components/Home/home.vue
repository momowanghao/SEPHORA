<template>
    <div class="home">
        <Toubu></Toubu>
        <She></She>
        <Sheone></Sheone>
        <Shetow></Shetow>
        <Shethree></Shethree>
        <Shefour></Shefour>
        <Shefive></Shefive>
        <Shesix></Shesix>
        <Sheseven></Sheseven>
        <Sheeight></Sheeight>
        <Footer></Footer>
        <!-- <Shethree></Shethree>
        <Shethree></Shethree>
        <Shethree></Shethree> -->
    </div>
</template>
<script>
import Toubu from "@/components/mainpart/toubu"
import She from "@/components/mainpart/she"
import Sheone from "@/components/mainpart/sheone"
import Shetow from "@/components/mainpart/shetow"
import Shethree from "@/components/mainpart/shethree"
import Shefour from "@/components/mainpart/shefour"
import Shefive from "@/components/mainpart/shefive"
import Shesix from "@/components/mainpart/shesix"
import Sheseven from "@/components/mainpart/sheseven"
import Sheeight from "@/components/mainpart/sheeight"
import Footer from "@/components/mainpart/footer"
export default {
    name:"home",
    components:{
       Toubu,
       She,
       Sheone,
       Shetow,
       Shethree,
       Shefour,
       Shefive,
       Shesix,
       Sheseven,
       Sheeight,
       Footer,
    }
}
</script>
<style scoped>
.home{
    width:100%;
    height:100%;
}
</style>

