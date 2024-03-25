<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-select
      allowClear
      v-model:value="endTime"
      style="width: 4.5rem"
      :options="endTimeOptions"
      @change="handleEndTimeChange"
      placeholder="结束年份"
      class="endTimeSelector"
    ></a-select>
  </div>
</template>

<script setup>
import '@/assets/global.css'
import { defineEmits, ref, watch, defineProps } from 'vue'
// 父组件传值
const props = defineProps({
  endTime: String
})

const endTime = ref(props.endTime)
const endTimeOptions = ref([])

for (let year = 2030; year >= 2000; year--) {
  endTimeOptions.value.push({
    value: String(year),
    label: String(year)
  })
}

const handleEndTimeChange = value => {
}

const emit = defineEmits(['update:endTime'])
watch(endTime, (newValue) => {
  emit('update:endTime', newValue)
})
</script>

<style scoped>

.endTimeSelector :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
