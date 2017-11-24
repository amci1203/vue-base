<template>
  <nav class='nav nav--primary' :class='{ open }'>
    <img class='nav--primary__logo nav--primary__logo--image' src='~assets/logo.png' />
    <div class="nav--primary__links">
      <router-link to='/' exact @click.native='closeMenu'>About</router-link>
      <div class='dropdown hide-md'>
        <span class='dropdown__label'>Contact Us</span>
        <div class='dropdown__list-container align--right center-at-sm'>
          <div class="dropdown__list">
            <div class='contact-line'>
              <Icon name='ei-phone' size='s'/>
              <p><a :href='phone.link'>{{ phone.value }}</a></p>
            </div>
            <div class='contact-line'>
              <Icon name='ei-envelope' size='s'/>
              <p><a :href='email.link'>{{ email.value }}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Transmitter from '@/Transmitter'
import {
  PRIMARY_EMAIL as email,
  PRIMARY_PHONE as phone
} from 'contacts'

export default {
  data () {
    return {
      email,
      phone,
      open: false
    }
  },
  methods: {
    toggleMenu () {
      this.open = !this.open
    },
    closeMenu () {
      if (this.open) {
        this.open = false
        Transmitter.emit('menu-close')
      }
    }
  },
  mounted () {
    Transmitter.on('menu-toggle', this.toggleMenu)
  }
}
</script>

<style lang='scss'>
  @import '~styles/globals';
  @import '~styles/navs';

  $nav-height: 45px;
  $border-width: 6px;

  $dropdown-color: $nav-color;
  $dropdown-text: $nav-text;

  .nav--primary {
    transition: 0.35s all ease-in;

    position: fixed;
    z-index: 50;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;

    background: $nav-color;
    color: $nav-text;
    border-bottom: 1px solid $lightest-gray;
    box-shadow: 0 2px 1px 1px rgba(black, .15);

    @include media(below-md) {
      padding: 2.8rem;
      bottom: 105vh;
    }
    @include media(md) {
      position: relative;
      z-index: 50;
      height: 45px;
      padding: 0 2rem;
      margin: 0;
      flex-direction: row;
      justify-content: flex-end;
    }

    &.open {
      @include media(below-md) {
        .nav--primary__logo--image {
          max-width: 100px;
          height: auto;
          margin-top: 2rem;
        }
        background: $mobile-menu-open-color;
        color: $mobile-menu-open-text !important;
        bottom: 0;
      }
    }

    &__links {
      display: flex;
      flex-flow: column wrap;

      @include media(md) {
        flex-flow: row nowrap;
        height: $nav-height;
      }

      & > a, .dropdown__label {
        @include no-text-decoration;
        display: block;
        padding: 0.5rem 1rem;
        text-align: center;

        @include media(below-md) {
          margin: 0.315rem 0;
          border-radius: 1.8rem;
          &:hover {
            background: darken($mobile-menu-open-color, 5)
          }
        }
        @include media(md) {
          color: $nav-text;
          padding-top: ($nav-height / 2.5);
          padding-bottom: 0;
          height: $nav-height;
          border-bottom: $border-width solid transparent;

          &:hover { border-bottom-color: lighten($brand-primary, 10) }
          &.active { border-bottom-color: $brand-primary }
        }
      }
    }
    .dropdown {
      position: relative;

      &__label {
        &:hover { border-bottom-color: transparent }
      }
      &__list-container {
        transition: 0.15s all ease-out;
        position: absolute;
        padding-top: 1rem; // make space for the tooltip

        @include media(md) {
          opacity: 0;
          z-index: -1;
          overflow-y: auto;
        }

        &.center-at-sm {
          @include media(below-md) {
            right: 50%;
            transform: translateX(50%);
            &::after {
              left: 50% !important;
              transform: translateX(-50%) !important;
            }
          }
        }

        &::after {
          position: absolute;
          top: 0;
          left: 15%;
          
          content: "''";
          display: block;
          background: transparent;
          color: transparent;
          width: 0;
          height: 0;
          border: 0.5rem solid transparent;
          border-bottom-color: $nav-color;
        }
        &.align--center::after {
          left: 50%;
          transform: translateX(-50%);
        }
        &.align--right::after {
          left: 70%;
        }

        &.align {
          &--center {
            @include media(md) {
              right: 50%;
              transform: translateX(50%);
            }
          }
          &--right {
            @include media(md) {
              left: -100%;
            }
          }
        }
      }
      .dropdown__label:hover + .dropdown__list-container, .dropdown__list-container:hover {
        opacity: 1;
        z-index: 20;
      }

      &__list {
        background: $nav-color;
        color: $nav-text;
        padding: 0.5rem 1rem;
        border-radius: 4.2px;
        box-shadow: 1px 2px 3px 2px rgba(black, 0.3);
      }
    }

    .contact-line {
      display: flex;
      flex-direction: row;
      margin: 0.5rem 0;
      padding: 0;
      max-width: 500px;

      p {
        margin: 2px 5px;
      }
      a {
        color: inherit;

        &:hover {
          text-decoration: none;
        }
      }
    }

    &__logo {
      margin: 1.5rem 0;
      font-weight: 100;

      &--image {
        height: $nav-height - 10;
        margin: 0;
      }

      @include media(below-md) {
        margin-bottom: 0.5rem;
        text-align: center;
      }
      
      @include media(md) {
        margin: 0;
        position: absolute;
        left: 1rem;
        bottom: 1rem;
      }
    }
  }
</style>
