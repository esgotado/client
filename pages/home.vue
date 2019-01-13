<template lang="pug">
    #home        
        .logo
            img(src='~/assets/imgs/logo_holo.png')
        eparty-calendar
</template>

<script>
import EPartyCalendar from '~/components/EPartyCalendar.vue'

export default {
    components: {
        'eparty-calendar': EPartyCalendar,
    },
    middleware: ['auth'],

    computed: {},
    methods: {},
}
</script>

<style lang="sass" scoped>
    #home
        padding: 5vh 25vw
        .logo
            padding: 60px
            img
                transition: .5s ease
                display: block
                margin: 0 auto
                width: 400px
    @media (max-width: 1050px)
        #home
            padding: 2vh 10vw
            .logo
                padding: 20px
                img
                    width: 300px
    @media (max-width: 600px)
        #home
            padding: 2vh 2vw
            .logo
                padding: 20px
                img
                    width: 200px
            .calendar
                font-size: 10pt
    
</style>


