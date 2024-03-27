<template>
  <div>
    <div class="bg1"></div>
    <SeekerNavBar></SeekerNavBar>
    <div style="margin-top:3.5rem">
      <div class="user-container">
          <!--          用户卡片-->
          <UserCard></UserCard>
        <a-radio-group v-model:value="currentType"
                       @update:modelValue="handleTypeUpdate" class="frame-style user-bar" >
          <a-radio-button value="已投递" style="margin-top: 0.4rem;margin-left: 2rem">已投递</a-radio-button>
          <a-radio-button value="被拒绝" style="margin-left: 1rem">被拒绝</a-radio-button>
          <a-radio-button value="签约成功" style="margin-left: 1rem">签约成功</a-radio-button>
          <a-radio-button value="喜欢" style="margin-left: 1rem">喜欢岗位</a-radio-button>
          <a-radio-button value="设置" style="margin-left: 1rem">设置</a-radio-button>
        </a-radio-group>
        <div style="margin-top:2rem" class="card-container">
          <div v-for="job in filteredJobList" :key="job.id">
            <UserPageJobCard
              :job="job"
              @withdrawJob="handleWithdrawJob"
              style="margin-bottom: 1.3rem;"
            ></UserPageJobCard>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import '@/assets/global.css'
import SeekerNavBar from '@/components/NavBar/SeekerNavBar.vue'
import UserCard from '@/components/Tools/UserPage/UserCard.vue'
import { computed, ref } from 'vue'
import UserPageJobCard from '@/components/Tools/UserPage/UserPageJobCard.vue'

// bar
const currentType = ref('已投递')
const handleTypeUpdate = (value) => {
  currentType.value = value
  console.log('UserPage:currentType updated:' + value)
}
// card
const jobList = ref([
  {
    id: 1,
    title: '前端开发工程师 - A公司',
    location: '上海·黄浦区',
    salary: '20-30k',
    tags: ['JavaScript', 'Vue.js', 'HTML/CSS'],
    company: 'A电子科技公司',
    hrName: '王女士',
    hrPosition: 'HR Manager',
    companyLogo: 'https://via.placeholder.com/32',
    matchScore: '85',
    lastActiveTime: '2024年3月27日',
    state: '已投递'
  },
  {
    id: 2,
    title: '全栈开发工程师 - B公司',
    location: '北京·朝阳区',
    salary: '25-35k',
    tags: ['JavaScript', 'React.js', 'Node.js'],
    company: 'B互联网公司',
    hrName: '李先生',
    hrPosition: 'HR Manager',
    companyLogo: 'https://via.placeholder.com/32',
    matchScore: '88',
    lastActiveTime: '2024年3月27日',
    state: '被拒绝'
  },
  {
    id: 3,
    title: '数据分析师 - C金融集团',
    location: '广州·天河区',
    salary: '18-25k',
    tags: ['SQL', 'Python', '数据分析'],
    company: 'C金融集团',
    hrName: '李先生',
    hrPosition: 'HR Manager',
    companyLogo: 'https://via.placeholder.com/32',
    matchScore: '78',
    lastActiveTime: '2024年3月27日',
    state: '签约成功'
  },
  {
    id: 4,
    title: 'UI/UX 设计师 - D设计公司',
    location: '深圳·南山区',
    salary: '15-22k',
    tags: ['Sketch', 'Adobe XD', '用户研究'],
    company: 'D设计公司',
    hrName: '李先生',
    hrPosition: 'HR Manager',
    companyLogo: 'https://via.placeholder.com/32',
    matchScore: '90',
    lastActiveTime: '2024年3月27日',
    state: '喜欢'
  }
])
const filteredJobList = computed(() => {
  if (currentType.value === '设置') {
    return []
  }
  return jobList.value.filter(job => job.state === currentType.value)
})
const handleWithdrawJob = (jobToWithdraw) => {
  jobList.value = jobList.value.filter(job => job !== jobToWithdraw)
  console.log('UserPage:withdraw submit')
}
</script>

<style scoped>
.user-container {
  width: 98vw;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */

}
.user-bar{
  width: 80%;
  margin-left: unset;
  margin-top:2%;
  font-size: 1rem !important;
}

:deep(.ant-radio-button-wrapper){
  border: none !important;
  box-shadow: none !important;
  font-size:1rem !important;
  color:var(--greyFontColor);
  background: rgba(255, 255, 255, 0);
}
:deep(.ant-radio-button-wrapper:hover){
  color: var(--themeColor);
}
:deep(.ant-radio-button-wrapper:not(:first-child)::before){
  background: rgba(255, 255, 255, 0) !important;
}
:deep(.ant-radio-button-wrapper-checked){
  font-weight: bold;
  color: var(--themeColor);
}
.card-container{
  width: 80%;
}
</style>
