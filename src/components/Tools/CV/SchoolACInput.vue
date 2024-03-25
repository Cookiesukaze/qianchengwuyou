<template>
  <div class="small-frame-style">
    <a-auto-complete
      class="schoolACInput"
      v-model:value="school"
      :options="filteredSchools"
      style="width: 12.5rem;"
      @search="handleSearchSchool"
      placeholder="输入学校名称"
      showSearch
    />
  </div>
</template>

<script setup>
import '@/assets/global.css'
import { ref, computed, watch, defineProps, defineEmits } from 'vue'
import schoolList from '../json/大学-8084-只有省市区.json'

// 接收父组件传值
const props = defineProps({
  school: Array
})
const emit = defineEmits(['update:school'])
const school = ref(props.school)
watch(school, (newValue) => {
  emit('update:school', newValue)
})

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
// 搜索
const handleSearchSchool = (value) => {
  school.value = value
}
</script>

<style scoped>
:deep(.ant-select-selector){
  border-radius: 0.8rem;
  border: none !important;
  box-shadow: 0 5px 10px 0 rgba(176,191,231,.2);
  background: rgba(255, 255, 255);
  border-width: 0.08rem;
}
:deep(.ant-select-selector:hover){
  box-shadow: 0 5px 10px 0 rgba(176,191,231,.5);
}
</style>
