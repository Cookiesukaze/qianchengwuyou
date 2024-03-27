<template>
  <div>
    <div class="bg1"></div>
    <SeekerNavBar></SeekerNavBar>
    <div style="margin-top:3.5rem">
      <div class="user-container">
          <!--          用户卡片-->
          <UserCard></UserCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import SeekerNavBar from '@/components/NavBar/SeekerNavBar.vue'
import UserCard from '@/components/Tools/UserPage/UserCard.vue'

</script>

<style scoped>
.user-container {
  width: 98vw;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */

}
.cv-container > * {
  margin-bottom: 0.5rem;
}
</style>
