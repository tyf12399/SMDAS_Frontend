
<script>
import stockmarket from '@/utils/stockmarket';

//vue yemianduixiang
export default{
  data(){
    return{
      msg:'',
      account:this.$route.query.account,
      img_url:'./src/assets/logo.png',
      username:this.$route.query.username,
      //新建一个变量iflogin会随着传的值变化
      iflogin:this.$route.query.iflogin,
      mainstock:[{}],
      maintableData:[{
          stockid:'001287',
          stockprice:'38.06',
          stockincrease:224.19,
        },
        {
          stockid:'688361',
          stockprice:'68.35',
          stockincrease:189.62,
        },
        {
          stockid:'001328',
          stockprice:'56.04',
          stockincrease:179.08,

        },
        {
          stockid:'688502',
          stockprice:'191.3',
          stockincrease:177.17,

        },
        {
          stockid:'688435',
          stockprice:'107',
          stockincrease:176.77,

        },
        {
          stockid:'688515',
          stockprice:'232.48',
          stockincrease:152.7,

        },
        {
          stockid:'688629',
          stockprice:'23.11',
          stockincrease:149.57,

        },
        {
          stockid:'688343',
          stockprice:'104.11',
          stockincrease:137.04,

        },
        {
          stockid:'301358',
          stockprice:'53.2',
          stockincrease:127.64,

        },
        {
          stockid:'301488',
          stockprice:'90.01',
          stockincrease:126.27,
        },

      ],
      newslist:[{
        newsid:'1',
        mainnews:'风口！这些板块成为避风港？',  
        },
        {
        newsid:'2',
        mainnews:'8700亿美元！欧佩克2022年石油收入创近8年新高',  
        },
        {
        newsid:'3',
        mainnews:'虚构的预付款项后续会如何处置？',  
        },
       
        {
        newsid:'4',
        mainnews:' 主力复盘：23亿资金狂买半导体 3亿砸盘拓维信息',  
        },
        {
        newsid:'5',
        mainnews:'李强主持召开平台企业座谈会',  
        },
        {
        newsid:'6',
        mainnews:'华泰证券:汽车行业景气走出低点 二季度进上行期',  
        },
        {
        newsid:'7',
        mainnews:'A股港股爆发了！原因找到了！',  
        },
        {
        newsid:'8',
        mainnews:'英伟达入场 AI为药物研发插上翅膀 CRO又行了？',  
        },
        {
        newsid:'9',
        mainnews:'虚构的预付款项后续会如何处置？',  
        },
        {
        newsid:'10',
        mainnews:'主力复盘：15亿抢筹光伏 超6亿资金拉升隆基绿能',  
        },
        
      ],
      

      }
    
  },
  created() {
this.getTOP10()
},
 
  methods:{
    search:function(){
      alert(this.msg)
    },
    gologin:function(){
      //跳转到login页面
      this.$router.push({path:'/user/login'})
    },
    logout:function(){
      //将iflogin设置为false
      this.iflogin=false;
      this.username='';
      this.$router.push({path:'/user/login',query:{iflogin:false,ifsuclog:false}})
    },
    goregister:function(){
      //跳转到register页面
      this.$router.push({path:'/user/register'})
    },
    gohu:function(){
      //跳转到沪市页面
      this.$router.push({path:'/StockMarket/hu/huselect'})
    },
    goshen:function(){
      //跳转到深市页面
      this.$router.push({path:'/StockMarket/shen/shenselect'})
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
      //跳转到自选股页面
      this.$router.push({path:'/mystock',query:{account:this.account}})
    },
    
    
 
  getTOP10:function(){
 this.mainstock = this.$route.query.mainstock;
// stockmarket.getTopStocks().then(response => {
//   this.mainstock=response.data;

// })
  this.mainstock=this.maintableData;
},
 },

}
import { ref } from 'vue'

const activeIndex = ref('1')


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
          <el-col :span="3" v-if="iflogin"><div class="grid-content" >
            <el-label >hello,{{this.username}}</el-label>
            <el-button  @click="logout" style="margin-left: 10px;">登出</el-button>
            </div>
          </el-col>
          <el-col :span="3" v-else="iflogin"><div class="grid-content" >
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
              <text class="title" >沪深股市数据分析系统</text>
              
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
              default-active="1"
              class="main-menu"
              mode="horizontal"
              background-color="#c45656"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="handleSelect"
            >
              <el-menu-item index="1" class="menuitem">首页</el-menu-item>
              <el-sub-menu index="2" class="menuitem">
                <template #title>热点资讯</template>
                <el-menu-item index="2-1" @click="gonews">财经新闻</el-menu-item>
                <el-menu-item index="2-2" @click="gocpNotice">公司公告</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3" class="menuitem">
                <template #title>股市行情</template>
                <el-menu-item index="3-1" @click="gohu">沪市行情</el-menu-item>
                <el-menu-item index="3-2" @click="goshen">深市行情</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="4" class="menuitem" @click="gomystock">自选股</el-menu-item>
            </el-menu>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="3"> </el-col>
          <el-col :span="11">
           <!-- guanggao -->
        <div class="block text-center" m="t-4">
          <span class="demonstration">诚招广告位</span>
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel><br>
          <div>
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>热点速览</span>
                  <el-button @click="gonews" style="color: #409EFF;" text>更多详情</el-button> 
                </div>
                <el-divider style="border-color: #F56C6C;border-width: 5px;"  />
              </template>
              <el-table
              :data="newslist"
              style="width: 100%"
              height="500"
              stripe
            >
              <el-table-column prop="newsid"  width="100" />
              <el-table-column prop="mainnews"  width="600" />
            </el-table>
            </el-card>
          </div>
        </div>
     </el-col>
     <el-col :span="1"> </el-col>
          <el-col :span="6">
            <el-table
              :data="mainstock"
              style="width: 100%"
              height="500"
              border
              stripe
              :row-class-name="tableRowClassName"
            >
            <el-table-column prop="stockid" label="股票代码" width="100" />
              <el-table-column prop="stockprice" label="均价" width="100" />
              <el-table-column prop="stockincrease" label="涨跌幅" width="100" />
            </el-table>
          </el-col>
          <el-col :span="3"> </el-col>
      </el-row>
     
   
      <!-- yejiao -->
      <el-footer>
        <el-row>
          <el-col :span="24">   
            <div class="footwords"> 
              Thursday is coming, donate us ￥50, please!!!!!!   --by 996滚出拆那组
            </div>
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
.main-menu {
  justify-content: center;  
}
.menuitem{
  width: 280px;
  
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.news-card {
  width: 480px;
}
  
.footwords {
  border-radius: 4px;
  min-height: 36px;
  background: #e9e9eb;
  font-size: 15px;
  vertical-align: middle;
  text-align: center;
  vertical-align:middle;
}

</style>