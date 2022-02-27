<template>
  <div class="container">
    <ol class="list-group list-group-numbered">
      <li v-for="(item, index) of animales" :key="item.id" 
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          
          <div class="fw-bold">{{ item.categoria }}</div>
        </div>
        <span class="badge bg-primary rounded-pill">{{ item.cantidad }}</span>

        <button @click="aumentarCantidad(index)" class="btn btn-primary mt-2" >+</button>
        <button @click="disminuirCantidad(index)" class="btn btn-primary mt-2" >-</button>


      </li>

    </ol>

    <button @click="reiniciar()" class="btn btn-primary mt-2" >Reiniciar</button>
  </div>
</template>

<script>

import {mapState, mapMutations } from 'vuex'

export default{
    computed:{
        ...mapState(['animales'])
    },
    methods:{
        ...mapMutations(['aumentarCantidad', 'disminuirCantidad', 'reiniciar']),
    }
}

</script>
