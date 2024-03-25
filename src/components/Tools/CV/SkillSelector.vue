<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-cascader
      class="skillSelector"
      v-model:value="currentSkill"
      style="width: 10rem"
      placeholder="请选择专业技能..."
      :options="skillOptions"
    />
  </div>
</template>

<script setup>
import '@/assets/global.css'
import { defineEmits, ref, watch, defineProps } from 'vue'
import skills from '../json/简略技能.json'

// 父组件传值
const props = defineProps({
  currentSkill: String
})
const currentSkill = ref(props.currentSkill || '')
const skillOptions = ref([])

// 直接使用导入的技能列表 JSON 数据
skillOptions.value = skills.map(skill => ({
  label: skill.label,
  value: skill.value
}))

const emit = defineEmits(['update:currentSkill'])
watch(currentSkill, (newValue) => {
  emit('update:currentSkill', newValue[0] || null) // cascader组件默认传递数组所以调一下
}, { deep: true })
</script>

<style scoped>
.skillSelector {
  margin-bottom: 1rem;
}
:deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

:deep(.ant-select-selection-item) {
  border-radius: 0.8rem;
}
</style>
