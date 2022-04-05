<template>
  <div class="nav container">
    <nuxt-link to="/sobre">Sobre Nós</nuxt-link>
    <nuxt-link to="/contato">Contato</nuxt-link>
    <nuxt-link to="/estoque">Estoque</nuxt-link>
    <nuxt-link to="/blog">Blog</nuxt-link>
    <div class="nav__media">
      <a href="https://www.facebook.com/pacioniauto" rel="noopener" target="_blank"><facebook/></a>
      <a href="https://www.instagram.com/Pacioniautomoveis" rel="noopener" target="_blank"><instagram/></a>
      <a href="https://api.whatsapp.com/send/?phone=5519971194307&text&app_absent=0" rel="noopener" target="_blank"><whatsapp /></a>
    </div>
  </div>
</template>

<style lang="scss">
.nav {
  display: none;

  @include sm-up {

    display: flex;
    position: relative;
    justify-content: center;
    height: 10rem;
    margin-bottom: 2rem;
    padding: 2rem 0 4rem 0;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 4rem;
  
    & > a {
      display: flex;
      min-width: 8rem;
      font-size: 2rem;
      color: $gray-500;
      justify-content: center;
      margin: 0;
      font-family: $ff-primary;
      margin-bottom: 2rem;
  
      &:hover {
        color: $primary;
      }
  
      &:nth-child(1) {
          animation: moveInRight ease 2.4s;
          margin-right: 5rem;
      }
  
      &:nth-child(2) {
          animation: moveInRight ease 2.4s;
          margin-right: 10rem;
      }
  
      &:nth-child(3) {
          animation: moveInLeft ease 2.4s;
          margin-left: 10rem;
      }
  
      &:nth-child(4) {
          animation: moveInLeft ease 2.4s;
          margin-left: 5rem;
      }
    }
  
    &__media {
      display: none;
  
      @include lg {
        right: 0;
        display: flex;
        position: absolute;
        justify-content: center;
        margin-right: 2rem;
  
        & > a {
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
          row-gap: 2rem;
          color: $gray-500;
          width: 2rem;
  
          &:nth-child(1) {
            animation: moveInLeft ease 2.5s;
  
            &:hover {
              color: rgb(22, 108, 206);
            }
          }
  
          &:nth-child(2) {
            animation: moveInLeft ease 2.6s;
            margin: 0 2rem 0 2rem;
  
            &:hover {
              color: rgb(235, 33, 73);
            }
          }
  
          &:nth-child(3) {
            animation: moveInLeft ease 2.7s;
  
            &:hover {
              color: rgb(28, 145, 115);
            }
          }
        }
      }
    }
  }
}
</style>