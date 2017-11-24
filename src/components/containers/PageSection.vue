<template>
  <section class='page-section' :class='[ sectionColor, bgSkew ]'>
    <article class='page-section__content' :class='contentFix'>
      <h1 class='section-title' :class='alignSectionTitle'>
        <slot name='title'></slot>
      </h1>
      <slot></slot>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    alignTitle: {
      type: String,
      required: false,
      default: 'center',
      validator: val => ['left', 'right', 'center', 'justify'].includes(val)
    },
    color: {
      type: String,
      required: false,
      default: 'default',
      validator: val => ['default', 'primary', 'secondary', 'white'].includes(val)
    },
    skewed: {
      type: String,
      rewuired: false,
      default: 'none',
      validator: val => ['none', 'up', 'down'].includes(val)
    }
  },
  computed: {
    sectionColor () {
      const color = this.color
      return color
      ? `page-section--${color}`
      : ''
    },
    bgSkew () {
      return this.skewed === 'none'
      ? false
      : 'page-section--skewed-' + this.skewed
    },
    contentFix () {
      return this.skewed === 'none'
      ? false
      : 'page-section__content--skewed-' + this.skewed
    },
    alignSectionTitle () {
      return 'text-' + this.alignTitle
    }
  }
}
</script>

<style lang='scss'>
  @import '~styles/globals';

  .page-section {
    padding: 4.5rem 0;

    &--primary {
        background: $brand-primary;
        color: #FFF;
    }
    &--secondary {
        background: $brand-secondary;
        color: #FFF;
    }
    &--white {
      background: white;
      color: #212121;
    }

    &--skewed {
      &-up { transform: skewY(-3deg) }
      &-down { transform: skewY(3deg) }
    }

    &__content--skewed {
      &-up { transform: skewY(3deg) }
      &-down { transform: skewY(-3deg) }
    }
  }

  .section-title {
    font-size: 2.25rem;
    font-weight: 300;
    padding: 0 1rem;
    margin-bottom: 2.5rem;
    
    strong {
      font-weight: 500;
    }

    @include media(sm) {
      text-shadow: 0 2px 1px rgba(black, 0.3);
      margin-bottom: 2rem;
    }

    @include media(md) {
      font-size: 3.15rem;
      margin-bottom: 4.5rem;
    }

    &__icon {
      display: block;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0.6rem;

      @include media(sm) {
        display: inline-block;
        text-align: left;
        position: relative;
        top: 8px;
        margin-right: 0.5rem;
        margin-left: 0;
        margin-bottom: 0;
      }
    }
  }
</style>