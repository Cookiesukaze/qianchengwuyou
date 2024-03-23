<template>
  <div class="additional-info-card">
    <div class="additional-info-header">
      <span>附加信息</span>
      <div class="edit-delete-buttons">
        <a-button @click="editInfo" v-show="!isEditing">编辑</a-button>
        <a-button @click="deleteInfo">删除</a-button>
      </div>
    </div>

    <div class="additional-info-content" v-if="!isEditing">
      {{ additionalInfoContent }}
    </div>

    <div class="edit-additional-info" v-if="isEditing">
      <a-textarea
        v-model="editContent"
        placeholder="请输入附加信息"
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
      <div class="button-row">
        <a-button @click="cancelEdit">取消</a-button>
        <a-button type="primary" @click="saveEdit">完成</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const additionalInfoContent = ref('哈哈哈') // 初始附加信息内容
const editContent = ref('') // 编辑时的附加信息内容
const isEditing = ref(false) // 是否正在编辑

const editInfo = () => {
  editContent.value = additionalInfoContent.value
  isEditing.value = true
}

const cancelEdit = () => {
  editContent.value = ''
  isEditing.value = false
}

const saveEdit = () => {
  additionalInfoContent.value = editContent.value
  cancelEdit()
}

const deleteInfo = () => {
  additionalInfoContent.value = '' // 删除附加信息内容
}
</script>

<style scoped>
/* 卡片样式 */
.additional-info-card {
  position: relative;
  box-shadow: 0 3rem 3rem rgba(162, 161, 161, 0.2);
  display: flex;
  flex-direction: column;
  width: 26rem; /* 根据需要调整宽度 */
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}

/* 头部样式，包括标题和编辑删除按钮 */
.additional-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

/* 编辑删除按钮样式 */
.edit-delete-buttons {
  margin-left: auto;
}

/* 附加信息内容样式 */
.additional-info-content {
  font-size: 0.9rem;
  color: #666;
}

/* 编辑附加信息的输入框和按钮样式 */
.edit-additional-info {
  display: flex;
  flex-direction: column;
}

/* 按钮行样式 */
.button-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}
</style>
