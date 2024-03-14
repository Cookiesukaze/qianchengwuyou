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
  --themeColor150: #1b8969;
  --themeColor125: #21ab84;
  --themeColor: #10bc8b;
  --themeColor075: rgba(16, 188, 139, 0.75);
  --themeColor05: rgba(16, 188, 139, 0.5);
  --themeColor02: rgba(16, 188, 139, 0.2);
  --themeColor01: rgba(16, 188, 139, 0.1);
  --themeColor005: rgba(16, 188, 139, 0.05);
  --themeColor001: rgba(16, 188, 139, 0.01);
  --backgroundThemeColor: #f6ffed;
  --subThemeColor: #fcce30;
  --subThemeColor05: rgba(252, 206, 48, 0.5);
  --subThemeColor02: rgba(252, 206, 48, 0.2);
  --subThemeColor01: rgba(252, 206, 48, 0.1);
  --subThemeColor005: rgba(252, 206, 48, 0.05);
  --subThemeColor001: rgba(252, 206, 48, 0.01);
  --sararyColor125: #e3424a;
  --sararyColor: #ff636c;
  --sararyColor08: #fa747b;
  --sararyColor001: rgba(250, 116, 123, 0.1);
  --greyFontColor:#666666;
  --greyFontColor125:#444444;
  --blackFontColor:#222222;
}
.bg:before{
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  //background: radial-gradient(ellipse at center top, var(--themeColor), var(--themeColor02) 50%, #fff);
  background: linear-gradient(180deg, var(--themeColor150)10%, var(--themeColor02) );
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
  //height: 20rem;
  //background: radial-gradient(ellipse at center bottom, var(--subThemeColor05), var(--themeColor02));
  opacity: .1;
  z-index: -1;
}
body{
  background-color: #ffffff;
}

</style>
