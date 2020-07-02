import { reactive, toRefs, Ref, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'

interface UseCount {
  count: Ref<number>
  increaseCount?: () => void
  decreaseCount?: () => void
}
export function useCount(count: number = 0): UseCount {
  const store = useStore()
  // 设置初始count
  store.commit('setCount', count)
  function increaseCount(): void {
    store.commit('setCount', store.state.count + 1)
  }
  function decreaseCount(): void {
    store.commit('setCount', store.state.count - 1)
  }
  watchEffect(() => {
    console.log('count:', store.state.count)
  })
  
  return {
    count: computed(() => store.state.count),
    increaseCount,
    decreaseCount,
  }
}

interface UseLike {
  isLike: Ref<boolean>
  toggleLike?: () => void
}
export function useLike(status: boolean = false): UseLike {
  const state = reactive({ isLike: status })
  function toggleLike(): void {
    state.isLike = !state.isLike
  }
  /**
   * 使用toRefs()
   * 将reactive对象转化成ref对象, 再进行返回
   */
  return {
    ...toRefs(state),
    toggleLike,
  }
}
