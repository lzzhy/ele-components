<!-- 组件说明 -->
<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="phone">
            <el-input placeholder="请输入手机号" v-model="ruleForm.phone">
                <i slot="prefix" class="el-icon-phone"></i>
            </el-input>
        </el-form-item>
        <el-form-item phone="code">
            <el-row :gutter="18">
                <el-col :span="18">
                    <el-input placeholder="请输入验证码" v-model="ruleForm.code">
                        <i slot="prefix" class="el-icon-tickets"></i>
                    </el-input>
                </el-col>
                <el-col :span="6">
                    <el-button @click="sendCode" :disabled="disabled">{{btnTitle}}</el-button>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 100%" @click="phoneLogin">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
//import x from ''
export default {
    props: {
        ruleForm: {
            type: Object,
            required: true
        },
        countDown: {
            type: Number,
            default: 60
        }
        // rules: {
        //     type: Object,
        //     required: true
        // }
    },
    components: {

    },
    data () {
        let checkPhone = (rule,value,callback) => {
            console.log(value);
            if(!value) {
                return callback(new Error('手机号不能为空'))
            } else {
                let reg = /^1[3456789]\d{9}$/
                if(reg.test(value)) {
                    callback()
                } else {
                    return callback(new Error('请输入正确的手机号'))
                }
            }
        }
        return {
            rules: {
                phone: [
                    {validator: checkPhone, trigger: 'blur'}
                ],
                code: [
                    {required: true, message: '验证码不能为空', triggger: 'blur'}
                ]
            },
            disabled: false,
            btnTitle: '发送验证码',
            time: 0
        };
    },
    computed: {

    },
    methods: {
        sendCode() {
            // 手机号必须正确，不正确提示
            this.$refs.ruleForm.validateField('phone',errorMessage => {
                console.log(errorMessage);
                if(errorMessage) {
                    this.$message.error(errorMessage)
                } else {
                    // 倒计时
                    // 1.时间开始倒数
                    // 2.按钮禁用
                    // 3.如果倒计时结束，按钮变成可点击，文字显示重新发送
                    // 4.倒计时的过程中，按钮文字为 倒计时s后重新发送
                    let timmer = setInterval(handle => {
                        this.time--
                        this.btnTitle = `${this.time}s后重新发送`
                        this.disabled = true
                        if(this.time === 0) {
                            this.disabled = false
                            this.btnTitle = '重新发送'
                            this.time = this.countDown
                        }
                    }, 1000)
                    this.$emit('send')
                }
            })
        },
        phoneLogin() {
            this.$refs.ruleForm.validate((valid) => {
                if(valid) {
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
        this.time = this.countDown
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
</style>