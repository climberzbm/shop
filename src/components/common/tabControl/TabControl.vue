<template>
  <div class="tab_control">
    <template v-for="(item, index) in tabList" :key="index">
      <div class="tab_item" @click="handleClick(index)">
        {{item}}{{index}}{{currentIndex}}
        <div v-if="isShow(index)"></div>
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

    setup() {
      let currentIndex = ref(0)

      const handleClick = index => {
        currentIndex.value = index
      }

      const isShow = ((index) => {
        console.log(index);
        return currentIndex.value == index
      })

      return {
        handleClick,
        currentIndex,
        isShow
      }
    }
  })
</script>

<style>
  .tab_control {
    width: 100%;
    height: 40px;

    display: flex;
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