<template>
  <a v-once :href='formatted'>{{ phone }}</a>
</template>

<script>
import { SECONDARY_PHONE, SECONDARY_PHONE_LINK } from 'contacts'
export default {
  props: {
    phone: SECONDARY_PHONE,
    formatted: SECONDARY_PHONE_LINK
  }
}
</script>
