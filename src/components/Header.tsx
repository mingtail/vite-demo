import { useRouter } from 'vue-router'

interface HeaderProps {
  title: string
  back?: boolean
}

// functional component
function Header(props: HeaderProps) {
  console.log('header props:', props)
  const { title = '', back = true } = props
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <header class='page_header'>
      {back && (
        <i class='icon-back' onClick={goBack}>
          <svg>
            <use xlinkHref='#arrow_left' />
          </svg>
        </i>
      )}
      <span>{title}</span>
    </header>
  )
}

export default Header
