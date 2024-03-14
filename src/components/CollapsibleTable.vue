<template>
  <section class="collapsible-table-container bg-white">
    <!-- Navigation Component -->
    <NavigationComponent />

    <!-- Form Component -->
    <FormComponent @data-fetched="handleDataFetched" />

    <!-- Accordion Component -->
    <AccordionComponent :items="items" @toggle-accordion="toggleAccordion" />
  </section>
</template>

<script>
import NavigationComponent from './NavigationComponent.vue'
import FormComponent from './FormComponent.vue'
import AccordionComponent from './AccordionComponent.vue'

export default {
  name: 'CollapsibleTable',
  components: {
    NavigationComponent,
    FormComponent,
    AccordionComponent
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    handleDataFetched(items) {
      this.items = items.map((item) => ({
        titulo: item.titulo,
        tipo: item.tipo,
        descricao_produto: item.descricao_produto.replace(/<[^>]*>/g, ''),
        divulgacao: item.data_divulgacao,
        produto_id: item.produto_id,
        nome_produto: item.nome_produto,
        ano_referencia_inicio: item.ano_referencia_inicio,
        mes_referencia_inicio: item.mes_referencia_inicio,
        ano_referencia_fim: item.ano_referencia_fim,
        mes_referencia_fim: item.mes_referencia_fim,
        active: false,
        link: item.link ? item.link : ''
      }))
    },
    toggleAccordion(index) {
      this.items[index].active = !this.items[index].active
      this.items.forEach((item, i) => {
        if (i !== index) {
          item.active = false
        }
      })
    }
  }
}
</script>

<style scoped>
.bg-white {
  background-color: white;
  padding: 5px;
  border-radius: 1rem;
}

.collapsible-table-container {
  width: 100%;
  background-color: #bc7e61;
  padding: 50px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media (max-width: 1280px) {
  .collapsible-table-container {
  width: 90vw;
}
}
</style>
