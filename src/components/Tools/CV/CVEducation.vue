<template>
  <div class="education-card">
    <div class="education-header">
      <div>教育经历</div>
      <a-button
        class="edit-button"
        @click="isEditing = true"
      >
        编辑
      </a-button>
    </div>
    <div class="education-content" v-if="!isEditing">
      <div class="education-school-degree">
        <span>{{ education.school}}- {{education.degree  }}</span>
         </div>
      <div class="education-duration">
        <span>{{ education.startDate }} - {{ education.endDate }}</span>
      </div>
      <div class="education-major">
        {{ education.major }}
      </div>
    </div>

    <!-- 编辑教育经历的弹出框 -->
    <div v-if="isEditing" class="edit-modal" >
      <h3>编辑教育经历</h3>
      <div class="edit-row">
        <a-input type="text" v-model="education.school" placeholder="请输入学校名称:" />
      </div>
      <div class="edit-row">
        <div>学制类型:</div>
        <select v-model="education.degreeType">
          <option>全日制</option>
          <option>非全日制</option>
        </select>
      </div>
      <div class="edit-row">
        <div>学历:</div>
        <select v-model="education.degree">
          <option>初中及以下</option>
          <option>中专/中技</option>
          <option>高中</option>
          <option>大专</option>
          <option>本科</option>
          <option>硕士</option>
          <option>博士</option>
        </select>
      </div>
      <div class="edit-row">
        <a-input type="text" v-model="education.major" placeholder="请输入专业:"  />
      </div>
      <div class="edit-row">
        <a-input type="text" v-model="education.startDate" placeholder="请输入报道时间（精确到月）:" /> 至
        <a-input type="text" v-model="education.endDate" placeholder="请输入毕业时间（精确到月）:" />
      </div>
      <div class="edit1-row">
        <a-button   @click="cancelEdits">取消</a-button>
        <a-button type="primary" @click="saveEdits">完成</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const education = ref({
  school: '北京大学',
  startDate: '2021.09',
  endDate: '2025.06',
  major: '计算机科学与技术',
  degree: '本科',
  degreeType: '全日制'
})

const isEditing = ref(false)

function saveEdits () {
  // 在这里处理保存编辑的内容
  isEditing.value = false
}

function cancelEdits () {
  // 在这里处理取消编辑的逻辑
  isEditing.value = false
}
</script>

<style scoped>
.education-card {
  position: relative;
  box-shadow: 0 3rem 3rem rgba(162, 161, 161, 0.2);
  display: flex;
  flex-direction: column;
  width: 26rem; /* Adjust the width as needed */
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.edit-button {
  margin-left: auto;
  color: black;
}

.education-content {
  display: flex;
  flex-direction: column;
}

.education-school-degree {
  display: flex;
   justify-content: space-between; /* 使内容之间有间隔 */
  align-items: center;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
}

.education-duration {
  text-align: right;
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

.education-major {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
}

.edit-popup {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 0.7rem;
  box-shadow: 0 3rem 3rem rgba(162, 161, 161, 0.2);
  padding: 1rem;
}

.edit-row {
  display: flex;
  justify-content: flex-start;
 align-items: center;
  margin-bottom: 1rem;
}
.edit1-row {
  display: flex;
  justify-content: flex-end;
}
.edit-row span {
  margin-right: 1rem;
}

.button-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.button-row button {
  margin-left: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px ;
  border-radius: 4px;
  font-size: 0.8rem;
}

.button-row button:first-child {
  color: white;
}

.button-row button:last-child {
  color: white;
}
</style>
