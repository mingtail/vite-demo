<template>
  <router-view />
  <div class="tab-wrap">
    <router-link to="/home">Home</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/user">User</router-link>
  </div>
  <UseSVG />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UseSVG from './components/UseSVG'

/**
 * Vue3现在正式支持了多根节点的组件，也就是片段
 * 可以减少不必要的嵌套
 */

export default defineComponent({
  name: 'App',
  setup() {},
  components: {
    UseSVG,
  },
})
</script>
