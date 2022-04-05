export default {
  target: 'static',
  components: {
    dirs: [
      '~/components',
      '~/components/icons'
    ]
  },

  buildModules: [
    '@nuxt/content',
    '@nuxt/image'
  ],
    
  head: {
    title: 'Pacioni Automóveis',
    titleTemplate: 'Veículos seminovos em Indaiatuba - SP | %s',
    htmlAttrs: {
      lang: 'pt-br',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "facebook-domain-verification", content: "n93c11cn4gzfp8znqobjw75actvnej"},
      {
        hid: 'pacioni',
        name: 'description',
        content: 'Seminovos em Indaiatuba - São Paulo'
      }
    ],

    link: [
      {
        rel: 'icon', type: 'image/png', sizes: '32x32',
        href: '/img/favicon.png'
      },
      {
        rel: 'icon', type: 'image/png', sizes: '16x16',
        href: '/img/favicon.png'
      },
      {
        rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180',
        href: '/img/favicon.png'
      }
    ]
  },

  script: [      
    {src:'pixel.js', type: 'text/javascript'}
  ],

  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/scss/main.scss']
  }
}