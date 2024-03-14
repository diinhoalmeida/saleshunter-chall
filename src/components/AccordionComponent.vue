<template>
  <section id="accordion">
    <article v-for="(item, index) in items" :key="index" class="accordion-item">
      <header
        class="accordion-header"
        @click="toggleAccordion(index)"
        role="button"
        :aria-expanded="item.active"
      >
        <h2>{{ item.divulgacao }}</h2>
        <h1>{{ item.titulo }}</h1>
      </header>
      <section class="accordion-content" :class="{ active: item.active }" aria-hidden="true">
        <div class="content-inner">
          <ul>
            <li><strong>Tipo:</strong> {{ item.tipo }}</li>
            <li><strong>ID do Produto:</strong> {{ item.produto_id }}</li>
            <li><strong>Nome do Produto:</strong> {{ item.nome_produto }}</li>
            <li><strong>Descrição do Produto:</strong> {{ item.descricao_produto }}</li>
            <li>
              <strong>Período de Referência:</strong> {{ item.mes_referencia_inicio }}/{{
                item.ano_referencia_inicio
              }}
              - {{ item.mes_referencia_fim }}/{{ item.ano_referencia_fim }}
            </li>
            <li v-if="item.link">
              <strong>Link:</strong> <a :href="item.link" target="_blank">Clique aqui</a>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  name: 'AccordionComponent',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toggleAccordion(index) {
      this.$emit('toggle-accordion', index)
    }
  }
}
</script>

<style scoped>
#accordion {
  display: flex;
  margin-top: 10px;
  gap: 10px;
  flex-direction: column;
  width: 100%;
}

.accordion-header {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  min-height: 150px;
  border-radius: 0.5rem;
  background-color: #efeeea;
}

.accordion-header h1 {
  max-width: 50%;
  font-size: 16px;
  text-align: center;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.3s ease-out,
    padding-top 0.3s ease-out,
    padding-bottom 0.3s ease-out;
}

.accordion-content.active {
  max-height: 2000px;
}

.content-inner {
  padding-top: 0;
  padding-bottom: 0;
  transition:
    padding-top 0.2s ease-out,
    padding-bottom 0.2s ease-out;
}

.content-inner ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accordion-content.active .content-inner {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
