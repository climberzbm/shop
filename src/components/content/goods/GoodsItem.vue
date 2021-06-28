<template>
  <div class="goods">
    <img src="https://oss.shop.eduwork.cn/product/2020-0820-5f3e1871194a5.png">
    <div class="goods_info">
      <p class="title">标题</p>
      <div class="price_box">
        <p class="price">$ 23.00</p>
        <div class="collect">
          <i class="iconfont icon-shoucang"></i>
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
  .goods {
    width: 100%;
  }

  .goods img {
    width: 100%;
  }

  .goods .goods_info {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .goods_info .title {
    font-size: 16px;
    margin-bottom: 3px;
  }

  .goods_info .price_box {
    width: 100%;

    display: flex;
    justify-content: space-around;
  }

  .price_box .price {
    font-weight: bold;
    color: rgb(255, 0, 0);
  }
</style>