<!-- 组件说明 -->
<template>
    <div class="accountLogin">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="username">
                <el-input placeholder="请输入用户名" v-model="ruleForm.username">
                    <i slot="prefix" class="el-icon-user"></i>
                </el-input>
            </el-form-item> 
            <el-form-item prop="password">
                <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password>
                    <i slot="prefix" class="el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
//import x from ''
export default {
    props: {
        ruleForm: {
            type: Object,
            required: true
        },
        rules: {
            type: Object,
            required: true
        }
    },
    components: {
        
    },
    data () {
        return {

        };
    },
    computed: {

    },
    methods: {
        login(ruleForm) {
            console.log(this.$refs[ruleForm]);
            this.$refs[ruleForm].validate((validate) => {
                if(validate) {
                    this.$emit('submit')
                } else {
                    this.$emit('errHandle')
                }
            })
        }
    },
    created() {
    
    },
    mounted() {
        console.log(this.rules);
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
.el-button  {
    width: 100%;
}
</style>