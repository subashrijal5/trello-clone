<template>
    <main>
        <div class="board">
            <SingleColumn v-for="column in columnsData" :key="column.slug" :column="column" :cards="column.cards"
                @store-card="onstore" />
            <add-column @store-column="storeColumn" />
        </div>
    </main>
</template>
<script>
import AddColumn from './board/AddColumn.vue';
import SingleColumn from './board/SingleColumn.vue';
export default {
    name: "TrelloBoard",
    components: {
        SingleColumn,
        AddColumn
    },
    data() {
        return {
            columnsData: [
                {
                    title: 'Col 1',
                    slug: 'col-1',
                    cards: [{
                        id: 1,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 2,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 3,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 4,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    ]
                },
                {
                    title: 'Col 2',
                    slug: 'col-2',
                    cards: [{
                        id: 5,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 6,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 7,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 8,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    ]
                },
                {
                    title: 'Col 3',
                    slug: 'col-3',
                    cards: [{
                        id: 1,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 2,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 3,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 4,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    ]
                },
                {
                    title: 'Col 4',
                    slug: 'col-4',
                    cards: [{
                        id: 1,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 6,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 9,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    {
                        id: 10,
                        title: 'Card 1',
                        description: 'lorem ipsumm  sfsdzfs dc '
                    },
                    ]
                },
            ]
        }
    },
    methods: {
        onstore(dat) {
            let cardcol = this.columnsData.find((col) => col.slug == dat.slug)
            cardcol.cards.push(dat)

        },
        storeColumn(col){
            this.columnsData.push(col)
        }
    }
}
</script>
<style lang="scss">
// Style the main element
main {
    padding: 10px;
    overflow-x: scroll;

    .board {
        display: flex;
        width: 100%;
        flex-wrap: nowrap;

        .single-column {
            border: 2px solid #172B4D;
            border-radius: 10px;
            margin: 10px;
            overflow: hidden;
            width: 100%;
            flex: 0 0 20em;
        }

        // Style the list elements
        .list {
            padding: 10px;
            background-color: white;
            height: 85vh;
            overflow-y: scroll;
            flex: 0 0 20em;

            // Style the h2 element in the list
            h2 {
                margin: 0;
                color: #172B4D;
            }

            // Style the card elements in the list
            .card {
                padding: 10px;
                border: 1px solid #CDDDF9;
                background-color: white;
                margin: 10px;
                cursor: pointer;

                &:hover {
                    background-color: #F3F3F3;
                }
            }
        }
    }
}
</style>