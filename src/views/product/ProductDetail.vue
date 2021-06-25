<template>
  <nav-bar>
    <template v-slot:left>
      <i class="iconfont icon-left"></i>
    </template>
    <template v-slot:default>商品详情
    </template>
  </nav-bar>
  <div>productDetail</div>
</template>

<script>
  import {
    useRoute
  } from 'vue-router'
  import {
    ref
  } from 'vue'

  import NavBar from '../../components/common/navBar/NavBar.vue'

  export default ({
    components: {
      NavBar
    },

    setup() {
      const route = useRoute()
      let id = ref(0)

      id.value = route.query.id
      console.log(id);

      return {
        id
      }
    },
  })
</script>

<style>

</style>