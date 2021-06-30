<template>
  <div class="goods">
    <img :src="goodsData.cover_url">
    <div class="goods_info">
      <p class="title">{{goodsData.title}}</p>
      <div class="price_box">
        <p class="price">¥ {{goodsData.price}}</p>
        <div class="collect">
          <i class="iconfont icon-shoucang"></i>
          <span>{{' ' + goodsData.collects_count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default ({
    name: 'GoodsItem',
    components: {

    },

    props: {
      goodsData: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },

    setup() {

    },
  })
</script>

<style>
  .goods {
    width: 100%;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .goods img {
    width: 80%;
  }

  .goods .goods_info {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .goods_info .title {
    width: 70%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .goods_info .price_box {
    width: 100%;
    padding: 0 20px;

    display: flex;
    justify-content: space-around;
  }

  .price_box .price {
    font-weight: bold;
    color: rgb(255, 0, 0);
  }
</style>