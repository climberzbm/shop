<template>
  <div class="nav_bar">
    <div class="left nav_bar_item">
      <slot name="left"></slot>
    </div>
    <div class="center nav_bar_item">
      <slot></slot>
    </div>
    <div class="right nav_bar_item">
      <slot name="right"></slot>
    </div>
  </div>
  <div class="placeholder"></div>
</template>

<script>
  export default ({
    components: {

    },

    setup() {

    },
  })
</script>

<style lang="scss">
  .nav_bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 40px;
    background-color: var(--color-high-text);
    color: var(--color-text);

    display: flex;
  }

  .nav_bar .nav_bar_item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav_bar .center{
    font-size: 18px;
    font-weight: bold;
    color: #f3f3f3;
  }

  .placeholder{
    height: 40px;
  }
</style>