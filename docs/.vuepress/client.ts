import { defineClientConfig } from 'vuepress/client'
import InstantSearch from "vue-instantsearch/vue3/es";

import CVLayout from './layouts/CVLayout.vue'
import SearchLayout from './layouts/SearchLayout.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(InstantSearch);
  },
  setup() {},
  rootComponents: [],
  layouts: {
    CVLayout,
    SearchLayout
  }
})