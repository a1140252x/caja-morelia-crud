<template>
  <v-container>
    <h1 class="mb-4">Agregar Cliente</h1>
    <ClienteForm @submit="crearCliente" />
  </v-container>
</template>
  
<script setup>
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import ClienteForm from '../components/ClienteForm.vue'
  
  const store = useStore()
  const router = useRouter()
  
  const crearCliente = (datos) => {
    store.dispatch('addCliente', datos)
    router.push('/')
  }
</script>
  