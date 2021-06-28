<template>
  <nav-bar>
    <template v-slot:default>首页</template>
  </nav-bar>
  <div class="banners">
    <img src="http://img61.ddimg.cn/ddreader/dangebook/20210621-49y5be1_1242x366.jpg" />
  </div>
  <recommends :recommendsData="recommendsData"></recommends>
  <div class="separator"></div>
  <tab-control :tabList="tabList" @handleClickItem="handleClickItem"></tab-control>
  <goods-list :goodsData="goodsData"></goods-list>
  <tab-bar></tab-bar>
</template>

<script>
  import {
    onMounted,
    ref
  } from "vue";
  import {
    getHomeAllData,
    getHomeGoods
  } from '../../network/home'
  import TabBar from '@/components/common/tabBar/TabBar.vue';
  import NavBar from "@/components/common/navBar/NavBar.vue";
  import Recommends from "./childComps/Recommends.vue";
  import TabControl from '@/components/common/tabControl/TabControl.vue'
  import GoodsList from '@/components/content/goods/GoodsList.vue'

  export default {
    components: {
      TabBar,
      NavBar,
      Recommends,
      TabControl,
      GoodsList
    },

    setup() {
      const recommendsData = ref([])
      const goodsData = ref([])
      const tabList = ref(['畅销', '新书', '精选'])

      const handleClickItem = e => {
        console.log(e);
      }

      onMounted(() => {
        getHomeAllData().then(res => {
          console.log(res);
          recommendsData.value = res.goods.data
          goodsData.value = res.goods.data
        })

        getHomeGoods().then(res => {
          console.log(res);
        })
      })

      return {
        recommendsData,
        tabList,
        handleClickItem,
        goodsData
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