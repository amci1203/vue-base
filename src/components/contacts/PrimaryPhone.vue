<template>
  <a v-once :href='formatted'>{{ phone }}</a>
</template>

<script>
import { PRIMARY_PHONE, PRIMARY_PHONE_LINK } from 'contacts'
export default {
  props: {
    phone: PRIMARY_PHONE,
    formatted: PRIMARY_PHONE_LINK
  }
}
</script>
