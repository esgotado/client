<template lang="pug">
    .efield--cnt(:style='containerStyle')
        .icon
            i(:class='iconClass')
        .field
            input(:placeholder='placeholder' :type='type')

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
        type: String,
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

</style>
