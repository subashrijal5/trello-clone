<template>
    <modal :width="800" :height="400"  class="modal" :adaptive="true" :name="name">
        <button class="close-button" @click="closeModal">X</button>
        <div class="modal-body">
            <slot></slot>
        </div>
    </modal>
</template>

<script>
export default {
    name: 'CardModal',
    props: {
        name: {
            type: String,
            default: 'unnamed'
        }
    },
    methods: {
        closeModal() {
            this.$modal.hide(this.name)
        }
    }

}
</script>


<style lang="scss">
.modal {
    position: relative;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    .modal-body {
        padding-top: 1rem;
    }

    .close-button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;

        &:hover {
            color: #f00;
        }
    }

    @media (max-width: 768px) {
        .modal {
            width: 90%;
        }
    }
}
</style>