<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" class="d-flex justify-space-between align-center">
                <h1>Clientes</h1>
                <v-btn color="primary" @click="$router.push('/add')" prepend-icon="mdi-plus">
                    Agregar Cliente</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="cliente in clientes" :key="cliente.id" cols="12">

                <v-card class="">

                    <div class="d-flex align-center pa-4">
                        <!-- Avatar -->
                        <v-avatar size="80" class="me-4">
                            <v-img src="https://cdn-icons-png.flaticon.com/512/149/149452.png" alt="Avatar" />
                        </v-avatar>

                        <!-- Info del Cliente -->
                        <div class="flex-grow-1">
                        <v-card-title class="pa-0">
                            {{ cliente.nombre }}
                        </v-card-title>
                        <v-card-subtitle class="d-flex flex-column pa-0">
                            <span class="me-4">
                            <v-icon size="18" class="me-1">mdi-email</v-icon>
                            {{ cliente.email }}
                            </span>
                            <span>
                            <v-icon size="18" class="me-1">mdi-phone</v-icon>
                            {{ cliente.telefono }}
                            </span>
                        </v-card-subtitle>
                        </div>
                    </div>
                    <v-card-actions class="d-flex justify-end">
                        <v-btn color="error" @click="openConfirm(cliente)">Eliminar</v-btn>
                        <v-btn color="primary" @click="editCliente(cliente.id)">Editar</v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>

        <v-row v-if="clientes.length === 0">
            <v-col>
                <v-alert type="info" border="start" color="blue-lighten-4">
                    No hay clientes registrados aún.
                </v-alert>
            </v-col>
        </v-row>

        <!-- Confirmación de eliminación -->
        <v-dialog v-model="dialog" max-width="400">
            <v-card>
                <v-card-title class="text-h6">¿Eliminar cliente?</v-card-title>
                <v-card-text>
                    ¿Estás seguro de que deseas eliminar al cliente <strong>{{ clienteSeleccionado?.nombre }}</strong>?
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn text @click="dialog = false">Cancelar</v-btn>
                    <v-btn color="red" text @click="confirmarEliminacion">Eliminar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const clientes = computed(() => store.getters.getClientes);

const editCliente = (id) => {
    router.push(`/edit/${id}`);
};

const deleteCliente = (id) => {
    if (confirm("¿Deseas eliminar este cliente?")) {
        store.dispatch("deleteCliente", id);
    }
};

const dialog = ref(false)
const clienteSeleccionado = ref(null)

const openConfirm = (cliente) => {
    clienteSeleccionado.value = cliente
    dialog.value = true
}

const confirmarEliminacion = () => {

    console.log( clienteSeleccionado.value );

    if( clienteSeleccionado.value?.id ){
        store.dispatch('deleteCliente', clienteSeleccionado.value.id)
    }
    dialog.value = false
}
</script>
