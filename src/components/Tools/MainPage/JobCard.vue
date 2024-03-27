<template>
  <div class="job-card card-style bg2" @click="$emit('cardSelected')">
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
import { defineProps, toRefs } from 'vue'
import '@/assets/global.css'
const props = defineProps({
  job: {
    type: Object,
    required: true
  }
})
const { job } = toRefs(props)

</script>

<style scoped>
.job-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 7.75rem;
  padding: 1rem 1rem 0.3rem 1rem;
  border-radius: 0.7rem;
}
.job-card:hover,
.selected-card {
  background-image: url("https://s21.ax1x.com/2024/03/20/pFWjQf0.png");
}

.job-card:hover .job-title,
.selected-card .job-title {
  color: var(--themeColor);
}
.job-card:hover .job-salary,
.selected-card .job-salary {
  color: var(--sararyColor08);
}
.job-card:hover .job-salary,
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
