<template>
  <div id="app">
    <div class="header fixed-top">
      <div class="criacao-eventos">
        <b-button @click="redirect('/eventos')">eventos</b-button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    redirect(route) {
      this.$router.push(route || '/').catch(e => e).then(() => {
        this.$router.go();
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  background-color: gray;
}
</style>
