<template>
  <div class="son2">
    <h3>子组件 2</h3>
    <input v-model="son2Value" placeholder="输入要传给父组件的值" />
    <button @click="sendToFather">发送给父组件</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const son2Value = ref('')

// 向父组件发送数据
const emit = defineEmits(['sendMsg'])
function sendToFather() {
  emit('sendMsg', son2Value.value)
}
</script>

<style scoped>
.son2 {
  border: 1px solid #999;
  padding: 10px;
}
</style>