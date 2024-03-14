<template>
  <form @submit.prevent="fetchData">
    <label for="qtd">Quantidade de itens por página:</label>
    <input type="number" id="qtd" v-model="qtd" min="0" max="25" />
    <label for="startDate">Data mínima de divulgação:</label>
    <input type="date" id="startDate" v-model="startDate" />
    <label for="endDate">Data máxima de divulgação:</label>
    <input type="date" id="endDate" v-model="endDate" />
    <button type="submit">Buscar</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FormComponent',
  data() {
    return {
      qtd: 5,
      startDate: new Date('2020-01-01').toISOString().slice(0, 10), // Convertendo para o formato ISO e pegando apenas a parte da data
      endDate: ''
    }
  },
  computed: {
    formattedStartDate() {
      return this.startDate.slice(0, 10) // Formatando a data para o formato 'YYYY-MM-DD' para ser aceita pelo input type="date"
    }
  },
  methods: {
    async fetchData() {
      if (this.qtd < 1 || this.qtd > 25) {
        alert('A quantidade de itens por página deve estar entre 1 e 25.')
        return
      }

      if (this.startDate > this.endDate && this.endDate) {
        alert('A data inicial deve ser menor que a data final!')
        return
      }

      const url = `https://servicodados.ibge.gov.br/api/v3/calendario/?qtd=${this.qtd}&de=${this.startDate}&ate=${this.endDate}`
      try {
        const response = await axios.get(url)
        this.$emit('data-fetched', response.data.items)
      } catch (error) {
        alert('Erro ao buscar dados!')
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

form label {
  color: #ffffff;
  margin-bottom: 5px;
  max-width: max-content;
}

form input {
  width: 15rem;
  padding: 10px;
  border-radius: 0.25rem;
  border: none;
}

button {
  margin-top: 30px;
  width: max-content;
  display: block;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 0.25rem;
  padding: 12px 24px;
  border: 0;
  color: #000021;
  background: #efeeea;
  line-height: 1.15;
  font-size: 16px;
  transition: all 0.3s ease;
}

button:hover {
  box-shadow:
    0 0 0 0 #fff,
    0 0 0 3px #efeeea;
  transform: scale(1);
}
</style>
