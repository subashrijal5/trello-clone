<template>
    <button @click="exportDb" class="floating-button">Export DB</button>
</template>
<script>
export default {
    methods:{
        exportDb(){
            window.open(process.env.VUE_APP_API_BASE_URL + '/export-db?access_token='+ process.env.VUE_APP_ACCESS_TOKEN, '_blank')
        }
    }
}
</script>
<style lang="scss">
.floating-button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background: #0079bf;
    color: #fff;
    border: none;
    border-radius: 50%;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        background: #4dabf7;
    }
}
</style>