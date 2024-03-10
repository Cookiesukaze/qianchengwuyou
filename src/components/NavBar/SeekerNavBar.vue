<template>
  <div class="navbar" :class="{ 'sticky': isSticky }">
    <div class="logo">
      <img :src="resources.logo" alt="Logo" />
    </div>
    <div class="links">
      <a :class="{ 'active': activeLink === '' }" href="#/" >求职</a>
      <a :class="{ 'active': activeLink === 'job' }" href="/#/resume" >简历</a>
    </div>
<!--    <a-avatar :size="32" style="margin-right: 9rem;">-->
<!--      <template #icon><UserOutlined /></template>-->
<!--    </a-avatar>-->
    <a-button style="margin-right: 9rem;">登录 / 注册</a-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { UserOutlined } from '@ant-design/icons-vue'
import resources from '@/assets/resources'

const isSticky = ref(false)
const activeLink = ref('')

const handleScroll = () => {
  isSticky.value = window.pageYOffset > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 3.125rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(0.625rem);
  z-index: 999;
  transition: background-color 0.3s;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
}

.navbar.sticky {
  background-color: rgba(255, 255, 255, 1);
}

.logo img {
  margin-top:-0.2rem;
  height: 2.6rem;
  margin-left: 8rem;
}

.links {
  flex: 1;
  display: flex;
  justify-content: center;
  margin-right: 20rem;
}

.links a {
  margin: 0 1.2rem;
  //margin-top:0.5rem;
  color: #333;
  font-size: 1rem;
  text-decoration: none;
}
.links a.active {
  color: #05b986; /* 链接变色样式 */
}
.links a:hover {
  color: #05b986; /* 鼠标划过链接变色样式 */
}
</style>
