const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description,
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '128x128',
                href: '/favicon.png',
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Varela+Round|Montserrat',
            },
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
                integrity:
                    'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',
                crossorigin: 'anonymous',
            },
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#FF6D37' },

    /*
     ** Router customization
     */
    router: {
        middleware: 'pages',
    },
    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/vue-touch-events'],

    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/pwa', 'nuxt-sass-resources-loader'],

    sassResources: ['@/assets/global.sass'],

    manifest: {
        name: 'Esgotado',
        short_name: 'Esgotado',
        background_color: '#FF6D37',
        description:
            'Encontre rolês e marque tua presença, além de concorrer a convites de graça!',
        display: 'fullscreen',
        orientation: 'portrait',
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
}
