<template>
    <section class="move-preview flex column">
        <p class="move-to">To {{move.to}}</p>
        <p class="move-amount">₿ {{move.amount}} | <span>${{amountSent}}</span></p>
        <p class="move-status">status: <span>approved</span></p>
        <p class="move-date">{{move.date}}</p>
    </section>
</template>

<script>
import { utilService } from '../services/util.service'
export default {
    props: {
        move: Object,
        currBtcPrice: Number
    },
    computed: {
        amountSent() {
            return utilService.numberWithCommas(this.move.amount * this.currBtcPrice)
        }
    }
}
</script>

<style>

</style>