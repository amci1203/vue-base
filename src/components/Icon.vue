<template>
  <div v-if='isEvilIcon' :class="{ 'icon__spinner': isSpinner }">
    <div :class='iconClass'>
      <svg class='icon__cnt'>
        <use :xlink:href='iconId' />
      </svg>
    </div>
  </div>
  <div v-else :class='iconClass'>
    <img :src="source" />
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'm',
      validator: v => ['s', 'm', 'l', 'xl'].includes(v)
    }
  },
  computed: {
    isSpinner () {
      return this.name.includes('spinner')
    },
    isEvilIcon () {
      return this.name.startsWith('ei')
    },
    iconClass () {
      let base = 'icon'
      const add = str => str.includes('.')
      ? '' // image icons won't have an ei name class
      : base + '--' + str

      return `${base} ${add(this.name)} ${add(this.size)}`
    },
    iconId () {
      return `#${this.name}-icon`
    },
    source () {
      const path = require.context('../assets/icons/', false, /\.(png|jpg|svg|gif)$/)
      return path('./' + this.name)
    }
  }
}
</script>

<style>
  @keyframes spin {
    100% {
      transform: rotate(360deg)
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .icon {
    position: relative;
    display: inline-block;
    width: 25px;
    height: 25px;
    overflow: hidden;
    fill: currentColor
  }
  .icon__cnt {
    width: 100%;
    height: 100%;
    background: inherit;
    fill: inherit;
    pointer-events: none;
    transform: translateX(0);
  }
  .icon--m {
    width: 50px;
    height: 50px
  }
  .icon--l {
    width: 100px;
    height: 100px
  }
  .icon--xl {
    width: 150px;
    height: 150px
  }
  .icon--xxl {
    width: 200px;
    height: 200px
  }
  .icon__spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
  }
  .icon--ei-spinner .icon__spinner,
  .icon--ei-spinner-2 .icon__spinner {
    animation: spin 1s steps(12)infinite
  }
  .icon--ei-spinner-3 .icon__spinner {
    animation: spin 1.5s linear infinite
  }
  .icon--ei-sc-facebook {
    fill: #3b5998
  }
  .icon--ei-sc-github {
    fill: #333
  }
  .icon--ei-sc-google-plus {
    fill: #dd4b39
  }
  .icon--ei-sc-instagram {
    fill: #3f729b
  }
  .icon--ei-sc-linkedin {
    fill: #0976b4
  }
  .icon--ei-sc-odnoklassniki {
    fill: #ed812b
  }
  .icon--ei-sc-skype {
    fill: #00aff0
  }
  .icon--ei-sc-soundcloud {
    fill: #f80
  }
  .icon--ei-sc-tumblr {
    fill: #35465c
  }
  .icon--ei-sc-twitter {
    fill: #55acee
  }
  .icon--ei-sc-vimeo {
    fill: #1ab7ea
  }
  .icon--ei-sc-vk {
    fill: #45668e
  }
  .icon--ei-sc-youtube {
    fill: #e52d27
  }
  .icon--ei-sc-pinterest {
    fill: #bd081c
  }
  .icon--ei-sc-telegram {
    fill: #08c
  }
</style>
