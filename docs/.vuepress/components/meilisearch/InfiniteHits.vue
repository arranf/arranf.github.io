<template>
  <ol v-if="state">
    <li v-for="hit in state.hits" :key="hit.objectID">
      <slot name="item" :item="hit"> </slot>
    </li>
    <li class="sentinel" v-element-visibility="visibilityChanged">
      <!-- Intentionally left empty -->
    </li> 
  </ol>
  <div v-else>
    <!-- TODO: What if no state? -->
    <!-- No results found -->
  </div>
</template>

<script>
import { createWidgetMixin } from 'vue-instantsearch/vue3/es';
import { connectInfiniteHits } from 'instantsearch.js/es/connectors';

import { vElementVisibility } from '@vueuse/components'

export default {
  directives: {
    elementVisibility: vElementVisibility
  },
  mixins: [createWidgetMixin({ connector: connectInfiniteHits })],
  methods: {
    visibilityChanged(isVisible, _e) {
      if (isVisible && !this.state.isLastPage) {
        this.state.showMore();
      }
    },
  },
};
</script>

<style scoped>
  li {
    list-style-type: none;
  }
</style>

