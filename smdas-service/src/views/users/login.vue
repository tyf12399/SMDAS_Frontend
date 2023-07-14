<script>
import user from '@/utils/user'
export default {
  data(){
    return{
      img_url:'../src/assets/logo.png',
      account:'',//zhanghao
      password:'',//密码
      username:'',//用户名
      iflogin:false,//判断是否登录zhuangtai
      ifsuclog:false,//判断是否登录成功
    };
  },
  methods:{
    handlelogin:function()
    {
      
      if(this.account=='')//名字为空
       {
         alert('账号不为空');
       }
      else if(this.password=='')//密码为空
       {
         alert('密码不为空');
       }
      else {
        this.ifsuclog = this.$route.query.ifsuclog
        this.username = this.$route.query.username
        user.login({useraccount:this.account,password:this.password}).then(response => {
      console.log(response.data)
      this.ifsuclog=response.data.ifsuclog
      this.username=response.data.username
      
      
      if(this.ifsuclog ==false ){
        alert("账号或密码错误，请重试");
      }
      else if(this.ifsuclog == true){
        this.iflogin=this.$route.query.iflogin
        this.iflogin=true;//登录成功
        this.$router.push({path:'/',query:{iflogin:true,account:this.account,username:this.username}})//跳转到主页面
        //this.username='';
      }}) 
      }
    },
    handleregister:function()
    {
      this.$router.replace('/user/register')//点击注册按钮，跳转至注册页面
    },
    handlechangepassword:function()
    {
      this.$router.replace('/user/changepassword')//点击修改密码按钮，跳转至修改密码页面
    }
  },
  // mounted() {
  //       // 页面显示前数的据获取：获取参数/数据异步请求
  //       //this.username = this.$route.query.username
  //       // springboot  发送数据请求 参数 id    goods

  //       user.getUsers().then(response => {
  //          console.log(response.data)
  //         //this.name=response.data
  //       })
  //   }
};
</script>

<template>
<view class="max">
        <image src="@/assets/login.png" mode=""></image>
    </view>
   <div style="margin-top: 14%;" background="@/assets/login.png" >

    <div >
    <el-row>
      <el-col :span="8"></el-col>
      <el-col :span="8" style="margin-left: 350px;" class="regbox">
        <div style="margin-left: 50px;">
              <img class="img_logo" v-bind:src="img_url" style="vertical-align:middle" alt="">
              <text class="title" >沪深股市数据分析系统</text>
              
        </div >
        <div style="margin-left: 100px;">
          <el-space direction="vertical">
          <div class="form">
            <label>账号：</label><el-input  v-model.trim="account" class="reginput"  placeholder="请输入账号"></el-input><br/>
          </div>
          <div class="form">
            <label>密码：</label><el-input v-model.trim="password" class="reginput"  placeholder="请输入密码" ></el-input><br/>
          </div>
          <el-link @click="handlechangepassword" style="color:blue;margin-left: 20px;">
            忘记密码
          </el-link>
          <div class="logbutbox">
          <el-button @click.prevent="handlelogin" type="success" style="margin-left: 20%;" class="logbut" >登录</el-button>
          <el-button @click.prevent="handleregister"  style="margin-left: 20%;" class="logbut">注册</el-button>
          </div>
         </el-space>
        </div>
       
      </el-col>
      <el-col :span="8"></el-col>
      <el-row></el-row>
  </el-row>  
  </div>
  </div> 
    </template>
    
    
    //css
    <style scoped>
 .max{
  background-image: url("@/assets/login.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.regbox{
  
  background-color: rgba(255,255,255);
  width:300px;
  height: 300px;
}
.img_logo {
    width:80px;
    height: 80px;
}
.reginput{
  width: 200px;
  height: 30px;
  margin-left: 10px;
}
.logbut{
  width: 100px;
  height: 35px;
}
.logbutbox{
  /* 让两个按钮并排排列 */
  display: flex;
  justify-content: space-between;
}
    
    </style>
    