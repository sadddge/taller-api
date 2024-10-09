import { ref } from "vue";

class PaisService {

    constructor() {
        this.paises = ref([]);
    }

    getPaises() {
        return this.paises;
    }

    async fetchAll() {
        try {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries/popultion');
            const paises = await response.json();
            this.paises.value = paises.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default PaisService