<!-- 组件说明 -->
<template>
    <div class="pages-content-scroll">
        <!-- target=".pages-content-scroll" 就是最外层容器 -->
        <el-backtop target=".pages-content-scroll"></el-backtop>
        <slot></slot>
    </div>
</template>

<script>
//import x from ''
export default {
    components: {

    },
    data () {
        return {

        };
    },
    computed: {

    },
    methods: {

    },
    created() {
    
    },
    mounted() {
    
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style lang='scss' scoped>
    .pages-content-scroll {
        // 作为最外面一层 必须撑满整个屏幕
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-x: hidden;
    }
</style>