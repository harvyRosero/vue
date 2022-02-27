<template>
    <div>
        <Fotos/>
        <router-link :to="{name:'fotos', params:{id:item} }"
        v-for="(item, index) of fotos " :key="index"
        >
            <button>foto {{ item }} </button>
        </router-link>

        <button @click="home" >  Home</button>
        <button @click="anterior" >  atras</button>
        <button @click="siguiente" >  siguiente</button>
    </div>
</template>


<script>
import Fotos from '@/components/Fotos.vue'

export default {
    components: {
        Fotos
    },
    data(){
        return{
            fotos: [1,2,3]
        }
    },
    methods:{
        home(){
            this.$router.push({ name: 'home' });
        },
        anterior(){
            this.$router.go(-1);
        },
        siguiente(){
            this.$router.go(+1)
        }
        
    }
}
</script>