<template>
  <div>
    <section>
      <div class="md_grid">
        <div class="gallery">
          <div class="thumb-example">
            <!-- swiper1 -->
            <swiper
              class="swiper gallery-top"
              :options="swiperOptionTop"
              ref="swiperTop"
            >
              <swiper-slide class="slide-1"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[0]" 
              /></swiper-slide>
              <swiper-slide class="slide-2"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[1]" 
              /></swiper-slide>
              <swiper-slide class="slide-3"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[2]"
              /></swiper-slide>
              <swiper-slide class="slide-4"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[3]"
              /></swiper-slide>
              <swiper-slide class="slide-5"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[4]"
              /></swiper-slide>
              <swiper-slide class="slide-6"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[5]"
              /></swiper-slide>
              <swiper-slide class="slide-7"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[6]"
              /></swiper-slide>
              <swiper-slide class="slide-8"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[7]"
              /></swiper-slide>
              <swiper-slide class="slide-9"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[8]"
              /></swiper-slide>
              <swiper-slide class="slide-10"
                ><nuxt-img format="webp" quality="60" v-bind:src="carros.fotos[9]"
              /></swiper-slide>
              <div
                class="swiper-button-next swiper-button-white"
                slot="button-next"
              ></div>
              <div
                class="swiper-button-prev swiper-button-white"
                slot="button-prev"
              ></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper
              class="swiper gallery-thumbs"
              :options="swiperOptionThumbs"
              ref="swiperThumbs"
            >
              <swiper-slide class="slide-1"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[0]"
              /></swiper-slide>
              <swiper-slide class="slide-2"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[1]"
              /></swiper-slide>
              <swiper-slide class="slide-3"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[2]"
              /></swiper-slide>
              <swiper-slide class="slide-4"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[3]"
              /></swiper-slide>
              <swiper-slide class="slide-5"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[4]"
              /></swiper-slide>
              <swiper-slide class="slide-6"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[5]"
              /></swiper-slide>
              <swiper-slide class="slide-7"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[6]"
              /></swiper-slide>
              <swiper-slide class="slide-8"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[7]"
              /></swiper-slide>
              <swiper-slide class="slide-9"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[8]"
              /></swiper-slide>
              <swiper-slide class="slide-10"
                ><nuxt-img format="webp" quality="20" v-bind:src="carros.fotos[9]"
              /></swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="details">
          <div class="details--model">
            <h2>{{ carros.marca }}</h2>
            <h1>{{ carros.modelo }}</h1>
          </div>
          <div class="details--price">
            <span>R${{ carros.preco }}</span>
          </div>
          <div class="details--contact">
            <a class="whatsapp" href="https://api.whatsapp.com/send/?phone=5519971194307&text&app_absent=0" rel="noopener" target="_blank">whatsapp</a>
            <a class="facebook" href="https://www.facebook.com/pacioniauto" rel="noopener" target="_blank">facebook</a>
          </div>
          <nuxt-link to="/sobre#financiamento" class="details--loan"
            ><span>condições de financiamento</span></nuxt-link
          >
          <div class="table">
            <table>
              <tbody>
                <tr>
                  <th>Ano</th>
                  <td>{{ carros.ano }}</td>
                </tr>
                <tr>
                  <th>Categoria</th>
                  <td>{{ carros.categoria }}</td>
                </tr>
                <tr>
                  <th>Kilometragem</th>
                  <td>{{ carros.kilometragem }}</td>
                </tr>
                <tr>
                  <th>Combustível</th>
                  <td>{{ carros.combustivel }}</td>
                </tr>
                <tr>
                  <th>Tanque</th>
                  <td>{{ carros.tanque }}L</td>
                </tr>
                <tr>
                  <th>Transmisão</th>
                  <td>{{ carros.transmissao }}</td>
                </tr>
                <tr>
                  <th>Motor</th>
                  <td>{{ carros.motor }}</td>
                </tr>
                <tr>
                  <th>Potência</th>
                  <td>{{ carros.potencia }}cv</td>
                </tr>
                <tr>
                  <th>Freio</th>
                  <td>{{ carros.freio }}</td>
                </tr>
                <tr>
                  <th>Cor</th>
                  <td>{{ carros.cor }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="observations">
        <h3>Observações</h3>
        <div>
          <span>{{ carros.observacoes }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.md_grid {
  @include md {
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gallery {
    .swiper {
      &.gallery-top {
        height: 50rem;
        width: 100%;
      }

      &.gallery-thumbs {
        padding-top: 1rem;
        height: 12rem;
        width: 100%;
        box-sizing: border-box;
      }

      &.gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }

      &.gallery-thumbs .swiper-slide-active {
        opacity: 1;
      }
    }
    @include md {
      width: 50%;
      margin: 0 auto;
      padding-bottom: 2rem;
    }
  }

  .details {
    font-family: $ff-primary;
    padding: 2rem 0;

    @include md {
      padding: 0;
      margin: 0 auto;
      width: 50%;
      padding-left: 2rem;
    }

    &--model {
      border-left: 1rem solid $primary;
      margin-bottom: 1rem;

      h1 {
        color: $primary;
        font-size: 4rem;
        letter-spacing: 0.6rem;
        margin-left: 1rem;
      }

      h2 {
        color: $gray-400;
        font-size: 2rem;
        letter-spacing: 0.3rem;
        margin-left: 1rem;
      }
    }

    &--price {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $primary;
      padding: 2rem;
      margin-bottom: 1rem;

      span {
        font-size: 2rem;
        letter-spacing: 0.4rem;
        color: $gray-500;
      }
    }

    &--loan {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.2rem solid $gray-500;
      padding: 1.4rem;
      margin-bottom: 1rem;
      cursor: pointer;

      &:hover {
        outline: 0.3rem solid $primary;
        border: 0.2rem solid transparent;
      }

      span {
        font-size: 1.2rem;
        letter-spacing: 0.4rem;
        color: $gray-500;
      }
    }

    &--contact {
      display: flex;
      justify-content: space-around;
      margin-bottom: 1rem;    

      .whatsapp {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2rem;
        padding: 1.4rem;
        margin-right: 0.5rem;
        cursor: pointer;
        font-size: 1.2rem;
        letter-spacing: 0.4rem;
        background-color: rgb(28, 145, 115);
        color: $gray-100;
        gap: 1rem;

        &:hover {
          outline: 0.1rem solid green;
        }
      }

      .facebook {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2rem;
        padding: 1.4rem;
        cursor: pointer;
        font-size: 1.2rem;
        letter-spacing: 0.4rem;
        background-color: rgb(22, 108, 206);
        color: $gray-100;
        gap: 1rem;

        &:hover {
          outline: 0.1rem solid blue;
        }
      }
    }

    .table {
      padding: 2rem 0;
      font-family: $ff-secondary;
      letter-spacing: 0.2rem;
      font-size: 1.4rem;
      text-align: center;

      table {
        width: 100%;

        tr {
          padding: 1rem;
          background-color: $gray-200;
          color: $gray-400;
          width: 50%;
        }

        td {
          background-color: $gray-100;
          color: $gray-500;
          padding: 1rem;
          width: 50%;
        }
      }
    }
  }
}


.observations {
  margin: 2rem 0;
  border-right: 1rem solid $primary;
  text-align: right;

  h3 {
    margin-right: 1rem;
    color: $primary;
    font-family: $ff-primary;
    font-size: 2rem;
  }

  div {
    margin-right: 1rem;
    margin-top: 1rem;

    span {
      font-family: $ff-secondary;
      letter-spacing: 0.2;
      font-size: 1.4rem;
    }
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  head: {
    title: "Ficha técnica",
    meta: [
      {
        hid: "Ficha",
        name: "description",
        content: "Ficha técnica",
      },
    ],
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 5,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 5,
        centeredSlides: false,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },

  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },

  async asyncData({ $content, params }) {
    const carros = await $content("carros", params.slug).fetch();

    return {
      message: "",
      carros,
    };
  },
};
</script>