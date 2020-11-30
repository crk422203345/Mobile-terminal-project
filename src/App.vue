<template>
    <router-view />
</template>
<style>
*{
    margin: 0;
    padding: 0;
}
ul li{
    list-style-type: none;
}
::-webkit-scrollbar {
    display: none;
}
a{
    text-decoration: none;
}
.van-icon-qr::before {
    content: '\F0A8';
    font-size: 24px;
}
.van-icon-search::before {
    content: '\F0AF';
    font-size: 24px;
}

</style>