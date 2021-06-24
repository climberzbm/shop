<template>
  <div>home</div>
</template>

<script>
  import {
    onMounted
  } from "vue";
  import {
    homeAllData
  } from '../../network/home'

  export default {
    setup() {
      onMounted(() => {
        console.log(111);
        homeAllData().then(res => {
          console.log(res);
        })
      })
    }
  }
</script>

<style>

</style>