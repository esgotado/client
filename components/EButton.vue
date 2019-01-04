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
        color: { type: String, default: 'primary' },
        click: Function,
        width: { type: String },
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
                style['--color'] = color
                style.borderColor = 'var(--color)'
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
        padding: 1.2em 4em
        border: 2px solid #FFF
        color: var(--color)
        border-radius: 20px
        font-family: "Varela Round", sans-serif
        font-weight: 700
        text-transform: uppercase
        background: transparent
        font-size: 12pt
        cursor: pointer
        outline: none
        transition: .5s ease
        display: block
        &:hover
            background: var(--color)
            color: #FFF
    .e-button--block
        display: block
        width: 100%
</style>
