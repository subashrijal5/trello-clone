<template>
    <main>
        <div class="board">
            <SingleColumn v-for="column in columnsData" :key="column.slug" :column="column" :cards="column.tasks"
                @store-card="storeTask" @column-update="updateColumn" />
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
        AddColumn,
    },
    created() {
        this.getData()
    },
    data() {
        return {
            columnsData: []
        }
    },
    methods: {
        async storeTask(dat) {
            await this.$axios.post('/tasks/store', { ...dat }).then(() => {
                this.getData()
            }).catch((e) => {
                alert(e.response.data.messsge ?? "Something went wrong, Please try again")
            })

        },

        async storeColumn(col) {
            await this.$axios.post('/tasks-groups/store', col).then((res) => {
                this.columnsData.push(res.data.data)
            }).catch((e) => {
                alert(e.response.data.messsge ?? "Something went wrong, Please try again")
            })
        },

        async updateColumn(col) {
            await this.$axios.patch(`/tasks/${col.id}/update`, col).then(() => {
                this.getData()
            }).catch((e) => {
                alert(e.response.data.messsge ?? "Something went wrong, Please try again")
            })
        },

        async getData() {
            this.$axios.get('/tasks-groups').then((res) => {
                this.columnsData = res.data
            }).catch((err) => {
                console.log(err);
            })
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
            max-height: 85vh;
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