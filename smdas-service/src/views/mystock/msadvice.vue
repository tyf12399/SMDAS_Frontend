<template>
    <el-row>
      <el-col :span="24">
    <el-menu
      default-active=4
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
                <text class="title" >自选股 | 系统参考建议</text>
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
      <el-menu-item index="1" style="width: 250px;" @click="changePage4">自选股管理</el-menu-item>
      <el-menu-item index="2" style="width: 250px;" >系统参考建议</el-menu-item>
    </el-menu>
  
    <el-tabs type="border-card" style="margin-top: 30px;">
    <el-tab-pane label="您的投资倾向" >{{ myadvice }}</el-tab-pane>
    <el-tab-pane label="系统推荐股票">
      <el-table :data="tableData" border style="width: 100%,height:800px;margin-top:20px;" stripe>
              <el-table-column prop="adstockid" label="股票代码" width="300" />
              <el-table-column prop="adcompanyname" label="公司名称" width="300" />
              <el-table-column prop="adprice" label="股票均价" width="300" />
              <el-table-column prop="adincrease" label="涨跌幅" width="300" />
            </el-table>

    </el-tab-pane>
  </el-tabs>
        
    
    </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
  
 
    
  
  </template>
  
  <script >
 import mystock from '@/utils/mystock'
    export default {
       
      methods: {
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] == value;
        },
        filterTag(value, row, column) {
        const property = column["property"];
        return row[property] === value;
      },
      changePage3: function () {
        this.$router.push({ path: "/mystock/msadvice" });
      },
      changePage4: function () {
        this.$router.push({ path: "/mystock" });
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
    getma: function () {
      this.myadvice=this.$route.query.myadvice;
      mystock.getAdvice({useraccount:this.account}).then(res=>{
        this.myadvice=res.data;
      }).catch(err=>{
        console.log(err);
      })
    },  
    getmas:function(){
      this.table=this.$route.query.table;
      mystock.getAddStock({useraccount:this.account}).then(res=>{
        this.table=res.data;
      }).catch(err=>{
        console.log(err);
      })
    },
    },
      
    
      
      
      data() {
        return {
          img_url:'../../src/assets/logo.png',
          account:this.$route.query.account,
          myadvice:'',
          table:[{}],

          
        }
      }
    }
  </script>