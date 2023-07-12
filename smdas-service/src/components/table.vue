//table.vue
<script setup>

import { ref,defineProps } from 'vue'
const props= defineProps({
    options:Object,
    tableData:Array
})
const {column} = props.options
</script>
<template>
<el-table :data="tableData" style="width: 100vw;">
    <el-table-column v-for="(item,index) in column" :prop="item.prop" :label="item.label" :width="item.width??''" />
  </el-table>
</template>
<style scoped></style>