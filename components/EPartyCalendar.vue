<template lang="pug">
    .calendar
        .month(v-for='(month, index) in parties' :key='index')
            .label {{ month.month_name }}
            .parties
                .party(v-for='(party, index) in month.parties' :key='index')
                    .title {{ party.title }}
                    .date {{ party.date }}
</template>


<script>
import parties from '~/assets/festa_mock'
import _ from 'lodash'

export default {
    computed: {
        parties() {
            let months = [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
            ]
            return _.chain(parties)
                .map(party => ({
                    ...party,
                    month_name:
                        months[parseInt(party.date.match(/\d+\/(\d+)/)[1]) - 1],
                }))
                .groupBy('month_name')
                .map((parties, month_name) => ({ parties, month_name }))
                .value()
        },
    },
}
</script>


<style lang="sass" scoped>
    .calendar
        .month
            font-family: "Varela Round", sans-serif
            color: #FFF
            .label
                margin: .5em 1em
                font-size: 16pt
                font-weight: 700
            .parties .party
                margin: 1em
                padding: 1em
                border-radius: 10px
                position: relative
                background: linear-gradient(170deg, rgba($primary, .4), #2c2c2c)
                .date
                    position: absolute
                    $padding: 10px
                    top: $padding
                    background: linear-gradient(170deg, rgba($primary, .4), #2c2c2c)
                    bottom: $padding
                    padding: .5em
                    border-radius: 10px
                    right: $padding

</style>
