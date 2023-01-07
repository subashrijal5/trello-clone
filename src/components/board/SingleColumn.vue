<template>
    <div class="single-column">
        <div class="list">
            <h2>{{ column.title }}</h2>
            <draggable @add="onAdd" v-model="cardlist" group="test"  @start="drag = true" @end="drag = false">
                <single-card v-for="card in cardlist" :key="card.id" :card="card" />
            </draggable>
            <add-card @store-card="storeCard" />

        </div>
    </div>
</template>

<script>
import SingleCard from './SingleCard.vue'
import AddCard from './AddCard.vue';
import draggable from 'vuedraggable'
export default {
    data() {
        return {
            cardlist: []
        }
    },
    components: {
        SingleCard,
        AddCard,
        draggable
    },
    props: {
        column: {},
        cards: []
    },
    created(){
        this.cardlist = this.cards
    },
    name: 'SingleColumn',
    watch: {
        cards: function (newVal) {
            this.cardlist = newVal
        }
    },
    methods: {
        storeCard(dat) {
            this.$emit('store-card', { ...dat, task_group_id: this.column.id })
        },
        onAdd(e){
            console.log(this.column, e);
        }
    },

}
</script>