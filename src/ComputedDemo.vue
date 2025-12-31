<script setup>
import { ref, computed } from 'vue';

// 定义三个响应式数据，模拟三角形边长
const a = ref()
const b = ref()
const c = ref()

// 计算属性，判断能否组成三角形并计算面积
const area = computed(() => {
  const aLength = a.value;
  const bLength = b.value;
  const cLength = c.value;

  // 校验是否为有效边长，及能否组成三角形
  if (aLength && bLength && cLength &&
      aLength + bLength > cLength &&
      aLength + cLength > bLength &&
      bLength + cLength > aLength
  ) {
    // 海伦公式计算面积
    const p = 0.5 * (aLength + bLength + cLength);
    let result = Math.sqrt(p * (p - aLength) * (p - bLength) * (p - cLength));
    result = result.toFixed(2); // 保留两位小数
    return result;
  } else {
    return "不能组成三角形";
  }
})
</script>

<template>
  <div>
    <p>三角形的三条边：</p>
    <!-- 双向绑定，输入边长 -->
    A:<input type="number" v-model="a"><br/>
    B:<input type="number" v-model="b"><br/>
    C:<input type="number" v-model="c"><br/>
    <!-- 展示计算结果 -->
    面积：{{ area }}
  </div>
</template>

<style scoped>
/* 组件局部样式（当前无实际样式内容） */
</style>