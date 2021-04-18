import { defineComponent, reactive } from 'vue'
import { useCount } from '../api/useMixins'
import { useStore } from 'vuex'
import Header from '../components/Header'
import Button from '../components/Button'

const Gallery = defineComponent({
  setup() {
    const state = reactive({
      key: 'Gallery',
    })
    const store = useStore()
    console.log('store', store)
    const { count, increaseCount } = useCount()

    return () => (
      <div class='page page_gallery'>
        <Header title={state.key} back={false}></Header>
        <div class='btn-wrap'>
          <button class='btn btn-info' onClick={increaseCount}>
            count is: {count.value}
          </button>
        </div>
        <div class='btn-wrap'>
          <Button type='warning'>
            <span>我是按钮</span>
          </Button>
        </div>
      </div>
    )
  },
})

export default Gallery
