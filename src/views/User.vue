<template>
  <div class="page page_user">
    <Header title="User"></Header>

    <div v-if="!inited" class="loading-text">加载中...</div>

    <div v-else class="user-panel">
      <div class="cover-wrap">
        <img v-show="userInfo.avatar" :src="userInfo.avatar" alt="avatar" />
      </div>
      <p>{{ userInfo.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Header from '../components/Header.vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const store = useStore()
    const userInfo = computed(() => store.state.userInfo)
    store.dispatch('getUserInfo')
    return {
      userInfo,
      inited: computed(() => store.state.userInfo.hasOwnProperty('name'))
    }
  },
})
</script>
