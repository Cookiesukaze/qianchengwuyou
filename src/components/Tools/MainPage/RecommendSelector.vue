<template>
  <a-space class="frame-style">
    <a-select
      ref="select1"
      class="recommendSelector"
      v-model:value="currentRecommend"
      style="width: 11rem; "
      :options="recommendSelectorItems"
      @change="handleChangeRecommend"
    ></a-select>
  </a-space>
</template>

<script setup>
import { defineEmits, ref, watch, defineProps } from 'vue'
// 父组件传值
const props = defineProps({
  currentRecommend: String
})
const currentRecommend = ref(props.currentRecommend)
const recommendSelectorItems = ref([
  {
    value: '签程推荐',
    label: '签程推荐'
  },
  {
    value: '按胜任度推荐',
    label: '按胜任度推荐'
  },
  {
    value: '按HR活跃度',
    label: '按HR活跃度'
  },
  {
    value: '按最新发布推荐',
    label: '按最新发布推荐'
  }
])
const emit = defineEmits(['update:recommend'])
// 监听所选城市的变化
watch(currentRecommend, (newValue) => {
  emit('update:recommend', newValue)
})
const handleChangeRecommend = value => {
  // console.log(`selected ${value}`)
}
</script>

<style scoped>
.recommendSelector :deep(.ant-select-selector) {
  font-size: 1.08rem !important;
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color:var(--greyFontColor);
}

</style>
