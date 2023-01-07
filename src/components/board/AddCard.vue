<template>
    <div>
        <div class="card" v-if="isAddingNew">
            <primary-input :value="title" @input="handleSetTitle" />
            <primary-button :onclick="storeCard">Save</primary-button>
        </div>
        <primary-button :onclick="addCard" v-else>Add Card</primary-button>
    </div>
</template>
<script>
import PrimaryButton from '../utility/PrimaryButton.vue';
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
        addCard() {
            this.isAddingNew = true
        },
        storeCard() {
            this.$emit('store-card',{title: this.title,  description: ''})
            this.isAddingNew = false
            this.title = '' 
        },
        handleSetTitle(val){
            this.title = val
        }
    }

}
</script>