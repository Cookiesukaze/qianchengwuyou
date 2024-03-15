<template>
  <div class="job-card">
    <div class="job-header">
      <div class="job-title">{{ job.title }}</div>
      <span class="job-salary">{{ job.salary }}</span>
    </div>
    <div class="job-tags">
      <a-tag :bordered="false" v-for="tag in job.tags" :key="tag">{{ tag }}</a-tag>
    </div>
    <div class="job-footer">
      <a-avatar size="small" :src="job.companyLogo" style="margin-right: 0.3rem;margin-top:0.3rem"/>
      <span class="company-name">{{ job.company }}&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span class="job-location">{{ job.location }}</span>
      <div class="job-match-container">
        <span class="job-match">胜任度</span>
        <span class="job-match-score">{{ job.matchScore }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const job = ref({
  title: '前端开发工程师',
  location: '上海·黄浦区',
  salary: '20-40k',
  tags: ['JavaScript', 'Vue.js', 'HTML/CSS'],
  company: '签程无忧电子科技公司',
  companyLogo: 'https://via.placeholder.com/32',
  matchScore: '92'
})
</script>

<style scoped>
.job-card {
  box-shadow: 3px 5px 3px 3px rgba(162, 161, 161, 0.2);
  display: flex;
  flex-direction: column;
  width: 26rem; /* Adjust the width as needed */
  padding: 1rem 1rem 0.3rem 1rem;
  border-radius: 0.7rem;
  //border:1px var(--themeColor) solid;
  //border-top: 0.01rem solid var(--themeColor05) !important;
  //border-left: 3px solid var(--themeColor05) !important;
  //border-bottom: 2px solid var(--themeColor05) !important;
//background: linear-gradient(190deg, rgb(255, 255, 252,0.9) 60%, var(--themeColor005));
  background: linear-gradient(0deg, var(--themeColor001) 0 28%, rgba(252,252,252) 10% 90%);
}
.job-card:hover{
  box-shadow: 3px 8px 8px 8px rgba(153, 153, 153, 0.15);
  border-top: 3px solid var(--themeColor01) !important;
  border-right: 2px solid var(--themeColor02) !important;
  border-left: 6px solid var(--themeColor02) !important;
  border-bottom: 4px solid var(--themeColor02) !important;
  //border:1px var(--themeColor05) solid;
  .job-title{
    color: var(--themeColor);
  }
  .job-salary{
    color: var(--sararyColor08);
  }
}
.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.job-title {
  margin-right: auto;
  font-size: 1rem;
  color: var(--greyFontColor125);
}

.job-salary {
  color: var(--sararyColor);
  font-size: 1.15rem;
}

.job-tags {
  margin-bottom: 0.5rem;
}

.job-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:1rem;
}

.company-name {
  color: var(--greyFontColor);
  font-size: 0.75rem;
  margin-top:0.3rem;
}
.job-location {
  color: var(--greyFontColor);
  font-size: 0.75rem;
  margin-top:0.3rem;
  margin-right: auto;
}
.job-match-container {
  display: flex;
  align-items: center;
}
.job-match {
  color: var(--greyFontColor);
  font-size: 0.7rem;
  margin-top:0.3rem;
  margin-left: -2rem;
}
.job-match-score {
  margin-left: 0.2rem;
  font-size: 1.15rem;
  margin-right: 0.2rem;
}
</style>
