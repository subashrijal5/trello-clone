<template>
  <div id="app">
    <HeaderNav />
    <TrelloBoard />
  </div>
</template>

<script>
import TrelloBoard from './components/TrelloBoard.vue';
import HeaderNav from './components/HeaderNav.vue';

export default {
  name: 'App',
  components: {
    TrelloBoard,
    HeaderNav
  }
}
</script>

<style lang="scss">
body {
  margin: 0 !important;
}
</style>
