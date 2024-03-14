<template>
  <form @submit.prevent="fetchData">
    <label for="qtd">Quantidade de itens por página:</label>
    <input type="number" id="qtd" v-model="qtd" min="0" max="25" />
    <label for="startDate">Data mínima de divulgação:</label>
    <input type="date" id="startDate" v-model="startDate" />
    <label for="endDate">Data máxima de divulgação:</label>
    <input type="date" id="endDate" v-model="endDate" />
    <button :disabled="loading" type="submit">Buscar</button>
  </form>

  <div class="loading-overlay" v-if="loading">
    <div class="loading-spinner"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FormComponent',
  data() {
    return {
      qtd: 5,
      startDate: new Date('2020-01-01').toISOString().slice(0, 10), // Convertendo para o formato ISO e pegando apenas a parte da data
      endDate: '',
      loading: false
    }
  },
  computed: {
    formattedStartDate() {
      return this.startDate.slice(0, 10) // Formatando a data para o formato 'YYYY-MM-DD' para ser aceita pelo input type="date"
    }
  },
  methods: {
    async fetchData() {
      this.loading = true
      if (this.qtd < 1 || this.qtd > 25) {
        alert('A quantidade de itens por página deve estar entre 1 e 25.')
        this.loading = false
        return
      }

      if (this.startDate > this.endDate && this.endDate) {
        alert('A data inicial deve ser menor que a data final!')
        this.loading = false
        return
      }

      const formattedStartDate = this.startDate.slice(0, 10)
      const formattedEndDate = this.endDate ? this.endDate.slice(0, 10) : ''

      const url = `https://servicodados.ibge.gov.br/api/v3/calendario/?qtd=${this.qtd}&de=${formattedStartDate}&ate=${formattedEndDate}`
      try {
        const response = await axios.get(url)
        this.$emit('data-fetched', response.data.items)
        this.loading = false
      } catch (error) {
        this.loading = false
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

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Cor de fundo com opacidade */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Z-index alto para garantir que fique acima de todo o conteúdo */
}

/* Estilos do spinner de carregamento */
.loading-spinner {
  border: 8px solid #f3f3f3; /* Cor do spinner */
  border-top: 8px solid #3498db; /* Cor do spinner */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite; /* Animação de rotação */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
