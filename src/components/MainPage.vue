<template>
  <div style="position: relative;">
    <div class="bg1"></div>
    <SeekerNavBar></SeekerNavBar>
    <div style="margin-top:3.5rem">
<!--      第一栏-->
      <div style="display: flex;flex-direction: row;margin-left:7rem;margin-top:4rem">
<!--        checkjobtype 推荐职位或全部职位-->
        <div class="frame-style">
          <a-menu v-model:selectedKeys="currentCheckJobType" mode="horizontal" :items="checkJobTypeItems"
                  :style="{fontSize:'1.08rem',color:'var(--greyFontColor)',marginTop:'-0.1rem',background:'rgba(255,255,255,0)'}"
          />
        </div>
<!--        cvselector 选择简历-->
        <CVSelector :modelValue="currentCV" @update:city="handleCVUpdate"
        ></CVSelector>
<!--        视图选择-->
        <a-radio-group v-model:value="currentView" class="frame-style" style="margin-left: auto">
          <a-radio-button value="详细"><MenuOutlined style="margin-top:0.7rem"/></a-radio-button>
          <a-radio-button value="图谱"><DeploymentUnitOutlined /></a-radio-button>
        </a-radio-group>
<!--        换一批-->
        <div class="frame-style" style="">
          <a-radio-button value="详细"><RedoOutlined style="margin-top:0.7rem;margin-right: 0.7rem"/>换一批</a-radio-button>
        </div>
<!--        筛选折叠按钮，感觉用处不大不要了-->
<!--        <div class="frame-style" style="">-->
<!--          <a-radio-button value="详细" style="margin-top:0.3rem">筛选</a-radio-button>-->
<!--        </div>-->
      </div>
      <!--      第二栏（搜索框）-->
      <div style="display: flex;flex-direction: row;margin-left:8rem;margin-top:1rem">
        <a-input
          v-model:value="currentSearch"
          placeholder="搜索职位/公司"
          size="large"
        />
      </div>
<!--      第三栏（更多的筛选，有的写起来很繁琐先摆个样子）-->
      <div style="display: flex;flex-direction: row;margin-left:8rem;margin-top:1rem">
<!--        1.城市选择器，缺不限-->
        <div style="width: 12.5rem"><CitySelector
          :modelValue="currentCity"
          @update:city="handleCityUpdate"
        ></CitySelector></div>
<!--        5.TODO:职位类型选择器等待补全-->
        <JobTypeSelector :modelValue="currentJobType" @update:jobType="handleJobTypeUpdate"
        ></JobTypeSelector>
<!--        2.求职类型选择器-->
        <SearchJobTypeSelector :modelValue="currentSearchJobType" @update:searchJobType="handleSearchJobTypeUpdate"
        ></SearchJobTypeSelector>
<!--        3.工作经验选择器-->
        <WorkExperienceSelector :modelValue="currentWorkExperience" @update:workExperience="handleWorkExperienceUpdate"
        ></WorkExperienceSelector>
<!--        4.学历选择器-->
        <EducationSelector :modelValue="currentEducation" @update:workExperience="handleEducationUpdate"
        ></EducationSelector>
<!--        6.公司规模选择器-->
        <CompanySizeSelector :modelValue="currentCompanySize" @update:companySize="handleCompanySizeUpdate"
        ></CompanySizeSelector>
      </div>
<!--      下方：职位卡片们-->
      <div style="display: flex;flex-direction: row;margin-left:4rem;margin-top:0.5rem;">
<!--        左边：卡片-->
        <div style="display: flex;flex-direction: column;margin-left:4rem;margin-top:1rem;">
          <div v-for="(x, index) in [1, 2, 3, 4, 5, 6]" :key="x">
            <JobCard
              :class="{ 'selected-card': index === selectedCardIndex }"
              style="margin-bottom: 1.3rem;"
              @click="selectCard(index)"
              @cardSelected="handleSelectedCard"
            ></JobCard>
          </div>
        </div>

