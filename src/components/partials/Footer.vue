<template>
  <footer class='footer'>
    <h1>AMII</h1>
    <Wrapper width='fluid' class='footer__bottom'>
      <p  class='footer__copyright-text'>
      {{ new Date().getFullYear() }} &copy; AMII, All rights reserved  
      </p>
      <p class='footer__image-warning'>
      Images provided on this website are for personal, non-commercial use. Republication, retransmission, or reproduction of such images is strictly prohibited.
      </p>
    </Wrapper>
  </footer>
</template>

<style lang="scss" scoped>
  @import '~styles/globals';

  .footer {
    text-align: center;
    height: auto;

    padding: 4.5rem 0;
    padding-bottom: 0 !important;
    background: $brand-primary;
    color: white;

    &__bottom {
      background: darken($brand-primary, 7);
    }

    &__copyright-text {
      text-align: center;
      font-size: 0.75rem !important;
      margin: 2rem 0 0.35rem 0;
      @include media(md) {
        font-size: 1.125rem;
        margin-top: 2rem;
      }
    }

    &__image-warning {
      font-size: 0.5rem;
      @include media(sm) {
        font-size: 0.7rem;
      }
    }

    a {
      color: inherit;
    }

    .location-block {
      padding-bottom: 14px;
      p {
        font-size: 1.125rem;
        line-height: 1.35;
        margin: 0;
      }
      @include media(sm) {
        margin: 1.35rem 0;
      }
    }

    h1 {
      margin-bottom: 0
    }

    strong {
      font-size: 1.3125rem;
    }
    
    address {
      line-height: 1.6;
      margin: 0.65rem 1rem;
      margin-top: -0.85rem;
    }
  }
</style>
