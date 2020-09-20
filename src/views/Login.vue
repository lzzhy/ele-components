<!-- 组件说明 -->
<template>
    <div class="login">
        <h1>普通登录组件</h1>
        <div class="account">
            <account-login :rule-form="ruleForm" :rules="rules" @submit="submit" @errHandle="errHandle"></account-login>
        </div>

        <h1>验证码登录组件</h1>
        <div class="account">
            <phone-login :ruleForm="ruleForm" @send="send" @submit="submit" @errHandle="errHandle"></phone-login>
        </div>
    </div>
</template>

<script>
//import x from ''
export default {
    components: {

    },
    data () {
        return { 
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur'
                    },
                    {
                        min: 6,
                        max: 12,
                        message: '用户名在6-12个字符之间',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    },
                    {
                        min: 6,
                        max: 15,
                        message: '用户名在6-15个字符之间',
                        trigger: 'blur'
                    }
                ]
            },
            
        };
    },
    computed: {
        
    },
    methods: {
        submit() {
            this.$message.success('表单填写成功')
        },
        errHandle() {
            this.$message.error('表单填写有误，请检查')
        },
        send() {
            // 写发送验证码的逻辑
            this.$message.success('发送验证码成功')
        },
        submit() {
            this.$message.success('提交成功')
        }
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
    .login {
        margin-top: 30px;
        margin-left: 30px;
    }
    .account {
        width: 500px;
    }
</style>