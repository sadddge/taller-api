import { ref } from "vue";

class AnimeService {

    constructor() {
        this.animes = ref([]);
    }

    getAnimes() {
        return this.animes;
    }

    async fetchRandom() {
        const response = await fetch('https://api.jikan.moe/v4/random/anime');
        const anime = await response.json();
        return anime.data;
    }

    async fetchAll() {
        const response = await fetch('https://api.jikan.moe/v4/recommendations/anime');
        const anime = await response.json();
        this.animes.value = anime.data;
    }
}

export default AnimeService