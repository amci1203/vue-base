<template>
  <nav
    class='nav nav--mobile'
    :class="{
      'visible': isNavVisible,
      'menu-open': isMenuOpen,
      'border-visible': shouldShowBorder
    }"
  >
      <button
        class='menu-toggle'
        :class="{ 'close': isMenuOpen }"
        @click='toggleMenu'
      >
        <span class="hamburger">
          <span class="middle"></span>
        </span>
      </button>
      <div class="left">
        <button>
          <a :href='phone.link'><Icon name='ei-phone'/></a>
        </button>
      </div>
      <div class="right">
        <button>
          <a :href='email.link'><Icon name='ei-envelope'/></a>
        </button>
      </div>
  </nav>
</template>

<script>
import { throttle } from 'lodash'
import Transmitter from '@/Transmitter'
import {
  PRIMARY_EMAIL as email,
  PRIMARY_PHONE as phone
} from 'contacts'

export default {
  name: 'MobileNav',
  data () {
    return {
      email,
      phone,

      isNavVisible: true,
      isMenuOpen: false,
      shouldShowBorder: true,

      required: 2,
      consecutives: 0,
      prevScroll: 0,
      prevDirection: 'up'
    }
  },
  methods: {
    handleScroll: throttle(function (e) {
      const scroll = window.scrollY
      const direction = scroll > this.prevScroll ? 'down' : 'up'

      if (direction === this.prevDirection) {
        this.consecutives++
      } else this.consecutives = 0

      /*
        IN ENGLISH
        IF the amount of required consecutive scrolls in one direction is satisfied
          AND
          a) the bar is up AND the user is scrolling down
          b) the bar is down AND the user is scrolling up
        THEN we will transmit a toggle event and toggle the visible state.
      */
      if (this.consecutives === this.required && (
        (this.isNavVisible && direction === 'down') ||
        (!this.isNavVisible && direction === 'up')
      )) {
        this.isNavVisible = direction === 'up'
        Transmitter.emit('mobile-bar-toggle')
      } else this.prevDirection = direction

      this.prevScroll = scroll
    }, 180),
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
      document.documentElement.classList.toggle('scroll-lock')
      Transmitter.emit('menu-toggle')
    },
    closeMenu () {
      this.isMenuOpen = false
      document.documentElement.classList.remove('scroll-lock')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    Transmitter.on('menu-close', this.closeMenu)
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/globals';
  @import '~styles/navs';

  $border-width: 1px;
  $nav-height: 45px;
  $nav-color: darken($brand-primary, 5);
  $nav-text: white;
  $nav-open-color: $mobile-menu-open-color;
  $nav-border-color: darken($nav-color, 4);

  $hamburger-color: white;
  $close-button-color: $mobile-menu-open-text;
  $close-button-x: $mobile-menu-open-color;

  .nav--mobile {
    @include media(md) { display: none !important }
    
    transition       : all 0.3s ease-in;
    background       : $nav-color;
    color            : $nav-text;
    position         : fixed;
    z-index          : 55;
    bottom           : 0;
    width            : 100%;
    height           : $nav-height + $border-width;
    margin-bottom    : $nav-height * -3;
    border-top       : 1px solid $nav-border-color;

    display: flex;
    justify-content: space-between;

    &.visible {
      margin-bottom: 0;
    }
    
    &.menu-open {
      background: $mobile-menu-open-color;
      color: $mobile-menu-open-text;
      border-top: none
    }

    &.border-visible:not(.menu-open) {
      border-top: 1px solid white;
    }

    .left, .right {
        width: 45%;
        display: flex;
        justify-content: space-evenly;
    }

    .center {
        @include dead-center;
        button { width: ($nav-height + 25px) !important }
    }

    button:not(.menu-toggle) {
      background-color : transparent;
      color            : inherit;
      border           : none;
      border-radius    : $nav-height / 2;
      width            : 45%;
      height           : $nav-height;
      margin           : 0;
      &:hover {
        background-color: darken($nav-color, 7);
      }

      a {
        @include no-text-decoration;
        
        display: block;
        height: $nav-height;
      }

      .icon {
        $margin: 5px;
        $size: $nav-height - $margin * 2;
        height: $size;
        width: $size;
        margin: $margin 0;
        fill: white;

        img {
          width: 100%;
          height: 100%;
        }
      }
  }


  .menu-toggle {
    @include h-center;
    @include media(md) {
      display: none
    }

    &:focus {
      outline: none
    }

    padding          : 0;
    z-index          : 300;
    bottom           : 10px;
    background-color : $nav-color;
    width            : 50px;
    height           : 50px;
    border           : 1px solid $hamburger-color;
    border-radius    : 25px;

    /*
        FOR REFERENCE
        '&times' : x
        '&#9776' : hamburger
    */

    .hamburger {
      @include dead-center;
      width  : 20px;
      height : 20px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: $hamburger-color;
        transition: transform 0.3s ease-out;
      }
      .middle {
        position  : absolute;
        top       : 50%;
        left      : 0;
        transform : translateY(-50%) scaleX(1);
        width     : 20px;
        height    : 3px;
        opacity   : 1;
        background-color : $hamburger-color;
        transition       : all 0.3s ease-out;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: $hamburger-color;
        transition: transform 0.3s ease-out;
      }
    }
    &.close {
      background-color : $close-button-color;
      .hamburger {
        left: 27px;
        &::before {
          transform        : rotate(45deg) scaleX(1.25);
          transform-origin : top left;
          background-color : $close-button-x;
        }
        .middle {
          opacity          : 0;
          transform        : scaleX(0);
          transform-origin : left;
          background-color : $close-button-x;
        }
        &::after {
          transform         : rotate(-45deg) scaleX(1.25);
          transform-origin : bottom left;
          background-color : $close-button-x;
        }
      }
    }
  }
}
</style>
