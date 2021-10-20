<template>
  <b-form>
    <b-container>
      <b-col cols="12" class="text-left">
        <h1>Usuários</h1>
      </b-col>

      <!-- <b-col cols="12" class="text-right">
        <b-button @click="novoUsuario">Criar usuário</b-button>
      </b-col> -->

      <b-col>&nbsp;</b-col>
      
      <b-table @row-clicked="redirect" striped hover :items="usuarios" :fields="['idUsuario', 'nomeUsuario', 'emailUsuario', 'cargo']">
        <template #cell(data)="data">
          {{parseDate(data.item.data)}}
        </template>
        <template #cell(cargo)="data">
          {{data.item.cargo.nome}}
        </template>
      </b-table>
    </b-container>
  </b-form>
</template>

<script>
  import http from '@/services/http.js'

  export default {
    name: 'UsuariosIndex',

    props: [],

    data() {
      return {
        usuarios: []
      };
    },

    methods: {
      parseDate(value) {
        let date = `${value}`.split('T')[0]
        let fields = date.split('-')
        return `${fields[2]}/${fields[1]}/${fields[0]}`
      },

      redirect(item) {
        this.$router.push(`/usuarios/${item.idUsuario}`)
      }
    },

    mounted() {
      http.get('/usuarios').then(response => {
        this.usuarios = response.data
      })
    },
  };
</script>

<style scoped>
  body {
    background-color: pink;
  }
</style>