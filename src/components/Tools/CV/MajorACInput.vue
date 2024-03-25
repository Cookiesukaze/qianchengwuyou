<template>
  <div class="small-frame-style">
    <a-auto-complete
      class="majorACInput"
      v-model:value="major"
      :options="filteredMajors"
      style="width: 10rem;"
      @search="handleSearchMajor"
      placeholder="输入专业名称"
      showSearch
    />
  </div>
</template>

<script setup>
import '@/assets/global.css'
import { ref, computed, watch, defineProps, defineEmits } from 'vue'
import majorList from '../json/大学学科.json'

// 父组件传值
const props = defineProps({
  major: String
})
const emit = defineEmits(['update:major'])
const major = ref(props.major)
watch(major, (newValue) => {
  console.log(typeof major.value)
  emit('update:major', newValue)
})

const filteredMajors = computed(() => {
  const searchQuery = major.value ? major.value.toLowerCase() : ''
  const results = []

  majorList.forEach(majorClass => {
    if (majorClass.className.toLowerCase().includes(searchQuery)) {
      results.push({
        value: majorClass.className,
        label: majorClass.className
      })
    }

    // Check if any class name matches the search query
    majorClass.class.forEach(subClass => {
      if (subClass.name.toLowerCase().includes(searchQuery)) {
        results.push({
          value: subClass.name,
          label: `${subClass.name} (${majorClass.className})`
        })
      }
    })
  })

  return results
})

// 搜索
const handleSearchMajor = (value) => {
  major.value = value
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
