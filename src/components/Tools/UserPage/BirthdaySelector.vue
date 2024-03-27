<template>
  <div class="small-frame-style" style="margin-left: 1rem">
    <a-select
      allowClear
      v-model:value="birthday"
      style="width: 6rem"
      :options="birthdayOptions"
      @change="handleBirthdayChange"
      placeholder="出生年份"
      class="birthdaySelector"
    ></a-select>
  </div>
</template>

<script setup>
import '@/assets/global.css'
import { defineEmits, ref, watch, defineProps } from 'vue'
// 父组件传值
const props = defineProps({
  birthday: String
})

const birthday = ref(props.birthday)
const birthdayOptions = ref([])

for (let year = 2010; year >= 1950; year--) {
  birthdayOptions.value.push({
    value: String(year),
    label: String(year)
  })
}

const handleBirthdayChange = value => {
}

const emit = defineEmits(['update:birthday'])
watch(birthday, (newValue) => {
  emit('update:birthday', newValue)
})
</script>

<style scoped>

.birthdaySelector :deep(.ant-select-selector) {
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--greyFontColor);
}

</style>
