<template>
  <div style="padding: 20px;">
    <h2>Element Plus 示例</h2>

    <!-- 按钮 -->
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>

    <!-- 带图标的按钮 -->
    <el-button type="primary">
      <el-icon><Check /></el-icon>
      新增
    </el-button>
    <el-button type="success">
      <el-icon><Search /></el-icon>
      搜索
    </el-button>
    <el-button type="warning">
      <el-icon><Edit /></el-icon>
      编辑
    </el-button>
    <el-button type="danger">
      <el-icon><Delete /></el-icon>
      删除
    </el-button>

    <!-- 链接 -->
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>

    <!-- 日期选择器 -->
    <el-date-picker
        v-model="dateValue"
        type="date"
        placeholder="选择日期">
    </el-date-picker>

    <!-- 评分 -->
    <el-rate v-model="rateValue" show-text></el-rate>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Check, Delete, Edit, Search } from '@element-plus/icons-vue'

const dateValue = ref('')
const rateValue = ref(4)
</script>

<style scoped>
/* 可选的局部样式 */
</style>