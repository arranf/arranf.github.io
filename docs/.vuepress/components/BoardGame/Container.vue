	

<template>
<div>
  <!-- Include only the reset -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css" integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8=" crossorigin="anonymous">
<!-- or include the full Satellite theme -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css" integrity="sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc=" crossorigin="anonymous">

  <ais-instant-search :search-client="searchClient" :index-name="ALGOLIA_INDEX_NAME">
    <div class="top-panel">
      <ais-sort-by
        :items="[
          { value: ALGOLIA_INDEX_NAME, label: 'Name' },
          { value: `${ALGOLIA_INDEX_NAME}_rank_ascending`, label: 'BGG Rank' }
        ]"
      />
      <ais-search-box
        placeholder="Search for games"
      />
    </div>
    <div class="top-panel">
      
      <filter-wrapper header="Player Count">
        <ais-hierarchical-menu :attributes="['players.level1', 'players.level2']" :sort-by="(a, b) => parseInt(a.name) - parseInt(b.name)" />
      </filter-wrapper>

      <!-- <filter-wrapper>
        <ais-refinement-list 
          attribute="categories"
        />
      </filter-wrapper>


      <filter-wrapper>
        <ais-refinement-list 
          attribute="mechanics"
        />
      </filter-wrapper> -->

      <filter-wrapper header="Complexity">
        <ais-refinement-list attribute="weight" operator="or" :sort-by="(a,b) => WEIGHT_LABELS.indexOf(a.name) - WEIGHT_LABELS.indexOf(b.name)" />
      </filter-wrapper>

      <filter-wrapper header="Playing Time">
        <ais-refinement-list attribute="playing_time" operator="or" :sort-by="(a,b) => PLAYING_TIME_ORDER.indexOf(a.name) - PLAYING_TIME_ORDER.indexOf(b.name)" />
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
import algoliasearch from 'algoliasearch/lite';

import Item from './Item.vue';
import InfiniteHits from './InfiniteHits.vue';
import FilterWrapper from './FilterWrapper.vue';

const ALGOLIA_APP_ID = "DS3H5ZZC3L";
const ALGOLIA_API_KEY = "df3ea87860cc4dd53c139f7199b38d44";

export default {
  components: {
    Item,
    InfiniteHits,
    FilterWrapper
  },
  data() {
    return {
      ALGOLIA_INDEX_NAME: "games",
      WEIGHT_LABELS: [
        "Light",
        "Light Medium",
        "Medium",
        "Medium Heavy",
        "Heavy"
      ],
      PLAYING_TIME_ORDER: [
        '< 30min',
        '30min - 1h',
        '1-2h',
        '2-3h',
        '3-4h',
        '> 4h'
      ],
      searchClient: algoliasearch(
        ALGOLIA_APP_ID,
        ALGOLIA_API_KEY
      ),
    }
  }
}
</script>

<style lang="stylus">
  .top-panel {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .ais-ClearRefinements-button {
    margin-top: 12.1776px;
  }
  
</style>