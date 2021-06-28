<template>
  <div class="tab_bar">
    <router-link class="tab_bar_item" to="/">
      <i class="iconfont icon-gouwucheman"></i>
      <span class="title">首页</span>
    </router-link>
    <router-link class="tab_bar_item" to="/cateGory">
      <i class="iconfont icon-leimupinleifenleileibie2"></i>
      <span class="title">分类</span>
    </router-link>
    <router-link class="tab_bar_item" to="/shopCart">
      <i class="iconfont icon-gouwucheman"></i>
      <span class="title">购物车</span>
    </router-link>
    <router-link class="tab_bar_item" to="/profile">
      <i class="iconfont icon-yonghu"></i>
      <span class="title">我的</span>
    </router-link>
  </div>
</template>

<script>
  export default ({
    setup() {

    },
  })
</script>

<style>
  .tab_bar {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;

    width: 100%;
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }

  .tab_bar .tab_bar_item {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .tab_bar .tab_bar_item .iconfont {
    font-size: 20px !important;
    margin-bottom: 2px;
  }

  .tab_bar .tab_bar_item .title {
    font-size: 12px;
  }

  .router-link-active {
    color: var(--color-high-text);
  }
</style>