<template>
  <div>
    <h1>简历修改页先摆着明天施工</h1>
    <p>传递id测试: {{ props.jobIds||'无' }}</p>
    <p>传递CV测试: {{ props.cv||'无' }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  jobIds: {
    type: Array,
    required: true,
    default: () => []
  },
  cv: {
    type: String,
    required: true,
    default: ''
  }
})
</script>
