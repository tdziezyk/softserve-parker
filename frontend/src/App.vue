<template>
  <div id="app">
    <OfflineInfo />
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import AppHeader from './components/AppHeader'
import OfflineInfo from './components/OfflineInfo'
import { AuthGetter } from '@/store/auth'
import { UIGetter, UIAction } from '@/store/ui'
import logger from './logger'

@Component({
  components: {
    AppHeader,
    OfflineInfo,
  },
})
export default class App extends Vue {
  @AuthGetter isLoggedIn
  @UIGetter loading
  @UIAction startLoading
  @UIAction stopLoading

  mounted () {
    this.$bus.on('request-begin', () => {
      logger.debug('started loading')
      this.startLoading()
    })
    this.$bus.on('request-end', () => {
      logger.debug('finished loading')
      this.stopLoading()
    })
  }
}
</script>

<style lang="scss">
@import './styles';

#app {
  position: relative;

  @media (min-width: $md-viewport) {
    max-width: 500px;
    margin: 0 auto;
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
