<template>
  <p>{{title}} ({{year}})</p>
</template>

<script>
export default {
  props: {
    title: String,
    year: String
  }
};
</script>
