<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-select
      allowClear
      v-model:value="startTime"
      style="width: 4.5rem"
      :options="startTimeOptions"
      @change="handleStartTimeChange"
      placeholder="开始年份"
      class="startTimeSelector"
    ></a-select>
  </div>
</template>

<script setup>
import '@/assets/global.css'
import { defineEmits, ref, watch, defineProps } from 'vue'
// 父组件传值
const props = defineProps({
  startTime: String
})

const startTime = ref(props.startTime)
const startTimeOptions = ref([])

for (let year = 2024; year >= 2000; year--) {
  startTimeOptions.value.push({
    value: String(year),
    label: String(year)
  })
}

const handleStartTimeChange = value => {
}

const emit = defineEmits(['update:startTime'])
watch(startTime, (newValue) => {
  emit('update:startTime', newValue)
})
</script>

<style scoped>

.startTimeSelector :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
