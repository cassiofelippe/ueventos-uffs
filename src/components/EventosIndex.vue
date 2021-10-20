<template>
  <b-form>
    <b-container>
      <b-col cols="12" class="text-left">
        <h1>Eventos UFFS</h1>
      </b-col>

      <b-col cols="12" class="text-right">
        <b-button @click="novoEvento">Criar evento</b-button>
      </b-col>

      <b-col>&nbsp;</b-col>
      
      <b-table @row-clicked="redirect" striped hover :items="eventos">
        <template #cell(data)="data">
          {{App.parseDate(data.item.data)}}
        </template>
        <template #cell(modalidade)="data">
          {{data.item.modalidade.nome}}
        </template>
        <template #cell(areaConhecimento)="data">
          {{data.item.areaConhecimento.nome}}
        </template>
      </b-table>
    </b-container>
  </b-form>
</template>

<script>
  import * as App from '@/App.vue'
  import http from '@/services/http.js'

  export default {
    name: 'EventosIndex',

    props: [],

    data() {
      return {
        eventos: [],
        App
      };
    },

    methods: {
      novoEvento() {
        this.$router.push('/eventos/new').catch(e => e).then(() => {
          this.$router.go()
        })
      },

      redirect(item) {
        this.$router.push(`/eventos/${item.idEvento}`)
      }
    },

    mounted() {
      http.get('/eventos').then(response => {
        this.eventos = response.data
      })
    },
  };
</script>

<style scoped>
  body {
    background-color: pink;
  }
</style>