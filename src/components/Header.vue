<template>
  <header class="page_header">
    <i class="icon-back" @click="goBack">
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M748.8 928 716.8 960 275.2 512l441.6-448 32 32L345.6 512 748.8 928z"
        ></path>
      </svg>
    </i>
    <span>{{ title }}</span>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

interface HeaderProps {
  title: string
}

export default defineComponent({
  props: {
    title: String,
  },
  setup(props: HeaderProps) {
    const { title } = props
    const router = useRouter()
    function goBack() {
      router.back()
    }
    return {
      title,
      goBack,
    }
  },
})
</script>
