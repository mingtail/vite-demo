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
import Header from '../components/Header'
import Case from '../components/Case'

const Home = defineComponent({
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
    return () => (
      <div class='page page_home'>
        <Header title='Home' back={false} />
        <Case msg='home demo' />
      </div>
    )
  },
})

export default Home
