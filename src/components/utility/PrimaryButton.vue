<template>
    <div class="card btn-card">
        <button @click="onclick" class="btn-primary" role="button">
            <slot>Click Me</slot>
        </button>
    </div>
</template>

<script>

export default {
    props: {
       onclick
    }
}
</script>
<style lang="scss" scoped>
.btn-card {
    padding: 0 !important;
    margin: 0 !important;
    width: 100%;
}

/* CSS */
.btn-primary {
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #39739d;
    cursor: pointer;
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.15385;
    margin: 0;
    outline: none;
    padding: 8px .8em;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    white-space: nowrap;
    width: 100%;

    &:hover,
    &:focus {
        background-color: #b3d3ea;
        color: #2c5777;
        box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
    }

    &:active {
        background-color: #a0c7e4;
        box-shadow: none;
        color: #2c5777;
    }
}
</style>