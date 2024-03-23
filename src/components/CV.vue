<template>
  <div>
    <div class="bg1"></div>
    <SeekerNavBar></SeekerNavBar>
    <div style="margin-top:3.5rem">
      <div class="cv-container">
        <div class="cv-left-side">
          <CVList />
          <!-- 添加一个空白的div来增加垂直间距 -->
          <div style="height: 5rem;"></div>
          <CVtableCard />
        </div>
        <div class="cv-center">
          <CVHeader />
          <!-- <div style="height: 2rem;"></div> -->
          <InBase />
          <Eception />
          <EducationCard />
          <CertificationCard />
          <Experience />
          <ProjectCard />
          <SkillCard />
          <InfoCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SeekerNavBar from '@/components/NavBar/SeekerNavBar.vue'
import CVList from '@/components/Tools/CV/CVList.vue'
import CVtableCard from '@/components/Tools/CV/CVtableCard.vue'
import CVHeader from '@/components/Tools/CV/CVHeader.vue'
import InBase from '@/components/Tools/CV/InBase.vue'
import EducationCard from '@/components/Tools/CV/EducationCard.vue'
import CertificationCard from '@/components/Tools/CV/CertificationCard.vue'
import Experience from '@/components/Tools/CV/ExperienceCard.vue'
import ProjectCard from '@/components/Tools/CV/ProjectCard.vue'
import SkillCard from '@/components/Tools/CV/SkillCard.vue'
import InfoCard from '@/components/Tools/CV/InfoCard.vue'
import Eception from '@/components/Tools/CV/ExcePition.vue'
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
  background-color: #f0f0f0;
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
