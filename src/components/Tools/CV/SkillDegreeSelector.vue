<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-select
      v-model:value="currentSkillDegree"
      style="width: 10rem"
      :options="skillDegreeItems"
      @change="handleChangeSkillDegree"
      placeholder="掌握程度"
      class="skillDegree"
    ></a-select>
  </div>
</template>

<script setup>
import '@/assets/global.css'
import { defineEmits, ref, watch, defineProps } from 'vue'
// 父组件传值
const props = defineProps({
  currentSkillDegree: String
})
const currentSkillDegree = ref(props.currentSkillDegree)
const skillDegreeItems = ref([
  {
    value: '精通',
    label: '精通'
  },
  {
    value: '熟练',
    label: '熟练'
  },
  {
    value: '了解',
    label: '了解'
  }
])
const handleChangeSkillDegree = value => {
  // console.log(`selected ${value}`)
}
const emit = defineEmits(['update:currentSkillDegree'])
watch(currentSkillDegree, (newValue) => {
  emit('update:currentSkillDegree', newValue)
})
</script>

<style scoped>

.skillDegree :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
