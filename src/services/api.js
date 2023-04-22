import axios from "axios";


// https://api.themoviedb.org/3/now_playing?api_key=a7b029dd6b74368e18266ec0d4af09eb&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;