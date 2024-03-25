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
        style="color: var(--greyFontColor)"
      ></a-menu>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const cataList = ref([
  {
    key: 'CVBaseInfo',
    label: '基本信息',
    title: '基本信息'
  }, {
    key: 'CVException',
    label: '期望岗位',
    title: '期望岗位'
  }, {
    key: 'CVEducation',
    label: '教育经历',
    title: '教育经历'
  }, {
    key: 'CVCertification',
    label: '资格证书',
    title: '资格证书'
  }, {
    key: 'CVExperience',
    label: '工作/实习经历',
    title: '工作/实习经历'
  }, {
    key: 'CVProject',
    label: '项目经历',
    title: '项目经历'
  }, {
    key: 'CVSkill',
    label: '技能标签',
    title: '技能标签'
  }, {
    key: 'CVAdditional',
    label: '附加信息',
    title: '附加信息'
  }
])
const emit = defineEmits(['update:selectedCata'])
const handleSelectedCataClick = (item) => {
  emit('update:selectedCata', item.key)
  // 跳转
  const yOffset = -100
  const section = document.getElementById(item.key)
  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
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
  margin-left: -0.8rem;
}
:deep(.ant-menu-light.ant-menu-root.ant-menu-inline){
  border: none;
}
:deep(.ant-menu-item-selected){
  background: white;
  color: var(--greyFontColor); /*因为不需要选中才这样设置颜色的*/
  /*color: var(--themeColor);*/
}
:deep(.ant-menu-inline .ant-menu-item){
  height: 2.3rem;
}
</style>
