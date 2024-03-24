<template>
  <a-auto-complete
    v-model:value="school"
    :options="filteredSchools"
    style="width: 300px;"
    @search="handleSearchSchool"
    placeholder="输入学校名称"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import schoolList from '../json/大学-8084-只有省市区.json'

// 定义响应式变量
const school = ref('')

// 计算属性，根据输入过滤学校
const filteredSchools = computed(() => {
  return school.value
    ? schoolList
      .filter((item) =>
        item.name.toLowerCase().includes(school.value.toLowerCase())
      )
      .map((item) => ({
        value: item.name,
        label: `${item.name} (${item.province}, ${item.city}, ${item.area})`
      }))
    : []
})

// 搜索处理函数
const handleSearchSchool = (value) => {
  school.value = value
}
</script>

<style>
/* 可以在这里添加一些样式 */
</style>
