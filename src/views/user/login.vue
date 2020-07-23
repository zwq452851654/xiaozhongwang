<template>
    <div class="login-box">
        <div class="content">
            <img src="../../static/img/login-bg.jpg" alt="">
            <div class="bg form-con">
                <div class="text-center mt-3">
                    <img src="../../static/img/xzw-logo2.png" alt="">
                </div>
                <div class="d-flex justify-content-center mt-3">
                    <el-button icon="iconfont iconQQ" size="small" type="primary">&nbsp;QQ登录</el-button>
                    <el-button icon="iconfont iconweixin1" size="small" type="success">&nbsp;微信登录</el-button>
                    <el-button icon="el-icon-user-solid" v-if="accountType !== 'account'" size="small" type="info" @click="loginType('account')">账户登录</el-button>
                    <el-button icon="el-icon-mobile-phone" v-if="accountType !== 'phone'" size="small" type="danger" @click="loginType('phone')">手机登录</el-button>
                </div>
                <el-divider>或</el-divider>
                <div class="form-text">
                    <div class="d-flex">
                        <el-select v-if="accountType == 'phone'" size="medium" class="mr-3" style="width:180px" v-model="accForm.select" slot="prepend">
                            <el-option label="中国 +86" value="china"></el-option>
                        </el-select>
                        <el-input :placeholder="accText" autocomplete="off" size="medium" v-model="accForm.account"></el-input>
                    </div>

                    <div class="d-flex align-items-center mt-4">
                        <el-input placeholder="图形验证码" autocomplete="off" style="width:180px" size="medium" v-model="accForm.picCode"></el-input>
                        <div style="width:210px;height:35px;background: aliceblue;" class="ml-3 mr-3"></div>
                        <i class="el-icon-refresh font-size-5 cursor-p"></i>
                    </div>

                    <div class="d-flex mt-4" v-if="accountType == 'phone'">
                        <el-input placeholder="请输入验证码" autocomplete="off" style="width:200px" size="medium" v-model="accForm.phoneCode"></el-input>
                        <el-button type="success" size="medium" class="ml-3" plain>发送验证码</el-button>
                    </div>

                    <div class="d-flex mt-4" v-if="accountType == 'account'">
                        <el-input placeholder="请输入登录密码" autocomplete="off" type="password" size="medium" v-model="accForm.pass"></el-input>
                    </div>

                    <div class="mt-4">
                        <el-button v-if="czfs == 'reg'" size="small" type="success" class="w-100" @click="regHandle()">注册</el-button>
                        <el-button v-else size="small" type="success" class="w-100">登录</el-button>
                    </div>
                    <div class="text-right font-size-1 mt-2">
                        <div v-if="czfs !== 'reg'">没有账号？<a href="##" @click="operatingHandle('reg')">立即注册</a></div>
                        <div v-else>已有账户，<a href="##" @click="operatingHandle('login')">立即登录</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import md5 from 'js-md5';
import { testPhoneHandle } from '@/utils/regExp'
export default {
    data(){
        return{
            accForm:{
                select: 'china'
            },
            accountType:"phone", // 账户类型  手机：phone  账户：account
            accText: "请输入常用手机号",
            czfs:"reg", //操作方式  登录：login   注册：reg
        }
    },
    mounted(){
        let str = "zhang132639";
        let v = md5(md5(md5(str)))
    },
    methods:{
        // 账户/手机号
        loginType(type){
            this.accountType = type;
            this.accText = type == 'phone' ? '请输入常用手机号' : '请输入用户名';
        },
        // 登录还是注册
        operatingHandle(t){
            this.czfs = t;
        },
        // 验证账户格式
        testAccount(){
            console.log(testPhoneHandle(this.accForm.account))
        },
        //验证 图形验证码
        testPicCode(){},
        // 注册
        regHandle(){
            this.accForm.accountType = this.accountType;
            this.testAccount();
            // 手机号： 判断account、picCode、phoneCode、
            // 用户名：account、picCode、pass
        }
    }
}
</script>
<style scoped>
.content{
    position: relative;
}
.login-box{
    background: #009cff;
}
.form-con{
    position: absolute;
    width: 430px;
    height: 444px;
    top: 0;
    right: 0;
}
.form-text{
    width: 320px;
    margin: 0 auto;
}
</style>