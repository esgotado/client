<template lang="pug">
    .e-check-box--cnt(:style='containerStyle')
        .box(:style='boxStyle' :class='{boxActive}' v-touch='toggle')
        .label(:style='labelStyle')
            slot    
</template>

<script>
export default {
    data() {
        return {
            boxActive: false,
        }
    },
    props: {
        boxSize: {
            type: String,
            default: '40',
        },
        width: {
            type: String,
        },
        fontSize: {
            type: Number,
            default: 15,
        },
        value: Boolean,
    },
    computed: {
        boxStyle() {
            return { width: `${this.boxSize}px`, height: `${this.boxSize}px` }
        },
        labelStyle() {
            return {
                fontSize: this.fontSize + 'pt',
            }
        },
        containerStyle() {
            let style = {}
            if (this.width) style.width = this.width
            return style
        },
    },
    methods: {
        toggle() {
            this.boxActive = !this.boxActive
            this.$emit('input', this.boxActive)
        },
    },
}
</script>

<style lang="sass" scoped>
    .e-check-box--cnt
        .box
            display: inline-block
            border: 3px solid #FF6D37
            vertical-align: middle
            margin-right: 20px
            border-radius: 10px
            cursor: pointer
            transition: .4s ease
            &:hover
                border-color: #FF8D57
            &.boxActive
                display: inline-block
                background: #FF6D37
                &:hover
                    background: #FF8D57
                    border-color: #FF8D57
                    
        .label
            vertical-align: middle
            display: inline-block
            color: #FFF
            font-size: 14pt
            font-family: "Varela Round", sans-serif

</style>
