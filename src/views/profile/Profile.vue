<template>
  <div>
    <nav-bar>
      <div slot="center">我的档案</div>
    </nav-bar>
    <info />
    <cards />
    <services />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import { Info, Cards, Services } from './childrenCpn'

export default {
  name: 'Profile',
  components: {
    NavBar,
    Info,
    Cards,
    Services
  }
}
</script>

<style></style>
