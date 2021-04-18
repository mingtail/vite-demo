import { defineComponent, SetupContext } from 'vue'

/**
 * 由于vue的props必须要显式的声明, 否则组件和setup中无法获取到props值.
 * 所以就会出现ts和component重复定义props类型, 很是繁琐.
 * 目前没有比较漂亮的办法, 比较简单的组件可以使用纯函数来避免重复定义. 详见下文
 * ts定义的props接口必须和component.props选项保持一致
 * 1. 保证类型一致
 * 2. 保证是否可选一致
 *
 * 声明组件props的方式有两种,
 * 1. 在defineComponent中直接声明props
 * 2. 通过 [组件名].props来声明, 类似于react的props声明
 */

interface ButtonProps {
  type?: string
}

const XButton = defineComponent({
  props: {
    type: { type: String },
  },
  setup(props: ButtonProps, { slots }: SetupContext) {
    const { type = 'primary' } = props
    if (!slots) {
      console.warn('components XButton require content as the button literal!')
    }
    return () => <button class={`btn btn-${type}`}>{slots?.default?.()}</button>
  },
})

// XButton.props = {
//   type: { type: String },
// }

/** functional component */
// function XButton(props: ButtonProps, { slots }: SetupContext) {
//   const { type = 'primary' } = props
//   if (!slots) {
//     console.warn('components XButton require content as the button literal!')
//   }
//   return <button class={`btn btn-${type}`}>{slots?.default?.()}</button>
// }

export default XButton
