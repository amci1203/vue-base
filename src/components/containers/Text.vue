<template>
  <div class='generic-content' :class="{ 'generic-content--wrapper': wrapper }" :style='textStyle'>
    <slot></slot>
  </div>
</template>

<style lang='scss'>
  @import '~styles/globals';
  
  .generic-content {
    &--wrapper {
      margin: 0 auto;
      padding: 0 18px;
    }
    h1 {
      font-size: 1.65rem;
      margin: 0.5rem 0 1.8rem 0;
      font-weight: 300;

      @include media(sm) {
        font-size: 2.35rem;
        margin-bottom: 2rem;
      }
    }

    p {
      line-height: 1.65;
      margin: 0 0 1.5rem 0;

      @include media(sm) {
        margin: 0 0 1.8rem 0;
        font-size: 1.125rem;
      }
    }

    button {
      @include media(sm) {
        font-size: 1.125rem;
      }
    }

    strong {
      font-weight: bold
    }

    a {
      text-decoration: underline;
      font-weight: 700;
      color: inherit;
    }

    ul, ol {
      padding: 0;
      margin-left: 15px;
      margin-bottom: 15px;
      list-style-type: none;

      &.bulleted {
        list-style-type: disc;
      }

      li {
        line-height: 1.5;

        @include media(sm) {
          font-size: 1.125rem;
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'GenericText',
  props: {
    align: {
      type: String,
      required: false,
      default: 'left',
      validator: val => ['left', 'right', 'justify', 'center'].includes(val)
    },
    wrapper: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    textStyle () {
      return {
        'text-align': this.align
      }
    }
  }
}
</script>