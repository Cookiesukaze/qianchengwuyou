<template>
  <div class="frame-style">
    <a-cascader
      v-model:value="selectedValue"
      :options="options"
      showSearch
      placeholder="选择城市"
      style="width: 12.5rem;"
    ></a-cascader>
  </div>
</template>

<script setup>
import { Cascader as ACascader } from 'ant-design-vue'
import areas from './areas.json'
import cities from './cities.json'
import provinces from './provinces.json'
import { ref, watch, defineEmits } from 'vue'

const selectedValue = ref([])
const emit = defineEmits(['update:city'])
// 监听所选城市的变化
watch(selectedValue, (newValue) => {
  emit('update:city', newValue)
})

// 使用导入的json数据初始化
const typedCities = cities.map((city) => ({ ...city, children: [] }))
const typedProvinces = provinces.map((province) => ({ ...province, children: [] }))
const typedAreas = areas

typedAreas.forEach((area) => {
  const matchCity = typedCities.find((city) => city.code === area.cityCode)
  if (matchCity) {
    matchCity.children.push({
      label: area.name,
      value: area.code
    })
  }
})

typedCities.forEach((city) => {
  const matchProvince = typedProvinces.find(
    (province) => province.code === city.provinceCode
  )
  if (matchProvince) {
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children
    })
  }
})

const options = typedProvinces.map((province) => ({
  label: province.name,
  value: province.code,
  children: province.children
}))

</script>

<style scoped>
:deep(.ant-select-selector) {
  font-size: 0.95rem !important;
  background: rgba(255, 255, 255, 0) !important;
}
:deep(.ant-select-selection-item) {
  font-size: 0.95rem !important;
}
.frame-style{
  background:rgba(255,255,255,90);
  border-radius:1rem;
  width: 12.5rem;
  height: 2rem !important;
  //margin-left:1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
