<template>
  <div>
    <div class="bg1"></div>
    <SeekerNavBar></SeekerNavBar>
    <div style="margin-top:3.5rem">
      <div class="cv-container">
        <div class="cv-left">
<!--          左上：简历列表-->
          <CVList :modelValue="currentSelectedCV" @update:selectedCV="handleSelectedCVUpdate"/>
<!--          左下：简历目录-->
          <CVCatalogue class="cv-catalogue-sticky"
            :modelValue="currentSelectedCata" @update:selectedCata="handleSelectedCataUpdate"/>
        </div>
        <div class="cv-center">
<!--          简历头-->
          <CVHeader />
<!--          简历基本信息-->
          <CVBaseInfo />
<!--          期望岗位-->
          <CVException />
<!--          教育经历-->
          <CVEducation />
<!--          资格证书-->
          <CVCertification />
<!--          工作实习经历-->
          <CVExperience />
<!--          项目经历-->
          <CVProject />
          <CVSkills />
          <CVAdditional />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SeekerNavBar from '@/components/NavBar/SeekerNavBar.vue'
import CVList from '@/components/Tools/CV/CVList.vue'
import CVHeader from '@/components/Tools/CV/CVHeader.vue'
import CVBaseInfo from '@/components/Tools/CV/CVBaseInfo.vue'
import CVEducation from '@/components/Tools/CV/CVEducation.vue'
import CVCertification from '@/components/Tools/CV/CVCertification.vue'
import CVExperience from '@/components/Tools/CV/CVExperience.vue'
import CVProject from '@/components/Tools/CV/CVProject.vue'
import CVSkills from '@/components/Tools/CV/CVSkills.vue'
import CVException from '@/components/Tools/CV/CVExpection.vue'
import CVCatalogue from '@/components/Tools/CV/CVCatalogue.vue'
import CVAdditional from '@/components/Tools/CV/CVAdditional.vue'
import { ref } from 'vue'

// 左上：简历列表
const currentSelectedCV = ref([1])
const handleSelectedCVUpdate = (value) => {
  currentSelectedCV.value = value
  console.log('CV:selectedCV updated:' + value)
}
// 左下：目录
const currentSelectedCata = ref([])
const handleSelectedCataUpdate = (value) => {
  currentSelectedCata.value = value
  console.log('CV:selectedCata updated:' + value)
}
</script>

<style scoped>
.cv-container {
  width: 98vw;
  display: flex;
  flex-direction: row;
}

.cv-left {
  width: 15%;
  display: flex;
  flex-direction: column;
  margin-left:7rem;
  padding: 1rem;
}

.cv-catalogue-sticky {
  position: sticky !important;
  top: 3.5rem;
  z-index: 999;
}

.cv-center {
  width: 60%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

/* 设置左侧组件之间的垂直间距 */
.cv-left > * {
  margin-bottom: 0.5rem; /* 左侧组件之间的垂直间距 */
}

/* 设置中间组件之间的垂直间距 */
.cv-center > *{
  margin-bottom: 0.5rem; /* 中间组件之间的垂直间距 */
  width: 90%;
}

</style>
