<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout/>
</template>

<!-- AIS Styles -->

<style src="instantsearch.css/themes/reset-min.css">
</style>

<style lang="stylus">
h5 {
  font-size: 0.83em;
}

.vp-page .theme-default-content {
  padding-top: 2rem !important;
}

@media only screen and (max-width: 600px) {
  .sort-container {
    margin-bottom: 0.5rem;
  }
}

.sort-container {
  display: flex;
  align-items: first baseline;
  margin-right: 0.5rem;
  color: var(--c-text);
}

.top-panel {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: end;


  h5 {
    margin-top: 12px;
    margin-bottom: 12px;
  }

}

.ais-SortBy {
  margin-right: 4px;
  margin-left: 0.5rem;
}


.ais-HierarchicalMenu-count, .ais-Menu-count, .ais-RatingMenu-count, .ais-RefinementList-count, .ais-ToggleRefinement-count {
  background: var(--c-bg) none repeat scroll 0 0;
  border: 1px solid var(--c-border);
  border-radius: 99999px;
  color: var(--c-text);
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
  background-color: var(--c-bg);
  background-position: 50%;
  background-size: 180%;
  border: 1px solid currentcolor;
  border-radius: 3px;
  color: var(--c-border-dark);
  cursor: inherit;
  height: 1rem;
  margin: 0 0.5rem 0 0;
  min-width: 1rem; }

.ais-RefinementList-item--selected .ais-RefinementList-checkbox,
.ais-GeoSearch-input:checked {
  background-size: 14px;
  /** If you change the brand colour you will need to change the inline hex of 3eaf7c here to the new brand colour */
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%233eaf7c%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
  border-color: currentcolor;
  color: var(--c-border); }

.ais-RefinementList-checkbox:focus,
.ais-GeoSearch-input:focus {
  outline: currentcolor none medium; 
}

/**
 * SearchBox
 */
.ais-SearchBox-form {
  background-color: var(--c-bg);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.875rem;
  height: 2.5rem;
  line-height: 1.25rem;
  position: relative;
  width: 100%; 
}

.ais-SearchBox-form::before {
  /** If the brand colour changes replace the inline hex of 379c6f with the new brand colour (but darker) */
  background: transparent url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23379c6f%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%3E%3C%2Fcircle%3E%3Cline%20x1%3D%2221%22%20y1%3D%2221%22%20x2%3D%2216.65%22%20y2%3D%2216.65%22%3E%3C%2Fline%3E%3C%2Fsvg%3E") repeat scroll 0% 0%;
  content: '';
  height: 1rem;
  left: 1rem;
  margin-top: -0.5rem;
  position: absolute;
  top: 50%;
  width: 1rem; 
}

.ais-SearchBox-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--c-bg);
  border: 1px solid var(--c-border-dark);
  border-radius: 3px;
  caret-color: var(--c-text);
  color: var(--c-text);
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
  font: inherit;
  max-width: 100%;
  padding-left: 2.5rem; }

.ais-SearchBox-input::-webkit-input-placeholder {
  color: var(--c-text); }

.ais-SearchBox-input:-ms-input-placeholder {
  color: var(--c-text); }

.ais-SearchBox-input::placeholder {
  color: var(--c-text); }

.ais-SearchBox-input:focus {
  border-color: var(--c-border);
  outline: currentcolor none medium; 
}

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
  fill: var(--c-text);
  height: 20px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  right: 1rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 20px; 
}

.ais-SearchBox-reset:focus {
  background: var(--c-bg);
  outline: 0; 
}

.ais-RefinementList-searchBox .ais-SearchBox-loadingIndicator,
.ais-RefinementList-searchBox .ais-SearchBox-reset {
  right: 0.5rem; 
}


.ais-SearchBox-loadingIndicator[hidden],
.ais-SearchBox-reset[hidden] {
  display: none; 
}

.ais-SearchBox-submit {
  display: none; 
}

