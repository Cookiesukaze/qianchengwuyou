<template>
  <div class="chat-card">
    <div class="chat-header">聊天</div>
    <div class="chat-messages" ref="messagesContainer">
      <div
        class="chat-message"
        :class="{ 'chat-message-robot': !message.isOwn, 'chat-message-own': message.isOwn }"
        v-for="message in chatMessages"
        :key="message.id"
      >
        <div class="chat-message-content">{{ message.content }}</div>
        <div class="chat-message-time">{{ message.time }}</div>
      </div>
    </div>
    <div class="chat-input">
      <a-input
        style="margin-right: 5%"
        v-model:value="newMessage"
        placeholder="请输入"
        @keyup.enter="sendNewMessage"
      />
      <a-button type="primary" shape="circle" @click="sendNewMessage">
        <SendOutlined />
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { SendOutlined } from '@ant-design/icons-vue'
import axios from 'axios'

const getDefaultTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const chatMessages = ref([
  {
    id: 0,
    content: '有什么可以帮助你的吗？\n请点击“生成详细报告”获取更加详细全面的简历修改建议。',
    time: getDefaultTime(),
    isOwn: false
  }
])

const newMessage = ref('')
const messagesContainer = ref(null)

const sendNewMessage = async () => {
  if (newMessage.value.trim() !== '') {
    const currentTime = getDefaultTime()
    const userMessageContent = newMessage.value
    const userMessage = { // 用户消息对象
      id: chatMessages.value.length,
      content: userMessageContent,
      time: currentTime,
      isOwn: true
    }
    chatMessages.value.push(userMessage) // 将用户消息添加到聊天数组
    newMessage.value = '' // 清空输入框
    await nextTick() // 立即滚动到最新的消息
    const container = messagesContainer.value
    if (container) {
      container.scrollTop = container.scrollHeight
    }
    const payload = { message: userMessageContent }
    try {
      const response = await axios.post('http://127.0.0.1:5000/cvchat', payload)
      const botMessage = { // 机器人回复消息对象
        id: chatMessages.value.length,
        content: response.data.content,
        time: currentTime,
        isOwn: false
      }
      chatMessages.value.push(botMessage) // 将机器人消息添加到聊天数组
    } catch (error) {
      console.error('CV:Chat:', error)
      chatMessages.value.push({ // 将错误消息添加到聊天中
        id: chatMessages.value.length,
        content: '无法连接到服务器，请稍后再试。',
        time: currentTime,
        isOwn: false
      })
    }
    // 再次滚动到最新的消息forbot
    await nextTick()
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }
}

onMounted(() => {
  nextTick(() => {
    const container = messagesContainer.value
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  })
})
</script>

<style scoped>
.chat-card {
  display: flex;
  flex-direction: column;
  height: 25rem;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.7rem;
  box-shadow: 0 5px 15px 0 rgba(176,191,231,.4);
  background: white;
}

.chat-header {
  font-size: 0.95rem;
  font-weight: bold;
  color: var(--blackFontColor);
  margin-left: 0.1rem;
  margin-bottom: 0.5rem;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
}

.chat-message {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 15px;
  max-width: 90%;
  word-wrap: break-word;
}

.chat-message-robot {
  font-size: 0.9rem;
  background-color: #f3f3f3;
  align-self: flex-start;
  color: var(--blackFontColor);
  white-space: pre-wrap;/*使其换行*/
}

.chat-message-own {
  font-size: 0.9rem;
  color: var(--blackFontColor);
  background-color: var(--themeLightBlue);
  align-self: flex-end;
  white-space: pre-wrap;/*使其换行*/
}

.chat-message-content {
  margin-bottom: 0.3rem;
}

.chat-message-time {
  font-size: 0.8rem;
  color: var(--greyFontColor);
  text-align: right;
}

.chat-input{
  display: flex;
  flex-direction: row;
}

:deep(.ant-input){
  width: 80% !important;
  border-radius: 0.8rem;
  border-color: white !important;
  box-shadow: 0 5px 5px 0 rgba(176,191,231,.25);
  background: rgba(255, 255, 255);
  border-width: 0.08rem;
}
:deep(.ant-input:hover){
  box-shadow: 0 5px 10px 0 rgba(176,191,231,.5);
}
</style>
