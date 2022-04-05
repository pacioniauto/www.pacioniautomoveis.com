<template>
  <section>
    <div class="sobre">
      <div class="sobre__img">
        <nuxt-img format="webp" quality="60" v-bind:src="sobre.imagem" />
      </div>
      <div class="sobre__info">
        <h1>{{ sobre.titulo }}</h1>
        <h2>{{ sobre.subtitulo }}</h2>
        <nuxt-content :document="sobre" />
      </div>
    </div>
    <div id="financiamento" class="sobre">
      <div class="sobre__img">
        <nuxt-img format="webp" quality="60" v-bind:src="financiamento.imagem" />
      </div>
      <div class="sobre__info">
        <h1>{{ financiamento.titulo }}</h1>
        <h2>{{ financiamento.subtitulo }}</h2>
        <nuxt-content :document="financiamento" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .sobre {

    .nuxt-content-container {
      width: 100%;
    }

    &__img {
      img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
        box-shadow: 10px 10px 0px 0px $primary;

        @include md {
          height: 40rem;
        }

        @include lg {
          height: 50rem;
        }
      }
    }

    &__info {
      padding: 2rem 0;

      h1 {
        font-family: $ff-primary;
        font-size: 3.5rem;
        color: $primary;

        @include sm-up {
          font-size: 4rem;
        }
      }

      h2 {
        font-family: $ff-secondary;
        color: $gray-500;
        font-size: 2rem;

        @include sm-up {
          font-size: 2.5rem;
        }
      }

      .nuxt-content {
        width: 100%;
        padding: 2rem 0;
        color: $gray-700;
        font-family: $ff-text;
        font-weight: bold;
        font-size: 1.6rem;

        p {
          padding-bottom: 1rem;   
        }

        @include sm-up {
          font-size: 1.8rem;
        }

        @include md {
          padding: 1rem 0;
          font-size: 1.6rem;
        }
      }
    }

    @include md {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      div {
        width: 50%;
      }

      &__img {
        width: 100%;
        height: 100%;
      }

      &__info {
        padding: 0rem 4rem;
      }
    }
  }

  #financiamento {
    flex-direction: row-reverse;
    margin-top: 4rem;
    text-align: right;

    @include lg {
      margin-top: 8rem;
    }
  }
</style>

<script>
  export default {
    head: {
      title: "Sobre nós",
      meta: [{
        hid: "Sobre",
        name: "description",
        content: "Descrição sobre nossa loja e condições de financiamento",
      }, ],
    },

    async asyncData({
      $content,
      params
    }) {
      const sobre = await $content("sobre", params.slug).fetch();

      const financiamento = await $content("financiamento", params.slug).fetch();

      return {
        message: "",
        sobre,
        financiamento,
      };
    },
  };
</script>