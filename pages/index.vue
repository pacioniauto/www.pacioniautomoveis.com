<template>
  <div>
    <header class="hero">
      <div class="hero__text">
        <h1 class="hero__text-title">{{ sobre.titulo }}</h1>
        <h2 class="hero__text-subtitle">{{ sobre.subtitulo }}</h2>
      </div>
      <div class="hero__image"></div>
    </header>
    <section class="home">
      <div class="carousel">
        <article v-for="carro in carros" :key="carro.marca" class="carousel__card">
          <nuxt-img format="webp" quality="60" v-bind:src="carro.banner"/>
          <div class="img__overlay">
            <div class="img__overlay--background"></div>
            <nuxt-link :to="`/estoque/${carro.slug}`"><span class="img__overlay--text">saiba mais</span></nuxt-link>
          </div>
          <div class="carousel__card-info">
            <h3>{{ carro.marca }}</h3>
            <h4>{{ carro.modelo }}</h4>
          </div>
        </article>
      </div>
      <nuxt-link to="/estoque">Confira nosso estoque completo ></nuxt-link>
    </section>
  </div>
</template>

<style lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: center;

  &__text {
    display: flex;
    flex-direction: column;

    @include md {
      width: 50%;
    }

    &-title {
      font-size: 6rem;
      font-family: $ff-primary;
      text-align: right;
      color: $primary;
      line-height: 6rem;
      animation: moveInRight ease 2.4s;

      @include md {
        font-size: 7rem;
        line-height: 7rem;
      }
    }

    &-subtitle {
      font-family: $ff-secondary;
      color: $gray-500;
      text-align: right;
      font-size: 1.8rem;
      line-height: 1.8rem;
      animation: moveInRight ease 2.5s;

      @include sm-up {
        font-size: 2.2rem;
        line-height: 2.2rem;
      }
    }
  }

  &__image {
    width: 50%;
    height: 45rem;
    background-size: cover;
    background-image: url("/img/homepage.webp");
    box-shadow: 10px 10px 0px 0px $primary;
    animation: moveInLeft ease 2.4s;
    margin: 4rem;

    @include md-down {
      display: none;
    }
  }
}

.home {
  margin: 0 auto;

  .carousel {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;

    @include sm-up {
      flex-direction: row;
    }

    @include lg {
      flex-wrap: nowrap;
    }

    &__card {
      width: 100%;
      height: 40rem;
      display: flex;
      flex-shrink: 0;
      position: relative;
      margin-bottom: 4rem;
      flex-direction: column;
      justify-content: flex-end;
      animation: moveInRight ease 2.5s;
      box-shadow: 10px 10px 0px 0px $primary;

      @include sm-up {
        width: 45%;
      }

      @include lg {
        width: 30rem;
        margin-left: 2rem;
      }

      &:hover .home__info--overlay {
        height: auto;
      }

      &:hover .img__overlay {
        opacity: 1;
      }

      img {
        width: 100%;
        height: 100%;
        z-index: -1;
        position: absolute;
        object-fit: cover;
      }

      &-info {
        display: flex;
        align-items: flex-end;
        position: relative;
        flex-direction: column;
        flex-wrap: wrap-reverse;
        font-family: $ff-primary;
        background-color: rgba($color: $gray-700, $alpha: 0.9);
        padding: 2rem;

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
    }
  }

  & > a {
    display: flex;
    justify-content: flex-end;
    font-family: $ff-primary;
    font-size: 2rem;
    color: $gray-500;

    &:hover {
      color: $primary;
    }

    @include sm-up {
      display: none;
    }
  }
}

.img__overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .2s ease;

  &--background {
    background-color: $gray-500;
    opacity: 0.50;
    height: 100%;
    width: 100%;
  }

  &--text {
    color: $primary;
    font-size: 20px;
    font-family: $ff-secondary;
    border:0.4rem solid $primary;
    padding: 1rem 2rem 1rem 2rem;
    
    top: 35%;
    left: 50%;
    position: absolute;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    -webkit-transition: all 300ms ease-out; 
       -moz-transition: all 300ms ease-out; 
         -o-transition: all 300ms ease-out; 
            transition: all 300ms ease-out; 
  
    &:hover {
      cursor: pointer;
      color: $gray-500;
      background: $primary;
    }
  }
}
</style>

<script>
export default {
  async asyncData({ $content }) {
    const carros = await $content("carros")
      .where({
        destaques: true,
      })
      .fetch();

    const sobre = await $content("sobre").fetch();

    return {
      message: "",
      carros,
      sobre
    };
  }
};
</script>