<template>
  <div class="expectation-card">
    <div class="title">
      <span>期望岗位</span>
      <a-button
        class="edit-btn"
        @click="isEditing = true"
      >
        编辑
      </a-button>
    </div>
    <div class="content" v-if="!isEditing">
      <span>求职类型：{{ editInfo.type }}</span>
      <span>期望岗位：{{ editInfo.jobTitle }}</span>
      <span>工作城市：{{ editInfo.city }}</span>
    </div>

    <!-- 编辑期望的悬浮框，在编辑状态下显示 -->
    <div v-if="isEditing" class="edit-popup">
      <div class="edit-title">编辑求职期望</div>
      <div class="edit-field">
        <span>求职类型：</span>
        <select v-model="editInfo.type">
          <option value="全职">全职</option>
          <option value="实习">实习</option>
        </select>
      </div>
      <div class="edit-field">
        <a-input type="text" v-model="editInfo.jobTitle" placeholder="请输入期望岗位:" />
      </div>
      <div class="edit-field">
        <span>工作城市：</span>
        <city-selector
          @update:city="updateJobCity"
          :selected="editInfo.city"
        ></city-selector>
      </div>
      <div class="button-row">
        <a-button @click="cancelEdit">取消</a-button>
        <a-button type="primary" @click="saveEdit">保存</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CitySelector from '@/components/Tools/MainPage/CitySelector.vue' // 假设这是一个现有的组件

const isEditing = ref(false)
const editInfo = ref({
  type: '全职', // 求职类型
  jobTitle: '前端开发工程师 ', // 期望岗位
  city: '' // 工作城市
})

function updateJobCity (city) {
  editInfo.value.city = city
}

function cancelEdit () {
  isEditing.value = false
}

function saveEdit () {
  isEditing.value = false
  // 这里可以添加保存到后端的逻辑
}
</script>

<style scoped>
/* 卡片样式 */
.expectation-card {
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

/* 编辑按钮样式 */
.edit-btn {
  margin-left: auto;
  color: black;
}

/* 内容样式 */
.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 增加垂直间距 */
  margin-bottom: 1rem;
}

/* 编辑期望的悬浮框样式 */
.edit-popup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 垂直间距 */
}

/* 编辑字段样式 */
.edit-field {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

/* 完成和取消按钮样式 */
.buttons {
  /* 移动按钮至右侧 */
  justify-content: flex-end;
  margin-top: 1rem; /* 添加间距 */
}

/* 按钮行样式，包括取消和保存按钮 */
.button-row {
  display: flex;
  justify-content: flex-end;
}
</style>
