<template>
  <p>
    {{title}}
    <span class="year">({{year}})</span>
  </p>
</template>

<script>
export default {
  props: {
    title: String,
    year: String
  }
};
</script>

<style lang="stylus" scoped>
p {
  line-height: 1;
}

.year {
  color: #777777;
}
</style>
