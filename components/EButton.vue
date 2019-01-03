<template lang="pug">
    button(
        :class='typeClasses'
        :style='inlineStyle'
        v-touch='click'
    )
        slot
</template>

<script>
import ColorMap from '~/assets/colorMap'

export default {
    props: {
        type: String,
        color: String,
        click: Function,
        width: { type: String, default: '200px' },
    },
    methods: {},
    transition: 'page-transition',
    computed: {
        typeClasses() {
            let classes = {}
            if (this.type)
                for (let type of this.type.split(' '))
                    classes[`e-button--${type}`] = true
            return classes
        },
        inlineStyle() {
            let style = {}
            let color = this.mappedColor
            if (color) {
                style.color = color
                style.borderColor = color
            }
            if (this.width && !this.typeClasses['e-button--block'])
                style.width = this.width
            else if (this.typeClasses['e-button--block']) style.width = '100%'
            return style
        },
        mappedColor() {
            return ColorMap[this.color] || this.color
        },
    },
}
</script>

<style lang="sass" scoped>
    button
        padding: 1.4em 4em
        border: 2px solid #FFF
        color: #FFF
        border-radius: 50px
        font-family: "Varela Round", sans-serif
        text-transform: uppercase
        background: transparent
        font-size: 12pt
        cursor: pointer
        outline: none
        transition: .5s ease
        display: block
        &:hover
            transform: scale(1.2)
    .e-button--block
        display: block
        width: 100%
</style>
