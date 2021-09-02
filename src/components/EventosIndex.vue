<template>
  <div>
    <b-container>
      <b-col>
        <label>Eventos UFFS</label>
      </b-col>
      
      <b-col>
        <b-button @click="novoEvento">+ Criar evento</b-button>
      </b-col>

      <ul>
        <label>Eventos existentes</label>
        <li v-for="e, i in eventos" v-bind:key="i">
          {{e.nome}} -> {{e.data}}
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
  import http from '@/services/http.js'

  export default {
    name: 'EventosIndex',

    props: [],

    data() {
      return {
        eventos: [
           {nome: 'tabajara', data: '15/05/1998'},
           {nome: 'showpanas', data: '15/05/2021'},
        ]
      };
    },

    methods: {
      novoEvento() {
        this.$router.push('/eventos/new').catch(e => e).then(() => {
          this.$router.go()
        })
      }
    },

    mounted() {
      http.get('/eventos')
    },
  };
</script>

<style scoped>
  body {
    background-color: pink;
  }
</style>