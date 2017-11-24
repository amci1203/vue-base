<template>
  <div id="app">
    <div id="content">
      <MainNav/>
      <transition name='fade'>
        <router-view/>
      </transition>
    </div>
    <V-Footer/>
    <ScrollToTop/>
  </div>
</template>

<script>
import MainNav from 'components/navs/MainNav'
import Footer from 'partials/Footer'
import ScrollToTop from 'partials/ScrollToTop'

export default {
  name: 'app',
  components: {
    MainNav,
    ScrollToTop,
    'V-Footer': Footer
  }
}
</script>

<style lang='scss'>
@import '~styles/globals';

* {
  box-sizing: border-box;
}

html, body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;

  &.scroll-lock {
    overflow-y: hidden;
  }
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #242424;
}

#app {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
}
#content {
  flex: 1 0 auto;
}

body .footer {
  flex-grow: 1;
}
</style>
