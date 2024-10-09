<template>
    <div class="manga-container">
        <h1>Manga Random</h1>
        <BotonComponente @click="obtenerMangas" >Obtener Anime Random</BotonComponente>
        <div class="manga-random">
            <div v-if="manga" class="manga">
                <h2>{{ manga.title }}</h2>
                <p>{{ manga.synopsis }}</p>  
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import BotonComponente from '../components/BotonComponente.vue'
    import MangaService from '../services/MangaService.js'

    const mangaService = new MangaService()
    let manga = ref(null)

    const obtenerMangas = async () => {
        console.log('obtenerMangas');
        manga.value = await mangaService.fetchRandom()
    }

  </script>
  
  <style lang="scss">
  </style>
  