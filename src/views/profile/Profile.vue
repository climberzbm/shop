<template>
  <nav-bar>
    <template v-slot:default>我的</template>
  </nav-bar>
  <div>Profile</div>
  <tab-bar></tab-bar>
</template>

<script>
  // import {
  //   onMounted
  // } from "vue";
  // import {
  //   homeAllData
  // } from '../../network/home'
  import TabBar from '@/components/common/tabBar/TabBar.vue';
  import NavBar from "@/components/common/navBar/NavBar.vue";

  export default {
    components: {
      TabBar,
      NavBar
    }
  }
</script>

<style>

</style>