<template>
  <nav-bar>
    <template v-slot:default>首页</template>
  </nav-bar>
  <div class="wrapper">
    <div class="content">
      <div class="banners">
        <img src="http://img61.ddimg.cn/ddreader/dangebook/20210621-49y5be1_1242x366.jpg" />
      </div>
      <recommends :recommendsData="recommendsData"></recommends>
      <div class="separator"></div>
      <tab-control :tabList="tabList" @handleClickItem="handleClickItem"></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </div>
  </div>

  <tab-bar></tab-bar>
</template>

<script>
  import {
    onMounted,
    reactive,
    ref,
    computed
  } from "vue";
  import {
    getHomeAllData,
    getHomeGoods
  } from '../../network/home'

  import BetterScroll from 'better-scroll'

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
      const goodsList = reactive({
        sales: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        recommend: {
          page: 0,
          list: []
        }
      })
      const tabList = ref(['畅销', '新书', '精选'])
      let currentIndex = ref('sales')
      // 当前显示的商品列表
      const showGoods = computed(() => {
        console.log(goodsList);
        return goodsList[currentIndex.value].list
      })

      console.log(goodsList);
      const handleClickItem = e => {
        let types = ['sales', 'new', 'recommend']
        currentIndex.value = types[e]
      }

      onMounted(() => {
        let bs = new BetterScroll(document.querySelector('.wrapper'), {
          scrollY: true,
          click: true,
          probeType: 3,
          pullUpLoad: true
        })
        console.log(bs);

        bs.on('scroll', position => {
          console.log(position);
        })

        getHomeAllData().then(res => {
          recommendsData.value = res.goods.data
        })

        getHomeGoods('sales').then(res => {
          goodsList.sales.list = res.goods.data
        })

        getHomeGoods('new').then(res => {
          goodsList.new.list = res.goods.data
        })

        getHomeGoods('recommend').then(res => {
          goodsList.recommend.list = res.goods.data
        })
      })
      console.log(goodsList);

      return {
        recommendsData,
        tabList,
        handleClickItem,
        goodsList,
        currentIndex,
        showGoods
      }
    }
  }
</script>

<style>
  .wrapper {
    height: calc(100vh - 89px);
  }

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