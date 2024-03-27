<template>
  <div class="small-frame-style">
    <a-cascader
      class="citySelector"
      v-model:value="city"
      :options="options"
      showSearch
      :changeOnSelect="true"
      placeholder="全部城市"
      style="width: 12.5rem;"
    >
      <template v-slot:displayRender="{ labels }">
        {{ labels.join('·') }}
      </template>
    </a-cascader>
  </div>
</template>

<script setup>

import { Cascader as ACascader } from 'ant-design-vue'
import areas from '../json/areas.json'
import cities from '../json/cities.json'
import provinces from '../json/provinces.json'
import { ref, watch, defineEmits, defineProps } from 'vue'

// 接收父组件传值
const props = defineProps({
  city: Array
})
const emit = defineEmits(['update:city'])
const city = ref(props.city)
watch(city, (newValue) => {
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
.citySelector :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
