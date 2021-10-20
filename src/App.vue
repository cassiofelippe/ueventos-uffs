<template>
  <div id="app">
    <div class="header fixed-top">
      <div class="criacao-eventos">
        <b-button @click="redirect('/eventos')">Eventos</b-button>&nbsp;
        <b-button @click="redirect('/usuarios')">Usuários</b-button>
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
}

export function parseDate(value, inverted = false) {
  let date = `${value}`.split('T')[0]
  
  if (inverted) {
    return date
  }

  let fields = date.split('-')
  return `${fields[2]}/${fields[1]}/${fields[0]}`
}
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

body {
  padding-left: 5em;
  padding-right: 5em;
}

input {
  margin-bottom: 2em;
}

label {
  font-weight: bold;
}
</style>
