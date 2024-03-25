<template>
  <div class="CV-ski">
    <div class="CV-ski-header">
      <div class="CV-ski-header-text">专业技能</div>
      <a-button type="text" class="CV-ski-header-edit-btn"
                @click="handleEditClick(null)"><EditOutlined />
      </a-button>
    </div>
    <!--    专业技能内容列表-->
    <div class="CV-ski-content" v-if="!CVSkiIsEdit">
      <div @click="handleEditClick(item)" class="CV-ski-content-item" v-for="item in CVSkiList" :key="item" >
        <div style="display: flex;flex-direction: row;margin-left: 1rem">
          <div style="margin-right: 1rem"> {{ item.skillName }} </div>
          <div class="split-line"></div>
          <div style="margin-right: 1rem">{{ item.skillDegree }}</div>
        </div>
      </div>
    </div>
    <!--    专业技能编辑区域-->
    <div v-if="CVSkiIsEdit">
      <!-- 编辑窗口 -->
      <div style="display: flex;flex-direction: row">
        <SkillSelector v-model:currentSkill="CVSkiEditItem.skillName"
                         @update:currentSkill="handleSkillUpdate"/>
        <SkillDegreeSelector v-model:currentSkillDegree="CVSkiEditItem.skillDegree"
                       @update:currentSkillDegree="handleSkillDegreeUpdate"/>
      </div>
      <div class="CV-ski-op-btn">
        <a-button style="margin-left: auto" type="primary" @click="handleSaveEditClick" >保存</a-button>
        <a-button class="CV-ski-op-btn-item" danger v-if="CVSkiEditItem.id" @click="handleDeleteEditClick">删除</a-button>
        <a-button class="CV-ski-op-btn-item" @click="handleCancelEditClick">取消</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EditOutlined } from '@ant-design/icons-vue'
import SkillSelector from '@/components/Tools/CV/SkillSelector.vue'
import SkillDegreeSelector from '@/components/Tools/CV/SkillDegreeSelector.vue'

// 专业技能列表
const CVSkiList = ref([
  {
    id: 1,
    skillName: 'Java',
    skillDegree: '熟练'
  },
  {
    id: 2,
    skillName: 'Python',
    skillDegree: '熟练'
  }])
// 编辑区域
// 编辑状态和编辑数据
const CVSkiIsEdit = ref(false)
const CVSkiEditItem = ref({ skillName: null, skillDegree: null })
// 子组件更新项
const handleSkillUpdate = (newSkill) => {
  CVSkiEditItem.value.skillName = newSkill
}
const handleSkillDegreeUpdate = (newSkillDegree) => {
  CVSkiEditItem.value.skillDegree = newSkillDegree
}
// 编辑和新增逻辑
function handleEditClick (item) {
  if (item) {
    CVSkiEditItem.value = { ...item }
  } else {
    CVSkiEditItem.value = { id: null, skillName: null, skillDegree: null } // 新增岗位
  }
  CVSkiIsEdit.value = true
  console.log('CV:Skill edit')
}
// 保存逻辑
function handleSaveEditClick () {
  if (CVSkiEditItem.value.id) { // 保存已存在的技能
    const index = CVSkiList.value.findIndex(item => item.id === CVSkiEditItem.value.id)
    if (index !== -1) {
      CVSkiList.value[index] = { ...CVSkiEditItem.value }
    }
  } else { // 新增技能
    // CVSkiEditItem.value.id = Date.now()  用时间戳作为新项的id
    const maxId = CVSkiList.value.reduce((max, item) => item.id > max ? item.id : max, 0) // 顺序id
    CVSkiEditItem.value.id = maxId + 1
    CVSkiList.value.push(CVSkiEditItem.value)
  }
  CVSkiIsEdit.value = false
  console.log('CV:Skill save')
}
// 取消逻辑
function handleCancelEditClick () {
  CVSkiIsEdit.value = false
  console.log('CV:Skill cancel')
}
// 删除逻辑
function handleDeleteEditClick () {
  CVSkiList.value = CVSkiList.value.filter(item => item.id !== CVSkiEditItem.value.id)
  CVSkiIsEdit.value = false
  console.log('CV:Skill delete')
}
</script>

<style scoped>
.CV-ski {
  position: relative;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.4);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}
.CV-ski-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.CV-ski-header-text {
  font-size: 1rem;
  font-weight: bold;
  color: var(--greyFontColor125);
  margin-left: 0.1rem;
  margin-bottom: 0.5rem;
}
.CV-ski-header-edit-btn {
  margin-left: auto;
  margin-top:-0.7rem;
  color: var(--themeColor);
}
:deep(.ant-btn-text:not(:disabled):hover){
  color: var(--themeColor075);
  background: rgba(255, 255, 255, 0) !important;
}
.CV-ski-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}
.CV-ski-content-item {
  align-items: center;
  width: 80%;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
}
.CV-ski-content-item:hover {
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
.CV-ski-op-btn{
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}
.CV-ski-op-btn-item{
  margin-left: 0.5rem;
}
</style>
