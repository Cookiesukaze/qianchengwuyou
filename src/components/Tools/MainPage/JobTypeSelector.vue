<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-cascader
      v-model:value="currentJobType"
      style="width: 7rem"
      :options="jobTypeItems"
      @change="handleChangeJobType"
      placeholder="全部职位"
      class="jobType"
    ></a-cascader>
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from 'vue'

const currentJobType = ref([])
const jobTypeItems = ref([
  {
    value: '互联网',
    label: '互联网'
  },
  {
    value: '其它',
    label: '其它'
  }
])
const handleChangeJobType = value => {
  // console.log(`selected ${value}`)
}
const emit = defineEmits(['update:jobType'])
watch(currentJobType, (newValue) => {
  emit('update:jobType', newValue)
})
</script>

<style scoped>

.jobType :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
