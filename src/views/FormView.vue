<template>
  <div class="container text-center mt-5">
    <h1>Formularios</h1>
    <form>
      <b-row>
        <b-col md="3">
          <b-form-input 
            type="text" 
            v-model="texto"
            :state="comprobar"
            > 
            </b-form-input>
            <small>Minimo 3 caracteres</small>
        </b-col>

        <b-col md="3">
            <b-form-select 
              v-model="select"
              :options="animales"
            >
            </b-form-select>
            <p>seleccion: {{select}} </p>
        </b-col>

        <b-col md="3">
            <b-form-radio-group 
                v-model="radio" 
                :options="animalesRadio" ></b-form-radio-group>
            <p>Radio: {{radio}} </p>
        </b-col>

        <b-col md="3">
            <b-form-checkbox-group
            v-model="check"
            :options="animalesRadio"
            >
            </b-form-checkbox-group>
            <p>Multiple: {{check}} </p>
        </b-col>

      </b-row>
    </form>
    <p>texto: {{ texto }}</p>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      texto: "",
      radio:null,
      select: null,
      check: [],
      animales:[
          {value: null, text: 'seleccione un animal'},
          {value: 'perro', text: 'Gua'},
          {value: 'gato', text: 'Miau'},
          {value: 'pato', text: 'Quak'},
      ],
      animalesRadio:[
          {value: 'perro', text: 'Gua'},
          {value: 'gato', text: 'Miau'},
          {value: 'pato', text: 'Quak'},
      ]
    };
  },
  computed:{
      comprobar(){
          return this.texto.length > 2 ? true : false ;
      }
  }

};
</script>
