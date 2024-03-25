<template>
  <div class="CV-cer">
    <div class="CV-cer-header">
      <div class="CV-cer-header-text">资格证书</div>
    </div>
    <!--    资格证书：多选器-->
    <div class="CV-cer-content">
      <CertificationSelector style="width: 90%;" v-model:currentCertificates="CVCerList"
                             @update:currentCertificates="handleCertificatesUpdate"
      ></CertificationSelector>
    </div>
  </div>
</template>

<script setup>
import CertificationSelector from '@/components/Tools/CV/CertificationSelector.vue'
import { ref } from 'vue'
const CVCerList = ref([ // 数据必须要一个label一个value
  {
    label: '大学英语四级',
    value: '大学英语四级'
  },
  {
    label: '大学英语六级',
    value: '大学英语六级'
  }])
// 子组件更新项
const handleCertificatesUpdate = (newCer) => {
  CVCerList.value = newCer
}
</script>

<style scoped>
.CV-cer {
  position: relative;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.4);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}
.CV-cer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.CV-cer-header-text {
  font-size: 1rem;
  font-weight: bold;
  color: var(--greyFontColor125);
  margin-left: 0.1rem;
  margin-bottom: 0.5rem;
}
:deep(.ant-btn-text:not(:disabled):hover){
  color: var(--themeColor075);
  background: rgba(255, 255, 255, 0) !important;
}

</style>
