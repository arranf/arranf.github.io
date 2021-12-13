
<script>
export default {
  props: {
    title: String,
    year: String
  },
  functional: true,
  render: function (h, ctx) {
    return h('p', 
       {key: ctx.props.title + ctx.props.year}, 
      [ctx.props.title, h('span', {class: 'year'}, ` (${ctx.props.year})`)]
    );
  }
};
</script>

<style lang="stylus">
p {
  line-height: 1;
}

.year {
  color: #777777;
}
</style>
