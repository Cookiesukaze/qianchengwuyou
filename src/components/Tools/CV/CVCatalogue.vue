<template>
  <div class="CV-cata">
    <div class="cata-header">简历目录</div>
    <div class="list-items">
<!--      不绑定v-model因为不需要选中-->
      <a-menu
        mode="inline"
        :items="cataList"
        :inlineIndent="12"
        @click="handleSelectedCataClick"
      ></a-menu>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const cataList = ref([
  {
    key: '1',
    label: '个人详细信息',
    title: '个人详细信息'
  }, {
    key: '2',
    label: '教育经历',
    title: '教育经历'
  }, {
    key: '3',
    label: '资格证书',
    title: '资格证书'
  }, {
    key: '4',
    label: '求职期望',
    title: '求职期望'
  }, {
    key: '5',
    label: '工作/实习经历',
    title: '工作/实习经历'
  }, {
    key: '6',
    label: '项目经历',
    title: '项目经历'
  }, {
    key: '7',
    label: '技能标签',
    title: '技能标签'
  }, {
    key: '8',
    label: '附加信息',
    title: '附加信息'
  }
])
const emit = defineEmits(['update:selectedCata'])
const handleSelectedCataClick = (item) => {
  emit('update:selectedCata', item.key)
}

</script>

<style scoped>
.CV-cata {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  border-radius: 0.7rem;
  box-shadow: 0 5px 15px 0 rgba(176,191,231,.4);
}
.cata-header {
  font-size: 0.95rem;
  font-weight: bold;
  color: var(--blackFontColor);
  margin-left: 0.1rem;
  margin-bottom: 0.5rem;
}
.list-items {
  width: 110%;
  overflow: scroll;
  margin-left: -1rem;
}
:deep(.ant-menu-light.ant-menu-root.ant-menu-inline){
  border: none;
}
:deep(.ant-menu-item-selected){
  background: white;
  color: rgba(0, 0, 0, 0.88);
}
:deep(.ant-menu-inline .ant-menu-item){
  height: 2.3rem;
}
</style>
