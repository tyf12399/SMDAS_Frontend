<script>
import user from '@/utils/user';
export  default{
    data(){
        return{
            img_url:'../src/assets/logo.png',
            username:'',
            password1:'',
            password2:'',
            question:'',
            useranswer:'',
            ifsucQA:false,
            ifsucchange:false, 
            
                
            
        };
    },
    methods:{
        getQA:function(){
            if(this.username=='')
            {
                alert("用户名不能为空");
            }
            else{
                user.getQ({username:this.username}).then(response => {
                console.log(response.data)
                this.question=this.response.data
                
            })
            }
        
    },
        checkanswer:function(){
            user.getA({useranswer:this.useranswer}).then(response => {
                    console.log(response.data)
                    this.ifsucQA=this.response.data
            }) 
                if(this.ifsucQA==true){
                    alert("密保答案正确，请修改密码")
                }
                else{
                    alert("密保答案错误，请重试")
                }
             
        },
        changepass:function(){
            if(this.password1=='')
            {
                alert("新密码不能为空");
            }
            else if(this.password2=='')
            {
                alert("再次输入密码不能为空");
            }
            else{
            if(this.password1==this.password2){
                user.changePass({username:this.username,newpassword:this.password1}).then(response => {
                    console.log(response.data)
                    
                    this.ifsucchange=this.response.data
                }) 
                if(this.ifsucchange==true){
                    alert("密码修改成功")
                    this.$router.push({path:'/user/login'})
                }
                else{
                    alert("密码修改失败，请重试")
                }
            }
            else{
                alert("两次输入的密码不一致，请重试")
            }
        }
        }


    }
}

</script>

<template>
    <view class="max">
        <image src="@/assets/login.png" mode=""></image>
    </view>
   <div style="margin-top: 10%;" background="@/assets/login.png" >

    <div >
    <el-row>
      <el-col :span="8"></el-col>
      <el-col :span="8" style="margin-left: 350px;margin-bottom:50px ;" class="regbox">
        <div style="margin-left: 50px;">
              <img class="img_logo" v-bind:src="img_url" style="vertical-align:middle" alt="">
              <text class="title" >沪深股市数据分析系统</text>
              
        </div >
        <div style="margin-left: 100px;">
          <el-space direction="vertical">
          <div class="form">
            <label>用户名：</label><el-input  v-model.trim="username" class="reginput" placeholder="请输入用户名"></el-input><br/>
          </div>
          <el-button @click.prevent="getQA" type="success" style="margin-left: 20%;">获取密保问题</el-button>
          <div class="form" style="margin-right: 200px;">
            <label >密保问题：</label><label >{{ this.question }}</label><br/>
          </div>
          <div class="form">
            <label>密保答案：</label><el-input  v-model.trim="question" class="reginput"  placeholder="请输入密保问题"></el-input><br/>
          </div>
          <el-button @click.prevent="checkanswer" type="success" style="margin-left: 20%;">提交</el-button>
          <div class="form" >
            <label >新密码：</label><el-input v-model.trim="answer" class="reginput"  placeholder="请输入新密码"></el-input><br/>
          </div>
          <div class="form" >
            <label >再次输入密码：</label><el-input v-model.trim="answer" class="reginput"  placeholder="请再次输入"></el-input><br/>
          </div>
          <el-button @click.prevent="changepass" type="success" style="margin-left: 20%;">确认修改</el-button>
         </el-space>
        </div>
       
      </el-col>
      <el-col :span="8"></el-col>
      <el-row></el-row>
  </el-row>  
  </div>
  </div> 
    
</template>


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
  width:450px;
  height: 450px;
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
    
