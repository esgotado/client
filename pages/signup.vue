<template lang="pug">
    div
        .proceed(v-if='signupDone')
            .text Obrigado por se registrar!
            e-button.button(color='primary' :click='routeLogin') Ir para Login
        .login-form(v-else :class='{"e-loading": loading}')
            .greeting vire nosso contatinho
            .fields
                e-field.field(
                    placeholder='nome' 
                    :fontSize='mobile ? 12 : 15' 
                    type='text'
                    v-model='name'
                    :variation='errorField == "name" ? "invalid" : ""'
                    icon-name='user' 
                )
                e-field.field(
                    placeholder='email' 
                    :fontSize='mobile ? 12 : 15' 
                    type='email'
                    v-model='email'
                    :variation='errorField == "email" ? "invalid" : ""'
                    icon-name='envelope' 
                )
                e-field.field(
                    placeholder='senha' 
                    :variation='errorField == "pwd" ? "invalid" : ""'
                    v-model='pwd'
                    :fontSize='mobile ? 12 : 15' 
                    type='password' icon-name='key' 
                )
                e-field.field(
                    placeholder='senha de novo' 
                    :variation='errorField == "pwdConf" ? "invalid" : ""'
                    v-model='pwdConf' 
                    :fontSize='mobile ? 12 : 15' 
                    type='password' 
                    icon-name='key' 
                )
                e-dropdown.field(
                    :options='collegeOptions',
                    :fontSize='mobile ? 12 : 15' 
                    :variation='errorField == "college" ? "invalid" : ""'
                    icon-name='university'
                    v-model='college'
                    placeholder='faculdade'
                )
                e-button.field(
                    color='primary'
                    :click='verifyFields'
                ) Cadastrar
                .message.field(v-if='errorMessage') {{ errorMessage }}
            .link(
                v-touch='routeLanding'
            ) Voltar

</template>

<script>
import EButton from '~/components/EButton.vue'
import EField from '~/components/EField.vue'
import EDropDown from '~/components/EDropDown.vue'
import User from '~/api/user'
import _ from 'lodash'

export default {
    components: {
        'e-button': EButton,
        'e-field': EField,
        'e-dropdown': EDropDown,
    },
    data() {
        return {
            innerWidth: 0,
            name: '',
            email: '',
            pwd: '',
            pwdConf: '',
            loading: false,
            signupDone: false,
            collegeOptions: [
                { value: 0, text: 'UFSCAR' },
                { value: 1, text: 'CAASO - USP' },
                { value: 2, text: 'IFSP' },
                { value: 3, text: 'UNICEP' },
                { value: 4, text: 'UNICAMP' },
                { value: 5, text: 'UNESP' },
                { value: 6, text: 'Outro' },
            ],
            college: -1,
            errorMessage: null,
            errorField: null,
        }
    },
    layout: 'landing',
    computed: {
        mobile() {
            return this.innerWidth <= 580
        },
        passwordsMatch() {
            return this.pwd == this.pwdConf ||
                this.pwd == '' ||
                this.pwdConf == ''
                ? {
                      error: false,
                  }
                : {
                      error: true,
                      message: 'as senhas não batem!',
                  }
        },
    },
    methods: {
        routeLanding() {
            this.$router.push('/')
        },
        routeLogin() {
            this.$router.push('/login')
        },
        verifyFields() {
            console.log('verifying')
            this.errorMessage = this.errorField = null
            if (!this.name) {
                this.errorField = 'name'
                this.errorMessage = 'preencha o nome'
                return
            }
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
            if (!this.pwdConf) {
                this.errorField = 'pwdConf'
                this.errorMessage = 'preencha a confirmação de senha'
                return
            }
            if (this.pwd != this.pwdConf) {
                this.errorField = 'pwdConf'
                this.errorMessage = 'senha e confirmação tão diferente bro'
                return
            }
            if (this.college == -1) {
                this.errorField = 'college'
                this.errorMessage = 'selecione uma faculdade'
                return
            }
            if (
                this.email.length > 255 ||
                this.pwd.length > 255 ||
                this.pwdConf.length > 255
            ) {
                this.errorMessage = 'tá de sacanagem porra?'
                return
            }
            this.signUser()
        },
        async signUser() {
            this.loading = true
            let { email, name, pwd, pwdConf, college } = this
            let user = { name, email, pass: pwd, college_id: college }
            let data = await User.index(user)
            console.log(data)
            this.loading = false
            this.signupDone = true
        },
    },
    mounted() {
        this.innerWidth = window.innerWidth
        window.onresize = e => (this.innerWidth = window.innerWidth)
    },
}
</script>

<style lang="sass" scoped>
    .proceed
        padding-bottom: 400px
        .text
            color: #FFF
            font-family: "Varela Round", sans-serif
            font-size: 24pt
            text-align: center
            margin: 30px 0
        .button
            width: 100%
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

