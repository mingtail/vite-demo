import { defineComponent } from 'vue'
import { useCount, useLike } from '../api/useMixins'

interface SampleProps {
  msg?: string
}

const Sample = defineComponent({
  props: { msg: String },
  setup(props: SampleProps) {
    const { count, decreaseCount, increaseCount } = useCount(2)
    const { isLike, toggleLike } = useLike()
    return () => (
      <div>
        <h3>{props.msg}</h3>
        <div class='btn-box'>
          <button class='btn btn-primary' onClick={decreaseCount}>
            减少
          </button>
          <span class='count-num'>{count.value}</span>
          <button class='btn btn-primary' onClick={increaseCount}>
            增加
          </button>
        </div>
        <div class='btn-box'>
          <button class='btn btn-success' onClick={toggleLike}>
            {isLike.value ? '喜欢' : '不喜欢'}
          </button>
        </div>
      </div>
    )
  },
})

export default Sample
