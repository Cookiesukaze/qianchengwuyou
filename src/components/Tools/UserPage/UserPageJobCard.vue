<template>
  <div class="user-page-job-card card-style bg2" @click="$emit('cardSelected', job)">
    <div class="job-header">
      <div class="job-title">{{ job.title }}</div>
      <span class="job-salary">{{ job.salary }}</span>
    </div>
    <div style="display: flex;flex-direction: row;margin-top:0.3rem">
      <div class="job-tags">
        <a-tag :bordered="false" v-for="tag in job.tags" :key="tag">{{ tag }}</a-tag>
      </div>
      <div class="job-match-container">
        <span class="job-match">胜任度</span>
        <span class="job-match-score">{{ job.matchScore }}</span>
      </div>
    </div>
    <div class="job-footer">
      <a-avatar size="small" :src="job.companyLogo" style="margin-right: 0.3rem;"/>
      <span class="company-name">{{ job.company }}&nbsp;&nbsp;</span>
      <span class="company-name">{{ job.location }}&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
      <span class="company-name">{{ job.hrName }}&nbsp;·&nbsp;</span>
      <span class="job-location">{{ job.hrPosition }}</span>
      <div style="margin-left: auto">
        <span class="job-location" style="margin-right: 1rem">{{ job.lastActiveTime }}</span>
        <span class="job-location">{{ job.state }}的岗位</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import '@/assets/global.css'

defineProps({
  job: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>
.user-page-job-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 7.75rem;
  padding: 1rem 1rem 0.3rem 1rem;
  border-radius: 0.7rem;
}
.user-page-job-card:hover,
.selected-card {
  background-image: url("https://s21.ax1x.com/2024/03/20/pFWjQf0.png");
}

.user-page-job-card:hover .job-title,
.selected-card .job-title {
  color: var(--themeColor);
}
.user-page-job-card:hover .job-salary,
.selected-card .job-salary {
  color: var(--sararyColor08);
}
.user-page-job-card:hover .job-salary,
.selected-card .job-salary {
  color: var(--sararyColor08);
}
.card-style{
  box-shadow: 0 5px 15px 0 rgba(176,191,231,.3);
}
:hover.card-style,
.selected-card{
  border: var(--themeColor075) solid 1px;
  box-shadow: 0 10px 20px 0 rgba(176,191,231,.55);
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
//color: var(--greyFontColor);
  color: var(--greyFontColor125);
  font-size: 0.75rem;
  margin-top:0.3rem;
}
.job-location {
//color: var(--greyFontColor);
  color: var(--greyFontColor125);
  font-size: 0.75rem;
  margin-top:0.3rem;
  margin-right: auto;
}
.job-match-container {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top:-0.5rem;
}
.job-match {
//color: var(--greyFontColor);
  color: var(--greyFontColor125);
  font-size: 0.7rem;
  margin-top:0.3rem;
  margin-left: -2rem;
}
.job-match-score {
  color: var(--greyFontColor125);
  margin-left: 0.2rem;
  font-size: 1.15rem;
  margin-right: 0.2rem;
}
</style>
