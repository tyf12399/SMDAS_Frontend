<script >
                                              
import stockmarket from '@/utils/stockmarket';
import * as echarts from "echarts";

export default{

  data(){
    return{
      msg:'',
      img_url:'../src/assets/logo.png',
      username:'',
      password:'',
      tableData: [{
            hustockid: '2016-05-02',
            hucompanyname: '王小虎',
            hudate: '上海市普陀区金沙江路 1518 弄',
            huamount:20000,
            husales: 200333,
            huprice: 200333,
            huopenprice: 200333,
            hucloseprice: 200333,
            huhighprice: 200333,
            hulowprice: 200333,
            huincrease: -1.0,

          },
          {
            hustockid: '2016-05-02',
            hucompanyname: '王小虎',
            hudate: '上海市普陀区金沙江路 1518 弄',
            huamount:200000,
            husales: 20,
            huprice: 2003,
            huopenprice: 2033,
            hucloseprice: 2033,
            huhighprice: 2333,
            hulowprice: 2033,
            huincrease: 0.2,

          },
          
      ],
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
    
  },
  mounted() {
    this.initEcharts();
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
    goshen:function(){
      //跳转到深市页面
      this.$router.push({path:'/StockMarket/shen/shenselect'})
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
    }


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
              <text class="title" >沪市数据分析 | 基础信息查询</text>
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
              default-active="3-1"
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
                <el-menu-item index="2-2" @click="gocpNotice">公司公告</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3" class="item">
                <template #title>股市行情</template>
                <el-menu-item index="3-1">沪市行情</el-menu-item>
                <el-menu-item index="3-2" @click="goshen">深市行情</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="4" class="item" @click="gomystock">自选股</el-menu-item>
            </el-menu>
          </el-col>
      </el-row>

      <!-- 主体内容 -->
      <!-- 表格 -->
      <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="18"> 
          <div>
            <el-table :data="tableData" style="width: 100%,height:800px">
              <el-table-column prop="hustockid" label="股票代码"  />
              <el-table-column prop="hucompanyname" label="公司名称" />
              <el-table-column prop="hudate" label="日期" width="110" />
              <el-table-column prop="huamount" label="成交数量" width="110" sortable />
              <el-table-column prop="husales" label="成交总额" width="110" sortable/>
              <el-table-column prop="huprice" label="成交均价" width="110" sortable/>
              <el-table-column prop="huopenprice" label="开盘价" width="110" />
              <el-table-column prop="hucloseprice" label="收盘价" width="110" />
              <el-table-column prop="huhighprice" label="最高价" width="110" />
              <el-table-column prop="hulowprice" label="最低价" width="110" />
              <el-table-column prop="huincrease" label="涨跌幅" width="110" sortable />
            </el-table>
          </div>
        </el-col>
        <el-col :span="3"></el-col>
      </el-row>
      <!-- K线图 -->
      <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="8">
            <el-text type="large">K线图分析</el-text>
        </el-col>
        <el-col :span="13"></el-col>
      </el-row>
        <div class="echart" id="mychart" style="width:100%; height: 400px;"></div>
          
      


      <!-- 页脚 -->
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