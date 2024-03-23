<template>
  <div class="CV-header">
    <div class="header">
      <div class="header-header">我的简历1</div>
      <div style="margin-right: 0.5rem">
        <a-button type="text" class="text-button-style">编辑</a-button>
        <a-button type="text" class="text-button-style">导入</a-button>
      </div>
    </div>
    <div class="CV-score-bar">
      <div class="CV-score-text">当前简历得分&nbsp;&nbsp;</div>
      <div class="CV-score">{{ cv.score }}</div>
      <div>分</div>
      <div class="CV-completeness-text"> 完整度&nbsp;&nbsp;</div>
      <div class="CV-completeness">{{ cv.completeness }}</div>
      <div>%</div>
      <a-button style="margin-left: auto" type="text" class="text-button-style" >生成详细报告</a-button>
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

const isKnowledgeGraphVisible = ref(false)

function toggleKnowledgeGraph () {
  isKnowledgeGraphVisible.value = !isKnowledgeGraphVisible.value
}
</script>

<style scoped>
.CV-header {
  position: relative;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.4);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-header {
  font-size: 1.15rem;
  font-weight: bold;
  color: var(--blackFontColor);
  margin-left: 0.1rem;
  margin-top:0.5rem;
  margin-bottom: 0.5rem;
}
.text-button-style{
  color: var(--themeColor);
}
:deep(.ant-btn-text:not(:disabled):hover){
  color: var(--themeColor);
  background: rgba(255, 255, 255, 0) !important;
}
.CV-score-bar {
  margin-top: 10px;
  height: 3rem;
  border-radius: 1rem;
  width: 100%;
  background-image: url('https://s21.ax1x.com/2024/03/20/pFWjQf0.png');
  background-size:100%;
  display: flex;
  align-items: center;
}
.CV-score-text,
.CV-completeness-text{
  margin-left: 0.9rem;
}
.CV-score,
.CV-completeness {
  margin-right: 5px;
  color: var(--themeColor);
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.knowledge-graph {
  margin-top: 10rem;
  justify-content: center;
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
