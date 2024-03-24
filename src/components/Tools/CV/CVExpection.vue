<template>
  <div class="CV-exp">
    <div class="CV-exp-header">
      <div class="CV-exp-header-text">期望岗位</div>
      <a-button type="text" class="CV-exp-header-edit-btn"
                @click="handleEditClick(null)"><EditOutlined />
      </a-button>
    </div>
<!--    期望岗位内容列表-->
    <div class="CV-exp-content" v-if="!CVExpIsEdit">
      <div @click="handleEditClick(item)" class="CV-exp-content-item" v-for="item in CVExpList" :key="item" >
        <div style="display: flex;flex-direction: row;margin-left: 1rem">
          <div style="margin-right: 1rem"> {{ item.jobType ? item.jobType : '行业不限' }} </div>
          <div class="split-line"></div>
          <div style="margin-right: 1rem">{{ item.searchJobType ? item.searchJobType : '求职类型不限' }}</div>
          <div class="split-line"></div>
          <div >{{ item.city ? item.city : '城市不限' }}</div>
        </div>
      </div>
    </div>
<!--    期望岗位编辑区域-->
    <div v-if="CVExpIsEdit">
      <!-- 编辑窗口 -->
      <div style="display: flex;flex-direction: row">
        <jobTypeSelector v-model:currentJobType="CVExpEditItem.jobType"
                         @update:jobType="handleJobTypeUpdate"/>
        <searchJobTypeSelector v-model:currentSearchJobType="CVExpEditItem.searchJobType"
                               @update:searchJobType="handleSearchJobTypeUpdate" />
        <CitySelector v-model:city="CVExpEditItem.city" style="margin-left: 1rem"
                      @update:city="handleCityUpdate"/>
      </div>
      <div class="CV-exp-op-btn">
        <a-button style="margin-left: auto" type="primary" @click="handleSaveEditClick" >保存</a-button>
        <a-button class="CV-exp-op-btn-item" danger v-if="CVExpEditItem.id" @click="handleDeleteEditClick">删除</a-button>
        <a-button class="CV-exp-op-btn-item" @click="handleCancelEditClick">取消</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EditOutlined } from '@ant-design/icons-vue'
import CitySelector from '@/components/Tools/MainPage/CitySelector.vue'
import JobTypeSelector from '@/components/Tools/MainPage/JobTypeSelector.vue'
import SearchJobTypeSelector from '@/components/Tools/MainPage/SearchJobTypeSelector.vue'
import { getCityNameByCode, getFullCityCodesByName } from '@/components/Tools/js/cityUtils'
// 期望职位列表
const CVExpList = ref([
  {
    id: 1,
    searchJobType: '全职',
    jobType: '互联网',
    city: '浙江省'
  },
  {
    id: 2,
    searchJobType: null,
    jobType: '其它',
    city: '杭州市'
  }])
// 编辑区域
// 编辑状态和编辑数据
const CVExpIsEdit = ref(false)
const CVExpEditItem = ref({ searchJobType: null, jobType: null, city: [] })
// 子组件更新项
const handleJobTypeUpdate = (newJobType) => {
  CVExpEditItem.value.jobType = newJobType
}
const handleSearchJobTypeUpdate = (newSearchJobType) => {
  CVExpEditItem.value.searchJobType = newSearchJobType
}
const handleCityUpdate = (newCity) => {
  CVExpEditItem.value.city = newCity
}
// 编辑和新增逻辑
function handleEditClick (item) {
  if (item) {
    CVExpEditItem.value = { ...item }
    // 城市名转城市代码以选中选项
    if (typeof CVExpEditItem.value.city === 'string') {
      const cityCodes = getFullCityCodesByName(CVExpEditItem.value.city)
      CVExpEditItem.value.city = cityCodes ? [cityCodes] : ''
    }
  } else {
    CVExpEditItem.value = { id: null, searchJobType: null, jobType: null, city: [] } // 新增岗位
  }
  CVExpIsEdit.value = true
  console.log('CV:Expection edit')
}
// 保存逻辑
function handleSaveEditClick () {
  if (Array.isArray(CVExpEditItem.value.city) && CVExpEditItem.value.city.length > 0) {
    const cityName = getCityNameByCode(CVExpEditItem.value.city)
    CVExpEditItem.value.city = cityName || ''
  }
  if (CVExpEditItem.value.id) { // 保存已存在的岗位
    const index = CVExpList.value.findIndex(item => item.id === CVExpEditItem.value.id)
    if (index !== -1) {
      CVExpList.value[index] = { ...CVExpEditItem.value }
    }
  } else { // 新增岗位
    // CVExpEditItem.value.id = Date.now()  用时间戳作为新项的id
    const maxId = CVExpList.value.reduce((max, item) => item.id > max ? item.id : max, 0) // 顺序id
    CVExpEditItem.value.id = maxId + 1
    CVExpList.value.push(CVExpEditItem.value)
  }
  CVExpIsEdit.value = false
  console.log('CV:Expection save')
}
// 取消逻辑
function handleCancelEditClick () {
  CVExpIsEdit.value = false
  console.log('CV:Expection cancel')
}
// 删除逻辑
function handleDeleteEditClick () {
  CVExpList.value = CVExpList.value.filter(item => item.id !== CVExpEditItem.value.id)
  CVExpIsEdit.value = false
  console.log('CV:Expection delete')
}
</script>

<style scoped>
.CV-exp {
  position: relative;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.4);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}
.CV-exp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.CV-exp-header-text {
  font-size: 1rem;
  font-weight: bold;
  color: var(--greyFontColor125);
  margin-left: 0.1rem;
  margin-bottom: 0.5rem;
}
.CV-exp-header-edit-btn {
  margin-left: auto;
  margin-top:-0.7rem;
  color: var(--themeColor);
}
:deep(.ant-btn-text:not(:disabled):hover){
  color: var(--themeColor075);
  background: rgba(255, 255, 255, 0) !important;
}
.CV-exp-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}
.CV-exp-content-item {
  align-items: center;
  width: 80%;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
}
.CV-exp-content-item:hover {
  color: var(--themeColor);
  background: var(--themeColor01);
}
.split-line {
  position: relative;
  margin-right: 1rem;
}
.split-line:after{
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -6px;
  width: 1px;
  height: 12px;
  background-color: #ccc;
}
.CV-exp-op-btn{
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}
.CV-exp-op-btn-item{
  margin-left: 0.5rem;
}
</style>
