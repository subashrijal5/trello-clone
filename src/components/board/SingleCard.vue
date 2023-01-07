<template>
    <div @click="openModal">
        <div class="card">{{ card.title }}</div>
        <card-modal :name="'modal_' + card.id">
            <div class="detail-task-modal">
                <div class="modal-header" v-if="!isEditing">
                    <h2 class="modal-title">{{ card.title }}</h2>
                    <button class="edit-button" @click="isEditing = true">Edit</button>
                </div>
                <div class="modal-body">
                    <p v-if="!isEditing" class="modal-description">{{ card.description }}</p>
                    <form v-if="isEditing" @submit.prevent="handleUpdate">
                        <input type="text" v-model="cardData.title" placeholder="Title">
                        <textarea v-model="cardData.description" placeholder="Description"></textarea>
                        <div class="button-container">
                            <button type="submit">Save</button>
                            <button type="button" @click="isEditing = false">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </card-modal>
    </div>
</template>

<script>
import CardModal from './CardModal.vue'
export default {
    data() {
        return {
            isEditing: false,
            cardData: {
                id: null,
                title: '',
                description: ''
            }
        }
    },
    components: { CardModal },
    props: {
        card: {}
    },
    mounted() {
        this.cardData = this.card
    },
    methods: {
        openModal() {
            this.$modal.show('modal_' + this.card.id)
        },
        handleUpdate() {
            this.$emit('update-card', { ...this.cardData })
            this.isEditing = false
        },
    }
}
</script>

<style lang="scss">
.detail-task-modal {
    padding: 20px;

    .modal-header {
        display: flex;
        align-items: center;
        // justify-content: space-between;

        .modal-title {
            font-size: 1.2rem;
            font-weight: bold;
        }

        .edit-button {
            background: none;
            border: none;
            font-size: 1rem;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .modal-body {
        .modal-description {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            overflow-y: overlay;
            max-height: 40vh;
        }

        form {
            display: flex;
            flex-direction: column;

            input,
            textarea {
                padding: 0.5rem;
                margin-bottom: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }

            textarea {
               height: 10rem;
            }

            .button-container {
                display: flex;

                button {
                    background: #0079bf;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    padding: 0.75rem 1rem;
                    cursor: pointer;

                    &:hover {
                        background: #4dabf7;
                    }

                    &[type="submit"] {
                        margin-right: 0.5rem;
                    }
                }
            }

        }
    }
}
</style>