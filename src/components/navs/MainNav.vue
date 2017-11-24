<template>
  <div>
    <contacts-nav></contacts-nav>
    <primary-nav></primary-nav>
    <mobile-nav></mobile-nav>
  </div>
</template>

<script>
import MobileNav from './MobileNav'
import PrimaryNav from './PrimaryNav'
import ContactsNav from './ContactsNav'

export default {
  components: {
    MobileNav,
    PrimaryNav,
    ContactsNav
  }
}
</script>
