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
              <text class="title" >自选股 | 自选股管理</text>
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
    <el-menu-item index="1" style="width: 250px;">自选股管理</el-menu-item>
  </el-menu>
</el-col>
    <el-col :span="3"></el-col>
  </el-row>

  <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="18"> 
          <el-button @click="getmystock" type="primary" round style="margin-left: 10px;">查询我的自选股</el-button>
          <el-input placeholder="请输入股票代码" v-model="inputid" style="width: 350px;height: 30px;margin-left: 350px;"></el-input>
          <el-button type="success" style="width: 100px;margin-left: 20px;" @click="addmystock">添加到自选股</el-button>
          <el-button type="danger" style="width: 100px;margin-left: 20px;" @click="delmystock">删除自选股</el-button>
          <div>
            <el-table :data="tableData" border style="width: 800px,weight:500px;margin-top:20px;">
              <el-table-column prop="mysid" label="股票代码"  fixed="left" width="250" />
              <el-table-column prop="mysdate" label="日期" width="250" sortable/>
              <el-table-column prop="mysprice" label="成交均价" width="400" sortable/>
              <el-table-column prop="myincrease" label="涨跌幅" width="250" sortable />
              
              
            </el-table>

          </div>
          
        </el-col>
        <el-col :span="3"></el-col>
    </el-row>


  
  
</div>


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
import axios from "axios";
import { resolveTransitionHooks } from "vue";
import mystock from "@/utils/mystock";

  export default {
     
    methods: {
      deleteRow(index, rows) {
        this.ifdel=this.$route.query.ifdel;
         mystock.delMyStock({useraccount:this.account,mystockid:rows[index].tableData}).then(res=>{
           this.ifdel=res.data;
           if(this.ifdel==true){
          alert("删除成功");
          rows.splice(index, 1);}
         }).catch(err=>{
           console.log(err);
         }) 
      },
      delmystock(){
        this.ifdel=this.$route.query.ifdel;
         mystock.delMyStock({useraccount:this.account,mystockid:this.inputid}).then(res=>{
           this.ifdel=res.data;
          
          alert("删除成功");
         }).catch(err=>{
           console.log(err);
         })
      },

      addmystock () {
        this.ifaddms=this.$route.query.ifaddms;
         mystock.addMyStock({useraccount:this.account,mystockid:this.inputid}).then(res=>{
          console.log(res);
           this.ifaddms=res;
           alert("添加成功");
         }).catch(err=>{
           console.log(err);
         })
        

        
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
        this.$router.push({ path: "/mystock/msadvice" ,query:{account:this.account}});
      },
      changePage4: function () {
        this.$router.push({ path: "/mystock",query:{account:this.account} });
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
  getmystock:function(){
    this.tableData=this.$route.query.tableData;
     mystock.getMyStock({account:this.account}).then(response=>{
       this.tableData=response.data;
       console.log(this.tableData);
    }).catch(err=>{
      console.log(err);
    })

    
  },
  
    
    
  },
    
    
    data() {
      return {
        account:this.$route.query.account,
        img_url:'../../src/assets/logo.png',
        inputid:'',
        ifdel:false,
        ifaddms:false,
        adddata:{
            mystockid: '2016-05-06',
            mycompanyname: '王小6',
            mydate: '上海市普陀区金沙江路 666',
            myamount:200666,
            mysales: 200366,
            myprice: 66,
            myopenprice: 6,
            mycloseprice: 66,
            myhighprice: 6,
            mylowprice: 66,
            myincrease: -1.66,

          },
        
        tableData1: [{
            mystockid: '2016-05-02',
            mycompanyname: '王小虎',
            mydate: '上海市普陀区金沙江路 1518 弄',
            myamount:20000,
            mysales: 200333,
            myprice: 200333,
            myopenprice: 200333,
            mycloseprice: 200333,
            myhighprice: 200333,
            mylowprice: 200333,
            myincrease: -1.0,

          },
          {
            mystockid: '2016-05-02',
            mycompanyname: '王小虎',
            mydate: '上海市普陀区金沙江路 1518 弄',
            myamount:200000,
            mysales: 20,
            myprice: 2003,
            myopenprice: 2033,
            mycloseprice: 2033,
            myhighprice: 2333,
            mylowprice: 2033,
            myincrease: 0.2,

          },
          
          ],
        tableData:[{}],
        
        
      }
    }
  }
</script>