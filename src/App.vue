<template>
  <div>
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav/Nav';
export default {
  name: 'App',
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
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style: none;
}
li {
  color: black;
  text-decoration: none;
}
a {
  color: black;
  text-decoration: none;
}
</style>
