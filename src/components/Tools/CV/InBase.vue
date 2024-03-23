<template>
  <div class="basic-info">
    <div class="title">
      <span>基本信息</span>
      <a-button class="edit-btn" @click="isEditing = true">
        编辑
      </a-button>
    </div>
    <div class="content" v-if="userInfo">
      <span>姓名：{{ userInfo.name }}</span>
      <span>届数：{{ userInfo.session }}</span>
      <span>学历：{{ userInfo.education }}</span>
      <span>在读状态：{{ userInfo.status }}</span>
      <span>电话：{{ userInfo.phone }}</span>
      <span>邮箱：{{ userInfo.email }}</span>
    </div>
    <div v-else>加载中...</div>

    <!-- 编辑信息的悬浮框 -->
    <div v-if="isEditing" class="edit-popup">
      <div class="edit-title">编辑个人信息</div>
      <div class="edit-field">
        <span>姓名：</span>
        <input type="text" v-model="editInfo.name">
      </div>
      <div class="edit-field">
        <span>当前求职状态：</span>
        <select v-model="editInfo.status">
          <option>离校-随时到岗</option>
          <option>在校-暂不考虑</option>
          <option>在校-考虑机会</option>
          <option>在校-月内到岗</option>
        </select>
      </div>
      <div class="edit-field">
        <span>性别：</span>
        <select v-model="editInfo.gender">
          <option>男</option>
          <option>女</option>
        </select>
      </div>
      <div class="edit-field">
        <span>签友身份：</span>
        <select v-model="editInfo.identity">
          <option>学生</option>
          <option>社会求职者</option>
        </select>
      </div>
      <!-- ... 其他编辑字段 ... -->
      <div class="button-row">
        <a-button @click="cancelEdit">取消</a-button>
        <a-button type="primary" @click="saveEdit">保存</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userInfo = ref({
  name: '小明',
  session: '25届应届',
  education: '本科',
  status: '在读',
  phone: '177******79',
  email: '11111111@126.com'
  // 其他信息...
})

const isEditing = ref(false)

function cancelEdit () {
  isEditing.value = false
}

function saveEdit () {
  // 这里可以添加保存到后端的逻辑
  isEditing.value = false
}
</script>

<style scoped>
/* 卡片样式 */
.basic-info {
  position: relative;
  box-shadow: 0 3rem 3rem rgba(162, 161, 161, 0.2);
  display: flex;
  flex-direction: column;
  width: 26rem; /* 根据需要调整宽度 */
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}

/* 头部样式，包括标题和编辑按钮 */
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.content {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 1rem; /* 添加间隔 */
}

.edit-btn {
  cursor: pointer;
  /* 其他按钮样式 */
}

/* 编辑框样式 */
.edit-popup {
   display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* 移除绝对定位，改为相对定位，以便于悬浮在基本信息内容上方 */
  position: relative;
  /* 添加与卡片内容相同的flex布局和垂直间距 */
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 3rem 3rem rgba(162, 161, 161, 0.2);
}

.edit-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.edit-field {
  margin-bottom: 1rem;
}

.button-row {
  display: flex;
  justify-content: flex-end;
}

.button-row button {
  margin-left: 1rem;
  cursor: pointer;
}
</style>
