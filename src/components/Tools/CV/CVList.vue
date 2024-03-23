<template>
  <div class="resume-card">
    <div class="resume-header">
      <h1 class="resume-title">简历列表</h1>
      <p class="resume-description">我的简历</p>
    </div>
    <div class="resume-items">
      <div
        v-for="(resume, index) in resumes"
        :key="index"
        class="resume-item"
        :class="{ active: isActiveResume(index) }"
        @click="selectResume(index)"
        @mouseover="showDescription(index)"
        @mouseout="hideDescription(index)"
      >
        <p>{{ resume.title }}</p>
        <p v-if="showResumeDescription(index)" class="resume-description">
          {{ resume.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const resumes = ref([
  { title: '我的简历1', description: '前端开发工程师' },
  { title: '我的简历2', description: '后端开发工程师' }
  // 更多简历...
])

const selectedResumeIndex = ref(-1)

function selectResume (index) {
  selectedResumeIndex.value = index
}

function isActiveResume (index) {
  return selectedResumeIndex.value === index
}

function showDescription (index) {
  selectedResumeIndex.value = index
}

function hideDescription (index) {
  if (selectedResumeIndex.value !== index) {
    selectedResumeIndex.value = -1
  }
}

function showResumeDescription (index) {
  return selectedResumeIndex.value === index
}
</script>

<style scoped>
.resume-card {
  position: relative;
  box-shadow: 0 3px 3px rgba(162, 161, 161, 0.2);
  display: flex;
  flex-direction: column;
  width: 13rem; /* Adjust the width as needed */
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}

.resume-header {
  text-align: center;
  margin-bottom: 1rem;
}

.resume-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.resume-description {
  font-size: 1rem;
  color: #666;
}

.resume-items {
  margin-top: 1rem;
}

.resume-item {
  border-bottom: 1px solid #eee; /* Adjusted border thickness */
  padding: 0.5rem 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.resume-item:hover,
.resume-item.active {
  background-color: #f9f9f9; /* Hover and active background color */
}

.active p {
  font-weight: bold; /* Bold text for active resume */
}
</style>
