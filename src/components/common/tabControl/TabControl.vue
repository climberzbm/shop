<template>
  <div class="tab_control">
    <template v-for="(item, index) in tabList" :key="index">
      <div class="tab_item" @click="handleClickItem(index)">
        {{item}}
        <div v-show="currentIndex == index" class="bottom_line"></div>
      </div>
    </template>
  </div>
</template>

<script>
  import {
    ref
  } from 'vue'

  export default ({
    name: 'TabControl',
    components: {

    },

    props: {
      tabList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },

    setup(props, {emit}) {
      let currentIndex = ref(0)

      const handleClickItem = index => {
        currentIndex.value = index
        emit('handleClickItem', index)
      }

      return {
        handleClickItem,
        currentIndex
      }
    }
  })
</script>

<style>
  .tab_control {
    width: 100%;
    height: 40px;
    background: #fff;

    display: flex;

    position: sticky;
    top: 40px;
  }

  .tab_control .tab_item {
    display: block;
    flex-direction: column;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tab_control .tab_item .bottom_line {
    width: 20px;
    height: 3px;
    margin-top: 4px;

    background: var(--color-tint);
  }
</style>