<template>
  <el-row>
    <el-col :span="24">
  <el-menu
    default-active=2-1
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
  <el-menu-item index="1" style="margin-left: 200px;" @click="gohomeview">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>热点资讯</template>
      <el-menu-item index="2-1" @click="gonews">财经新闻</el-menu-item>
      <el-menu-item index="2-2" @click="gocpNotice">公司公告</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>股市行情</template>
      <el-menu-item index="3-1" @click="gohu">沪市行情</el-menu-item>
      <el-menu-item index="3-2" @click="goshen">深市行情</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4" @click="gomystock">自选股</el-menu-item>
    <el-menu-item index="5" style="margin-left: 500px;" @click="gologin">登录</el-menu-item>
    <el-menu-item index="6" @click="goregister">注册</el-menu-item>
  </el-menu>
</el-col>
  </el-row>

<div id="xinxichaxun" >
  <el-row>
          <el-col :span="3"> </el-col>
          <el-col :span="12"> 
            <div>
              <img class="img_logo" v-bind:src="img_url" style="vertical-align:middle" alt="">
              <text class="title" >自选股 | 财经新闻</text>
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

  <el-row>
    <el-col :span="3"></el-col>
    <el-col :span="18">
      <el-divider style="border-color: #F56C6C;border-width: 5px;"  />  

      <el-menu
      default-active="1"
       mode="horizontal"
       background-color="#c45656"
       text-color="#fff"
       active-text-color="#ffd04b"
       @select="handleSelect"
  >
    <el-menu-item index="1" style="width: 250px;" @click="gonews">财经新闻</el-menu-item>
    <el-menu-item index="2" style="width: 250px;" @click="gocpNotice">公司公告</el-menu-item>
  </el-menu>

  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
  </el-table>

  
      
  
  </el-col>
    <el-col :span="3"></el-col>
  </el-row>
</div>


  

</template>

<script >
import mystock from '@/utils/mystock'
  export default {
     
    methods: {
   
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
    //跳转到zixuan页面
    this.$router.push({path:'/mystock'})
  },
  goshen:function(){
    //跳转到深市页面
    this.$router.push({path:'/StockMarket/shen/shenselect'})
  },
  gohu:function(){
    //跳转到沪市页面
    this.$router.push({path:'/StockMarket/hu/huselect'})
  
  },
  },
    
  
    
    
    data() {
      return {
        img_url:'../../src/assets/logo.png',
        

        
      }
    }
  }
</script>