import { createStore } from 'vuex'

export default createStore({
  state: {
    clientes: []
  },
  mutations: {
    ADD_CLIENTE(state, cliente) {
      state.clientes.push(cliente)
    },         
    UPDATE_CLIENTE(state, updatedCliente) {
      const index = state.clientes.findIndex(c => c.id === updatedCliente.id)
      if (index !== -1) {
        state.clientes[index] = updatedCliente
      }
    },
    DELETE_CLIENTE(state, id) {
      state.clientes = state.clientes.filter(c => c.id !== id)
    }
  },
  actions: {
    addCliente({ commit }, cliente) {
      const nuevoCliente = {
        ...cliente,
        id: Date.now(), // Genera un ID único
      }
      commit('ADD_CLIENTE', nuevoCliente)
    },
    updateCliente({ commit }, cliente) {
      commit('UPDATE_CLIENTE', cliente)
    },
    deleteCliente({ commit }, id) {
      commit('DELETE_CLIENTE', id)
    }
  },
  getters: {
    getClientes: (state) => state.clientes,
    getClienteById: (state) => (id) => state.clientes.find(c => c.id === id)
  }
})
