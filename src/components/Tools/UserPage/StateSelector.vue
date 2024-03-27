<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-select
      allow-clear
      v-model:value="currentState"
      style="width: 9rem"
      :options="stateItems"
      @change="handleChangeState"
      placeholder="求职状态"
      class="state"
    ></a-select>
  </div>
</template>

<script setup>
import { defineEmits, ref, watch, defineProps } from 'vue'
// 父组件传值
const props = defineProps({
  currentState: String
})
const currentState = ref(props.currentState)
const stateItems = ref([
  {
    value: '在校-寻找实习',
    label: '在校-寻找实习'
  },
  {
    value: '离职-寻找工作',
    label: '离职-寻找工作'
  },
  {
    value: '在职-寻求机会',
    label: '在职-寻求机会'
  }
])
const handleChangeState = value => {
  // console.log(`selected ${value}`)
}
const emit = defineEmits(['update:state'])
watch(currentState, (newValue) => {
  emit('update:state', newValue)
})
</script>

<style scoped>

.state :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
