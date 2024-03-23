<template>
  <div>
    <div class="bg1"></div>
    <SeekerNavBar></SeekerNavBar>
    <div style="margin-top:3.5rem">
      <div class="cv-container">
        <div class="cv-left-side">
          <CVList />
          <CVCatalogue />
        </div>
        <div class="cv-center">
          <CVHeader />
          <!-- <div style="height: 2rem;"></div> -->
          <CVBaseInfo />
          <CVException />
          <CVEducation />
          <CVCertification />
          <CVExperience />
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
</script>

<style scoped>
.cv-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.cv-left-side {
  flex: 1;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
}

.cv-center {
  flex: 4;
  padding: 1rem;
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: column;
}

/* 设置左侧组件之间的垂直间距 */
.cv-left-side > * {
  margin-bottom: 0.5rem; /* 左侧组件之间的垂直间距 */
}

/* 设置中间组件之间的垂直间距 */
.cv-center > *{
  margin-bottom: 0.5rem; /* 中间组件之间的垂直间距 */
  width: 90%;
}

</style>
