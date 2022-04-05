<template>
  <footer>
    <div class="footer">
      <div class="footer__text">
        <location />
        <span class="footer__title">Venha visitar nossa loja</span>
        <span class="footer__open">
          Segunda à Sexta 8.30 - 18.00 e Sábado das 8.30 - 13.00
        </span>
        <a
          href="https://www.google.com/maps/place/Av.+Eng.+F%C3%A1bio+Roberto+Barnab%C3%A9,+5356+-+Jardim+Morada+do+Sol,+Indaiatuba+-+SP,+13348-563/@-23.1155611,-47.2270951,15.5z/data=!4m5!3m4!1s0x94cf4cb88e09cdd5:0x69727e4d69798426!8m2!3d-23.1137732!4d-47.2329801"
          rel="noopener" target="_blank"
        >
          <div class="footer__direction">
            <span class="footer__address"
              >Av. Eng. Fábio Roberto Barnabé, 5356 - Jardim Morada do Sol,
              Indaiatuba - SP</span
            >
          </div>
        </a>
        <span class="footer__cnpj">CNPJ: 39.959.019/0001-03 - PACIONI COMÉRCIO DE AUTOS LTDA</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  height: auto;
  display: flex;
  padding: 4rem 2rem;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-image: url("/img/indaiatuba_map.jpg");

  &__text {
    display: flex;
    align-items: center;
    flex-direction: column;

    @include sm {
      align-items: flex-start;
    }
  }

  &__title {
    font-family: $ff-primary;
    font-size: 6rem;
    color: $gray-100;
    padding: 2rem 0;
  }

  &__direction {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid $primary;
    margin: 2rem 0;
  }

  &__address {
    font-family: $ff-secondary;
    margin: 1rem;
    color: $gray-200;
    font-size: 1rem;

    &:hover {
      color: $primary;
    }
  }

  &__open {
    font-family: $ff-secondary;
    color: $gray-200;
    font-size: 1rem;
  }

  &__cnpj {
    font-family: $ff-secondary;
    color: $gray-300;
    font-size: 1rem;
  }
}
</style>