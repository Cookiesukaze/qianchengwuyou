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
      <div style="display: flex;flex-direction: row;margin-left:4rem;margin-top:1rem">
        <a-input
          v-model:value="currentSearch"
          placeholder="搜索职位/公司"
          size="large"
        />
      </div>
<!--      第三栏（更多的筛选，有的写起来很繁琐先摆个样子）-->
      <div style="display: flex;flex-direction: row;margin-left:3rem;margin-top:1rem">
<!--        1.城市选择器-->
        <div style="width: 12.5rem"><CitySelector
          :modelValue="currentCity"
          @update:city="handleCityUpdate"
        ></CitySelector></div>
      </div>
    </div>
  </div>
</template>

<script setup>

import SeekerNavBar from '@/components/NavBar/SeekerNavBar.vue'
import { ref } from 'vue'
import { MenuOutlined, AppstoreOutlined, DeploymentUnitOutlined } from '@ant-design/icons-vue'
import CitySelector from '@/components/Tools/CitySelector.vue'

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
// 搜索框内容
const currentSearch = ref('')
// 城市选择和变化
const currentCity = ref([])
const handleCityUpdate = (value) => {
  currentCity.value = value
  console.log('MainPage:city updated:' + value)
}
</script>

<style scoped>
:deep .ant-menu-item-selected {
  font-weight: bold !important;
}
:deep .ant-select-selector {
  border: none !important;
  box-shadow: none !important;
  font-size:1.15rem ;
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
:deep .ant-input{
  border-color:var(--themeColor05);
  border-width: 0.08rem;
  box-shadow: 0 2px 4px var(--themeColor01);
}
:deep .ant-input:hover{
  box-shadow: 0 2px 4px var(--themeColor02);
}
.frame-style{
  background:rgba(255,255,255,90);
  border-radius:1rem;
  height: 2.875rem;
  margin-left:1rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
</style>
