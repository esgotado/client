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
    @import url('https://fonts.googleapis.com/css?family=Varela+Round|Montserrat')
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
                display: block
                margin: 0 auto
                width: 400px
        .actions
            position: fixed
            bottom: 0
            right: 34vw
            left: 34vw
            min-height: 400px
            .or, .login .text, .login .link
                font-family: "Varela Round", sans-serif
                color: #FFF
                text-align: center
                font-size: 24pt
                margin: 40px 0
            .login
                text-transform: uppercase
                text-align: center
                .text
                    font-size: 12pt
                    margin: 50px
                    margin-bottom: 0
                .link
                    color: #FF6D37
                    width: 60px
                    margin: 10px
                    margin-bottom: 60px
                    font-size: 12pt
                    cursor: pointer
                    padding: 0 10px
                    border-bottom: 2px solid transparent
                    transition: .5s ease
                    display: inline-block
                    &:hover
                        transition: .5s ease
                        opacity: .7
                        padding: 0 40px
                        border-color: #FF6D3755
    .page-enter-active, .page-leave-active
        transition: all .5s
        transform: scale(1)
    .page-enter, .page-leave-active
        opacity: 0
        transfom: translate(100%)    
</style>

