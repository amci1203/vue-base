<template>
  <a v-once :href='formatted'>{{ phone }}</a>
</template>

<script>
import { EMAIL } from 'contacts'

export default {
  props: {
    email: EMAIL,
    formatted: 'mailto:' + this.email
  }
}
</script>
