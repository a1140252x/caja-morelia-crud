<template>
  <v-container>
    <h1 class="mb-4">Editar Cliente</h1>
    <ClienteForm v-if="cliente" :cliente="cliente" @submit="actualizarCliente" />
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import ClienteForm from '../components/ClienteForm.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

const clienteId = parseInt(route.params.id)
const cliente = computed(() => store.getters.getClientes.find(c => c.id === clienteId))

const actualizarCliente = (datos) => {
  store.dispatch('updateCliente', { ...datos, id: clienteId })
  router.push('/')
}
</script>
