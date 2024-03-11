<template>
  <div >
    <SeekerNavBar></SeekerNavBar>
    <div style="margin-top:3.5rem">
<!--      第一栏-->
      <div style="display: flex;flex-direction: row;margin-left:3rem;margin-top:4rem">
<!--        checkjobtype 推荐职位或全部职位-->
        <a-menu v-model:selectedKeys="currentCheckJobType" mode="horizontal" :items="checkJobTypeItems"
                class="frame-style" :style="{fontSize:'1.2rem',color:'var(--greyFontColor)'}"
                />
<!--        cvselector 选择简历-->
        <a-space class="frame-style">
          <a-select
            ref="select"
            v-model:value="currentCVSelector"
            style="width: 8rem"
            :options="CVSelectorItems"
            @change="handleChangeCV"
          ></a-select>
        </a-space>
<!--        视图选择-->
        <a-radio-group v-model:value="currentView" class="frame-style">
          <a-radio-button value="详细"><MenuOutlined style="margin-top:0.9rem"/></a-radio-button>
          <a-radio-button value="平铺"><AppstoreOutlined /></a-radio-button>
          <a-radio-button value="图谱"><DeploymentUnitOutlined /></a-radio-button>
        </a-radio-group>
<!--        筛选折叠按钮-->
        <div class="frame-style">
          <a-radio-button value="详细" style="margin-top:0.4rem">筛选</a-radio-button>
        </div>
      </div>
      <!--      第二栏（搜索框）-->
    </div>
  </div>
</template>

<script setup>

import SeekerNavBar from '@/components/NavBar/SeekerNavBar.vue'
import { ref } from 'vue'
import { MenuOutlined, AppstoreOutlined, DeploymentUnitOutlined } from '@ant-design/icons-vue'

// checkjobtype 推荐职位或全部职位
const currentCheckJobType = ref(['reco'])
const checkJobTypeItems = ref([
  {
    key: 'reco',
    label: '推荐职位',
    title: '推荐职位'
  },
  {
    key: 'all',
    label: '全部职位',
    title: '全部职位'
  }
])
// cvselector 选择简历
const currentCVSelector = ref('我的简历1')
const CVSelectorItems = ref([
  {
    value: '我的简历1',
    label: '我的简历1'
  },
  {
    value: '我的简历2',
    label: '我的简历2'
  }
])
const handleChangeCV = value => {
  // console.log(`selected ${value}`)
}
// 选择视图
const currentView = ref('详细')
</script>

<style scoped>
:deep .ant-menu-item-selected {
  font-weight: bold !important;
}
:deep .ant-select-selector {
  border: none !important;
  box-shadow: none !important;
  font-size:1.15rem !important;
  color:var(--greyFontColor);
}
:deep .ant-radio-button-wrapper{
  border: none !important;
  box-shadow: none !important;
  font-size:1.15rem !important;
  color:var(--greyFontColor);
  background: rgba(255, 255, 255, 0);
}
:deep .ant-radio-button-wrapper:not(:first-child)::before{
  background: rgba(255, 255, 255, 0) !important;
}
.frame-style{
  background:rgba(255,255,255,90);
  border-radius:1rem;
  height: 2.875rem;
  margin-left:1rem;
}
</style>
