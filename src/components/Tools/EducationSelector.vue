<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-cascader
      v-model:value="currentEducation"
      style="width: 7rem"
      :options="educationItems"
      @change="handleChangeEducation"
      placeholder="学历要求"
      class="education"
    ></a-cascader>
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from 'vue'

const currentEducation = ref([])
const educationItems = ref([
  {
    value: '不限',
    label: '不限'
  },
  {
    value: '初中及以下',
    label: '初中及以下'
  },
  {
    value: '中专',
    label: '中专'
  },
  {
    value: '高中',
    label: '高中'
  },
  {
    value: '大专',
    label: '大专'
  },
  {
    value: '本科',
    label: '本科'
  },
  {
    value: '硕士',
    label: '硕士'
  },
  {
    value: '博士',
    label: '博士'
  }
])
const handleChangeEducation = value => {
  // console.log(`selected ${value}`)
}
const emit = defineEmits(['update:education'])
// 监听所选城市的变化
watch(currentEducation, (newValue) => {
  emit('update:education', newValue)
})
</script>

<style scoped>

.education :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
