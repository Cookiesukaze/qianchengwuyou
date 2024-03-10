<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: resources.themeColor,
      },
    }"
  >
    <div class="bg">
      <router-view></router-view>
    </div>
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
:root {
  --themeColor: #10bc8b;
  --themeColor05: rgba(16, 188, 139, 0.5);
  --themeColor02: rgba(16, 188, 139, 0.2);
  --themeColor01: rgba(16, 188, 139, 0.1);
  --subThemeColor: #fcce30;
  --subThemeColor05: rgba(252, 206, 48, 0.5);
  --subThemeColor02: rgba(252, 206, 48, 0.2);
  --subThemeColor01: rgba(252, 206, 48, 0.1);
}
.bg:before{
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 35rem;
  //background: radial-gradient(ellipse at center top, var(--themeColor), var(--themeColor02) 50%, #fff);
  background: linear-gradient(180deg, var(--themeColor), var(--themeColor02) 50%, #fff );
  opacity: .1;
  z-index: -1;
}
.bg{
  display: flex;
  min-height: max-content;
}
.bg:after{
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10rem;
  background: radial-gradient(ellipse at center bottom, var(--subThemeColor02), var(--subThemeColor01) 50%, #fff);
  opacity: .1;
  z-index: -1;
}
body{
  background-color: #ffffff;
}
</style>
