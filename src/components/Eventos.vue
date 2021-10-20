<template>
  <b-form class="form">
    <template v-if="model.id">
      <h1>Evento: {{model.nome}}</h1>
    </template>
    <template v-else>
      <h1>Novo Evento</h1>
    </template>
    
    <b-row>
      <b-col cols="12">&nbsp;</b-col>
    
      <b-col cols="4">&nbsp;</b-col>
      
      <b-col cols="4" class="evento-nome">
        <label for="evento-nome">Nome</label>
        <b-form-input id="evento-nome" v-model="model.nome" :disabled="disabled" />
      </b-col>

      <b-col cols="12">&nbsp;</b-col>

      <b-col cols="4" class="evento-data">
        <label for="evento-data">Data</label>
        <b-input type="date" id="evento-data" v-model="model.data" :disabled="disabled" />
      </b-col>
      
      <b-col cols="4" class="evento-horario">
        <label for="evento-horario">Horário</label>
        <b-input type="time" id="evento-horario" v-model="model.horario" :disabled="disabled" />
      </b-col>
      
      <b-col cols="4" class="evento-quantidade-horas">
        <label for="evento-quantidade-horas">Quantidade de Horas</label>
        <b-input type="number" id="evento-quantidade-horas" v-model="model.quantidadeHoras" :disabled="disabled" />
      </b-col>
    
      <b-col cols="12">&nbsp;</b-col>

      <b-col cols="4" class="evento-custo">
        <label for="evento-custo">Custo</label>
        <b-input type="number" id="evento-custo" v-model="model.custo" placeholder="R$ 0.00" :disabled="disabled" />
      </b-col>

      <b-col cols="4" class="evento-modalidade">
        <label for="evento-modalidade">Modalidade</label>
          <b-form-select
          id="evento-modalidade"
          v-model="model.modalidade"
          :options="modalidades"
          value-field="idModalidade"
          text-field="nome"
          :disabled="disabled"
        >
          <template #first>
            <b-form-select-option :value="null" disabled>-- Selecione --</b-form-select-option>
          </template>
        </b-form-select>
      </b-col>

      <b-col cols="4" class="evento-area-conhecimento">
        <label for="evento-area-conhecimento">Área de Conhecimento</label>
        <b-form-select
          id="evento-area-conhecimento"
          v-model="model.areaConhecimento"
          :options="areasConhecimento"
          value-field="idArea"
          text-field="nome"
          :disabled="disabled"
        >
          <template #first>
            <b-form-select-option :value="null" disabled>-- Selecione --</b-form-select-option>
          </template>
        </b-form-select>
      </b-col>
    
      <b-col cols="12">&nbsp;</b-col>

      <b-col cols="12" sm="12" md="12" lg="12" class="text-center" v-if="!model.idEvento">
        <b-button @click="criar" variant="success">Criar</b-button>
      </b-col>
      <b-col cols="12" sm="12" md="12" lg="12" class="text-center" v-if="model.idEvento && disabled">
        <b-button @click="editar" variant="success">Editar</b-button>
      </b-col>
      <b-col cols="12" sm="12" md="12" lg="12" class="text-center" v-if="model.idEvento && !disabled">
        <b-button @click="salvar" variant="success">Salvar</b-button>
      </b-col>
      
      <b-col cols="12">&nbsp;</b-col>
    </b-row>
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
        disabled: false,
        model: {},
        // TODO retrieve from database
        modalidades: [{idModalidade: 1, nome: 'pesquisa'}, {idModalidade: 2, nome: 'extensao'}, {idModalidade: 3, nome: 'empreendedorismo'}],
        areasConhecimento: [{idArea: 1, nome: 'saude'}, {idArea: 2, nome: 'tecnologia'}, {idArea: 3, nome: 'didatica'}]
      };
    },

    methods: {
      criar() {
        this.model.modalidade = {
          idModalidade: this.model.modalidade
        }
        this.model.areaConhecimento = {
          idArea: this.model.areaConhecimento
        }
        http.post('/eventos', this.model).then(() => {
          this.$router.push('/eventos').catch(e => e).then(() => {
            this.$router.go()
          })
        })
      },

      editar() {
        this.disabled = false
      },

      salvar() {
        this.model.modalidade = {
          idModalidade: this.model.modalidade
        }
        this.model.areaConhecimento = {
          idArea: this.model.areaConhecimento
        }
        http.put('/eventos', this.model).then(() => {
          this.$router.push('/eventos').catch(e => e).then(() => {
            this.$router.go()
          })
        })
      }
    },

    mounted() {
      if (this.$route.params.idEvento) {
        this.disabled = true
        http.get(`/eventos/${this.$route.params.idEvento}`).then(response => {
          response.data.data = App.parseDate(response.data.data, true)
          response.data.modalidade = response.data.modalidade.idModalidade
          response.data.areaConhecimento = response.data.areaConhecimento.idArea
          this.model = response.data
        })
      }
    },
  };
</script>

<style scoped>
    .form{
      font-weight:bold;
      background-color: white;
      border: 4px solid;
      border-color: green;
      margin: 0 auto;
      width: 100%; /* Valor da Largura */
      text-align: center;
      align-items: center;
      color: green;
      background-color: white;
      padding-top: 1em;
      padding-left: 1em;
      padding-right: 1em;
    }
    label{
      text-align: center;
      Width: 100%;
    }
    .eventos-nome{
      align-items: all;
    }
    button{
      background-color: #b3b3b3;
      width:150px;
      height:40px;
      font-weight:bold;
      border-radius: 5px;
      border-color: green;
      margin: 110 px;
    }
    h1{
      font-weight:bold;
      color: green;
    }

    #evento-area-conhecimento, #evento-modalidade, input[type="text"],input[type="email"],input[type="tel"], input[type="date"], input[type="file"],
    input[type="password"],input[type="number"],input[type="time"],input[type="button"] select, textarea{
      width: 100%;
      border: 5px solid ;
      border-color: green;
      margin: 10px 0px;
      border-radius: 5px;
      padding: 5px 20px;
      background-color:#b3b3b3;
      color: black;
      font-family: monospace;
      left:2px;
      margin: 0 auto;
      position: relative;
    }
</style>