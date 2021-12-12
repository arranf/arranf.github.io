<template>
  <div v-if="films.length <= 0">
    <Loading/>
  </div>
  <div v-else>
    <transition-group name="list">
      <film-item
        v-for="film in films"
        :key="film.title + film.year"
        :title="film.title"
        :year="film.year"
      />
    </transition-group>
    <Loading v-if="!isLoadingFinished"/>
  </div>
</template>

<script>
import FilmItem from "./FilmItem.vue";
import Loading from "./Loading.vue";

const URL_PREFIX =
  "https://api.jonathansmovies.com/films?owned_by[$in]=Arran&$limit=50&$sort[canonical_name]=1&$select[]=name&$select[]=release_date&$select=imdb_id&$skip=";

export default {
  data() {
    return {
      isLoadingFinished: false,
      films: []
    };
  },
  methods: {
    async getFilms() {
      let fetched = 0;
      let total = 0;

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
    this.isLoadingFinished = true;
  }
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
