<template>
  <b-form class="form">
    <template v-if="model.idUsuario">
      <h1>Usuário</h1>
    </template>
    <template v-else>
      <h1>Novo Usuário</h1>
    </template>
    
    <b-row>
      <b-col cols="12">&nbsp;</b-col>
      
      <b-col cols="4">&nbsp;</b-col>
    
      <b-col cols="4" class="usuario-nome">
        <label for="usuario-nome">Nome</label>
        <b-form-input id="usuario-nome" v-model="model.nomeUsuario" :disabled="disabled" />
      </b-col>
      
      <b-col cols="12">&nbsp;</b-col>
      
      <b-col cols="4">&nbsp;</b-col>

      <b-col cols="4" class="usuario-email">
        <label for="usuario-email">Email</label>
        <b-input type="email" id="usuario-email" v-model="model.emailUsuario" :disabled="disabled" />
      </b-col>

      <b-col cols="12">&nbsp;</b-col>

      <b-col cols="12" sm="12" md="12" lg="12" class="text-center" v-if="model.cargo && model.cargo.idCargo === 3">
        <b-button @click="tornarGestor" variant="success">Tornar Gestor</b-button>
      </b-col>
    </b-row>
  </b-form>  
</template>

<script>
  import http from '@/services/http.js'

  export default {
    name: 'UsuariosIndex',

    props: [],

    data() {
      return {
        disabled: false,
        model: {}
      };
    },

    methods: {
      tornarGestor() {
        this.model.modalidade = {
          idModalidade: this.model.modalidade
        }
        this.model.areaConhecimento = {
          idArea: this.model.areaConhecimento
        }
        http.patch(`/usuarios/${this.model.idUsuario}/gestor`, {}, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(() => {
          this.$router.push(`/usuarios/${this.model.idUsuario}`).catch(e => e).then(() => {
            this.$router.go()
          })
        })
      }
    },

    mounted() {
      if (this.$route.params.idUsuario) {
        this.disabled = true
        http.get(`/usuarios/${this.$route.params.idUsuario}`).then(response => {
          this.model = response.data
        })
      }
    },
  };
</script>

<style scoped>
</style>