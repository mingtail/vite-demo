import { defineComponent } from 'vue'

interface ButtonProps {
  type: string
  text: string
}

const XButton = defineComponent({
  props: ['type', 'text'],
  setup(props: ButtonProps, context) {
    console.log(props)
    console.log(context)
    return () => (
      <button class={`btn btn-${props.type}`}>
        {context.slots.default ? context.slots.default() : props.text}
      </button>
    )
  },
})

export default XButton
