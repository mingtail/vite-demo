<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <button class="btn btn-primary" @click="decreaseCount">减少</button>
      <span class="count-num">{{ count }}</span>
      <button class="btn btn-primary" @click="increaseCount">增加</button>
    </div>
    <h1>喜欢不喜欢</h1>
    <button class="btn btn-success" @click="toggleLike">
      {{ isLike ? '喜欢' : '不喜欢' }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCount, useLike } from '../api/useMixins'

interface Props {
  msg: string
}

const Sample = defineComponent({
  props: ['msg'],
  setup(props: Props) {
    const { msg } = props
    const { count, increaseCount, decreaseCount } = useCount(2)
    const { isLike, toggleLike } = useLike()
    return {
      msg,
      count,
      increaseCount,
      decreaseCount,
      isLike,
      toggleLike,
    }
  },
})

export default Sample
</script>
