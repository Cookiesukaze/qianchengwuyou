复制
<template>
  <div class="experience-card">
    <div class="experience-header">
      <span>工作/实习经历</span>
      <a-button class="add-button" @click="showAdd">
        添加
      </a-button>
    </div>

    <div class="experience-info" v-for="experience in experiences" :key="experience.id">
      <div class="experience-title-wrapper">
        <span class="experience-title">{{ experience.company }}</span>
        <div class="edit-delete-buttons">
          <a-button @click="editExperience(experience.id)" v-show="!isEditing"
            >编辑</a-button
          >
          <a-button @click="deleteExperience(experience.id)">删除</a-button>
        </div>
      </div>
      <div class="experience-role-duration">
        <span>{{ experience.position }}</span>
        <span class="experience-duration">{{ experience.duration }}</span>
      </div>
      <div class="experience-description">{{ experience.content }}</div>
    </div>

    <div class="add-edit-experience" v-show="isAdding || isEditing">
      <div class="input-row">
        <a-input v-model="newExperience.company" placeholder="输入公司名称" />
      </div>
      <div class="input-row">
        <a-input v-model="newExperience.position" placeholder="输入职位名称" />
      </div>
      <div class="input-row">
        <a-input v-model="newExperience.duration" placeholder="输入在职时间" />
      </div>
      <div class="input-row">
        <a-textarea v-model="newExperience.content" placeholder="输入工作内容" />
      </div>
      <div class="button-row">
        <a-button @click="cancelAddEdit">取消</a-button>
        <a-button type="primary" @click="saveExperience">保存</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    id: 1,
    company: '签程无忧科技有限公司',
    position: '前端开发工程师',
    duration: '2023.11-2024.03',
    content: '哈哈哈哈哈'
  }
  // ... 其他工作/实习经历
])

const newExperience = ref({
  id: null,
  company: '',
  position: '',
  duration: '',
  content: ''
})

const isAdding = ref(false)
const isEditing = ref(false)

const showAdd = () => {
  isAdding.value = true
  isEditing.value = false
}

const cancelAddEdit = () => {
  newExperience.value = {
    id: null,
    company: '',
    position: '',
    duration: '',
    content: ''
  }
  isAdding.value = false
  isEditing.value = false
}

const saveExperience = () => {
  if (isAdding.value) {
    experiences.value.push({ ...newExperience.value, id: Date.now() })
  } else if (isEditing.value) {
    const index = experiences.value.findIndex((e) => e.id === newExperience.value.id)
    if (index !== -1) {
      experiences.value[index] = { ...newExperience.value }
    }
  }
  cancelAddEdit()
}

const editExperience = (experienceId) => {
  const experienceToEdit = experiences.value.find((e) => e.id === experienceId)
  if (experienceToEdit) {
    newExperience.value = { ...experienceToEdit }
    isEditing.value = true
    isAdding.value = false
  }
}

const deleteExperience = (experienceId) => {
  experiences.value = experiences.value.filter((e) => e.id !== experienceId)
}
</script>

<style scoped>
.experience-card {
  position: relative;
  box-shadow: 0 3rem 3rem rgba(162, 161, 161, 0.2);
  display: flex;
  flex-direction: column;
  width: 26rem; /* 根据需要调整宽度 */
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.add-button {
  margin-left: auto; /* 调整按钮至右侧 */
}

.experience-info {
  margin-bottom: 1rem;
}

.experience-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 水平布局，标题和按钮分别在左右 */
  margin-bottom: 0.5rem;
}

.experience-role-duration {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.experience-role-duration span {
  margin-right: 0.5rem; /* 添加到下一个 span 的间距 */
}

.experience-description {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.edit-delete-buttons {
  display: flex;
}

.content span {
  display: block;
  margin-bottom: 0.5rem;
}

.edit-popup {
  position: absolute;
  background: white;
  padding: 1rem;
  border: 1rem solid #ddd;
  /* 样式调整 */
}

.edit-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.edit-field {
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  justify-content: flex-end;
}

.buttons button {
  margin-left: 1rem;
  cursor: pointer;
}

.add-edit-experience {
  position: relative; /* 设置相对定位以便绝对定位的按钮行 */
  padding: 1rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin-top: 1rem; /* 根据需要调整 */
}

.button-row {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem; /* 调整按钮行距离表单顶部的高度 */
  }

.button-row button {
  margin-left: 1rem; /* 调整按钮之间的间距 */
}
</style>
