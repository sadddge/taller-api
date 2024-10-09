

class MangaService {

    async fetchRandom() {
        const response = await fetch('https://api.jikan.moe/v4/random/manga');
        const manga = await response.json();
        return manga.data;
    }
}

export default MangaService