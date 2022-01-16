	

<template>
  <div>
    <!-- Include only the reset -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css" integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8=" crossorigin="anonymous">

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
          reset-title="Clear"
        />
      </div>
      <div class="top-panel">
        
        <filter-wrapper header="Player Count">
          <ais-hierarchical-menu :attributes="['players.level1', 'players.level2']" :sort-by="(a, b) => parseInt(a.name) - parseInt(b.name)" />
        </filter-wrapper>

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
  },
  async beforeMount() {
    // Must be imported _only_ client side
     await Promise.all([import('lazysizes'), import('lazysizes/plugins/unveilhooks/ls.unveilhooks')]);

      document.addEventListener('lazybeforeunveil', function(e) {
        let bg = e.target.getAttribute('data-bg');
        console.log(e.target)
        if(bg){
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
      });
  }
}
</script>

<style lang="stylus">
  .top-panel {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    h5 {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }

  .ais-ClearRefinements {
    display: flex;
  }
  .ais-ClearRefinements-button {
    margin-top: auto;
    margin-bottom: auto;
  }

  .ais-ClearRefinements-button:disabled[disabled] {
    background-image: linear-gradient(-180deg,#fff,#f5f5fa);
    border-color: #efeff5;
    box-shadow: none;
    color: #b6b7d5;
  }

  .ais-HierarchicalMenu-count, .ais-Menu-count, .ais-RatingMenu-count, .ais-RefinementList-count, .ais-ToggleRefinement-count {
    background: #f5f5fa none repeat scroll 0 0;
    border: 1px solid #b6b7d5;
    border-radius: 99999px;
    color: #23263b;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1rem;
    margin-left: .5rem;
    overflow: hidden;
    padding: 0 .25rem;
}

 .ais-HierarchicalMenu-item {
  display: block;
  font-size: .875rem;
  line-height: 1.75rem;
 }


/**
 * RefinementList
 */
.ais-RefinementList-checkbox,
.ais-GeoSearch-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  background-position: 50%;
  background-size: 180%;
  border: 1px solid currentcolor;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 1px 4px 0 rgba(119, 122, 175, 0.4);
  box-shadow: inset 0 1px 4px 0 rgba(119, 122, 175, 0.4);
  color: #d6d6e7;
  cursor: inherit;
  height: 1rem;
  margin: 0 0.5rem 0 0;
  min-width: 1rem; }

.ais-RefinementList-item--selected .ais-RefinementList-checkbox,
.ais-GeoSearch-input:checked {
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235468ff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
  background-size: 14px;
  border-color: currentcolor;
  -webkit-box-shadow: rgba(35, 38, 59, 0.05) 0 1px 0 0 inset;
  box-shadow: rgba(35, 38, 59, 0.05) 0 1px 0 0 inset;
  color: #3c4fe0; }

.ais-RefinementList-checkbox:focus,
.ais-GeoSearch-input:focus {
  outline: currentcolor none medium; }

.ais-RefinementList-item--selected .ais-RefinementList-checkbox:focus,
.ais-GeoSearch-input:checked:focus {
  -webkit-box-shadow: rgba(35, 38, 59, 0.05) 0 1px 0 0 inset, currentcolor 0 0 0 1px;
  box-shadow: rgba(35, 38, 59, 0.05) 0 1px 0 0 inset, currentcolor 0 0 0 1px; }


/**
 * SearchBox
 */
.ais-SearchBox-form {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.875rem;
  height: 2.5rem;
  line-height: 1.25rem;
  position: relative;
  width: 100%; }

.ais-SearchBox-form::before {
  background: transparent url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235a5e9a%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%3E%3C%2Fcircle%3E%3Cline%20x1%3D%2221%22%20y1%3D%2221%22%20x2%3D%2216.65%22%20y2%3D%2216.65%22%3E%3C%2Fline%3E%3C%2Fsvg%3E") repeat scroll 0% 0%;
  content: '';
  height: 1rem;
  left: 1rem;
  margin-top: -0.5rem;
  position: absolute;
  top: 50%;
  width: 1rem; }

.ais-SearchBox-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border: 1px solid #d6d6e7;
  border-radius: 3px;
  -webkit-box-shadow: rgba(119, 122, 175, 0.3) 0 1px 4px 0 inset;
  box-shadow: rgba(119, 122, 175, 0.3) 0 1px 4px 0 inset;
  caret-color: #5a5e9a;
  color: #23263b;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
  font: inherit;
  max-width: 100%;
  padding-left: 2.5rem; }

.ais-SearchBox-input::-webkit-input-placeholder {
  color: #5a5e9a; }

.ais-SearchBox-input:-ms-input-placeholder {
  color: #5a5e9a; }

.ais-SearchBox-input::placeholder {
  color: #5a5e9a; }

.ais-SearchBox-input:focus {
  border-color: #3c4fe0;
  -webkit-box-shadow: rgba(35, 38, 59, 0.05) 0 1px 0 0;
  box-shadow: rgba(35, 38, 59, 0.05) 0 1px 0 0;
  outline: currentcolor none medium; }

.ais-SearchBox-input:disabled {
  background: transparent -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f5f5fa)) repeat scroll 0% 0%;
  background: transparent linear-gradient(-180deg, #fff, #f5f5fa) repeat scroll 0% 0%;
  border-color: #efeff5;
  -webkit-box-shadow: none;
  box-shadow: none;
  cursor: not-allowed; }

.ais-SearchBox-input:disabled::-webkit-input-placeholder {
  color: #b6b7d5;
  pointer-events: none; }

.ais-SearchBox-input:disabled:-ms-input-placeholder {
  color: #b6b7d5;
  pointer-events: none; }

.ais-SearchBox-input:disabled::placeholder {
  color: #b6b7d5;
  pointer-events: none; }

.ais-SearchBox-input::-webkit-search-cancel-button,
.ais-SearchBox-input::-webkit-search-decoration,
.ais-SearchBox-input::-webkit-search-results-button,
.ais-SearchBox-input::-webkit-search-results-decoration {
  -webkit-appearance: none;
  appearance: none; }

.ais-SearchBox-loadingIndicator,
.ais-SearchBox-reset {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  fill: #484c7a;
  height: 20px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  right: 1rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 20px; }

.ais-SearchBox-reset:focus {
  background: #b6b7d5;
  fill: #fff;
  outline: 0; }

.ais-RefinementList-searchBox .ais-SearchBox-loadingIndicator,
.ais-RefinementList-searchBox .ais-SearchBox-reset {
  right: 0.5rem; }

.ais-SearchBox-loadingIndicator[hidden],
.ais-SearchBox-reset[hidden] {
  display: none; }

.ais-SearchBox-submit {
  display: none; }

.ais-Menu-searchBox,
.ais-RefinementList-searchBox {
  margin-bottom: 0.5rem; }

.ais-Menu-searchBox .ais-SearchBox-form,
.ais-RefinementList-searchBox .ais-SearchBox-form {
  height: 2rem; }

.ais-Menu-searchBox .ais-SearchBox-form::before,
.ais-RefinementList-searchBox .ais-SearchBox-form::before {
  left: 0.5rem; }

.ais-Menu-searchBox .ais-SearchBox-input,
.ais-RefinementList-searchBox .ais-SearchBox-input {
  padding-left: 2rem; }



/**
 * HierarchicalMenu
 */
.ais-Breadcrumb-link, .ais-HierarchicalMenu-link, .ais-Menu-link, .ais-RatingMenu-link {
    color: inherit;
    text-decoration: none;
}

.ais-HierarchicalMenu-list .ais-HierarchicalMenu-list {
  margin-left: 1.5rem; }

.ais-HierarchicalMenu-link::before {
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23b6b7d5%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2218%2015%2012%209%206%2015%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  content: '';
  display: inline-block;
  height: 1rem;
  margin-right: 0.5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 1rem; }

.ais-HierarchicalMenu-item--selected > .ais-HierarchicalMenu-link::before {
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235468ff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
}


/**
 * ClearRefinements
 */
.ais-ClearRefinements-button {
  width: 100%; 
}


/**
 * Selectors
 */
.ais-MenuSelect-select,
.ais-HitsPerPage-select,
.ais-SortBy-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23777aaf" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fcfcfd));
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23777aaf" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), linear-gradient(-180deg, #fff, #fcfcfd);
  background-position: right 1rem center, 0 0;
  background-repeat: no-repeat;
  background-size: 10px, auto;
  border: 1px solid #d6d6e7;
  border-radius: 3px;
  -webkit-box-shadow: rgba(35, 38, 59, 0.05) 0 1px 0 0;
  box-shadow: rgba(35, 38, 59, 0.05) 0 1px 0 0;
  color: #23263b;
  cursor: pointer;
  font: inherit;
  height: 2.5rem;
  outline: currentcolor none medium;
  padding: 0 2.5rem 0 1rem;
  position: relative;
  width: 100%; }

.ais-HitsPerPage-select:-moz-focusring,
.ais-HitsPerPage-select::-moz-focus-inner,
.ais-SortBy-select:-moz-focusring,
.ais-SortBy-select::-moz-focus-inner {
  color: transparent;
  outline: currentcolor none medium; }

.ais-HitsPerPage-select > option:not(:checked),
.ais-SortBy-select > option:not(:checked) {
  color: #23263b; 
}

.ais-HitsPerPage-select > option:disabled,
.ais-SortBy-select > option:disabled {
  color: #b6b7d5; 
}

.ais-HitsPerPage-select:hover,
.ais-SortBy-select:hover {
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23777aaf" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), -webkit-gradient(linear, left top, left bottom, from(#fcfcfd), to(#f5f5fa));
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23777aaf" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), linear-gradient(-180deg, #fcfcfd, #f5f5fa);
  border-color: #d6d6e7; 
}

.ais-HitsPerPage-select:focus,
.ais-SortBy-select:focus {
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23777aaf" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f5f5fa));
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23777aaf" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), linear-gradient(-180deg, #fff, #f5f5fa);
  border-color: #3c4fe0;
  -webkit-box-shadow: #3c4fe0 0 0 0 1px, rgba(35, 38, 59, 0.05) 0 2px 0 0;
  box-shadow: #3c4fe0 0 0 0 1px, rgba(35, 38, 59, 0.05) 0 2px 0 0; 
}

.ais-HitsPerPage-select:disabled,
.ais-SortBy-select:disabled {
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23b6b7d5" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f5f5fa));
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23b6b7d5" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), linear-gradient(-180deg, #fff, #f5f5fa);
  border-color: #efeff5;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #b6b7d5;
  cursor: not-allowed; 
}

</style>