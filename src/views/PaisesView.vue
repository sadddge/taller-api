<template>
    <div class="home">
        <h1>Paises</h1>
        <div class="contenedor">
            <BotonComponente @click="obtenerPaises" >Obtener Paises</BotonComponente>
            <div class="lista-paises">
                <div v-for="(pais, index) in paises" :key="index" class="pais">
                    <h2>{{ pais.country }}</h2>
                    <p>{{ pais.code }}</p>
                    <p>{{ pais.iso3 }}</p>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
    import BotonComponente from '../components/BotonComponente.vue'
    import PaisService from '../services/PaisService.js'

    const paisService = new PaisService()
    let paises = paisService.getPaises()

    const obtenerPaises = async () => {
        await paisService.fetchAll()
    }
  </script>
  
  <style lang="scss">
  </style>
  