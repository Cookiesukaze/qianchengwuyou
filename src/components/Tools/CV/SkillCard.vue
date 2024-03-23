<template>
  <div class="skill-card">
    <div class="skill-header">
      <span>专业技能</span>
      <div class="edit-delete-buttons">
        <a-button @click="editSkill" v-show="!isEditing">编辑</a-button>
        <a-button @click="deleteSkill">删除</a-button>
      </div>
    </div>

    <div class="skill-content" v-if="!isEditing">
      {{ skillContent }}
    </div>

    <div class="edit-skill" v-if="isEditing">
      <a-textarea
        v-model="editContent"
        placeholder="请输入专业技能"
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

const skillContent = ref('哈哈哈') // 初始专业技能内容
const editContent = ref('') // 编辑时的专业技能内容
const isEditing = ref(false) // 是否正在编辑

const editSkill = () => {
  editContent.value = skillContent.value
  isEditing.value = true
}

const cancelEdit = () => {
  editContent.value = ''
  isEditing.value = false
}

const saveEdit = () => {
  skillContent.value = editContent.value
  cancelEdit()
}

const deleteSkill = () => {
  skillContent.value = '' // 删除专业技能内容
}
</script>

<style scoped>
/* 卡片样式 */
.skill-card {
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
.skill-header {
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

/* 专业技能内容样式 */
.skill-content {
  font-size: 0.9rem;
  color: #666;
}

/* 编辑专业技能的输入框和按钮样式 */
.edit-skill {
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
