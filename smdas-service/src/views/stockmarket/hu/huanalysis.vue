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

<div id="shujufenxi" >
  
  <el-row>
          <el-col :span="3"> </el-col>
          <el-col :span="12"> 
            <div>
              <img class="img_logo" v-bind:src="img_url" style="vertical-align:middle" alt="">
              <text class="title" >沪市数据分析 | 数据分析</text>
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
    <el-menu-item index="1" style="width: 250px;" @click="changePage2">基础信息查询</el-menu-item>
    <el-menu-item index="2" style="width: 250px;" >数据分析</el-menu-item>
  </el-menu>
  <div style="margin-left: 33%;">
  <el-input placeholder="请输入股票代码"
  v-model="inputid" style="height:30px;width: 300px;margin-top: 20px;"/> 

   <el-button @click="huanaly" type="primary" class="huana" round style="margin-top: 20px;margin-left: 10px;">分析</el-button>
   <el-button @click="huhis" type="primary" class="huana" round style="margin-top: 20px;">历史记录</el-button>
   <el-popconfirm
    width="220"
    confirm-button-text="OK"
    cancel-button-text=" "
    icon-color="#626AEF"
    title="预测结果仅做参考，请谨慎投资"
  >
    <template #reference>
      <el-button @click="hupred" type="primary" class="huana" round style="margin-top: 20px;">预测</el-button>
    </template>
  </el-popconfirm>
   
  </div><br>
   <!-- K线图 -->
   <div>
       <el-text type="primary" size="large" >K线图分析:</el-text>
      <div class="echart" id="mychart" style="width:100%; height: 400px;"></div>
  </div>
  <div id="app">
    <el-text type="primary" size="large" >系统预测:</el-text>
    <div id="main" style="width: 100%; height: 400px"></div>
  </div>

  </el-col>
    <el-col :span="3"></el-col>
  </el-row>
</div>
<div>
  
  <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18"> 
          <el-text type="primary" size="large" >历史交易记录:</el-text>
        <div>
          <el-table :data="tableData" border style="width: 100%,height:800px;margin-top:20px;" stripe>
            <el-table-column prop="hisstockid" label="股票代码"  fixed="left" />
            <el-table-column prop="hisdate" label="日期" width="110" />
            <el-table-column prop="hisamount" label="成交数量" width="110" sortable />
            <el-table-column prop="hissales" label="成交总额" width="110" sortable/>
            <el-table-column prop="hisprice" label="成交均价" width="110" sortable/>
            <el-table-column prop="hisopenprice" label="开盘价" width="110" />
            <el-table-column prop="hiscloseprice" label="收盘价" width="110" />
            <el-table-column prop="hishighprice" label="最高价" width="110" />
            <el-table-column prop="hislowprice" label="最低价" width="110" />
            <el-table-column prop="hisincrease" label="涨跌幅" width="110" sortable />
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
import stockmarket from '@/utils/stockmarket'


  export default {
    mounted() {
  this.initEcharts();
  this.$nextTick(function () {
      this.drawLine("main");
    });

},
    methods: {
      drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["近五日收盘价"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
 
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4", "5"],
        },
        yAxis: {
          type: "value",
        },
 
        series: [
          {
            name: "近五日收盘价",
            type: "line",
            stack: "总额",
            data: this.hupredata,
          },
        ],
      });
    },

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
        this.$router.push({ path: "/stockmarket/hu/huanalysis" });
      },
      changePage2: function () {
        this.$router.push({ path: "/stockmarket/hu/huselect" });
      },
    initEcharts() {
      const option = {
        title: {},
        tooltip: {},
        legend: {},
        xAxis: {
          data: this.datatest.map(item => item.date) 
        },
        yAxis: {},
        series: [
          {
            type: "candlestick",
            data: this.datatest.map(item => [
              item.openprice,
              item.closeprice,
              item.lowprice,
              item.highprice
            ])
            
          }],
          
      };
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
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
  huanaly:function(){
      this.datatest=this.$route.query.datatest;
       stockmarket.getKData({stockid:this.inputid})
       .then(res => {
         this.datatest = res.data;
         this.initEcharts();
       })
     
     
  },
  hupred:function(){
      
      this.hupredata=this.$route.query.hupredata;
       stockmarket.getPrediction({stockid:this.inputid})
       .then(res => {
        console.log(res.data);
         this.hupredata = res.data;
        this.$nextTick(function () {
            this.drawLine("main");
              });
       })
     
     

  },
  huhis:function(){
    this.tableData=this.$route.query.tableData;
     stockmarket.getHisRecord({stockid:this.inputid})
       .then(res => {
         this.tableData = res.data;
       })
  },
    
    
  },
    
    
    data() {
      return {
        img_url:'../../src/assets/logo.png',
        inputid: "",
        
        datatest1:[
        {
          date: "2016-05-02",
          openprice: 100,
          closeprice: 80,
          highprice: 120,
          lowprice: 80,
      },
      {
        date: "2016-05-03",
        openprice: 80,
        closeprice: 70,
        highprice: 90,
        lowprice: 70,
      },
      {
        date: "2016-05-04",
        openprice: 70,
        closeprice: 50,
        highprice: 80,
        lowprice: 50,
      },
      {
        date: "2016-05-05",
        openprice: 50,
        closeprice: 60,
        highprice: 70,
        lowprice: 50,
      },
      {
        date: "2016-05-06",
        openprice: 60,
        closeprice: 80,
        highprice: 90,
        lowprice: 60,
        
      }
        ],
        tableData1: [{
          hisstockid: '2016-05-02',
          hiscompanyname: '王小虎',
          hisdate: '上海市普陀区金沙江路 1518 弄',
          hisamount:20000,
          hissales: 200333,
          hisprice: 200333,
          hisopenprice: 200333,
          hiscloseprice: 200333,
          hishighprice: 200333,
          hislowprice: 200333,
          hisincrease: -1.0,

        },
        {
          hisstockid: '2016-05-02',
          hiscompanyname: '王小虎',
          hisdate: '上海市普陀区金沙江路 1518 弄',
          hisamount:200000,
          hissales: 20,
          hisprice: 2003,
          hisopenprice: 2033,
          hiscloseprice: 2033,
          hishighprice: 2333,
          hislowprice: 2033,
          hisincrease: 0.2,

        },
        
        ],
        tableData: [{}],
        datatest: [{}],
        charts: "",
        hupredata:[{}],
        opinionData: ["66", "56", "46", "54", "63"],
        
      }
    }
  }
</script>