<!--        右边：详细内容-->
        <div style="margin-left:2rem;margin-top:1rem;">
          <JobCardDetail></JobCardDetail>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/global.css'
import SeekerNavBar from '@/components/NavBar/SeekerNavBar.vue'
import { ref } from 'vue'
import { MenuOutlined, DeploymentUnitOutlined, RedoOutlined } from '@ant-design/icons-vue'
import CitySelector from '@/components/Tools/CitySelector.vue'
import CVSelector from '@/components/Tools/CVSelector.vue'
import SearchJobTypeSelector from '@/components/Tools/SearchJobTypeSelector.vue'
import WorkExperienceSelector from '@/components/Tools/WorkExperienceSelector.vue'
import EducationSelector from '@/components/Tools/EducationSelector.vue'
import JobTypeSelector from '@/components/Tools/JobTypeSelector.vue'
import JobCard from '@/components/Tools/JobCard.vue'
import JobCardDetail from '@/components/Tools/JobCardDetail.vue'
import CompanySizeSelector from '@/components/Tools/CompanySizeSelector.vue'

// checkjobtype 推荐职位或全部职位
const currentCheckJobType = ref(['reco'])
const checkJobTypeItems = ref([
  {
    key: 'reco',
    label: '推荐职位',
    title: '推荐职位'
  },
  {
    key: 'all',
    label: '全部职位',
    title: '全部职位'
  }
])
// cvselector 选择简历
const currentCV = ref([])
const handleCVUpdate = (value) => {
  currentCV.value = value
  console.log('MainPage:CV updated:' + value)
}
// 选择视图
const currentView = ref('详细')
// 搜索框内容
const currentSearch = ref('')
// 城市选择和变化
const currentCity = ref([])
const handleCityUpdate = (value) => {
  currentCity.value = value
  console.log('MainPage:city updated:' + value)
}
// 职位选择
const currentJobType = ref([])
const handleJobTypeUpdate = (value) => {
  currentJobType.value = value
  console.log('MainPage:jobType updated:' + value)
}
// 求职类型选择
const currentSearchJobType = ref([])
const handleSearchJobTypeUpdate = (value) => {
  currentSearchJobType.value = value
  console.log('MainPage:searchJobType updated:' + value)
}
// 工作经验选择
const currentWorkExperience = ref([])
const handleWorkExperienceUpdate = (value) => {
  currentWorkExperience.value = value
  console.log('MainPage:workExperience updated:' + value)
}
// 学历选择
const currentEducation = ref([])
const handleEducationUpdate = (value) => {
  currentEducation.value = value
  console.log('MainPage:education updated:' + value)
}
// 公司规模选择器
const currentCompanySize = ref([])
const handleCompanySizeUpdate = (value) => {
  currentCompanySize.value = value
  console.log('MainPage:company size updated:' + value)
}
// 卡片选择（不是卡片的选框选择）
const selectedCardIndex = ref(0)
const selectCard = (index) => {
  selectedCardIndex.value = index
  console.log('MainPage:selectCard updated:' + index)
}
const handleSelectedCard = (value) => {
}
</script>

<style scoped>

:deep .ant-menu-item-selected {
  font-weight: bold !important;
}

:deep .ant-radio-button-wrapper{
  border: none !important;
  box-shadow: none !important;
  font-size:1.15rem !important;
  color:var(--greyFontColor);
  background: rgba(255, 255, 255, 0);
}
:deep .ant-radio-button-wrapper:not(:first-child)::before{
  background: rgba(255, 255, 255, 0) !important;
}
:deep .ant-input{
  border-radius: 0.8rem;
  border-color: white;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.25);
  background: rgba(255, 255, 255);
  border-width: 0.08rem;
}
:deep .ant-input:hover{
  box-shadow: 0 5px 10px 0 rgba(176,191,231,.5);
}
</style>
