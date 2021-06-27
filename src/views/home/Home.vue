<template>
  <nav-bar>
    <template v-slot:default>首页</template>
  </nav-bar>
  <div class="banners">
    <img src="http://img61.ddimg.cn/ddreader/dangebook/20210621-49y5be1_1242x366.jpg" />
  </div>
  <recommends :recommendsData="recommendsData"></recommends>
  <div class="separator"></div>
  <tab-control :tabList="tabList"></tab-control>
  <tab-bar></tab-bar>
</template>

<script>
  import {
    onMounted,
    ref
  } from "vue";
  import {
    homeAllData
  } from '../../network/home'
  import TabBar from '@/components/common/tabBar/TabBar.vue';
  import NavBar from "@/components/common/navBar/NavBar.vue";
  import Recommends from "./childComps/Recommends.vue";
  import TabControl from '@/components/common/tabControl/TabControl.vue'

  export default {
    components: {
      TabBar,
      NavBar,
      Recommends,
      TabControl
    },

    setup() {
      const recommendsData = ref([])
      const tabList = ref(['畅销', '新书', '精选'])

      onMounted(() => {
        homeAllData().then(res => {
          console.log(res);
          recommendsData.value = res.goods.data
        })
      })

      return {
        recommendsData,
        tabList
      }
    }
  }
</script>

<style>
  .banners img {
    width: 100%;
    height: 150px;
  }

  .separator {
    width: 100%;
    height: 8px;
    background-color: #eee;
  }
</style>