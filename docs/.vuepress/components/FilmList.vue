<template>
  <div v-if="!isLoaded">Loading films....</div>
  <div v-else>
    <film-item
      v-for="film in films"
      :key="film.title + film.year"
      :title="film.title"
      :year="film.year"
    />
  </div>
</template>

<script>
import FilmItem from "./FilmItem.vue";

const URL_PREFIX =
  "https://api.jonathansmovies.com/films?owned_by[$in]=Arran&$limit=50&$sort[name]=1&$select[]=name&$select[]=release_date&$select=imdb_id&$skip=";

export default {
  data() {
    return {
      isLoaded: false,
      films: []
    };
  },
  methods: {
    async getFilms() {
      let fetched = 0;
      let total = 0;
      let films = [];

      while (fetched < 1 || fetched < total) {
        const response = await (await fetch(URL_PREFIX + fetched)).json();
        response.data.forEach(d => {
          this.films.push({
            title: d.name,
            year: d.release_date.split("-")[0],
            imdb_id: d.imdb_id
          });
        });
        total = response.total;
        fetched += response.data.length;
      }
    }
  },
  async beforeMount() {
    await this.getFilms();
    this.isLoaded = true;
  }
};
</script>
