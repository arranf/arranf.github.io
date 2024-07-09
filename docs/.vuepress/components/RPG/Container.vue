	

<template>
  <div>
    <ais-instant-search :search-client="searchClient" :index-name="`${MEILISEARCH_INDEX_NAME}:name:asc`">
      <div class="top-panel">
        <div class="sort-container">
        <!-- <span>Sort By</span>
        <ais-sort-by
          :items="[
            { value: `${MEILISEARCH_INDEX_NAME}:rank:asc`, label: 'BGG Rank' },
            { value: `${MEILISEARCH_INDEX_NAME}:personal_rank:asc`, label: 'My Ranking' },
            { value: `${MEILISEARCH_INDEX_NAME}:personal_rating:desc`, label: 'My Rating'},
            { value: MEILISEARCH_INDEX_NAME, label: 'Name' },
            { value: `${MEILISEARCH_INDEX_NAME}:lastmodified:desc`, label: 'Newest' },
          ]"
        /> -->
        </div>
        <div class="search-container">
        <ais-search-box
          placeholder="Search for RPGs"
          reset-title="Clear"
        />
        </div>
      </div>
      <div class="top-panel">

        <filter-wrapper header="Format">
          <ais-refinement-list attribute="format" operator="or" :limit="15" />
        </filter-wrapper>


        <filter-wrapper header="System">
          <ais-refinement-list attribute="system" operator="or" :limit="25" />
        </filter-wrapper>

        <filter-wrapper header="Type">
          <ais-refinement-list attribute="type" operator="or" :limit="15" />
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

const MEILISEARCH_INDEX_NAME = "rpgs";

export default {
  components: {
    Item,
    InfiniteHits,
    FilterWrapper
  },
  data() {

    return {
      MEILISEARCH_INDEX_NAME,
      searchClient: instantMeiliSearch(
        'https://search.arranfrance.com',
        '18e0c1ac136d91dfa656cd6b3bd195bb68df07f4f97f45087a729b53f58d0e91',
      ).searchClient
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
