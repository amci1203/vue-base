<template>
  <div class='wrapper' :style='wrapperStyle'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  props: {
    width: {
      type: String,
      required: false,
      default: 'normal'
      // validator: val => ['normal', 'medium', 'narrow', 'wide'].includes(val.toLowerCase())
    },
    padding: {
      type: String,
      required: false,
      default: 'normal'
      // validator: val => ['normal', 'extra', 'less', 'none'].includes(val.toLowerCase())
    },
    direction: {
      type: String,
      required: false,
      default: 'column',
      validator: val => ['row', 'column'].includes(val.toLowerCase())
    }
  },
  computed: {
    wrapperStyle () {
      const style = {}
      const { width, padding, direction } = this

      const paddings = {
        normal: 18,
        less: 10,
        extra: 28,
        none: 0
      }
      const widths = {
        normal: 1200,
        wide: 1500,
        medium: 980,
        narrow: 480,
        fluid: '100%'
      }

      style['flex-flow'] = `${direction} wrap`

      style['max-width'] = widths[width]
      ? typeof widths[width] === 'number' // make sure it's not the fluid option before we add 'px'
        ? (widths[width] + paddings[padding] * 2) + 'px'
        : widths[width]
      : width

      if (padding !== 'none') {
        style['padding'] = paddings[padding]
        ? `0 ${paddings[padding]}px`
        : padding
      }

      return style
    }
  }
}
</script>

<style lang='scss'>
  .wrapper {
    display: flex;
    margin: 0 auto;
  }
</style>