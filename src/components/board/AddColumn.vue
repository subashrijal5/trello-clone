<template>
    <div class="list">
        <div class="single-column">
            <div class="card" v-if="isAddingNew">
                <primary-input :value="title" @input="handleSetTitle" @focusout="isAddingNew = false" />
                <primary-button :onclick="storeColumn">Save</primary-button>
            </div>
            <primary-button :onclick="addColumn" v-else>Add List</primary-button>
        </div>
    </div>
</template>

<script>
import PrimaryButton from '../utility/PrimaryButton.vue'
import PrimaryInput from '../utility/PrimaryInput.vue';
export default {
    data() {
        return {
            title: '',
            isAddingNew: false,
        }
    },
    components: { PrimaryButton, PrimaryInput },
    methods: {
        addColumn() {
            this.isAddingNew = true
        },
        storeColumn() {
            this.$emit('store-column', { title: this.title, slug: this.makeSlug(this.title), cards: [] })
            this.isAddingNew = false
            this.title = ''
        },
        handleSetTitle(val) {
            this.title = val
        },

        makeSlug(str) {
            return str
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
    }

}
</script>

<style lang="scss" scoped>
.list {
    overflow: hidden !important;

    .single-column {
        border: none !important;
        border-radius: 0;
        padding: 5px;
    }
}
</style>