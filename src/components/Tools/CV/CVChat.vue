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
      <input
        style="height: 2rem;width: 80%"
        type="text"
        v-model="newMessage"
        placeholder="请输入"
        @keyup.enter="sendNewMessage"
      />
      <button @click="sendNewMessage">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const chatMessages = ref([
  {
    id: 0,
    content: '你好！我是你的简历修改，有什么可以帮助你的吗？',
    time: '08:00',
    isOwn: false
  }
])

const newMessage = ref('')
const messagesContainer = ref(null)

const sendNewMessage = () => {
  if (newMessage.value.trim() !== '') {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
    const message = {
      id: chatMessages.value.length,
      content: newMessage.value,
      time: currentTime,
      isOwn: true
    }
    chatMessages.value.push(message)
    newMessage.value = ''
    // 滚动到最新消息
    nextTick(() => {
      const container = messagesContainer.value
      container.scrollTop = container.scrollHeight
    })
  }
}

onMounted(() => {
  // 初始加载时滚动到最底部
  nextTick(() => {
    const container = messagesContainer.value
    container.scrollTop = container.scrollHeight
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
  max-width: 80%;
  word-wrap: break-word;
}

.chat-message-robot {
  background-color: #f3f3f3;
  align-self: flex-start;
}

.chat-message-own {
  background-color: #b2dffb;
  align-self: flex-end;
}

.chat-message-content {
  margin-bottom: 0.3rem;
}

.chat-message-time {
  font-size: 0.8rem;
  color: #888;
  text-align: right;
}

.chat-input {
  display: flex;
}

.chat-input input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-right: 1rem;
}

.chat-input button {
  padding: 0.5rem 1rem;
  background: var(--themeColor);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}
</style>
