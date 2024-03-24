<template>
  <div class="CV-exp">
    <div class="CV-exp-header">
      <div class="CV-exp-header-text">期望岗位</div>
      <a-button type="text" class="CV-exp-header-edit-btn"
                @click="handleEditClick(null)"><EditOutlined />
      </a-button>
    </div>
<!--    期望岗位内容列表-->
    <div class="CV-exp-content" v-if="!isEditing">
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
    <div v-if="isEditing">
      <!-- 编辑窗口 -->
      <div style="display: flex;flex-direction: row">
        <jobTypeSelector v-model="editingItem.jobType" />
        <searchJobTypeSelector v-model="editingItem.searchJobType" />
        <CitySelector v-model:city="editingItem.city" />
      </div>
      <div style="display: flex;flex-direction: row">
        <a-button type="primary" @click="saveEdit">保存</a-button>
        <a-button @click="cancelEdit">取消</a-button>
        <a-button v-if="editingItem.id" @click="deleteEdit" style="color: red;">删除</a-button>
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
// 期望职位列表
const CVExpList = ref([
  {
    id: 1,
    searchJobType: '全职',
    jobType: '互联网',
    city: ['11', '1101', '110101']
  },
  {
    id: 2,
    searchJobType: '',
    jobType: '其它',
    city: '杭州'
  }])
// 编辑区域
const isEditing = ref(false)
const editingItem = ref({})
function handleEditClick (item) { // 点按编辑icon或者已有岗位后
  if (item) {
    editingItem.value = { ...item } // 复制一份要编辑的项
    console.log(editingItem.value.city)
  } else {
    editingItem.value = { id: null, searchJobType: '', jobType: '', city: '' } // 新增岗位
  }
  isEditing.value = true
}
function saveEdit () {
  if (editingItem.value.id) {
    // 保存已存在的岗位
    const index = CVExpList.value.findIndex(item => item.id === editingItem.value.id)
    if (index !== -1) {
      CVExpList.value[index] = { ...editingItem.value }
    }
  } else {
    // 新增岗位
    editingItem.value.id = Date.now() // 用时间戳作为新项的id
    CVExpList.value.push(editingItem.value)
  }
  isEditing.value = false
}
function cancelEdit () {
  isEditing.value = false
}
function deleteEdit () {
  CVExpList.value = CVExpList.value.filter(item => item.id !== editingItem.value.id)
  isEditing.value = false
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
</style>
