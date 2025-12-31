<template>
  <div class="son1" @click="() => emit('son1Click', msg)">
    <h3>子组件 1</h3>
    <p>父组件传来的值：{{ msg }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 接收父组件传来的值
defineProps({
  msg: String
})

// 向父组件发送事件
const emit = defineEmits(['son1Click'])
</script>

<style scoped>
.son1 {
  border: 1px solid #666;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>