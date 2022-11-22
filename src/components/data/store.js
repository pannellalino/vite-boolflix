import { reactive } from "vue";

export const store = reactive({
  apiUrlMovies: 'https://api.themoviedb.org/3/search/movie?api_key=9fa64b542946e8aba0eb9c142fb3f33e&',
  apiUrlTv: 'https://api.themoviedb.org/3/search/tv?api_key=9fa64b542946e8aba0eb9c142fb3f33e&', 
  moviesList: [],
  tvList: [],
  title: '',
  original_title: '',
  original_language: '',
  vote_average: '',
  overview: ''
});