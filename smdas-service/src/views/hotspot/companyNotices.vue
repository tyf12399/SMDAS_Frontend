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
              <text class="title" >公司公告</text>
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
      default-active="2"
       mode="horizontal"
       background-color="#c45656"
       text-color="#fff"
       active-text-color="#ffd04b"
       @select="handleSelect"
  >
    <el-menu-item index="1" style="width: 250px;" @click="gonews">财经新闻</el-menu-item>
    <el-menu-item index="2" style="width: 250px;" @click="gocpNotice">公司公告</el-menu-item>
  </el-menu>

  <el-table :data="newsdata" border style="width: 100%,weight:400px;margin-top:20px;" stripe>
              <el-table-column prop="newsname" label="新闻标题" />
              <el-table-column label="网址跳转" >
                <template #default="scope">
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="See(scope.row.newsurl)"

                >
                  点击跳转
                </el-button>
              </template>
                </el-table-column>
              
            </el-table>

  
      
  
  </el-col>
    <el-col :span="3"></el-col>
  </el-row>
</div>


  

</template>

<script >

import hotspot from '@/utils/hotspot'
import mystock from '@/utils/mystock'
  export default {
    created(){
      this.getNewsData()
    }, 
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
  See(e){
    window.location.href=e
  },
  getNewsData(){
    this.newsdata=this.$route.query.newsdata;
    // hotspot.getNews().then(res=>{
    //   this.newsData = res.data
    //   console.log(res.data)
    // })
    this.newsdata=this.tabledata
  },
  },
    
  
    
    
    data() {
      return {
        img_url:'../../src/assets/logo.png',
        newsdata:[],
        tabledata:[{
          newsname: '网宿科技',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300017#',
        },
        {
          newsname: '北陆药业',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300016#',
        },
        {
          newsname: '爱尔眼科',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300015#',
        },
        {
          newsname: '中原股份',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300018#',
        },
        {
          newsname: '硅宝科技',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300019#',
        },
        {
          newsname: '银江技术',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300020#',
        },
        {
          newsname: '大禹节水',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300021#',
        },
        {
          newsname: '鼎汉技术',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300011#',
        },
        {
          newsname: '华测检测',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300012#',
        },
        {
          newsname: '新宁物流',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300013#',
        },
        {
          newsname: '*ST豆神',
          newsurl: ' http://emweb.securities.eastmoney.com/PC_HSF10/ShareholderResearch/Index?type=web&code=SZ300010#',
        },

      ],

        
      }
    }
  }
</script>