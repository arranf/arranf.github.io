	

<template>
  <div>
    <ais-instant-search :search-client="searchClient" :index-name="`${MEILISEARCH_INDEX_NAME}:lastmodified:desc`">
      <div class="top-panel">
        <div class="sort-container">
        <span>Sort By</span>
        <ais-sort-by
          :items="[
            { value: `${MEILISEARCH_INDEX_NAME}:rank:asc`, label: 'BGG Rank' },
            { value: `${MEILISEARCH_INDEX_NAME}:personal_rank:asc`, label: 'My Ranking' },
            { value: `${MEILISEARCH_INDEX_NAME}:personal_rating:desc`, label: 'My Rating'},
            { value: MEILISEARCH_INDEX_NAME, label: 'Name' },
            { value: `${MEILISEARCH_INDEX_NAME}:lastmodified:desc`, label: 'Newest' },
          ]"
        />
        </div>
        <div class="search-container">
        <ais-search-box
          placeholder="Search for games"
          reset-title="Clear"
        />
        </div>
      </div>
      <div class="top-panel">
        
        <filter-wrapper header="Player Count">
          <ais-hierarchical-menu :attributes="['players.level1', 'players.level2']" :sort-by="sortByPlayers"
            :limit="13" :show-parent-level="true"
            :transformItems="filterNonmatchingPlayerCounts" />
        </filter-wrapper>

        <filter-wrapper header="Complexity">
          <ais-refinement-list attribute="weight" operator="or" :sort-by="sortByWeight" />
        </filter-wrapper>

        <filter-wrapper header="Playing Time">
          <ais-refinement-list attribute="playing_time" operator="or" :sort-by="sortByPlayingTime" />
        </filter-wrapper>

        <filter-wrapper header="Tags">
          <ais-refinement-list attribute="tags" operator="and" :sort-by="['name:asc']" 
            :transform-items="transformItems" />
        </filter-wrapper>
        
        <ais-clear-refinements />

      </div>
      
      <infinite-hits>
        <template v-slot:item="{ item }">
          <Item v-bind="item" :item="item" />
        </template>
      </infinite-hits>
    </ais-instant-search>

  </div>
</template>

<script>
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

import Item from './Item.vue';
import InfiniteHits from '../meilisearch/InfiniteHits.vue';
import FilterWrapper from '../meilisearch/FilterWrapper.vue';

const MEILISEARCH_INDEX_NAME = "games";
const WEIGHT_LABELS = [
        "Light",
        "Light Medium",
        "Medium",
        "Medium Heavy",
        "Heavy"
      ];
const PLAYING_TIME_ORDER = [
        '< 30min',
        '30min - 1h',
        '1-2h',
        '2-3h',
        '3-4h',
        '> 4h'
      ];

      

export default {
  name: 'BoardGameContainer',
  components: {
    Item,
    InfiniteHits,
    FilterWrapper
  },
  methods: {
    transformItems: (items) => {
      return items.map(item => ({
        ...item,
        label: titleCase(item.label)
      }))
    },
    filterNonmatchingPlayerCounts: (items) => items.filter(i => i.label !== '0')
  },
  data() {
    return {
      MEILISEARCH_INDEX_NAME,
      searchClient: instantMeiliSearch(
        'https://search.arranfrance.com',
        '32140ba2b46b24fbebaf55f36d2aeed2b63f31866d9220f41749744f68fa6623',
        
      ).searchClient,
      sortByPlayingTime: (a,b) => PLAYING_TIME_ORDER.indexOf(a.name) - PLAYING_TIME_ORDER.indexOf(b.name),
      sortByWeight: (a,b) => WEIGHT_LABELS.indexOf(a.name) - WEIGHT_LABELS.indexOf(b.name),
      sortByPlayers: (a, b) => { const sort = parseInt(a.name) - parseInt(b.name); if (sort == 0) { return a.count - b.count}; return sort; },
    }
  },
  async beforeMount() {
    // Must be imported _only_ client side
     await Promise.all([import('lazysizes'), import('lazysizes/plugins/unveilhooks/ls.unveilhooks')]);
      document.addEventListener('lazybeforeunveil', function(e) {
        let bg = e.target.getAttribute('data-bg');
        if(bg){
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
      });
  }
}
</script>