.ais-Menu-searchBox,
.ais-RefinementList-searchBox {
  margin-bottom: 0.5rem; 
}

.ais-Menu-searchBox .ais-SearchBox-form,
.ais-RefinementList-searchBox .ais-SearchBox-form {
  height: 2rem; }

.ais-Menu-searchBox .ais-SearchBox-form::before,
.ais-RefinementList-searchBox .ais-SearchBox-form::before {
  left: 0.5rem; }

.ais-Menu-searchBox .ais-SearchBox-input,
.ais-RefinementList-searchBox .ais-SearchBox-input {
  padding-left: 2rem; }


.ais-RefinementList-showMore {
  padding: 0.5rem 0;
  text-decoration: underline;
  text-decoration-color: var(--c-brand-light);
}

/**
 * HierarchicalMenu
 */
.ais-Breadcrumb-link, .ais-HierarchicalMenu-link, .ais-Menu-link, .ais-RatingMenu-link {
    color: inherit;
    text-decoration: none !important;
}

.ais-HierarchicalMenu-list .ais-HierarchicalMenu-list {
  margin-left: 1.5rem; 
}

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
  width: 1rem; 
}

.ais-HierarchicalMenu-item--selected > .ais-HierarchicalMenu-link::before {
  color: #000;
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235468ff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
}


/**
 * ClearRefinements
 */

.ais-ClearRefinements {
  display: flex;
}

.ais-ClearRefinements-button {
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  text-decoration: underline;
  text-decoration-color: var(--c-brand-light);
}

.ais-ClearRefinements-button:disabled[disabled] {
  text-decoration: none;
  border-color: var(--c-border);
  color: var(--c-text);
  opacity: 0.4;
}



/**
 * Selectors
 */
.ais-MenuSelect-select,
.ais-HitsPerPage-select,
.ais-SortBy-select {
  /** If the brand colour changes replace the inline hex of 379c6f with the new brand colour (but darker) */
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23379c6f" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>');
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23379c6f" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>');
  background-position: right 1rem center, 0 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--c-bg);
   background-position: right 1rem center, 0 0;
  background-repeat: no-repeat;
  background-size: 10px, auto;
  border: 1px solid var(--c-border-dark);
  border-radius: 3px;
  color: var(--c-text);
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
  color: var(--c-text); 
}

.ais-HitsPerPage-select > option:disabled,
.ais-SortBy-select > option:disabled {
  color: #b6b7d5; 
}

.ais-HitsPerPage-select:hover,
.ais-SortBy-select:hover {
    border-color: var(--c-border-dark); 
    /** If the brand colour changes - you will need to change the string 46bd87 to the new brand colour light */
    background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%2346bd87" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>');
    background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%2346bd87" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>');
}

.ais-HitsPerPage-select:focus,
.ais-SortBy-select:focus {
    border-color: var(--c-border);
 }

.ais-HitsPerPage-select:disabled,
.ais-SortBy-select:disabled {
  border-color: #efeff5;
  color: #b6b7d5;
  cursor: not-allowed;  
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23b6b7d5" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), -webkit-gradient(linear, left top, left bottom, from(var(--c-bg)), to(var(--c-bg-lighter)));
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="%23b6b7d5" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M13 7L7 1 1 7M1 17l6 6 6-6"/></g></svg>'), linear-gradient(-180deg, var(--c-bg), var(--c-bg-lighter));
}

/** Range Input */

.ais-RangeInput-input {
  background: none;
  border: none;
  border-bottom: 1px solid #ebecf3;
  color: #21243d;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  min-width: none;
  padding: 0;
  padding-bottom: 3px;
}

.ais-RangeInput-label:first-of-type {
  margin-right: 6px;
}

.ais-RangeInput-label:last-of-type {
  margin-left: 6px;
}

.ais-HierarchicalMenu-link--selected > .ais-HierarchicalMenu-label {
  border-bottom: 2px solid var(--c-brand);
  padding-bottom: 4px;
}

</style>