<template>
  <div id="app">
    <keep-alive>
      <Nav v-if="$route.meta.keepAlive"></Nav>
    </keep-alive>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav'

export default {
  components: {
    Nav
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f8f8f8;
  padding-bottom: 15px;
}

</style>
