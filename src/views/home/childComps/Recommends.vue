<template>
  <div class="recommend flex-X">
    <template v-for="item in recommendsData.slice(0, 4)" :key="item.id">
      <router-link class="recommend_item" to="/">
        <div class="img_box">
          <img
            :src="item.cover_url">
        </div>
        <span class="title">{{item.title}}</span>
      </router-link>
    </template>
  </div>
</template>

<script>
  export default ({
    components: {

    },

    props: {
      recommendsData: {
        type: Array,
        default () {
          return []
        }
      }
    },

    setup() {
    },
  })
</script>

<style>
  .recommend {
    width: 100vw;
    height: 90px;
  }

  .recommend .recommend_item {
    width: 25%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .recommend .recommend_item .img_box {
    width: 60px;
    height: 60px;
    background-color: #d8dfe6;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
  }

  .recommend .recommend_item img {
    width: 40px;
  }

  .recommend .recommend_item .title {
    width: 90%;
    color: #666;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>