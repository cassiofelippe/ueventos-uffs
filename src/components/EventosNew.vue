<template>
  <b-form class="form">
    <h1>Novo Evento</h1>
    
    <b-row>
      <b-col cols="12">&nbsp;</b-col>
    
      <b-col cols="4">&nbsp;</b-col>
      
      <b-col cols="4" class="evento-nome">
        <label for="evento-nome">Nome</label>
        <b-form-input id="evento-nome" v-model="model.nome" />
      </b-col>

      <b-col cols="12">&nbsp;</b-col>

      <b-col cols="4" class="evento-data">
        <label for="evento-data">Data</label>
        <b-input type="date" id="evento-data" v-model="model.data" />
      </b-col>
      
      <b-col cols="4" class="evento-horario">
        <label for="evento-horario">Horário</label>
        <b-input type="time" id="evento-horario" v-model="model.horario" />
      </b-col>
      
      <b-col cols="4" class="evento-quantidade-horas">
        <label for="evento-quantidade-horas">Quantidade de Horas</label>
        <b-input type="number" id="evento-quantidade-horas" v-model="model.quantidadeHoras" />
      </b-col>
    
      <b-col cols="12">&nbsp;</b-col>

      <b-col cols="4" class="evento-custo">
        <label for="evento-custo">Custo</label>
        <b-input id="evento-custo" v-model="model.custo" placeholder="R$ 0,00" />
      </b-col>

      <b-col cols="4" class="evento-modalidade">
        <label for="evento-modalidade">Modalidade</label>
        <b-select id="evento-modalidade" v-model="model.modalidadeId" :options="modalidades">
          <template #first>
            <b-form-select-option :value="null" disabled>-- Selecione --</b-form-select-option>
          </template>
        </b-select>
      </b-col>

      <b-col cols="4" class="evento-area-conhecimento">
        <label for="evento-area-conhecimento">Área de Conhecimento</label>
        <b-form-select id="evento-area-conhecimento" v-model="model.areaConhecimentoId" :options="areasConhecimento">
          <template #first>
            <b-form-select-option :value="null" disabled>-- Selecione --</b-form-select-option>
          </template>
        </b-form-select>
      </b-col>
    
      <b-col cols="12">&nbsp;</b-col>

      <b-col cols="12" sm="12" md="12" lg="12" class="text-center">
        <b-button @click="criar" variant="success">Criar</b-button>
      </b-col>
    </b-row>
  </b-form>  
</template>

<script>
  import http from '@/services/http.js'

  export default {
    name: 'EventosIndex',

    props: [],

    data() {
      return {
        model: {},
        // TODO retrieve from database
        modalidades: [{value: 1, text: 'pesquisa'}, {value: 2, text: 'extensao'}, {value: 3, text: 'empreendedorismo'}],
        areasConhecimento: [{value: 1, text: 'saude'}, {value: 2, text: 'tecnologia'}, {value: 3, text: 'didatica'}]
      };
    },

    methods: {
      criar() {
        http.post('/eventos', this.model)
      }
    },

    mounted() {},
  };
</script>

<style scoped>
</style>