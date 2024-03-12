<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-cascader
      v-model:value="currentWorkExperience"
      style="width: 7rem"
      :options="workExperienceItems"
      @change="handleChangeWorkExperience"
      placeholder="工作经验"
      class="workExperience"
    ></a-cascader>
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from 'vue'

const currentWorkExperience = ref([])
const workExperienceItems = ref([
  {
    value: '不限',
    label: '不限'
  },
  {
    value: '在校生',
    label: '在校生'
  },
  {
    value: '应届生',
    label: '应届生'
  },
  {
    value: '1-3年',
    label: '1-3年'
  },
  {
    value: '3-5年',
    label: '3-5年'
  },
  {
    value: '5-10年',
    label: '5-10年'
  },
  {
    value: '10年以上',
    label: '10年以上'
  },
  {
    value: '不限经验',
    label: '不限经验'
  }
])
const handleChangeWorkExperience = value => {
  // console.log(`selected ${value}`)
}
const emit = defineEmits(['update:workExperience'])
// 监听所选城市的变化
watch(currentWorkExperience, (newValue) => {
  emit('update:workExperience', newValue)
})
</script>

<style scoped>

.workExperience :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}
.small-frame-style{
  border-radius:1rem;
  height: 2rem !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 60);
}
</style>
