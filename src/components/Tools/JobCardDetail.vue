<template>
  <div class="job-card-detail card-detail-style bg3">

    <div class="job-title-and-actions">
      <div style="display: flex;flex-direction: row">
        <div class="job-title">{{ job.title }}</div>
        <div class="job-salary">{{ job.salary }}</div>
      </div>
      <div class="actions-buttons">
        <a-button type="text" class="button-style dislike-button-style" danger>不喜欢</a-button>
        <a-button type="text" class="button-style like-button-style" >
          <template #icon><HeartOutlined /></template>
          喜欢
        </a-button>
        <a-button type="text" class="button-style submit-button-style" >
          <template #icon><SendOutlined /></template>
          投递简历
        </a-button>
      </div>
    </div>
    <div class="job-detail">
      <a-tag :bordered="false" class="tags-style">{{job.experience}}</a-tag>
      <a-tag :bordered="false">{{job.education}}</a-tag>
<!--      <span class="experience">{{ job.experience }}</span>-->
<!--      <span class="education">{{ job.education }}</span>-->
    </div>
    <div class="job-match-detail">
      <span class="match-evaluation">胜任度评价：</span>
      <span class="match-score">{{ job.matchScore }}</span>
    </div>
    <div style="height: 19rem;overflow-y: scroll;padding-bottom: 1rem">
      <div class="job-description">职位描述：</div>
      <div class="job-tags">
        <a-tag :bordered="false" v-for="tag in job.tags" :key="tag" class="tags-style">{{ tag }}</a-tag>
      </div>
      <div class="job-description-text">{{ job.description }}</div>
      <div class="job-hr-detail">
        <a-avatar :src="job.hrAvatar" />
        <div class="hr-info">
          <div style="display: flex;flex-direction: row">
            <div class="hr-name">{{ job.hrName }}</div>
            <div class="hr-position">{{ job.hrPosition }}</div>
          </div>
          <div class="job-company-and-location">
            <span class="company">{{ job.company }}&nbsp;|&nbsp;</span>
            <span class="location">{{ job.location }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import './css/scrollBar.css'
import '@/assets/global.css'
import { HeartOutlined, SendOutlined } from '@ant-design/icons-vue'

const job = ref({
  workTime: '3天/周 3个月',
  tags: ['JavaScript', 'Vue.js', 'HTML/CSS'],
  title: '前端开发工程师',
  salary: '20-40k',
  company: '签程无忧电子科技公司',
  location: '上海·黄浦区',
  experience: '3-5 年',
  education: '本科及以上',
  matchScore: '92分',
  description: '招聘对象：2025年可拿毕业证国内本硕学生+2024年9月-2025年9月可拿毕业证海外本硕留学生（实习时长最低2个月，最长可任选从2024年6月延续到拿毕业证）\n' +
    '任职要求：1、计算机、软件、通信、数学、自动化等相关专业优先；\n' +
    '2、热爱研发，基础扎实，熟练掌握但不限Java/go/C++/C/Python等编程语言中的一种或数种，有良好的编程习惯；\n' +
    '3、认可签程无忧文化，具备独立工作能力、善于沟通，热衷新技术；\n' +
    '4、优选条件：\n' +
    '（1）熟悉TCP/IP协议及互联网常见应用和协议的原理；\n' +
    '（2）不满足课堂所学，在校期间积极参加校内外软件编程大赛；\n' +
    '\n' +
    '岗位福利：免费夜宵、班车，周二运动日，研究所多样兴趣社团，工作之余碰撞同好~\n',
  hrAvatar: 'https://via.placeholder.com/64',
  hrName: '李明',
  hrPosition: 'HR Manager'
})
</script>

<style scoped >
.job-card-detail {
  width: 48rem;
  height: 28rem;
  padding: 1.25rem;
  border-radius: 15px;
  margin-bottom: 20px;
}

.job-title-and-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-title {
  font-weight: bold;
  color: var(--greyFontColor125);
  font-size: 1.15rem;
  margin-bottom: 10px;
}

.job-salary {
  font-weight: bold;
  color: var(--sararyColor);
  font-size: 1.1rem;
  margin-left: 1.5rem;
  margin-top: 0.1rem
}

.actions-buttons a-button {
  margin-right: 1rem;
}

.job-detail, .job-match-detail, .job-hr-detail {
  margin-top: 5px;
}
.job-match-detail {
  width: 27%;
  box-sizing:border-box;
  background-color: var(--themeColor01);
  padding: 0.5rem 1.25rem;
  border-left: 4px var(--themeColor) solid;
  margin-top: 1rem;
  margin-bottom: 5px;
  color: var(--themeColor);
}

.match-evaluation,
.match-score {
  color: var(--themeColor);
}

.job-tags{
  margin-top:1rem;
  margin-bottom:0;
}

.tags-style{
  margin-right: 1rem;
}

.job-description{
  font-size: 1.1rem;
  margin-top: 1rem;
}

.job-description-text {
  padding: 1rem;
  font-size: 0.9rem;
  color:var(--greyFontColor125);
  white-space: pre-wrap;/*使其换行*/
  line-height: 1.5;
}

.job-hr-detail {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}

.hr-info {
  margin-left: 10px;
}

.hr-name {
  font-weight: bold;
}

.hr-position{
  margin-left: 1rem;
  margin-top:0.1rem;
  font-size: 0.9rem;
}

.job-company-and-location {
  color: var(--greyFontColor);
  margin-top:0.1rem;
  font-size: 0.9rem;
}

.location{
}

/*
:deep(.ant-tag){
  border-color: var(--themeColor);
  color: var(--themeColor);
  background: rgb(246, 250, 250,0.9);
}
*/

:deep(.ant-btn){
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
}

.button-style{
  margin-left: 0.7rem;
}
.dislike-button-style{
  border-color: var(--sararyColor125);
  color: var(--sararyColor125);
  background: var(--sararyColor001);
}
.like-button-style{
  border-color: var(--themeColor);
  color: var(--themeColor);
  background: var(--themeColor01);
}
.like-button-style:hover{
  border-color: var(--themeColor);
  color: var(--themeColor02);
  background: var(--themeColor01);
}
.like-button-style:hover{
  border-color: var(--themeColor);
  color: var(--themeColor);
  background: var(--themeColor02);
}
.submit-button-style{
  background: var(--themeColor);
  color: white;
}
.submit-button-style:hover{
  background: var(--themeColor075);
  color: white;
}

</style>
