<template>
  <div>
    <div class="section">
      <h1>{{ artigos.titulo }}</h1>
      <h2>{{ artigos.subtitulo }}</h2>
      <nuxt-content :document="artigos" />
    </div>
  </div>
</template>

<style lang="scss">

.nuxt-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

<script>
export default {
  async asyncData({ $content, params }) {
    const artigos = await $content('artigos', params.slug).fetch();

    return {
      message: '',  
      artigos,
    };
  },
};
</script>