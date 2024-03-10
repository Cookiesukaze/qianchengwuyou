<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: resources.themeColor,
      },
    }"
  >
    <router-view></router-view>
  </a-config-provider>
</template>

<script>
import resources from '@/assets/resources'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    resources () {
      return resources
    }
  }
})

</script>

<style>
#app {
   font-family: "pingfangm",serif;
 }

</style>
