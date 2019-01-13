<template lang="pug">
    div
        .login-form
            .greeting {{ randomGreeting }}
            .fields(:class='{"e-loading": loading}')
                e-field.field(
                    placeholder='email' 
                    v-model='email' 
                    :fontSize='mobile ? 12 : 15' 
                    type='email' 
                    icon-name='envelope'
                    :variation='errorField == "email" ? "invalid" : ""' 
                )
                e-field.field(
                    placeholder='senha'
                    v-model='pwd' 
                    :fontSize='mobile ? 12 : 15' 
                    type='password' 
                    :variation='errorField == "pwd" ? "invalid" : ""' 
                    icon-name='key'
                    :enter='verifyFields'
                )
                e-checkbox.field(
                    :boxSize='mobile ? "20" : "30"' 
                    v-model='keep' 
                    :fontSize='mobile ? 12 : 15'
                ) Manter-se logado
                e-button.field(
                    color='primary' 
                    :click='verifyFields'
                ) Login
                .message.field(v-if='errorMessage') {{ errorMessage }}
            .link(v-touch='routeLanding') Voltar

</template>

<script>
import ECheckBox from '~/components/ECheckBox.vue'
import EButton from '~/components/EButton.vue'
import EField from '~/components/EField.vue'
import greetings from '~/assets/greetings'
import _ from 'lodash'
import User from '~/api/user'

export default {
    components: {
        'e-button': EButton,
        'e-checkbox': ECheckBox,
        'e-field': EField,
    },
    data() {
        return {
            innerWidth: 0,
            errorMessage: null,
            errorField: null,
            email: '',
            pwd: '',
            keep: false,
            loading: false,
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
        verifyFields() {
            this.errorMessage = null
            this.errorField = null

            if (!this.email) {
                this.errorField = 'email'
                this.errorMessage = 'preencha o email'
                return
            }
            if (!this.email.match(/.+@.+\..+/)) {
                this.errorField = 'email'
                this.errorMessage = 'email inválido'
                return
            }
            if (!this.pwd) {
                this.errorField = 'pwd'
                this.errorMessage = 'preencha a senha'
                return
            }
            if (this.email.length > 255 || this.pwd.length > 255) {
                this.errorMessage = 'tá de sacanagem porra?'
                return
            }
            this.authUser()
        },

        async authUser() {
            this.loading = true
            let { email, pwd: pass } = this
            let { data, token } = await User.auth({ email, pass })
            if (token) {
                this.$store.commit('setAuthToken', token)
                this.$router.push('/home')
            } else {
                switch (data.info) {
                    case "passwords don't match":
                        this.errorMessage = 'senha incorreta'
                        this.errorField = 'pwd'
                        break
                    case 'user not found':
                        this.errorMessage = 'usuário não encontrado'
                        this.errorField = 'email'
                        break
                }
                this.loading = false
            }
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
        padding-bottom: 160px
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
        .message
            font-family: "Varela Round", sans-serif
            color: #eee
            text-align: center
        .link
            color: #FFFFFFAA
            width: 80px
            margin: 10px
            position: absolute
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
            padding-bottom: 60px
            .greeting, .fields .field
                width: 300px
            .greeting
                font-size: 15pt
            .fields .field
                font-size: 9pt
            .link
                left: 45%
                transform: translateX(-45%)
</style>

