<template>
    <div class="home">
        <h1>Anime</h1>
        <div class="contenedor">
            <div class="lista-anime">
                <BotonComponente @click="obtenerAnimes" >Obtener Animes</BotonComponente>
                <div v-for="(anime, index) in animes" :key="index" class="anime">
                    <h2>{{ anime.user.username }}</h2>
                    <p>{{ anime.content }}</p>
                </div>
            </div>
            <BotonComponente @click="obtenerAnimeRandom" >Obtener Anime Random</BotonComponente>
            <div class="anime-random">
                <div v-if="animeRandom" class="anime">
                    <h2>{{ animeRandom.title }}</h2>
                    <p>{{ animeRandom.synopsis }}</p>
                </div>
            </div>

        </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import AnimeService from '../services/AnimeService.js'
    import BotonComponente from '../components/BotonComponente.vue'

    const animeService = new AnimeService()
    let animes = animeService.getAnimes()
    let animeRandom = ref(null)

    const obtenerAnimes = async () => {
        await animeService.fetchAll()
    }

    const obtenerAnimeRandom = async () => {
        console.log('obtenerAnimeRandom');
        
        animeRandom.value = await animeService.fetchRandom()
    }

    
  </script>
  
  <style lang="scss">
  </style>
  