<template>
  <div class="certification-card">
    <!-- 标题和添加按钮 -->
    <div class="certification-header">
      <span>资格证书</span>
      <!-- 添加按钮，点击时显示输入框 -->
      <a-button
        class="add-button"
        @click="isAdding = true"
      >
        添加
      </a-button>
    </div>

    <!-- 资格证书列表 -->
    <div class="certification-list">
      <div v-for="cert in certifications" :key="cert">{{ cert }}</div>
    </div>

    <!-- 添加资格证书的输入框和按钮 -->
    <div class="add-certification" v-if="isAdding">
      <div class="input-row">
        <!-- 输入提示和输入框 -->
        <a-input v-model="newCertification" placeholder="输入资格证书名称" />
      </div>
      <div class="button-row">
        <!-- 取消和保存按钮 -->
        <a-button @click="cancelAdd">取消</a-button>
        <a-button type="primary" @click="saveCertification">保存</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 资格证书列表，初始包含一些示例证书
const certifications = ref([
  '大学英语六级(CET6)',
  '大学英语四级(CET4)',
  '驾驶证C1'
])
// 新资格证书的输入值
const newCertification = ref('')
// 控制添加框是否显示的标志
const isAdding = ref(false)

// 取消添加操作
const cancelAdd = () => {
  newCertification.value = ''
  isAdding.value = false
}

// 保存新添加的资格证书
const saveCertification = () => {
  // if (newCertification.value.trim() !== '') { // 添加了 trim() 来去除输入前后的空格
  //   certifications.value.push(newCertification.value.trim())
  //   newCertification.value = ''
  //   isAdding.value = false // 添加此行来隐藏添加框
  // }
  isAdding.value = false
}
</script>

<style scoped>
/* 卡片样式 */
.certification-card {
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
.certification-header {
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

/* 资格证书列表样式 */
.certification-list {
  margin-bottom: 1rem;
}

/* 添加资格证书的输入框和按钮样式 */
.add-certification {
  display: flex;
  flex-direction: column;
}

/* 输入行样式，包括输入提示和输入框 */
.input-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

/* 按钮行样式，包括取消和保存按钮 */
.button-row {
  display: flex;
  justify-content: flex-end;
}
</style>
