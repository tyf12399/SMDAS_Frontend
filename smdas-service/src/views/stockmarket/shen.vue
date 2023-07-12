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

  <el-row>
    <el-col :span="3"></el-col>
    <el-col :span="18">
      <el-divider style="border-color: #F56C6C;border-width: 5px;"  />

    
      
  <el-table
    ref="filterTable"
    :data="tableData"
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
      width="120"
      :filters="[{text: '2016-05-01', value: zip>200000}, {text: '2016-05-02', value: '200333'}]"
      :filter-method="filterHandler"
      >
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
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-col>
    <el-col :span="3"></el-col>
  </el-row>

</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] == value;
      },
    },
    data() {
      return {
        img_url:'../src/assets/logo.png',
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
        }]
      }
    }
  }
</script>