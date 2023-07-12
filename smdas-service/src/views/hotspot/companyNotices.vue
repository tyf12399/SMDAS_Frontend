
<script>

//vue yemianduixiang
export default{
  data(){
    return{
      msg:'',
      img_url:'../src/assets/logo.png',
      username:'',
      password:'',
      
      }
    
  },
 
  methods:{
    search:function(){
      alert(this.msg)
    },
    gologin:function(){
      //跳转到login页面
      this.$router.push({path:'/user/login'})
    },
    goregister:function(){
      //跳转到register页面
      this.$router.push({path:'/user/register'})
    },
    gohomeview:function(){
      //跳转到homeview页面
      this.$router.push({path:'/'})
    },
    gonews:function(){
      //跳转到新闻页面
      this.$router.push({path:'/hotspot/news'})
    },
    gocpNotice:function(){
      //跳转到公司公告页面
      this.$router.push({path:'/hotspot/companyNotices'})
    },
    gomystock:function(){
      //跳转到zixun页面
      this.$router.push({path:'/mystock'})
  },
  gohu:function(){
      //跳转到沪市页面
      this.$router.push({path:'/StockMarket/hu/huselect'})
    },
    goshen:function(){
      //跳转到深市页面
      this.$router.push({path:'/StockMarket/shen/shenselect'})
    },

  }
}

</script>



<template> 
  <div class="common-layout">
    <el-container>
        <!-- 导航栏 -->
        <el-row>
          <el-col :span="2"><div class="grid-content" /></el-col>
          <el-col :span="3"><div class="grid-content" /></el-col>
          <el-col :span="7"><div class="grid-content" /></el-col>
          <el-col :span="7"><div class="grid-content" /></el-col>
          <el-col :span="3"><div class="grid-content" >
            <el-button  @click="gologin">登录</el-button>
            <el-button  @click="goregister">注册</el-button>
            </div>
          </el-col>
          <el-col :span="2"><div class="grid-content" /></el-col>
        </el-row>
      
        <!-- logo&title -->
      <el-row>
          <el-col :span="3"> </el-col>
          <el-col :span="12"> 
            <div>
              <img class="img_logo" v-bind:src="img_url" style="vertical-align:middle" alt="">
              <text class="title" >公司公告查看</text>
            </div>
          </el-col>
          <!-- 搜索框及按钮 -->
          <el-col :span="4"> 
            <div>
              <el-input placeholder="请输入搜索内容" v-model="msg"  style="margin-top: 50px;"></el-input>
            </div>
          </el-col>
          <el-col :span="2"> 
            <el-button @click="search" class="searchButton1" style="margin-top: 50px;margin-left: 5px;" type ="danger" round >搜索</el-button>
          </el-col>
          <el-col :span="3"> </el-col>
      </el-row>

      <!-- 主red导航栏-->
      <el-row>
          <el-col :span="24"> 
            <el-menu
              default-active="2-2"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#c45656"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="handleSelect"
            >
              <el-menu-item index="1" class="item" @click="gohomeview">首页</el-menu-item>
              <el-sub-menu index="2" class="item">
                <template #title>热点资讯</template>
                <el-menu-item index="2-1" @click="gonews">财经新闻</el-menu-item>
                <el-menu-item index="2-2">公司公告</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3" class="item">
                <template #title>股市行情</template>
                <el-menu-item index="3-1" @click="gohu">沪市行情</el-menu-item>
                <el-menu-item index="3-2" @click="goshen">深市行情</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="4" class="item" @click="gomystock">自选股</el-menu-item>
            </el-menu>
          </el-col>
      </el-row>

      <!-- 主体内容 -->
     



      
      <el-footer>
        <el-row>
          <el-col :span="12">   
            <div class="grid-content"> </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content"></div>
          </el-col>

        </el-row>
      </el-footer> 
    </el-container>
  </div>
</template>





<style lang="scss">
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;

}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: #e9e9eb;
}
.img_logo {
    width: 100px;
    height: 100px;
}
.common-layout {
  //background: #f0f2f5;
  width: 100%;
  height: 100%;
}
.title{
  font-size: 30px;
  font-weight: bold;
  vertical-align: middle;
  line-height: 100px;  
}
.el-menu-demo {
  justify-content: center;  
}
.item{
  width: 280px;
}


  


</style>