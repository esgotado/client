<template lang="pug">
    div
        e-button(type='block' color='#3da4ff') Entre com facebook
        .or ou
        e-button(type='block') Cadastro meio chato
        .login
            .text Já possui uma conta?
            .link(v-touch='routeLogin') Login
</template>

<script>
import EButton from '~/components/EButton.vue'

export default {
    components: {
        'e-button': EButton,
    },
    data() {
        return {}
    },
    layout: 'landing',
    computed: {},
    methods: {
        routeLogin() {
            this.$router.push('/login')
        },
    },
}
</script>

<style lang="sass" scoped>
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
</style>

