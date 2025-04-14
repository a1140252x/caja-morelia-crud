<template>
  <v-form @submit.prevent="submit" v-model="valid">
    <v-text-field
      v-model="form.nombre"
      label="Nombre"
      :rules="[v => !!v || 'El nombre es obligatorio']"
      required
      class="mb-2"
    />
    <v-text-field
      v-model="form.email"
      label="Correo Electrónico"
      :rules="[
        v => !!v || 'El correo es obligatorio',
        v => /.+@.+\..+/.test(v) || 'Correo no válido'
      ]"
      required
      class="mb-2"
    />
    <v-text-field
      v-model="form.telefono"
      label="Teléfono"
      :rules="[v => !!v || 'El teléfono es obligatorio']"
      required
      class="mb-2"
    />

    <v-btn type="submit" color="primary" :disabled="!valid">Guardar</v-btn>
    <v-btn variant="text" @click="$router.push('/')">Cancelar</v-btn>
  </v-form>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  cliente: Object,
})
const emit = defineEmits(['submit'])

const router = useRouter()
const valid = ref(false)

const form = reactive({
  nombre: '',
  email: '',
  telefono: ''
})

watch(
  () => props.cliente,
  (val) => {
    if (val) {
      form.nombre = val.nombre
      form.email = val.email
      form.telefono = val.telefono
    }
  },
  { immediate: true }
)

const submit = () => {
  emit('submit', { ...form })
}
</script>
