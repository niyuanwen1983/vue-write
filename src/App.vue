<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './components/Tab.vue'

  export default {
    name: 'app',
    components: {
      Tab
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0
  }

  ul li {
    list-style: none
  }

  a {
    text-decoration: none;
    color: #3392e6
  }
</style>
