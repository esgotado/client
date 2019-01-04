<template lang="pug">
    div
        .login-form
            .greeting {{ randomGreeting }}
            .fields
                e-field.field(placeholder='email' :fontSize='mobile ? 12 : 15' type='email' icon-name='envelope' )
                e-field.field(placeholder='senha' :fontSize='mobile ? 12 : 15' type='password' icon-name='key' )
                e-checkbox.field(:boxSize='mobile ? 20 : 30' :fontSize='mobile ? 12 : 15') Manter-se logado
                e-button.field(color='primary') Login
            .link(v-touch='routeLanding') Voltar

</template>

<script>
import ECheckBox from '~/components/ECheckBox.vue'
import EButton from '~/components/EButton.vue'
import EField from '~/components/EField.vue'
import greetings from '~/assets/greetings'
import _ from 'lodash'

export default {
    components: {
        'e-button': EButton,
        'e-checkbox': ECheckBox,
        'e-field': EField,
    },
    data() {
        return {
            innerWidth: 0,
        }
    },
    layout: 'landing',
    computed: {
        randomGreeting() {
            return _.sample(greetings)
        },
        mobile() {
            return this.innerWidth <= 580
        },
    },
    methods: {
        routeLanding() {
            this.$router.push('/')
        },
    },
    mounted() {
        this.innerWidth = window.innerWidth
        window.onresize = e => (this.innerWidth = window.innerWidth)
    },
}
</script>

<style lang="sass" scoped>
    .login-form
        margin-bottom: 140px
        .greeting
            font-family: "Varela Round", sans-serif
            font-size: 24pt
            color: #FFF
            width: 500px
            margin: 0 auto
            text-align: center
            margin-bottom: 40px
        .fields
            .field
                margin: 30px auto
                width: 500px
        .link
            color: #FFFFFFAA
            width: 80px
            margin: 10px
            position: absolute
            margin-bottom: 60px
            font-size: 12pt
            opacity: .4
            cursor: pointer
            text-align: center
            font-family: "Varela Round", sans-serif
            padding: 0 10px
            border-bottom: 2px solid #FFFFFF66
            transition: .5s ease
            display: inline-block
            left: 50%
            transform: translateX(-50%)
            &:hover
                transition: .5s ease
                padding: 0 40px
                opacity: 1
                border-color: #FF6D3755
                color: #FFFFFFCC
    @media(max-width: 560px)
        .login-form
            .greeting, .fields .field
                width: 300px
            .greeting
                font-size: 15pt
            .fields .field
                font-size: 9pt
</style>

