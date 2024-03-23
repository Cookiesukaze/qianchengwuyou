<template>
  <div class="resume-details">
    <div class="header">
      <span>我的简历</span>
      <div class="actions">
        <div class="action-button" v-for="(action, index) in actions" :key="index">
          <a-button @click="selectAction(index)" :class="{ active: selectedAction === index }">
            {{ action }}
          </a-button>
        </div>
      </div>
    </div>
    <div class="score">
      <span class="cv-score">当前简历得分：{{ cv.score }}</span>
      <span class="cv-completeness"> 完整度：{{ cv.completeness }}%</span> <!-- 添加空格 -->
      <a-button @click="generateReport" class="report-btn">生成详细报告</a-button>
    </div>
    <div class="knowledge-graph">
        <a-button @click="toggleKnowledgeGraph" class="icon-btn">
      <DeploymentUnitOutlined :style="{ color: 'black' }" />
      </a-button>
      <div v-if="isKnowledgeGraphVisible" class="knowledge-graph-frame"></div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, onMounted } from 'vue'
import { DeploymentUnitOutlined } from 'ant-design-vue'

const cv = ref({
  score: '70',
  completeness: '80'
})

const actions = ref(['预览', '编辑', '导入', '下载'])
const selectedAction = ref(-1)
const isKnowledgeGraphVisible = ref(false)

function selectAction (index) {
  selectedAction.value = index
}

function generateReport () {
  // 这里添加跳转到详细报告页面的逻辑
}

function toggleKnowledgeGraph () {
  isKnowledgeGraphVisible.value = !isKnowledgeGraphVisible.value
}
</script>

<style scoped>
.resume-details {
  position: relative;
  box-shadow: 0 3rem 3rem rgba(162, 161, 161, 0.2);
  display: flex;
  flex-direction: column;
  width: 41.5rem; /* 根据需要调整宽度 */
  padding: 1rem;
  border-radius: 0.7rem;
  background: white; /* 添加背景色为白色 */
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.actions {
  display: flex;
  box-shadow: 0 3rem 3rem rgba(162, 161, 161, 0.2);
  flex-wrap: wrap;
  gap: 10px; /* 增加按钮之间的间距 */
}

.action-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
}

/* .action-button.active {
  color: #4CAF50;
} */

.score {
  margin-top: 10px; /* 减少得分部分与标题的间距 */
  display: flex;
  align-items: center;
}

.cv-score,
.cv-completeness {
  margin-right: 10px; /* 增加得分和完整度之间的间距 */
}

.report-btn {
  margin-left: auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* .report-btn:hover {
  background-color: #f9f9f9;
} */

.knowledge-graph {
  margin-top: 10rem;
  justify-content: center; /* 水平居中 */
  display: flex;
  align-items: center;
}

.icon-btn {
  margin-left: 10rem;
  cursor: pointer;
}

.knowledge-graph-frame {
  margin-top: 10rem;
  border: 1rem solid #ddd;
  width: 100%;
  height: 20rem; /* 根据需要调整 */
}
</style>
