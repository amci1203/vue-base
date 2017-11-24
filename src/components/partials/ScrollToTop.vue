<template>
  <Icon
    v-scroll-to="'body'"
    class='scroll-button'
    name='ei-chevron-up'
    :class='{ visible: isVisible, raised: isPushedUp}'
  />
</template>

<script>
import { throttle } from 'lodash'
import Transmitter from '@/Transmitter'

export default {
  name: 'ScrollToTop',
  data () {
    return {
      isVisible: false,
      isPushedUp: true
    }
  },
  methods: {
    shouldBeVisible: throttle(function (e) {
      this.isVisible = window.scrollY > (window.innerHeight * 1.35)
    }, 300),
    togglePositionFromBottom () {
      this.isPushedUp = !this.isPushedUp
    }
  },
  mounted () {
    window.addEventListener('scroll', this.shouldBeVisible)
    Transmitter.on('mobile-bar-toggle', this.togglePositionFromBottom)
  }
}
</script>


<style lang='scss'>
  @import '~styles/globals';

  .scroll-button {
    transition: all 0.3s ease-in;

    & .icon {
      fill: $brand-primary;
    }

    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 50px;
    height: 50px;

    &:not(.visible) {
      z-index: -1000;
      opacity: 0;
    }

    &.raised {
      @media (below-md) {
        bottom: 3.5rem;
      }
    }

    border-radius: 999px;
    background: white;
    box-shadow: 0 2px 3px 2px rgba(black, 0.35);

    &:hover {
      cursor: pointer;
    }
  }
</style>