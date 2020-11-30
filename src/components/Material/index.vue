<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="灵感源">
                <van-row class="juzhong changdu">
                    <van-col span="24" class="changdu">
                        <van-col span="12">
                        <van-row type="flex">
                            <van-col span="23" class="biankaung">
                                <p>sdfa</p>
                            </van-col>
                        </van-row>
                        </van-col>
                        <van-col span="12">
                            <van-row type="flex" justify="end">
                                <van-col span="23" class="biankaung">span: 6</van-col>
                            </van-row>
                        </van-col>
                    </van-col>
                </van-row>
            </van-tab>
            <van-tab title="产品库">
                <van-row class="juzhong changdu">
                    <van-col span="24" class="changdu">
                        <van-col span="12">
                        <van-row type="flex">
                            <van-col span="23" class="biankaung">
                                <p>sdfa</p>
                            </van-col>
                        </van-row>
                        </van-col>
                        <van-col span="12">
                            <van-row type="flex" justify="end">
                                <van-col span="23" class="biankaung">span: 6</van-col>
                            </van-row>
                        </van-col>
                    </van-col>
                </van-row>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0
        };
    },
}
</script>
<style scoped>
.biankaung{
    border: solid 1px; 
}
.van-col--24 {
    width: 350px;
}
.juzhong {
    display: flex;
    justify-content: center;
}



.van-tab {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 4px;
    color: #646566;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
}
</style>

