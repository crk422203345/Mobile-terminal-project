<template>
<div id="footer">
<ul>
    <router-link tag="li" to="/livelogic/homepage">
    <van-icon name="wap-home-o" />
    <p>首页</p>
    </router-link>

    <router-link tag="li" to="/livelogic/material">
    <van-icon name="bag-o" />
    <p>素材</p>
    </router-link>

    <router-link tag="li" to="/livelogic/mine">
    <van-icon name="browsing-history-o" />  
    <p>惊喜</p>
    </router-link>

    <router-link tag="li" to="/livelogic/surprised">
    <van-icon name="user-circle-o" />
    <p>我的</p>
    </router-link>
</ul>
</div>
</template>
<script>
export default {
name: "Tabbar"
};
</script>
<style scoped>
#footer {
width: 100%;
height: 55px;
background:white;
border-top: 2px solid #ebe8e3;
position:fixed;
left: 0;
bottom:0;
}
#footer ul{
display:flex;
text-align :center;
height :50px;
align-items :center;
}
#footer ul li{
flex :1;
height: 40px;
}
#footer li.active{
color:#f03d37;
}
#footer li.router-link-active{
color: #f03d37;
}
#footer ul i{
font-size: 25px;
}
#footer ul p{
font-size: 12px;
line-height: 18px;
}
</style>