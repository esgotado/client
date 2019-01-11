<template lang="pug">
    .edropdown--cnt(:style='containerStyle' :class='containerClasses')
        .icon
            i(:class='iconClass')
        .field(@click='toggle' :style='fieldStyle')
            .option {{ selectedOption.text }}
            .icon
                i(class='fas fa-chevron-down')
            .message(
                v-if='validation && validation.error'
            ) {{ validation ? validation.message : '' }}
        transition(name='options')
            .options(v-if='open')
                .opt-dimmer(v-touch='close')
                .list
                    .option(
                        v-for='(option, index) in options'
                        @click='setOption(index)'
                        :key='index'
                    ) {{ option.text }}


</template>

<script>
export default {
    props: {
        iconName: String,
        iconType: {
            type: String,
            default: 'solid',
        },
        placeholder: String,
        width: {
            type: String,
        },
        options: Array,
        selected: Object,
        fontSize: {
            type: Number,
            default: 15,
        },
        type: String,
        variation: String,
        validation: Object,
        value: Number,
    },
    data() {
        return {
            currentOption: -1,
            open: false,
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        },
        close() {
            this.open = false
        },
        setOption(index) {
            this.currentOption = index
            this.$emit('input', this.options[index].value)
            this.close()
        },
    },
    computed: {
        selectedOption() {
            if (this.currentOption >= 0) return this.options[this.currentOption]
            return this.selected || { text: this.placeholder }
        },
        iconClass() {
            let classes = {}
            if (this.iconName && this.iconType) {
                classes[`fa${this.iconType[0]}`] = true
                classes[`fa-${this.iconName}`] = true
            }
            return classes
        },
        variations() {
            let vars = []
            if (this.variation) vars = this.variation.split(' ')
            if (this.validation && this.validation.error) vars.push('invalid')
            return vars
        },
        fieldStyle() {
            return {
                fontSize: this.fontSize + 'pt',
            }
        },
        containerClasses() {
            let classes = {}
            for (let type of this.variations) classes[type] = true
            return classes
        },
        containerStyle() {
            let style = {}
            if (this.width) style.width = this.width
            return style
        },
    },
}
</script>

<style lang="sass" scoped>
    .edropdown--cnt
        position: relative
        display: block
        cursor: pointer
        .icon
            transition: .5s ease
            position: absolute
            color: rgba(255, 255, 255, .3)
            top: 12px
            font-size: 15pt
        .field 
            width: 100%
            border-bottom: 2px solid rgba(255, 255, 255, .3)
            // border-radius: 15px
            padding: 10px 30px
            box-sizing: border-box
            font-size: 15pt
            color: rgba(#FFF,.3)
            font-family: "Montserrat", sans-serif
            .icon
                transition: .5s ease
                position: absolute
                color: rgba(255, 255, 255, .3)
                top: 12px
                right: 15px
                font-size: 15pt
        &:focus-within
            transition: .5s ease
            .icon
                color: #FFFFFFCC
            .field input
                border-color: #FFFFFFCC
                color: #FFFFFFCC
        &.invalid
            $color: #ffdc73
            .icon
                color: rgba($color, .3)
            .field input
                border-color: rgba($color, .3)
                color: rgba($color, .3)
                &::-webkit-input-placeholder
                    color: rgba($color, .3)
            &:focus-within
                .icon
                    color: $color
                .field input
                    border-color: $color
                    color: $color
        .message
            font-family: "Montserrat", sans-serif
            border: 2px solid #ffdc73
            color: #ffdc73
            margin-top: 10px
            box-sizing: border-box
            border-radius: 10px
            font-size: 12pt
            padding: 1em 1.5em
        .options
            .opt-dimmer
                position: fixed
                top: 0
                bottom: 0
                left: 0
                right: 0
                background: #11111199
                z-index: 3
            .list
                position: fixed
                width: 50%
                height: 60%
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
                background: #fff
                z-index: 4
                box-shadow: 0 0 10px #11111166
                overflow-y: scroll
                &::-webkit-scrollbar
                    width: 4px
                &::-webkit-scrollbar-track
                    background: #FF6D3788
                &::-webkit-scrollbar-thumb
                    background: #FF6D37



                .option
                    font-family: 'Montserrat', sans-serif
                    display: block
                    font-size: 12pt
                    padding: 1.5em
                    border-bottom: 1px solid #ddd
                    text-align: center
                    color: #888
                    font-weight: 700
                    &:last-of-type
                        border: 0
                    &:hover
                        color: #000                 
                
    @media (max-width:580px)
        .edropdown--cnt .options .list
            width: 80%
    .message-enter-active, .message-leave-active
        transition: all .5s ease
        transform: translateY(0px)
        opacity: 1
    .message-enter, .message-leave-active
        transform: translate(0)
        opacity: 0    
    .options-enter-active
        animation: fadeIn .5s ease
    .options-leave-active
        animation: fadeOut .5s ease

    @keyframes fadeIn
        from
            opacity: 0
        to
            opacity: 1

    
    @keyframes fadeOut
        from
            opacity: 1
        to
            opacity: 0
</style>
