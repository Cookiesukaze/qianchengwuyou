<template>
  <div class="CV-add">
    <div class="CV-add-header">
      <div class="CV-add-header-text">附加信息</div>
      <a-button type="text" class="CV-add-header-edit-btn" @click="handleEditClick">
        <EditOutlined />
      </a-button>
    </div>
    <!-- 附加信息内容 -->
    <div class="CV-add-content" v-if="!CVAddIsEdit">
      <div class="CV-add-content-item" @click="handleEditClick">
        <div style="display: flex; flex-direction: column; width: 100%">
          <!-- 附加信息 -->
          <div class="CV-add-content-item-piece">
            <div class="CV-add-desc-content">{{ CVAddItem.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 附加信息编辑区域 -->
    <div v-if="CVAddIsEdit" class="CV-add-edit">
      <a-form layout="vertical">
        <a-form-item style="width: 40rem">
          <a-textarea v-model:value="CVAddItem.description" :rows="3" />
        </a-form-item>
      </a-form>
      <div class="CV-add-op-btn">
        <a-button style="margin-left: auto" type="primary" @click="handleSaveEditClick">保存</a-button>
        <a-button class="CV-add-op-btn-item" @click="handleCancelEditClick">取消</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EditOutlined } from '@ant-design/icons-vue'

// 附加信息对象
const CVAddItem = ref({
  id: 1,
  description: '大型无害垃圾务必进行分割处理，为了医院运行稳定，由专门的医生负责\n如果必要的话，请在临时休息室就寝'
})

// 编辑状态
const CVAddIsEdit = ref(false)

// 编辑逻辑
function handleEditClick () {
  CVAddIsEdit.value = true
  console.log('CV:Additional edit')
}

// 保存逻辑
function handleSaveEditClick () {
  CVAddIsEdit.value = false
  console.log('CV:Additional save')
}

// 取消逻辑
function handleCancelEditClick () {
  CVAddIsEdit.value = false
  console.log('CV:Additional cancel')
}
</script>

<style scoped>
.CV-add {
  position: relative;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.4);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background: white;
}
.CV-add-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.CV-add-header-text {
  font-size: 1rem;
  font-weight: bold;
  color: var(--greyFontColor125);
  margin-left: 0.1rem;
  margin-bottom: 0.5rem;
}
.CV-add-header-edit-btn {
  margin-left: auto;
  margin-top:-0.7rem;
  color: var(--themeColor);
}
:deep(.ant-btn-text:not(:disabled):hover){
  color: var(--themeColor075);
  background: rgba(255, 255, 255, 0) !important;
}
.CV-add-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  margin-left: 1rem;
}
.CV-add-content-item {
  align-items: center;
  width: 95%;
  height: max-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
}
.CV-add-content-item:hover {
  background: var(--themeColor01);
}
.CV-add-content-item:hover .CV-add-desc-content{
  color: var(--themeColor075);
}
.CV-add-content-item-piece {
  display: flex;
  flex-direction: row;
  margin-top:0.5rem;
}
.CV-add-desc-content{
  font-size: 0.9rem;
  color: var(--greyFontColor);
  white-space: pre-wrap;/*使其换行*/
  line-height: 1.3rem;
  margin-top: -0.15rem;
}
.CV-add-op-btn{
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}
.CV-add-op-btn-item{
  margin-left: 0.5rem;
}
.CV-add-edit{
  margin-left: 1.5rem;
  margin-top: 1rem;
}
</style>
