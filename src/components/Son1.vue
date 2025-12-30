<template>
  <div>
    <h3>我是 Son1 组件</h3>
    <p>来自父组件的数据：{{ msg }}</p>
  </div>
</template>

<script setup>
defineProps({
  msg: String
})
</script>