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

                    <div class="d-flex mt-4 align-items-center" v-if="accountType == 'account'">
                        <el-input placeholder="请输入登录密码" autocomplete="off" type="password" size="medium" v-model="accForm.pass"></el-input>
                        <div class="ml-3 font-size-2 pass-strength">
                            <div class="strength-text" :style="{marginTop: topVal + 'px' }">
                                <span>低</span>
                                <span>中</span>
                                <span>高</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4">
                        <el-button v-if="czfs == 'reg'" size="small" type="success" class="w-100" @click="regHandle()">注册</el-button>
                        <el-button v-else size="small" type="success" class="w-100" @click="login()">登录</el-button>
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
import qs from 'qs'
export default {
    data(){
        return{
            accForm:{
                select: 'china',
                account: 'admin',
                pass: 'admin'
            },
            accountType:"account", // 账户类型  手机：phone  账户：account
            accText: "请输入常用手机号",
            czfs:"login", //操作方式  登录：login   注册：reg
            topVal: "0",
        }
    },
    mounted(){
        
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
        // 登录/注册手机号、用户名格式验证
        testAccount(){
            if(this.accountType == 'phone'){
                if(!testPhoneHandle(this.accForm.account)){
                    this.$message({
                        type: 'warning',
                        message: '手机号填写有误'
                    })
                    return false;
                }
            }else{
                if(this.accForm.account.length < 3){
                     this.$message({
                        type: 'warning',
                        message: '用户名由3位以上的数字或者字母组成'
                    })
                    return false;
                }
            }
            return true;
            
        },
        //验证 图形验证码
        testPicCode(){
            return true;
        },
        testPhoneCode(){
            return true;
        },
        // 注册
        regHandle(){
            this.accForm.accountType = this.accountType;
            if(this.testAccount() && this.testPicCode()){
                // 手机号方式注册
                if(this.accountType == 'phone' && this.testPhoneCode()){
                    console.log('可以进行手机注册')                    
                }

                // 账号注册方式
                if(this.accountType == 'account' && this.testPicCode()){
                    if(this.accForm.pass.length < 5){
                        this.$message({
                            type: 'warning',
                            message: '密码不能空且不少于六位数'
                        })
                    }else{
                        this.accForm.pass = md5(md5(md5(this.accForm.pass)))
                        this.$http.post('/user/reg', this.accForm).then( res =>{
                            if(res.data.code){
                                this.$message({
                                    type: 'success',
                                    message: '完成注册，请直接登录'
                                })
                            }else{
                                this.$message({
                                    type: 'warning',
                                    message: res.data.msg
                                })
                            }
                        })
                    }
                }
            }
        },
        login(){
            this.accForm.accountType = this.accountType;
            if(this.testAccount() && this.testPicCode()){
                if(this.accountType == 'phone' && this.testPhoneCode()){
                    console.log('进行手机登录')                    
                }
                if(this.accountType == 'account'){
                    if(this.accForm.pass.length < 5){
                        this.$message({
                            type: 'warning',
                            message: '密码输入有误'
                        })
                    }else{
                        this.accForm.pass = md5(md5(md5(this.accForm.pass)))
                        this.$http.post('/user/login', this.accForm).then( res=>{
                            if(res.data.code){
                                localStorage.setItem('token', res.data.token);
                                this.$store.dispatch('loginFun', true);
                                this.$router.replace('/');
                            }
                        })
                    }
                }
            }
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
.pass-strength{
    height: 30px;
    overflow: hidden;
}
.strength-text{
    transition: margin .5s;
}
.strength-text span{
    display: block;
    height: 30px;
    line-height: 30px;
}

</style>