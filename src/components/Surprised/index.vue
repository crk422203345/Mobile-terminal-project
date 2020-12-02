<template>
    <div id="app">
        <van-row class="juzhong">
            <van-col span="24" class="changdu mokuai1">
                <span>
                    <van-icon name="orders-o" />
                </span>
                <span>
                    <van-icon name="comment-circle-o" dot/> 
                </span>
            </van-col>
        </van-row>
        <van-row class="juzhong sbj">
            <van-col span="24" class="changdu">
                <van-col span="6" >
                    <img src="../../img/86.png" width="85" alt="">
                </van-col>
                <van-col span="18" class=" mokuai2">
                    <ul>
                        <li>陈汝康</li>
                        <li>用户ID: 177576</li>
                        <li>未实名认证只 未企业认证物 未设计师认证</li>
                    </ul>
                </van-col>
            </van-col>
        </van-row>
        <van-row class="juzhong sbj gaodu biankuan3">
            <van-col span="24" class="changdu">
                <van-col span="24" >
                    <img src="../../img/85.png" width="350" alt="">
                </van-col>
            </van-col>
        </van-row>
        <div class="beijin nbj">
            <van-row class="juzhong ">
                <van-col span="24" class="changdu biankuang1">
                    <van-col span="12" class="zuo">
                        我的订单
                    </van-col>
                    <van-col span="12" class="you">
                        查看<van-icon name="arrow" />
                    </van-col>
                </van-col>
            </van-row>
            <van-row class="juzhong">
                <van-col span="24" class="changdu biankuang2">
                    <van-row type="flex" justify="space-around" class="bianju5">
                        <van-col span="4">
                            <ul>
                                <li><van-icon name="paid" /></li>
                                <li>
                                    待付款
                                </li>
                            </ul>
                        </van-col>
                        <van-col span="4">
                            <ul>
                                <li><van-icon name="send-gift-o" /></li>
                                <li>
                                    待发货
                                </li>
                            </ul>
                        </van-col>
                        <van-col span="4">
                            <ul>
                                <li><van-icon name="logistics" /></li>
                                <li>
                                    待收货
                                </li>
                            </ul>
                        </van-col>
                        <van-col span="4">
                            <ul>
                                <li><van-icon name="point-gift-o" /></li>
                                <li>
                                    已收货
                                </li>
                            </ul>
                        </van-col>
                        <van-col span="4">
                            <ul>
                                <li><van-icon name="orders-o" /></li>
                                <li>
                                    全部订单
                                </li>
                            </ul>
                        </van-col>
                    </van-row>
                </van-col>
            </van-row>
        </div>
        <div class="beijin nbj">
            <van-row class="juzhong ">
                <van-col span="24" class="changdu biankuang1">
                    <van-col span="12" class="zuo">
                        我的询价
                    </van-col>
                    <van-col span="12" class="you">
                        查看<van-icon name="arrow" />
                    </van-col>
                </van-col>
            </van-row>
            <van-row class="juzhong">
                <van-col span="24" class="changdu biankuang2">
                    <van-row type="flex" justify="space-around" class="bianju5">
                        <van-col span="4">
                            <ul>
                                <li><van-icon name="paid" /></li>
                                <li>
                                    开始询价
                                </li>
                            </ul>
                        </van-col>
                        <van-col span="4">
                            <ul>
                                <li>0</li>
                                <li>
                                    待报价
                                </li>
                            </ul>
                        </van-col>
                        <van-col span="4">
                            <ul>
                                <li>0</li>
                                <li>
                                    报价中
                                </li>
                            </ul>
                        </van-col>
                        <van-col span="4">
                            <ul>
                                <li>0</li>
                                <li>
                                    已报价
                                </li>
                            </ul>
                        </van-col>
                        <van-col span="4">
                            <ul>
                                <li><van-icon name="balance-list-o" /></li>
                                <li>
                                    开始询价
                                </li>
                            </ul>
                        </van-col>
                    </van-row>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
export default {
};
</script>
<style scoped>
.daxiao5 ul li:nth-of-type(1){
    font-size: 27px;
}
.bianju5 ul li:nth-of-type(1){
    font-size: 30px;
    display: flex;
    justify-content:center;
}
.bianju5 ul li:nth-of-type(2){
    font-size: 14px;
}
.bianju5{
    margin-top: 20px;
    margin-bottom: 20px;
}
.zuo {
    font-size: 20px;
    font-weight: bold;
    padding-top: 5px;
    padding-left: 10px;
}
.you{
    display: flex;
    justify-content:flex-end;
    color: #bebebe;
    padding-top: 5px;
    padding-right: 10px;
}
.van-icon-arrow::before {
    content: '\F00A';
    font-size: 18px;
    margin-top: 2px;
}
.biankuang1{
    border-radius: 10px 10px 0px 0px;
    background: white;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 10px;
}
.biankuang2{
    border-radius: 0px 0px 10px 10px;
    background: white;
}
.nbj{
    padding-top: 20px;
    padding-bottom: 20px;
}
.gaodu{
    height: 48px;
}
.beijin{
    background: #fafafa;
}
#app{
    margin-bottom: 55px;
}
.sbj{
    margin-top: 20px;
}
.mokuai2 ul li:nth-of-type(1){
    font-size: 23px;
    font-weight: 600;
}
.mokuai2 ul li:nth-of-type(2){
    color: #707070;
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
}
.mokuai2 ul li:nth-of-type(3){
    font-size: 12px;
    color: #bbbbbb;
}
.mokuai1{
    display: flex;
    justify-content:flex-end;
}
.mokuai1 span:nth-of-type(1) {
    font-size: 23px;
    margin: 10px 25px 5px 5px;
}
.mokuai1 span:nth-of-type(2) {
    font-size: 23px;
    padding: 10px 5px 5px 5px;
}
.juzhong {
    display: flex;
    justify-content: center;
}
.changdu{
    width: 350px;
}
.biankaunxiang{
    border: 1px solid;
}
</style>

