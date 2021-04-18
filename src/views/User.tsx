import { defineComponent, computed, ComputedRef, Transition } from 'vue'
import Header from '../components/Header'
import { useStore } from 'vuex'
import { UserModel } from '../types/model'

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const store = useStore()
    !store.state.userInfo.id && store.dispatch('getUserInfo')
    const userInfo: ComputedRef<UserModel> = computed(
      () => store.state.userInfo
    )
    const loading = computed(() => !store.state.userInfo.hasOwnProperty('name'))
    return () => {
      const { avatar = '', name = '' } = userInfo.value
      return (
        <div class='page page_user'>
          <Header title='User' back={false}></Header>
          <Transition name='fade'>
            {loading.value ? (
              <div class='loading-text'>加载中...</div>
            ) : (
              <div class='user-panel'>
                <div class='cover-wrap'>
                  <img src={avatar} alt='avatar' />
                </div>
                <p>{name}</p>
              </div>
            )}
          </Transition>
        </div>
      )
    }
  },
})
