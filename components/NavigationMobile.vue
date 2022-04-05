<template>
  <div class="navMobile">
    <nuxt-link to="/sobre">Sobre Nós</nuxt-link>
    <nuxt-link to="/contato">Contato</nuxt-link>
    <nuxt-link to="/estoque">Estoque</nuxt-link>
    <nuxt-link to="/blog">Blog</nuxt-link>
    <div class="navMobile__media">
      <a href="https://www.facebook.com/pacioniauto" rel="noopener" target="_blank"><facebook/></a>
      <a href="https://www.instagram.com/Pacioniautomoveis" rel="noopener" target="_blank"><instagram/></a>
      <a href="https://api.whatsapp.com/send/?phone=5519971194307&text&app_absent=0" rel="noopener" target="_blank"><whatsapp /></a>
    </div>
  </div>
</template>

<style lang="scss">
.navMobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding: 4rem;

  & > a {
    display: flex;
    font-size: 4rem;
    color: $gray-700;
    margin-bottom: 2rem;
    justify-content: left;
    font-family: $ff-primary;

    &:hover {
      color: $primary;
    }
  }

  &__media {
    display: flex;
    justify-content: left;
    margin-top: 6rem;

    & > a {
      display: flex;
      width: 3rem;
      color: $gray-700;
      margin-right: 4rem;

      &:nth-child(1) {
          &:hover {
            color: rgb(22, 108, 206);
          }
        }
      &:nth-child(2) {
        &:hover {
          color: rgb(235, 33, 73);
        }
      }
      &:nth-child(3) {
        &:hover {
          color: rgb(28, 145, 115);
        }
      }
    }
  }
}
</style>