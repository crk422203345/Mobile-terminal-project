<template>
    <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- 底部组件 -->
        <Bottom></Bottom>
    </div>
</template>
<script>
import Bottom from '../../components/Bottom'
export default {
    name:'Livelogic',
    components:{
        Bottom
    }
}
</script>
<style scoped>

</style>

