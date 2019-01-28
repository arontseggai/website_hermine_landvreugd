module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hermine Landvreugd, kinderboeken',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Dit is de website van Hermine Landvreugd. Zij is een schrijfster van kinderboeken uit Amsterdam Noord.' },
      { name: 'keywords', content: 'hermine, landvreugd, kinderboeken, kalle, amsterdam, noord, harmonie, killercactus, varken, boek, boeken, shamrock, willem, weerwolf, vpro, cinekid, monster, kinderboek' },
      { name: 'author', content: 'aron tseggai'},
      { name: 'robots', content: 'index, follow'},
      { name: 'revisit-after', content: '3 month'},
      { name: 'msapplication-TileColor', content: '#F8AC2A' },
      { name: 'msapplication-TileImage', content: '/ms-icon-310x310.png' },
      { name: 'theme-color', content: '#F8AC2A' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', size: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'icon', type: 'image/png', size: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'icon', type: 'image/png', size: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'icon', type: 'image/png', size: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'icon', type: 'image/png', size: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'icon', type: 'image/png', size: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'icon', type: 'image/png', size: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'icon', type: 'image/png', size: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'icon', type: 'image/png', size: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', integrity:'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/', crossorigin:'anonymous'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  env: {
    googleSheetIdImages: '1IR0mZSCXArgoDi6DuxkxDqZmJ0V2Vw5PrZ-lHL_jjZU',
    googleSheetIdVideos: '1gI8E0UuvyIb6Vjn_kt0UTxU8AwsO3X1B7thqAtG4fAU',
    googleApiKey: 'AIzaSyBrVyof1yBfSZqh16sf3FMuBptdbUmqnww',
  },
  plugins: [
    '~/plugins/youtube',
    '~/plugins/masonry'
  ],
  /*
  ** Add css
  */
  css: [
    'bulma/css/bulma.css',
    "~/assets/css/styles.css"
  ],
  // router: { base: '/papimikeydinero/' },
  router: {
    ...(process.env.NODE_ENV !== 'PRODUCTION' ? {base: ''} : {base: ''})
   },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vue-youtube-embed'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
