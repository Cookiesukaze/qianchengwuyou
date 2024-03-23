<template>
  <div class="project-card">
    <div class="project-header">
      <span>项目经历</span>
      <a-button
        class="add-button"
        @mouseover="showAdd = true"
        @mouseout="showAdd = false"
        v-show="!isAdding"
      >
        添加
      </a-button>
    </div>

  <div class="project-info" v-for="project in projects" :key="project.id">
  <div class="project-title-wrapper">
    <span class="project-title">{{ project.title }}</span>
    <div class="edit-delete-buttons">
      <a-button @click="editProject(project.id)" v-show="!isEditing"
        >编辑</a-button
      >
      <a-button @click="deleteProject(project.id)">删除</a-button>
    </div>
  </div>
  <div class="project-role-duration">
    <span>{{ project.role }}</span>
    <span class="project-duration">{{ project.duration }}</span>
  </div>
  <div class="project-description">{{ project.description }}</div>
  <a-button
        class="optimize-button"
        @mouseover="showOptimize = true"
        @mouseout="showOptimize = false"
        v-show="!isOptimizing"
      >
        一键优化
      </a-button>
</div>

    <div class="add-edit-project" v-show="isAdding || isEditing">
      <div class="input-row">
        <a-input v-model="newProject.title" placeholder="输入项目名称" />
      </div>
      <div class="input-row">
        <a-input v-model="newProject.role" placeholder="输入项目角色" />
      </div>
      <div class="input-row">
        <a-input v-model="newProject.link" placeholder="输入项目链接（选填）" />
      </div>
      <div class="input-row">
        <a-input v-model="newProject.duration" placeholder="输入项目起始时间" />
      </div>
      <div class="input-row">
        <a-input v-model="newProject.description" placeholder="输入项目描述" />
      </div>
      <div class="button-row">
        <a-button @click="cancelAddEdit">取消</a-button>
        <a-button type="primary" @click="saveProject">保存</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: '签程无忧——基于知识图谱的大学生就业能力评价和职位推荐系统',
    role: '前端开发工程师',
    duration: '2023.11-2024.06',
    description: '签程无忧是一款基于知识图谱的大学生就业能力评价和职位推荐系统'
  }
  // ... 其他项目经历
])

const newProject = ref({
  id: null,
  title: '',
  role: '',
  link: '',
  duration: '',
  description: ''
})

const isAdding = ref(false)
const isEditing = ref(false)

const showAdd = () => {
  isAdding.value = true
  isEditing.value = false
}

const cancelAddEdit = () => {
  newProject.value = {
    id: null,
    title: '',
    role: '',
    link: '',
    duration: '',
    description: ''
  }
  isAdding.value = false
  isEditing.value = false
}

// const showOptimize = () => {
//   isOptimizing.value = true;
// };

// eslint-disable-next-line no-unused-vars
const optimizeProject = () => {
  // 优化项目的逻辑
  console.log('项目已优化')
  // eslint-disable-next-line no-undef
  cancelOptimize()
}

// eslint-disable-next-line no-unused-vars
const optimizeProjectModal = ref(false)

// const toggleOptimizeModal = () => {
//   optimizeProjectModal.value = !optimizeProjectModal.value;
// };

const saveProject = () => {
  if (isAdding.value) {
    projects.value.push({ ...newProject.value, id: Date.now() })
  } else if (isEditing.value) {
    const index = projects.value.findIndex((p) => p.id === newProject.value.id)
    if (index !== -1) {
      projects.value[index] = { ...newProject.value }
    }
  }
  cancelAddEdit()
}

const editProject = (projectId) => {
  const projectToEdit = projects.value.find((p) => p.id === projectId)
  if (projectToEdit) {
    newProject.value = { ...projectToEdit }
    isEditing.value = true
    isAdding.value = false
  }
}

const deleteProject = (projectId) => {
  projects.value = projects.value.filter((p) => p.id !== projectId)
}
</script>

<style scoped>
/* 卡片样式 */
.project-card {
  position: relative;
  box-shadow: 0 3rem 3rem rgba(162, 161, 161, 0.2);
  display: flex;
  flex-direction: column;
  width: 26rem; /* 根据需要调整宽度 */
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}

/* 头部样式，包括标题和添加按钮 */
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

/* 添加按钮样式 */
.add-button {
  margin-left: auto;
}

/* 项目信息样式 */
.project-info {
  margin-bottom: 1rem;
}

.project-title-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
/* 项目角色和时间的容器样式 */
.project-role-duration {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.project-role-duration span {
  margin-right: 0.5rem; /* 添加到下一个 span 的间距 */
}

/* 增加垂直间距的样式 */
.project-role-duration + .project-description {
  margin-top: 1rem; /* 增加垂直间距 */
}

/* 项目标题样式 */
.project-title {
  flex-grow: 1; /* 允许标题占满剩余空间 */
  margin-right: 1rem; /* 标题和按钮之间的间隔 */
}

/* 编辑和删除按钮容器样式 */
.edit-delete-buttons {
  display: flex;
}

/* 项目描述样式 */
.project-description {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

/* 优化按钮样式 */
.optimize-button {
  margin-top: 1rem; /* 调整按钮与描述的间距 */
}

/* 输入行样式 */
.input-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

/* 按钮行样式 */
.button-row {
  display: flex;
  justify-content: flex-end;
}
</style>
