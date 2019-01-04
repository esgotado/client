<template lang="pug">
    main#landing-page
        .dimmer(:class="{'onAction' : page != 'index'}")
        .logo
            img(src='~/assets/imgs/logo_holo.png')
        .actions
            nuxt
            

</template>

<script>
export default {
    computed: {
        page() {
            return this.$route.name
        },
    },
}
</script>

<style lang="sass">
    body
        padding: 0
    .page-transition-enter-active, .page-transition-leave-active
        transition: all .5s
    
    #landing-page
        position: fixed
        top: 0
        bottom: 0
        right: 0
        left: 0
        background: url(../assets/imgs/bg.jpg)
        .dimmer
            @extend #landing-page
            background: #2c2c2c
            opacity: .85
            transition: .5s ease
            z-index: -1
            &.onAction
                opacity: .96
        .logo
            padding: 60px
            img
                transition: .5s ease
                display: block
                margin: 0 auto
                width: 400px
        .actions
            position: fixed
            bottom: 0
            right: 34vw
            left: 34vw
            min-height: 300px

    @media(max-width: 1010px)
        #landing-page .actions
            left: 20vw
            right: 20vw

    @media(max-width: 550px)
        #landing-page 
            .logo
                img
                    width: 240px
            .actions
                left: 5vw
                right: 5vw
                min-height: 0

    
    .page-enter-active, .page-leave-active
        transition: all .5s
        transform: scale(1)
    .page-enter, .page-leave-active
        opacity: 0
        transfom: translate(100%)    
</style>

