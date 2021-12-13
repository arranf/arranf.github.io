
<script>
export default {
  props: {
    title: String,
    year: String
  },
  functional: true,
  render: function (h, ctx) {
    return h('p', 
       {key: ctx.props.title + ctx.props.year, class: 'film-title'}, 
      [ctx.props.title, h('span', {class: 'film-year'}, ` (${ctx.props.year})`)]
    );
  }
};
</script>

<style lang="stylus">
.film-title {
  line-height: 1;
}

.film-year {
  color: #777777;
}
</style>
