<template>
  <div class="CV-list">
    <div class="list-header">简历列表</div>
    <div class="list-items">
      <a-menu
        mode="inline"
        :items="CVList"
        v-model:selectedKeys="currentSelectedCV"
        @click="handleSelectedCVClick"
      ></a-menu>
    </div>
    <a-button @click="handleNewCVClick" type="text" class="button-style like-button-style" >
      新建简历
    </a-button>
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from 'vue'

const CVList = ref([
  {
    key: '1',
    label: '我的简历1',
    title: '我的简历1'
  }, {
    key: '2',
    label: '我的简历2',
    title: '我的简历2'
  }, {
    key: '3',
    label: '我的简历3',
    title: '我的简历3'
  }, {
    key: '4',
    label: '我的简历4',
    title: '我的简历4'
  }
])
const currentSelectedCV = ref(['1'])
const handleSelectedCVClick = value => {
  // console.log(`selected ${value}`)
}
const emit = defineEmits(['update:selectedCV'])
watch(currentSelectedCV, (newValue) => {
  emit('update:selectedCV', newValue)
})
// 新增简历
const handleNewCVClick = value => {
  // console.log('新增简历')
}
</script>

<style scoped>
.CV-list {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.4);
}

.list-header {
  font-size: 0.95rem;
  font-weight: bold;
  color: var(--blackFontColor);
  margin-left: 0.1rem;
  margin-bottom: 0.5rem;
}

.list-items {
  width: 120%;
  max-height: 6rem;
  overflow: scroll;
  margin-left: -1rem;
}

:deep(.ant-menu-light.ant-menu-root.ant-menu-inline){
  border: none;
}

.like-button-style{
  border-color: var(--themeColor);
  color: var(--themeColor);
}
.like-button-style:hover{
  border-color: var(--themeColor);
  color: var(--themeColor);
  background: var(--themeColor02);
}
</style>
