<template>
  <div class="CV-proj">
    <div class="CV-proj-header">
      <div class="CV-proj-header-text">项目经历</div>
      <a-button type="text" class="CV-proj-header-edit-btn"
                @click="handleEditClick(null)"><EditOutlined />
      </a-button>
    </div>
    <!--    项目经历内容列表-->
    <div class="CV-proj-content" v-if="!CVProjIsEdit">
      <div @click="handleEditClick(item)" class="CV-proj-content-item" v-for="item in CVProjList" :key="item" >
        <div style="display: flex;flex-direction: column;">
<!--          第一栏，项目名和职责-->
          <div class="CV-proj-content-item-piece" style="margin-bottom: 0.7rem">
            <div class="CV-proj-title"> {{ item.title }} </div>
            <div class="split-line"></div>
            <div class="CV-proj-role">{{ item.role }}</div>
            <div class="CV-proj-time-container">
              <div class="CV-proj-time">{{ item.startTime }}~{{ item.endTime }}</div>
            </div>
          </div>
<!--          第二栏，项目描述-->
          <div class="CV-proj-content-item-piece">
            <div class="CV-proj-desc-title">内容：</div>
            <div class="CV-proj-desc-content">{{item.description}}</div>
          </div>
<!--          第三栏，项目业绩-->
          <div class="CV-proj-content-item-piece">
            <div class="CV-proj-desc-title">业绩：</div>
            <div class="CV-proj-desc-content">{{item.achievement}}</div>
          </div>
          <div style="height: 0.5rem"></div>
        </div>
      </div>
    </div>
    <!--    项目经历编辑区域-->
    <div v-if="CVProjIsEdit" class="CV-proj-edit">
      <a-form model="CVProjEditItem" layout="vertical" >
        <div style="display: flex;flex-direction: row">
          <a-form-item label="项目标题" style="width: 15rem">
            <a-input v-model:value="CVProjEditItem.title" />
          </a-form-item>
          <a-form-item label="担任角色" style="width: 15rem;margin-left: 2rem">
            <a-input v-model:value="CVProjEditItem.role" />
          </a-form-item>
        </div>
        <div style="display: flex;flex-direction: row">
          <a-form-item label="开始时间" style="width: 9rem">
            <a-date-picker v-model:value="CVProjEditItem.startTime" picker="month"  placeholder="开始时间" />
          </a-form-item>
          <a-form-item label="结束时间" style="width: 9rem;margin-left: 2rem">
            <a-date-picker v-model:value="CVProjEditItem.endTime" picker="month"  placeholder="结束时间"/>
          </a-form-item>
        </div>
        <a-form-item label="项目描述" style="width: 40rem">
          <a-textarea v-model:value="CVProjEditItem.description" :rows=3 />
        </a-form-item>
        <a-form-item label="项目业绩" style="width: 40rem">
          <a-textarea v-model:value="CVProjEditItem.achievement" :rows=3 />
        </a-form-item>
      </a-form>
      <div class="CV-proj-op-btn">
        <a-button style="margin-left: auto" type="primary" @click="handleSaveEditClick">保存</a-button>
        <a-button class="CV-proj-op-btn-item" danger v-if="CVProjEditItem.id" @click="handleDeleteEditClick">删除</a-button>
        <a-button class="CV-proj-op-btn-item" @click="handleCancelEditClick">取消</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EditOutlined } from '@ant-design/icons-vue'
// 时间选择器用
import dayjs from 'dayjs'

