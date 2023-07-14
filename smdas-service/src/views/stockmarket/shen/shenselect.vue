<template>
    <el-row>
      <el-col :span="24">
    <el-menu
      default-active=3-2
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
                <text class="title" >深市数据分析 | 基础信息查询</text>
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
      <el-menu-item index="1" style="width: 250px;">基础信息查询</el-menu-item>
      <el-menu-item index="2" style="width: 250px;" @click="changePage1">数据分析</el-menu-item>
    </el-menu>
  

    </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
  <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="18"> 
          <el-button @click="getshenstock" type="primary" round>查询深市股票信息</el-button>
          <div>
            <el-table :data="tableData" border style="width: 100%,weight:800px;margin-top:20px;" stripe>
              <el-table-column prop="shenstock" label="股票代码"  fixed="left" />
              <el-table-column prop="shendate" label="日期" width="110" />
              <el-table-column prop="shenamount" label="成交数量" width="110" sortable />
              <el-table-column prop="shensales" label="成交总额" width="110" sortable/>
              <el-table-column prop="shenprice" label="成交均价" width="110" sortable/>
              <el-table-column prop="shenopenprice" label="开盘价" width="110" />
              <el-table-column prop="shencloseprice" label="收盘价" width="110" />
              <el-table-column prop="shenhighprice" label="最高价" width="110" />
              <el-table-column prop="shenlowprice" label="最低价" width="110" />
              <el-table-column prop="shenincrease" label="涨跌幅" width="110" sortable />
            </el-table>
          </div>
        </el-col>
        <el-col :span="3"></el-col>
      </el-row>
  
 
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
  
  </template>
  
  <script >
  import * as echarts from "echarts";
  import stockmarket from '@/utils/stockmarket'
  
  
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
      changePage1: function () {
        this.$router.push({ path: "/stockmarket/shen/shenanalysis" });
      },
      changePage2: function () {
        this.$router.push({ path: "/stockmarket/shen/shenselect" });
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
    getshenstock:function(){
      this.tableData=this.$route.query.tableData;
       stockmarket.getshenStocks().then(response => {
        console.log(response);
        this.tableData=response.data;
        console.log(this.tableData);
       })
      
    },
      
      
    },
      
      
      data() {
        return {
          img_url:'../../src/assets/logo.png',
          account:this.$route.query.account,
          tableData1: [{
            shenstockid: '2016-05-02',
            shencompanyname: '王小虎',
            shendate: '上海市普陀区金沙江路 1518 弄',
            shenamount:20000,
            shensales: 200333,
            shenprice: 200333,
            shenopenprice: 200333,
            shencloseprice: 200333,
            shenhighprice: 200333,
            shenlowprice: 200333,
            shenincrease: -1.0,

          },
          {
            shenstockid: '2016-05-02',
            shencompanyname: '王小虎',
            shendate: '上海市普陀区金沙江路 1518 弄',
            shenamount:200000,
            shensales: 20,
            shenprice: 2003,
            shenopenprice: 2033,
            shencloseprice: 2033,
            shenhighprice: 2333,
            shenlowprice: 2033,
            shenincrease: 0.2,

          },
          
          ],
          tableData:[{}],
          
        }
      }
    }
  </script>