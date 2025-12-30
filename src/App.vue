<script setup>
const msg = "Hello World!"
const day = 30
const b = false
const msg2 = "倒过来读的是谁zzhu"
</script>

<template>
  {{ msg }}
  {{ day + 1 }}
  {{ b ? 'yes' : 'no' }}
  {{ msg2.split('').reverse().join('') }}
</template>

<style scoped>
</style>