// 项目经历列表
const CVProjList = ref([
  {
    id: 1,
    title: '签程无忧',
    role: '前端开发工程师',
    startTime: '2023-02',
    endTime: '2023-04',
    description: '1. 生态公益林区，严格防范火患，请不要携带火种，刀具，危险物品上山。2. 山林危险，请不要随意离开登山健身步道。3. 水深危险，请不要在沿途的溪流或水潭中游玩。',
    achievement: '上线使用5人次，获得参与奖'
  },
  {
    id: 2,
    title: '签程无忧pro',
    role: '前端开发工程师',
    startTime: '2023-02',
    endTime: '2023-04',
    description: '签程无忧是一款基于知识图谱的大学生就业能力评价和职位推荐系统1. 爱护环境，请为山林留下养料。\n' +
      '\n' +
      '2. 亲近自然，本处免费开放游泳。\n' +
      '\n' +
      '3. 树林中存在通往大洛村的小道，您可以尝试通行，但后果自负。',
    achievement: '上线使用5人次，获得参与奖'
  }
])
// 编辑区域
// 编辑状态和编辑数据
const CVProjIsEdit = ref(false)
const CVProjEditItem = ref({
  title: null,
  role: null,
  startTime: null,
  endTime: null,
  description: null,
  achievement: null
})
// 子组件更新项
// const handleJobTypeUpdate = (newJobType) => {
//   CVProjEditItem.value.jobType = newJobType
// }
// 编辑和新增逻辑
function handleEditClick (item) {
  if (item) {
    CVProjEditItem.value = {
      ...item,
      startTime: dayjs(item.startTime),
      endTime: dayjs(item.endTime)
    }
  } else {
    CVProjEditItem.value = { id: null, title: null, role: null, startTime: null, endTime: null, description: null, achievement: null } // 新增项目经历
  }
  CVProjIsEdit.value = true
  console.log('CV:Project edit')
}
// 保存逻辑
function handleSaveEditClick () {
  // 转日期
  const formattedStartTime = CVProjEditItem.value.startTime ? dayjs(CVProjEditItem.value.startTime).format('YYYY-MM') : ''
  const formattedEndTime = CVProjEditItem.value.endTime ? dayjs(CVProjEditItem.value.endTime).format('YYYY-MM') : ''
  if (CVProjEditItem.value.id) { // 保存已存在的项目经历
    const index = CVProjList.value.findIndex(item => item.id === CVProjEditItem.value.id)
    if (index !== -1) {
      CVProjList.value[index] = {
        ...CVProjEditItem.value,
        startTime: formattedStartTime,
        endTime: formattedEndTime
      }
    }
  } else { // 新增项目经历
    // CVProjEditItem.value.id = Date.now()  用时间戳作为新项的id
    const maxId = CVProjList.value.reduce((max, item) => item.id > max ? item.id : max, 0) // 顺序id
    const newItem = {
      ...CVProjEditItem.value,
      id: maxId + 1,
      startTime: formattedStartTime,
      endTime: formattedEndTime
    }
    CVProjList.value.push(newItem)
  }
  CVProjIsEdit.value = false
  console.log('CV:Project save')
}
// 取消逻辑
function handleCancelEditClick () {
  CVProjIsEdit.value = false
  console.log('CV:Project cancel')
}
// 删除逻辑
function handleDeleteEditClick () {
  CVProjList.value = CVProjList.value.filter(item => item.id !== CVProjEditItem.value.id)
  CVProjIsEdit.value = false
  console.log('CV:Project delete')
}
</script>

<style scoped>
.CV-proj {
  position: relative;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.4);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}
.CV-proj-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.CV-proj-header-text {
  font-size: 1rem;
  font-weight: bold;
  color: var(--greyFontColor125);
  margin-left: 0.1rem;
  margin-bottom: 0.5rem;
}
.CV-proj-header-edit-btn {
  margin-left: auto;
  margin-top:-0.7rem;
  color: var(--themeColor);
}
:deep(.ant-btn-text:not(:disabled):hover){
  color: var(--themeColor075);
  background: rgba(255, 255, 255, 0) !important;
}
.CV-proj-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  margin-left: 1rem;
}
.CV-proj-title{
  font-size: 1rem;
  margin-right: 0.5rem;
}
.CV-proj-role{
  font-size: 1rem;
}
.CV-proj-time{
  font-size: 0.9rem;
  color: var(--greyFontColor);
}
.CV-proj-time-container {
  margin-left: auto;
}
.CV-proj-content-item {
  align-items: center;
  width: 95%;
  height: max-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
}
.CV-proj-content-item:hover {
  background: var(--themeColor01);
}
.CV-proj-content-item:hover .CV-proj-title,
.CV-proj-content-item:hover .CV-proj-role,
.CV-proj-content-item:hover .CV-proj-time{
  color: var(--themeColor);
}
.CV-proj-content-item-piece {
  display: flex;
  flex-direction: row;
  margin-top:0.5rem;
}
.CV-proj-desc-title{
  min-width: 3.3rem;
  font-weight: bold;
  font-size: 0.9rem;
}
.CV-proj-desc-content{
  font-size: 0.9rem;
  color: var(--greyFontColor)
}
.split-line {
  position: relative;
  margin-right: 0.5rem;
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
.CV-proj-op-btn{
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}
.CV-proj-op-btn-item{
  margin-left: 0.5rem;
}
.CV-proj-edit{
  margin-left: 1.5rem;
  margin-top: 1rem;
}
</style>
