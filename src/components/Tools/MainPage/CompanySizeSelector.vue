<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-cascader
      v-model:value="currentCompanySize"
      style="width: 7rem"
      :options="companySizeItems"
      @change="handleChangeCompanySize"
      placeholder="公司规模"
      class="companySize"
    ></a-cascader>
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from 'vue'

const currentCompanySize = ref([])
const companySizeItems = ref([
  {
    value: '0-20人',
    label: '0-20人'
  },
  {
    value: '20-99人',
    label: '20-99人'
  },
  {
    value: '100-499人',
    label: '100-499人'
  },
  {
    value: '500-999人',
    label: '500-999人'
  },
  {
    value: '1000-9999人',
    label: '1000-9999人'
  },
  {
    value: '10000人以上',
    label: '10000人以上'
  }
])
const handleChangeCompanySize = value => {
  // console.log(`selected ${value}`)
}
const emit = defineEmits(['update:companySize'])
watch(currentCompanySize, (newValue) => {
  emit('update:companySize', newValue)
})
</script>

<style scoped>

.companySize :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
