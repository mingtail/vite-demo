<template>
  <router-view />
  <div class="tab-wrap">
    <router-link to="/home">Home</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/user">User</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {},
})
</script>
