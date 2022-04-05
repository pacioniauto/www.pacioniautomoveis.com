<template>
  <section>
    <div class="breve">em breve</div>
  </section>
</template>

<style lang="scss">
.breve {
  height: 300px;
  font-family: $ff-primary;
  font-size: 4rem;
  margin: 10rem;
  color: $primary;
  text-align: center;
}
</style>

<script>
export default {
  head: {
    title: 'Blog',
    meta: [
      {
        hid: 'Blog',
        name: 'description',
        content: 'Artigos sobre automobilismo'
      }
    ],
  },

  async asyncData({ $content }) {
    const artigos = await $content("artigos").fetch();

    return {
      artigos,
    };
  },
};
</script>