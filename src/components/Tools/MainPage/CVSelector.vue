<template>
  <a-space class="frame-style">
    <a-select
      ref="select1"
      class="CVSelector"
      v-model:value="currentCVSelector"
      style="width: 8rem; "
      :options="CVSelectorItems"
      @change="handleChangeCV"
    ></a-select>
  </a-space>
</template>

<script setup>
import { defineEmits, ref, watch } from 'vue'

const currentCVSelector = ref('我的简历1')
const CVSelectorItems = ref([
  {
    value: '我的简历1',
    label: '我的简历1'
  },
  {
    value: '我的简历2',
    label: '我的简历2'
  }
])
const emit = defineEmits(['update:CV'])
// 监听所选城市的变化
watch(currentCVSelector, (newValue) => {
  emit('update:CV', newValue)
})
const handleChangeCV = value => {
  // console.log(`selected ${value}`)
}
</script>

<style scoped>
.CVSelector :deep(.ant-select-selector) {
  font-size: 1.08rem !important;
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color:var(--greyFontColor);
}

</style>
