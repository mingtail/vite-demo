<template>
  <div class="page page_home">
    <Header title="Home" />
    <Case msg="This is case" />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onBeforeUpdate,
  onUpdated,
  onErrorCaptured,
} from 'vue'
import Header from '../components/Header.vue'
import Case from '../components/Case.vue'
export default defineComponent({
  components: {
    Case,
    Header,
  },
  setup() {
    /**
     * 生命周期钩子函数
     * beforeCreate -> 使用 setup()
     * beforeMount -> onBeforeMount
     * beforeUpdate -> onBeforeUpdate
     * updated -> onUpdated
     * beforeDestroy -> onBeforeUnmount
     * destroyed -> onUnmounted
     * errorCaptured -> onErrorCaptured
     */
    onBeforeMount(() => {
      console.log('BeforeMount')
    })
    onMounted(() => {
      console.log('Mounted!')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate!')
    })
    onUpdated(() => {
      console.log('Updated!')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount!')
    })
    onUnmounted(() => {
      console.log('Unmounted!')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured!')
    })
    return {}
  },
})
</script>
