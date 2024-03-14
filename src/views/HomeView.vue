<template>
  <div class="body_div">
    <div class="content_page">
      <header>
        <div class="header_div">
          <div class="logo_div">
            <img src="../components/icons/icon-page.png" alt="icon ibge consultas" />
            <div class="circle"></div>
          </div>
        </div>
      </header>
      <section>
        <div class="banner_div">
          <h2>Calendário De <br />Divulgações de Pesquisas</h2>
        </div>
      </section>
      <section>
        <CollapsibleTable />
      </section>
      <footer>
        <div class="footer_div">
          <h4>Criado por Edilson Almeida!</h4>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import CollapsibleTable from '../components/CollapsibleTable.vue'

export default {
  name: 'HomeView',
  components: {
    CollapsibleTable
  }
}
</script>

<style>
.body_div {
  width: 100vw;
  min-height: 100vh;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  background-color: #f5f5f5;
  justify-content: center;
}

.logo_div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo_div img {
  z-index: 15;
  position: absolute;
  top: -120px;
}

.circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #efeeea;

  top: -10;
  z-index: 9;
  position: absolute;
}

.content_page {
  width: 1280px;
}

.header_div {
  padding: 20px;
}

.banner_div {
  width: 100%;
  margin-top: 65px;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.banner_div h2 {
  text-align: center;
  color: #bc7e61;
  font-size: 40px;
}
.banner_div h1 {
  text-align: center;
  color: #656565;
  font-size: 20px;
}

.footer_div {
  width: 100%;
  padding: 20px;
  display: flex;
  margin-top: 10px;
  background-color: #bc7e61;
  border-radius: 0.5rem;
  color: #ffffff;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1280px) {
  footer {
    width: 90vw;
  }
}
</style>
