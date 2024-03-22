<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-select
      v-model:value="currentSearchJobType"
      style="width: 7rem"
      :options="searchJobTypeItems"
      @change="handleChangeSearchJobType"
      placeholder="求职类型"
      class="searchJobType"
    ></a-select>
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from 'vue'

const currentSearchJobType = ref([])
const searchJobTypeItems = ref([
  {
    value: '不限',
    label: '不限'
  },
  {
    value: '全职',
    label: '全职'
  },
  {
    value: '兼职',
    label: '兼职'
  },
  {
    value: '实习',
    label: '实习'
  }
])
const handleChangeSearchJobType = value => {
  // console.log(`selected ${value}`)
}
const emit = defineEmits(['update:searchJobType'])
watch(currentSearchJobType, (newValue) => {
  emit('update:searchJobType', newValue)
})
</script>

<style scoped>

.searchJobType :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
