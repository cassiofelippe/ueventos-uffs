<template>
  <div>
    <b-container>
      <b-col>
        <label>Eventos UFFS</label>
      </b-col>
      <b-col>
        <b-button @click="novoEvento">+ Criar evento</b-button>
      </b-col>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'EventosIndex',

    props: [],

    data() {
      return {};
    },

    methods: {
      novoEvento() {
        this.$router.push('/eventos/new').catch(e => e).then(() => {
          this.$router.go();
        });
      }
    },

    mounted(){
      
    },
  };
</script>

<style scoped>
  body {
    background-color: pink;
  }
</style>