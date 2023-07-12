<script>
import user from '@/utils/user';


export default {
  
  
  data(){
    return{
      img_url:'../src/assets/logo.png',
      username:'',
      password:'',
      question:'',
      answer:'',
      ifreg:false,
      ifQA:false,  
  };
  },
  methods:{
  //点击完成按钮触发handlefinish
  
    handlefinish:function()
    { 
     
      //判断用户名和密码是否为空
     if(this.username=='')
      {
        alert("用户名不能为空");
      }
     else if(this.password=='')
      {
        alert("密码不能为空");
      }
      else if(this.question=='')
      {
        alert("密保问题不能为空");
      }
      else if(this.answer=='')
      {
        alert("密保答案不能为空");
      }
      
      else{
        
    // 页面显示前的数据获取：获取参数/数据异步请求
    this.ifreg = this.$route.query.ifreg
    this.ifQA = this.$route.query.ifQA
    // springboot  发送数据请求 参数 id    goods
    user.register({username:this.username,password:this.password,question:this.question,answer:this.answer}).then(response => {
      console.log(response.data)
      this.ifreg=response.data.ifreg
      this.ifQA=response.data.ifqa
    }) 
   
        if(this.ifreg==false ){
        
        alert("用户已注册或用户名、密码有问题，请重试");
      }
        if(this.ifQA==false ){
        
        alert("密保问题或问题答案有问题，请重试");
      }
        else if(this.ifreg==true){
        alert("注册成功");
        //完成注册后跳转至登录页面
        this.$router.replace('/user/login');
      }
      }
    },
   
  },
  

}  

</script>


<template>
<view class="max">
        <image src="@/assets/login.png" mode=""></image>
    </view>
   <div style="margin-top: 13%;" background="@/assets/login.png" >

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
            <label>用户名：</label><el-input  v-model.trim="username" class="reginput" placeholder="请输入用户名"></el-input><br/>
          </div>
          <div class="form">
            <label>密码：</label><el-input v-model.trim="password" class="reginput"  placeholder="请输入密码"></el-input><br/>
          </div>
          <div class="form">
            <label>密保问题：</label><el-input  v-model.trim="question" class="reginput"  placeholder="请输入密保问题"></el-input><br/>
          </div>
          <div class="form" >
            <label >密保答案：</label><el-input v-model.trim="answer" class="reginput"  placeholder="请输入密保答案"></el-input><br/>
          </div>
          <el-button @click.prevent="handlefinish" type="success" style="margin-left: 20%;">注册</el-button>
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
/* 设置页面背景图片为login.png */
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
  width:350px;
  height: 350px;
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


</style>
