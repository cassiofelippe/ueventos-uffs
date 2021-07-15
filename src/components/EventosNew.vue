<template>
  <div class="form">
    <h1>Novo Evento</h1>
    <b-col cols="4" class="evento-nome">
      <label for="evento-nome">Nome</label>
      <b-input id="evento-nome" v-model="evento.nome" />
    </b-col>
    <b-col cols="4" class="evento-data">
      <label for="evento-data">Data</label>
      <b-input type="date" id="evento-data" v-model="evento.data" />
    </b-col>
    <b-col cols="4" class="evento-data">
      <b-button @click="criar">criar</b-button>
    </b-col>
  </div>  
</template>

<script>
  export default {
    name: 'EventosIndex',

    props: [],

    data() {
      return {
        evento: {
          nome: '',
          data: ''
        }
      };
    },

    methods: {
      criar() {
        console.log('evento criado', this.evento.nome, this.evento.data)
        alert('evento criado ' + this.evento.nome + ' - ' + this.evento.data)
      }
    },

    mounted() {},
  };
</script>

<style scoped>
</style>