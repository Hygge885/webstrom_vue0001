<template>
  <div class="father">
    <h2>父组件</h2>
    <p>父组件数据 msg：{{ msg }}</p>
    <p>子组件 2 传来的值：{{ son2Value }}</p>

    <button @click="changeSon1MsgValue">修改子组件 1 的值</button>

    <!-- 父传子 -->
    <Son1 :msg="msg" @son1Click="handleSon1Click"></Son1>

    <!-- 子传父 -->
    <Son2 @sendMsg="sendMsg"></Son2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'

const msg = ref('父组件中的数据1')
const son2Value = ref('')

// 修改给 Son1 的值
function changeSon1MsgValue() {
  msg.value = '父组件修改后的数据'
}

// 接收 Son2 传来的值
function sendMsg(value) {
  son2Value.value = value
}

// 接收 Son1 点击事件
function handleSon1Click(data) {
  console.log('Son1 点击事件传来的数据：', data)
}
</script>

<style scoped>
.father {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
</style>