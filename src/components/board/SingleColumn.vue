<template>
    <div class="single-column">
        <div class="list">
            <h2>{{ column.title }}</h2>
            <single-card  v-for="card in cards" :key="card.id" :card="card" />
            <add-card @store-card="storeCard"/>

        </div>
    </div>
</template>

<script>
import SingleCard from './SingleCard.vue'
import AddCard from './AddCard.vue';
export default {
    components: {
        SingleCard,
        AddCard
    },
    props: {
        column: {},
        cards: []
    },
    name: 'SingleColumn',
    methods: {
        storeCard(dat) {
            this.$emit('store-card', { ...dat, slug: this.column.slug })
        }
    }
}
</script>