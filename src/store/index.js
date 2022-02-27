import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animales: [
      {'categoria': 'perro', 'cantidad': 0 },
      {'categoria': 'gato', 'cantidad': 0 },
      {'categoria': 'pajaro', 'cantidad': 0 },
      {'categoria': 'pez', 'cantidad': 0 },
      {'categoria': 'reptil', 'cantidad': 0 },
      {'categoria': 'roedor', 'cantidad': 0 },
    ]
  },
  getters: {
  },
  mutations: {
    aumentarCantidad(state, index) {
      state.animales[index].cantidad++;
    },

    disminuirCantidad(state, index) {
      state.animales[index].cantidad--;
    },
    reiniciar(state){
      state.animales.forEach(element => {
        element.cantidad = 0;
      });
    }

  },
  actions: {
  },
  modules: {
  }
})
