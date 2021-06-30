<template>
  <div class="goods_list">
    <template v-for="item in goodsList" :key="item.id">
      <goods-item :goodsData="item"></goods-item>
    </template>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem.vue'

  export default ({
    name: 'GoodsList',
    components: {
      GoodsItem
    },

    props: {
      goodsList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },

    setup() {

    },
  })
</script>

<style>
  .goods_list {
    margin-top: 6px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .goods {
    width: 48%;
  }
</style>