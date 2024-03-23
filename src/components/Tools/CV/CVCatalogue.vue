<template>
  <div class="resume">
    <div
      class="section"
      v-for="(section, index) in resumeSections"
      :key="index"
      @click="selectSection(index)"
      :class="{ active: selectedSection === index }"
    >
      {{ section.title }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const resumeSections = ref([
  { title: '简历目录' },
  { title: '个人详细信息' },
  { title: '教育经历' },
  { title: '资格证书' },
  { title: '求职期望' },
  { title: '工作/实习经历' },
  { title: '项目经历' },
  { title: '技能标签' },
  { title: '附加信息' }
])

const selectedSection = ref(-1)

function selectSection (index) {
  selectedSection.value = index
}
</script>

<style scoped>
.resume {
  display: flex;
  flex-direction: column; /* 保持column布局 */
  background: white;
}

.section {
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-bottom: none; /* 移除底边框 */
}

.section:hover,
.section.active {
  background-color: #f9f9f9; /* 鼠标悬停或选中的颜色 */
}

.active {
  font-weight: bold; /* 选中的文字加粗 */
}
</style>
