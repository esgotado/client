<template lang="pug">
    div
        .login-form
            .greeting oi sumido rs
            .fields
                e-field.field(placeholder='email' type='email' icon-name='envelope' width='500px')
                e-field.field(placeholder='senha' type='password' icon-name='key' width='500px')
                e-checkbox.field(width='500px' boxSize=30) Manter-se logado
                e-button.field(width='500px' color='primary') Login
            .link(v-touch='routeLanding') Voltar

</template>

<script>
import ECheckBox from '~/components/ECheckBox.vue'
import EButton from '~/components/EButton.vue'
import EField from '~/components/EField.vue'

export default {
    components: {
        'e-button': EButton,
        'e-checkbox': ECheckBox,
        'e-field': EField,
    },
    data() {
        return {}
    },
    layout: 'landing',
    computed: {},
    methods: {
        routeLanding() {
            this.$router.push('/')
        },
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
            // text-align: center
            margin-bottom: 40px
        .fields
            .field
                margin: 30px auto
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
</style>

