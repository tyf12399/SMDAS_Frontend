<template>
  <el-row>
    <el-col :span="24">
  <el-menu
    default-active=1
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1" style="margin-left: 200px;">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>热点资讯</template>
      <el-menu-item index="2-1">财经新闻</el-menu-item>
      <el-menu-item index="2-2">公司公告</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>股市行情</template>
      <el-menu-item index="3-1">沪市行情</el-menu-item>
      <el-menu-item index="3-2">深市行情</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4" >自选股</el-menu-item>
    <el-menu-item index="5" style="margin-left: 500px;">登录</el-menu-item>
    <el-menu-item index="6" >注册</el-menu-item>
  </el-menu>
</el-col>
  </el-row>
<div id="xinxichaxun" v-if="ifex1">
  <div>{{ ifex1 }}</div>
  <div>{{ ifex2 }}</div>
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

      
  <el-table
    ref="filterTable"
    :data="tableData1"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
      :filters="[{text: '2016-05-01', label: zip>200000}, {text: '2016-05-02', value: '200333'}]"
      :filter-method="filterHandler"
      >
    </el-table-column>
    
  </el-table>
  </el-col>
    <el-col :span="3"></el-col>
  </el-row>
</div>

<div id="shujufenxi" v-else-if="ifex2">
  <div>{{ ifex1 }}</div>
  <div>{{ ifex2 }}</div>
  <el-row>
          <el-col :span="3"> </el-col>
          <el-col :span="12"> 
            <div>
              <img class="img_logo" v-bind:src="img_url" style="vertical-align:middle" alt="">
              <text class="title" >深市数据分析 | 数据分析</text>
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
    <el-menu-item index="1" style="width: 250px;" @click="changePage2">基础信息查询</el-menu-item>
    <el-menu-item index="2" style="width: 250px;">数据分析</el-menu-item>
  </el-menu>

      
   <!-- K线图 -->
   <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="8">
            <el-text type="large">K线图分析</el-text>
        </el-col>
        <el-col :span="13"></el-col>
      </el-row>
        <div class="echart" id="mychart" style="width:100%; height: 400px;"></div>
  </el-col>
    <el-col :span="3"></el-col>
  </el-row>
</div>
  

</template>

<script >
import * as echarts from "echarts";



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
      this.ifex1 = this.$route.query.ifex1;
      this.ifex2 = this.$route.query.ifex2;
      this.ifex1 = false;
      this.ifex2 = true;
    },
    changePage2: function () {
      this.ifex1 = this.$route.query.ifex1;
      this.ifex2 = this.$route.query.ifex2;
      this.ifex1 = true;
      this.ifex2 = false;
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
    
    
  },
    
    
    data() {
      return {
        img_url:'../src/assets/logo.png',
        tableData1: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        ifex1: true,
        ifex2: false,
        datatest:[
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
        
      }
    }
  }
</script>