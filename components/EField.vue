<template lang="pug">
    .efield--cnt(:style='containerStyle' :class='containerClasses')
        .icon
            i(:class='iconClass')
        .field
            input(
                :placeholder='placeholder'
                v-bind:value='value'
                v-on:input='$emit("input", $event.target.value)'
                :style='fieldStyle'
                :type='type'
                )
            .message(
                v-if='validation && validation.error'
            ) {{ validation ? validation.message : '' }}


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
        fontSize: {
            type: Number,
            default: 15,
        },
        type: String,
        variation: String,
        validation: Object,
        value: String,
    },
    computed: {
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
    .efield--cnt
        position: relative
        display: block
        .icon
            transition: .5s ease
            position: absolute
            color: rgba(255, 255, 255, .3)
            top: 12px
            font-size: 15pt
        .field 
            width: 100%
            input
                transition: .5s ease
                background: transparent
                border: 0
                width: 100%
                padding: 10px 30px
                border-bottom: 2px solid rgba(255, 255, 255, .3)
                display: block
                color: rgba(255, 255, 255, .3)
                outline: none
                font-size: 15pt
                box-sizing: border-box
                font-family: "Montserrat", sans-serif
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
    .message-enter-active, .message-leave-active
        transition: all .5s ease
        transform: translateY(0px)
        opacity: 1
    .message-enter, .message-leave-active
        transform: translate(0)
        opacity: 0    


</style>
