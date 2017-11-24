<template>
  <nav class="nav nav--contacts">
    <ul>
      <li class='list-item'>
        <Icon name='ei-envelope' size='s'/>
        <a v-once :href='email.link'>{{ email.value }}</a>
      </li>
      <li class='list-item'>
        <Icon name='ei-phone' size='s' />
        <a v-once :href='phone.link'>{{ phone.value }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {
  PRIMARY_EMAIL as email,
  PRIMARY_PHONE as phone
} from 'contacts'

export default {
  data () {
    return { email, phone }
  }
}
</script>


<style lang="scss" scoped>
  @import '~styles/globals';
  @import '~styles/navs';

  .nav--contacts {
    position: relative;
    z-index: 40;

    @include media(below-md) {
      display: none
    }

    width: 100%;
    height: 35px;

    align-items: center;
    justify-content: flex-end;

    ul {
      display: flex;
      justify-content: flex-end;
    }

    li, .list-item {
      display: flex;
      align-items: center;
      padding: 0 0.5rem;

      a {
        @include no-text-decoration;
        text-decoration: underline;
      }
    }
  }
</style>

