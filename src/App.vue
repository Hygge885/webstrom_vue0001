<template>
  <div>
    <!-- 显示响应式数据 -->
    {{ msg }}
    <br>
    {{ day + 1 }}
    <br>
    {{ b ? 'yes' : 'no' }}
    <br>
    {{ msg2.split('').reverse().join('') }}

    <hr>
    <Son1 :msg="msg" />
    <Son2 :count="day" />

    <hr>
    <component v-bind:is="son" />
    <p v-text="msg"></p>
    <p v-text="msg2"></p>
    <p v-html="msg3"></p>

    <a href="url">知网</a>
    <a v-bind:href="url" target="_blank">知网</a>
    <a :href="url" target="_blank">知网</a>

    <button v-on:click="hello">hello</button>
    <!-- 语法糖 -->
    <button @click="hello">hello</button>

    <hr>
    <p>{{ schoolName }}</p>
    <button @click="start">开始</button>
    <button @click="stop">停止</button>
  </div>
</template>

<script setup>
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'
import { ref } from 'vue'

// 数据定义
const msg = 'Hello World!'
const day = 30
const b = false
const msg2 = '倒过来读的是猪'
const msg3 = '<h1>Hello World!</h1>'
const url = 'https://www.cnki.net/'

// 方法定义
function hello() {
  console.log('Hello')
}

// 响应式变量
const schoolName = ref('河南理工大学')

// 定时器相关
let intervalValue = 0

function start() {
  intervalValue = setInterval(() => {
    const schoolNameValue = schoolName.value
    const firstChar = schoolNameValue.substring(0, 1)
    const rest = schoolNameValue.substring(1)
    schoolName.value = rest + firstChar
  }, 500)
}

function stop() {
  clearInterval(intervalValue)
}
</script>

<style scoped>
/* 可选样式 */
button {
  margin: 5px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>