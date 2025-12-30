<template>
  <div>
    <h3>我是 Son2 组件</h3>
    <p>我接收了一个数字：{{ count }}</p>
  </div>
</template>

<script setup>
defineProps({
  count: Number
})
</script>