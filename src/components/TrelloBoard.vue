<template>
    <main>
        <div class="row">
            <div class="column">
                <label for="date-picker">Date:</label>
                <input v-model="date" type="date" id="date-picker">
            </div>
            <div class="column">
                <label for="dropdown">Status:</label>
                <select v-model="status" id="dropdown">
                    <option value="">Select one</option>
                    <option value="1">Active</option>
                    <option value="0">Deleted</option>
                </select>
            </div>
        </div>
        <div class="board">
            <SingleColumn v-for="column in columnsData" :key="column.slug" :column="column" :cards="column.tasks"
                @store-card="storeTask" @update-card="updateCard" />
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
            columnsData: [],
            date: null,
            status: null
        }
    },
    watch: {
        status: function () {
            this.getData()
        },
        date: function () {
            this.getData()
        },
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

        async updateCard(col) {
            await this.$axios.patch(`/tasks/${col.id}/update`, col).then(() => {
                this.getData()
            }).catch((e) => {
                alert(e.response.data.messsge ?? "Something went wrong, Please try again")
            })
        },

        async getData() {
            await this.$axios.get('/tasks-groups', {
                params: {
                    date: this.date,
                    status: this.status
                }
            }).then((res) => {
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
    overflow-x: overlay;

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
            overflow-y: overlay;
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
                overflow: hidden;

                &:hover {
                    background-color: #F3F3F3;
                }
            }
        }
    }

    .row {
        display: flex;
        align-items: center;
        align-items: flex-end;
        justify-content: center;

        .column {
            display: flex;
            flex-direction: column;
            margin-left: 20px;

            label {
                font-size: 1rem;
                margin-bottom: 0.5rem;
            }

            input[type="date"],
            select {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
        }
    }

}
</style>