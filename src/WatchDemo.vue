<script setup>
import { ref, watch } from 'vue';

// 定义响应式数据
const schoolName = ref("焦作煤矿学堂");

// 点击事件，修改响应式数据
const onClickChange = () => {
  schoolName.value = "河南理工大学";
}

// 监听 schoolName 的变化
watch(schoolName, (newValue, oldValue) => {
  console.log(oldValue); // 打印旧值
  console.log(newValue); // 打印新值
})
</script>

<template>
  <!-- 点击按钮触发修改 -->
  <button @click="onClickChange">修改数据</button>
  <!-- 展示响应式数据 -->
  {{ schoolName }}
</template>

<style scoped>
/* 组件局部样式（当前无实际样式内容） */
</style>