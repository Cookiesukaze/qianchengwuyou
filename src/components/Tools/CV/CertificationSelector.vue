<template>
  <div  style="margin-left: 1rem">
    <a-select
      class="certificationSelector"
      v-model:value="selectedCertificates"
      mode="multiple"
      style="width: 100%"
      placeholder="点击添加资格证书..."
      :max-tag-count="maxTagCount"
      :options="certificateOptions"
    >
      <template #maxTagPlaceholder="omittedValues">
        <a-tag style="background: rgba(255,255,255,0)">+{{ omittedValues.length }} 更多...</a-tag>
      </template>
    </a-select>
  </div>
</template>

<script setup>
import { defineEmits, ref, watch, defineProps } from 'vue'
import certificationsData from '../json/简略资格证书.json'
// 父组件传值
const props = defineProps({
  currentCertificates: Array
})
const selectedCertificates = ref(props.currentCertificates || [])
const certificateOptions = ref([])
const maxTagCount = ref(10) // 最多可以选十个证书

certificateOptions.value = certificationsData.certifications.flatMap(category =>
  category.list.map(cert => ({
    label: cert.name,
    value: cert.name
  }))
)

const emit = defineEmits(['update:currentCertificates'])
watch(selectedCertificates, (newValue) => {
  emit('update:currentCertificates', newValue)
})
</script>

<style scoped>
.certificationSelector{
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
