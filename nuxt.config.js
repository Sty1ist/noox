
export default {
  // mode: 'spa',
  ssr: false,
  target: 'static',
  /*
  ** Headers of the page
  */
 head: {
  title: 'NODEX — Платформа нового поколения',
  htmlAttrs: {
    lang: 'ru'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'NODEX — современное цифровое решение для тех, кто ценит скорость, простоту и свободу. Запуск без барьеров.'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'NODEX — Цифровая экосистема нового уровня'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'Присоединяйтесь к NODEX — современной платформе, которая помогает быстро подключиться к глобальным возможностям.'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://nodex.world/images/logo.svg' // Заміни на актуальне зображення
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://nodex.world'
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website'
    },
    {
      hid: 'robots',
      name: 'robots',
      content: 'index, follow'
    },
    {
      hid: 'og:image:width',
      property: 'og:image:width',
      content: '1200'
    },
    {
      hid: 'og:image:height',
      property: 'og:image:height',
      content: '630'
    }
  ],
  script: [
    {
      hid: 'facebook-pixel',
      innerHTML: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1805873189972600');
        fbq('track', 'PageView');
      `,
      type: 'text/javascript',
      charset: 'utf-8'
    }
  ],
  __dangerouslyDisableSanitizersByTagID: {
    'facebook-pixel': ['innerHTML']
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://nodex.world' }
  ]
},
  // head: {
  //   title: 'Help to Leave - Отримання закордонного паспорта для українців',
  //   htmlAttrs: {
  //     lang: 'uk'
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: 'Help to Leave – сервіс, який допомагає українцям отримати закордонний паспорт швидко та без зайвих труднощів.' },
  //     { hid: 'og:title', property: 'og:title', content: 'Help to Leave – закордонний паспорт для українців' },
  //     { hid: 'og:description', property: 'og:description', content: 'Платформа Help to Leave допомагає українцям у процесі отримання закордонного паспорта. Отримайте свій документ без зайвих складнощів та стресу.' },
  //     { hid: 'og:image', property: 'og:image', content: 'https://helptoleave.com/images/poster-image-2.jpg' },
  //     { hid: 'og:url', property: 'og:url', content: 'https://helptoleave.com' },
  //     { hid: 'og:type', property: 'og:type', content: 'website' },
  //     { hid: 'robots', name: 'robots', content: 'index, follow' },
  //     { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
  //     { hid: 'og:image:height', property: 'og:image:height', content: '630' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  //     { rel: 'canonical', href: 'https://helptoleave.com' }
  //   ]
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/styles/main.css',
    '@/assets/styles/reset.css',
    'aos/dist/aos.css' 
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/aos.client.js', mode: 'client' },
    { src: '~/plugins/i18n.js', mode: 'client' },
    { src: '~/plugins/facebook-pixel.client.js', mode: 'client' },
    // { src: '~/plugins/swiper.js', mode: 'client' }
  ],

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/pwa'
  ],

  i18n: {
    locales: [
      { code: 'uk', iso: 'uk-UA', name: 'Українська' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский' }
    ],
    defaultLocale: 'uk',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'ru',
    },
  },

  pwa: {
    meta: {
      title: 'NODEX',
      author: 'NODEX Team',
      description: 'NODEX — современная цифровая платформа нового поколения для быстрых подключений, свободы и простоты.',
      theme_color: '#0f0f1a',
      ogSiteName: 'NODEX',
      ogTitle: 'NODEX — Платформа нового поколения',
      ogDescription: 'Присоединяйтесь к NODEX — цифровой экосистеме без барьеров, созданной для скорости и свободы.',
      ogImage: {
        path: 'https://nodex.world/images/logo.svg',
        width: 1200,
        height: 630,
        type: 'image/jpeg'
      }
    }
  },

  

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],


  /*
  ** Nuxt.js modules
  */

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  sitemap: {
    hostname: 'https://nodex.world',
    gzip: true, 
    routes: [
      '/'
    ]
  },
  robots: {
    UserAgent: '*',
    Disallow: process.env.NODE_ENV === 'production' ? '/admin' : '/', 
    Allow: process.env.NODE_ENV === 'production' ? '/' : ''            
  }
}
