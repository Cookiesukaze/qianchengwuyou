<template>
  <div class="navbar" :class="{ 'sticky': isSticky }">
    <div class="logo">
      <img :src="resources.logo" alt="Logo" />
    </div>
    <div class="links">
      <router-link class="nav-link" :to="{ name: 'mainpage' }" active-class="active">求职</router-link>
      <router-link class="nav-link" :to="{ name: 'cv' }" active-class="active">简历</router-link>
    </div>
    <a-button class="btn" :style="{ borderColor: resources.themeColor, color: resources.themeColor }">登录 / 注册</a-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import resources from '@/assets/resources'

const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.pageYOffset > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 公共样式 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 3.125rem;  /* 使用固定值 */
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  z-index: 999;
  transition: background-color 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 16px; /* 添加内边距 */
}
.logo img {
  height: 42px;
  margin-right: 1rem; /* 调整间距 */
}
.links {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}
.links a {
  margin: 0 0.75rem;
  color: #333;
  font-size: 16px;
  text-decoration: none;
}

/* 小屏幕/移动设备 */
@media (max-width: 768px) {
  .logo img {
    height: 36px; /* 缩小 Logo */
  }
  .links {
    display: none; /* 隐藏链接，你可能需要一个汉堡菜单 */
  }
  .navbar.sticky {
    padding: 0 8px; /* 减小内边距 */
  }
}

/* 中等屏幕/平板设备 */
@media (min-width: 768px) and (max-width: 1024px) {
  .links {
    display: flex; /* 如果在平板上需要显示链接 */
    margin-right: auto; /* 自动调整间距 */
  }
}

/* 大屏幕/桌面设备 */
@media (min-width: 1024px) {
  .logo img {
    margin-left: 2rem; /* 调整间距以适应更宽的屏幕 */
  }
  .links a {
    margin: 0 1.5rem; /* 增加链接间距 */
  }
  .btn {
    margin-right: 6rem; /* 调整登陆/注册按钮间距 */
  }
}

/* 按钮调整 */
.btn {
  margin-left: auto; /* 把按钮推到最右边 */
  border-color: var(--themeColor);
  color: var(--themeColor);
  background: rgba(0, 0, 0, 0);
}

.btn:hover {
  background-color: var(--themeColor01) !important;
}
.links a.active {
  color: var(--themeColor); /* 链接变色样式 */
}
.links a:hover {
  color: var(--themeColor); /* 鼠标划过链接变色样式 */
}
/* 活动状态的路由链接 */
.active {
  color: var(--themeColor);
}

/* 路由链接的普通样式 */
.nav-link {
  margin: 0 0.75rem;
  color: #333;
  font-size: 16px;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--themeColor);
}
</style>
