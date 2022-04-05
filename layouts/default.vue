<template>
  <div>
    <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=339329624597662&ev=PageView&noscript=1"/>
    <div class="logo">
      <nuxt-link to="/"><logo /></nuxt-link>
    </div>
    <div class="navigation container">
      <a class="icon" @click.stop="showNav = !showNav">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 12 12"><g transform="translate(0, 0)"><path d="M11,9H1a1,1,0,0,0,0,2H11a1,1,0,0,0,0-2Z" fill="fill"></path> <path d="M11,1H1A1,1,0,0,0,1,3H11a1,1,0,0,0,0-2Z" fill="fill"></path> <path d="M11,5H1A1,1,0,0,0,1,7H11a1,1,0,0,0,0-2Z" fill="fill" data-color="color-2"></path></g></svg>
      </a>
    </div>
    <NavigationMobile v-if="showNav"/>
    <Navigation />
    <Nuxt class="container"/>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.logo {
  z-index: 1;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;

  a {
    width: 10rem;
    fill: $gray-500;

    svg {
      width: 10rem;
    }
    
    &:hover {
      fill: $primary;
    }
  }
}

.navigation {
  position: relative;
  height: 10rem;

  @include sm-up {
    display: none;
  }

  .icon {
    display: block;
    margin: 2rem;
    position: absolute;
    fill: $gray-500;
    margin-top: 2rem;
    animation: moveInLeft ease 2s;
  }
}

</style>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  },
  watch: {
    $route() {
      this.showNav = false;
    }
  }
}
</script>