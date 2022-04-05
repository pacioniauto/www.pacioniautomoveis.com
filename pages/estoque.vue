<template>
  <section class="stock">
    <article v-for="(carro, index) in carros" :key="index" class="stock__card">
      <div class="stock__card--model">
        <h3>{{ carro.marca }}</h3>
        <h4>{{ carro.modelo }}</h4>
        <div class="stock__card--stats">
          <calendar />
          <gear />
          <fuel />
          <brakes />
          <span>{{ carro.ano }}</span>
          <span>{{ carro.potencia }}cv</span>
          <span>{{ carro.tanque }}L</span>
          <span>{{ carro.freio }}</span>
        </div>
      </div>
      <div class="img__overlay">
        <div class="img__overlay--background"></div>
        <nuxt-link :to="`/estoque/${carro.slug}`"><span class="img__overlay--text">saiba mais</span></nuxt-link>
      </div>
      <nuxt-img format="webp" quality="60" v-bind:src="carro.fotos[0]" />
    </article>
  </section>
</template>

<style lang="scss">
  .stock {
    display: grid;
    justify-items: center;
    grid-row-gap: 4rem;
    grid-column-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

    &__card {
      display: flex;
      flex-shrink: 0;
      position: relative;
      flex-direction: column;
      justify-content: flex-end;
      box-shadow: 10px 10px 0px 0px $primary;
      height: 50rem;
      width: 100%;

      @include md {
        max-height: 40rem;
      }

      &--model {
        display: flex;
        position: absolute;
        width: 100%;
        align-items: center;
        flex-direction: column;
        font-family: $ff-primary;
        background-color: rgba($color: $gray-700, $alpha: 0.9);
        padding: 2rem;
        z-index: 1;

        h3 {
          font-size: 2rem;
          color: $primary;
          letter-spacing: 2px;
        }

        h4 {
          font-size: 3rem;
          color: $gray-100;
          letter-spacing: 5px;
        }
      }

      &--stats {
        width: 100%;
        padding-top: 1rem;
        transition: 2s ease-in;

        display: grid;
        grid-gap: 0.6rem;
        justify-items: center;
        grid-template-columns: repeat(4, 1fr);

        &>svg {
          height: 2rem;
          color: $gray-400;
        }

        &>span {
          font-family: $ff-primary;
          color: $gray-300;
          font-size: 1.2rem;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover .img__overlay {
        opacity: 1;
      }

      .img__overlay {

        &--background {
          background-color: $gray-500;
          opacity: 0.5;
        }

        &--text {
          color: $primary;
          font-size: 20px;
          font-family: $ff-secondary;
          border: 0.4rem solid $primary;
          padding: 1rem 2rem;
          z-index: 2;

          top: 35%;
          left: 50%;
          text-align: center;
          position: absolute;
          transform: translate(-50%, -50%);
          transition: all 300ms ease-out;

          &:hover {
            cursor: pointer;
            color: $gray-500;
            background: $primary;
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    head: {
      title: "Estoque",
      meta: [{
        hid: "Estoque",
        name: "description",
        content: "Confira nossos veículos seminovos",
      }, ],
    },

    async asyncData({
      $content
    }) {
      const carros = await $content("carros").fetch();

      return {
        message: "",
        carros,
      };
    },
  };
</script>