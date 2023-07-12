
<script>

//vue yemianduixiang
export default{
  data(){
    return{
      msg:'',
      img_url:'../src/assets/logo.png',
      username:'',
      password:'',
      inputid:'',
      ifpage:true,
      tableData: [{
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
        },],
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
      this.$router.push({path:'/StockMarket/hu'})
    },
    goshen:function(){
      //跳转到深市页面
      this.$router.push({path:'/StockMarket/shen'})
    },
    msChangePage1:function(){
      //跳转到自选股页面
      this.$router.push({path:'/mystock'})
    },
    msChangePage2:function(){
      //跳转到自选股页面
      this.$router.push({path:'/mystock'})
    },
    msChangePage3:function(){
      //跳转到自选股页面
      this.$router.push({path:'/mystock'})
    },
    deleteRow(index) {
     this.tableData.splice(index,1);
    },
    addmystock:function(){
      //向表单里添加数据
      alert("添加成功")
      this.tableData.push({
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      })
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
              <text class="title" >我的自选股</text>
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
              class="el-menu-demo"
              mode="horizontal"
              background-color="#c45656"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="handleSelect"
            >
             
              <el-menu-item index="1" class="item"   @click="msChangePage1">自选股管理</el-menu-item>
              <el-menu-item index="2" class="item"  @click="msChangePage2">系统建议</el-menu-item>
             <el-menu-item index="1" class="item" ></el-menu-item>
              <el-menu-item index="2" class="item" ></el-menu-item>
            </el-menu>
          </el-col>
      </el-row>

      <!-- 主体内容 -->
      <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="18"> 
          <el-table
    :data="tableData"
    border:true
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
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
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template #default="scope">

        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="deleteRow(scope.$index)"
        >
          删除
        </el-button>

      </template>
      
      
    </el-table-column>
  </el-table> 

  <el-input
    placeholder="请输入股票代码"
    v-model="inputid"
  ></el-input>
  <el-button style="width: 100%" @click="addmystock"
    >添加到自选股</el-button
  >


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
  margin-left: 10px;
  
}
.item{
  width: 280px;
}


  


</style>