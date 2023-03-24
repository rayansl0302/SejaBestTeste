import DadosPessoais from "../components/form-dados-pessoais/dados-pessoais.vue"
import DadosContato from "../components/form-dados-contato/dados-contato.vue"
import DadosProfissionais from "../components/form-dados-profissionais/dados-profissionais.vue"
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Dados-Pessoais',
    component: DadosPessoais
  },
  {
    path: '/dados-contato',
    name: 'Dados-contato',
    component: DadosContato
  },
  {
    path: '/dados-profissionais',
    name: 'Dados-profissionais',
    component: DadosProfissionais   
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router