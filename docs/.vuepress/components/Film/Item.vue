
<script>
import { h } from 'vue'

export default {
  props: {
    title: String,
    year: String
  },
  render: function () {
    return h('p', 
       {key: this.title + this.year, class: 'film-title'}, 
      [this.title, h('span', {class: 'film-year'}, ` (${this.year})`)]
    );
  }
};
</script>

<style lang="stylus">
.film-title {
  line-height: 1;
}

.film-year {
  color: var(--c-text-lighter);
}
</style>
