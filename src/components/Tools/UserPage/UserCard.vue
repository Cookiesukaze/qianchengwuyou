<template>
  <div class="user-card">
    <div v-if="!userCardIsEdit" @click="handleEditClick">
      <!--    头像-->
      <div class="user-card-content" v-if="!userCardIsEdit" >
        <div class="user-card-avatar-content">
          <img :src="userCardItem.avatar" class="user-avatar" alt="Avatar" />
        </div>
<!--        用户信息-->
        <div class="user-card-info">
          <div class="user-card-info-right">
            <div class="user-card-name">{{ userCardItem.name }}</div>
            <div class="user-card-grey-info">
              <div class="user-card-age" style="margin-right: 0.7rem">{{ userCardItem.age }}岁</div>
              <div class="split-line"></div>
              <div class="user-card-education" style="margin-right: 0.7rem">{{ userCardItem.education }}</div>
              <div class="split-line"></div>
              <div class="user-card-state">{{ userCardItem.state }}</div>
            </div>
          </div>
          <div class="user-card-info-left">
            <div class="user-card-exp">
              <div class="user-card-exp-text">期望：</div>
              <div class="user-card-exp-info">{{ userCardItem.expJobType }} · {{ userCardItem.expCity }}</div>
            </div>
            <div class="user-card-edu">
              <div>{{ userCardItem.school }} · {{ userCardItem.major }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 基本信息编辑区域 -->
    <div v-if="userCardIsEdit" class="user-card-edit">
      <a-form>
        <div style="display: flex;flex-direction: row">
<!--TODO：占位，头像上传怪麻烦的也不好布局-->
          <a-form-item label="姓名" style="width: 8rem">
            <a-input v-model:value="userCardItem.name" />
          </a-form-item>
          <a-form-item label="生日" style="margin-left: 2rem">
            <BirthdaySelector  style="margin-left: -0.1rem" v-model:birthday="userCardItem.birthYear"
                              @update:birthday="handleBirthdayUpdate"></BirthdaySelector>
          </a-form-item>
          <a-form-item label="学历" style="margin-left: 2rem">
            <EducationSelector style="margin-left: -0.1rem" v-model:currentEducation="userCardItem.education" @update:education="handleEducationUpdate"
            ></EducationSelector>
          </a-form-item>
          <a-form-item label="状态" style="margin-left: 2rem">
            <StateSelector style="margin-left: -0.1rem" v-model:currentState="userCardItem.state" @update:state="handleStateUpdate"
            ></StateSelector>
          </a-form-item>
        </div>
        <div style="display: flex;flex-direction: row">
          <a-form-item label="期望">
            <jobTypeSelector v-model:currentJobType="userCardItem.expJobType" style="margin-left: -0.1rem;width: 7rem"
                             @update:jobType="handleExpJobTypeUpdate"/>
          </a-form-item>
          <a-form-item>
            <CitySelector v-model:city="userCardItem.city" style="margin-left: 0.5rem"
                          @update:city="handleExpCityUpdate"/>
          </a-form-item>
          <a-form-item label="学校" style="margin-left: 2rem">
            <SchoolACInput v-model:school="userCardItem.school" style="margin-left: 0.5rem"
                          @update:school="handleSchoolUpdate"/>
          </a-form-item>
          <a-form-item label="专业" style="margin-left: 2rem">
            <MajorACInput v-model:major="userCardItem.major" style="margin-left: 0.5rem"
                           @update:major="handleMajorUpdate"/>
          </a-form-item>
        </div>
      </a-form>
      <div class="user-card-op-btn">
        <a-button style="margin-left: auto" type="primary" @click="handleSaveEditClick">保存</a-button>
        <a-button class="user-card-op-btn-item" @click="handleCancelEditClick">取消</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EducationSelector from '@/components/Tools/MainPage/EducationSelector.vue'
import BirthdaySelector from '@/components/Tools/UserPage/BirthdaySelector.vue'
import StateSelector from '@/components/Tools/UserPage/StateSelector.vue'
import JobTypeSelector from '@/components/Tools/MainPage/JobTypeSelector.vue'
import CitySelector from '@/components/Tools/MainPage/CitySelector.vue'
import { getCityNameByCode, getFullCityCodesByName } from '@/components/Tools/js/cityUtils'
import SchoolACInput from '@/components/Tools/CV/SchoolACInput.vue'
import MajorACInput from '@/components/Tools/CV/MajorACInput.vue'

// 基本信息对象
const userCardItem = ref({
  name: '王小明',
  avatar: 'https://s21.ax1x.com/2024/03/27/pF5zcND.png',
  age: '21',
  birthYear: '2003',
  education: '本科',
  school: '杭州电子科技大学',
  major: '计算机科学与技术',
  expJobType: '互联网',
  expCity: '杭州市',
  state: '在校-寻找实习',
  lastActive: '8天前活跃'
})
// 来自子组件的更新
const handleEducationUpdate = (value) => {
  userCardItem.value.education = value
  console.log('User:education updated:' + value)
}
const handleBirthdayUpdate = (birthYear) => {
  if (!birthYear) {
    userCardItem.value.age = ''
    return
  }
  const currentYear = new Date().getFullYear()
  const age = currentYear - parseInt(birthYear)
  userCardItem.value.age = age.toString()
  console.log('User:age updated:' + age)
}
const handleStateUpdate = (value) => {
  userCardItem.value.state = value
  console.log('User:state updated:' + value)
}
const handleExpJobTypeUpdate = (value) => {
  userCardItem.value.expJobType = value
  console.log('User:expJobType updated:' + value)
}
const handleExpCityUpdate = (value) => {
  userCardItem.value.expCity = value
  console.log('User:expCity updated:' + value)
}
const handleSchoolUpdate = (value) => {
  userCardItem.value.school = value
  console.log('User:school updated:' + value)
}
const handleMajorUpdate = (value) => {
  userCardItem.value.major = value
  console.log('User:major updated:' + value)
}
// 编辑状态
const userCardIsEdit = ref(false)

// 编辑逻辑
function handleEditClick () {
  if (typeof userCardItem.value.expCity === 'string') {
    const cityCodes = getFullCityCodesByName(userCardItem.value.expCity)
    userCardItem.value.city = cityCodes ? [cityCodes] : []
  }
  userCardIsEdit.value = true
}
// 保存逻辑
function handleSaveEditClick () {
  if (Array.isArray(userCardItem.value.expCity) && userCardItem.value.expCity.length > 0) {
    const cityName = getCityNameByCode(userCardItem.value.city)
    userCardItem.value.expCity = cityName || '城市不限'
  }
  userCardIsEdit.value = false
}

// 取消逻辑
function handleCancelEditClick () {
  userCardIsEdit.value = false
}
</script>

<style scoped>
.user-avatar {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 2rem;
}
.user-avatar-edit {
  width: 4.8rem;
  height: 4.8rem;
  object-fit: cover;
  margin-right: 2rem;
}
.user-card-avatar-content {
  display: flex;
  align-items: center;
}

.user-card-info {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}

.user-card-info-right {
  margin-top:1rem;
  display: flex;
  flex-direction: column;
  width: 45%;
}
.user-card-name{
  font-size: 1.25rem;
}
.user-card-info-left{
  display: flex;
  flex-direction: column;
}
.user-card-grey-info {
  color: var(--greyFontColor);
  margin-top: 0.6rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.split-line {
  position: relative;
  margin-right: 0.7rem;
}

.split-line:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -6px;
  width: 1px;
  height: 12px;
  background-color: #ccc;
}

.user-card-edu {
  margin-top: 1rem;
  margin-left: auto;
  margin-right: 2rem;
}

.user-card {
  width: 80%;
  position: relative;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.4);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}
:deep(.ant-btn-text:not(:disabled):hover) {
  color: var(--themeColor075);
  background: rgba(255, 255, 255, 0) !important;
}
.user-card-content {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
.user-card-content:hover {
  background: var(--themeColor01);
}
.user-card-exp{
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}
.user-card-content-item:hover .user-card-desc-content,
.user-card-content-item:hover .user-card-icon-style{
  color: var(--themeColor);
}
.user-card-content-item-piece {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
}
.user-card-desc-title {
  font-weight: bold;
  margin-right: 0.5rem;
}
.user-card-desc-content {
  line-height: 1.3rem;
}
.user-card-op-btn {
  display: flex;
  flex-direction: row;
}
.user-card-op-btn-item {
  margin-left: 0.5rem;
}
.user-card-edit {
  margin-left: 1.5rem;
  margin-top: 1rem;
}
:deep(.ant-input){
  border-radius: 0.5rem;
  border-color: white;
  box-shadow: 0 5px 10px 0 rgba(176,191,231,.15);
  background: rgba(255, 255, 255);
  border-width: 0.08rem;
}
:deep(.ant-input:hover){
  box-shadow: 0 5px 10px 0 rgba(176,191,231,.2);
}
</style>
