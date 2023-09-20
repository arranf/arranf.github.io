<template>
  <div class="cv-header">
    <div>
      <h1>Arran France</h1>
    </div>
    <div class="container">
      <div class="item">
        <h4>Software Engineering Manager</h4>
      </div>
      <div class="item">
        <h4>London, United Kingdom</h4>
      </div>
      <div class="item">
        <a href="mailto:arran@arranfrance.com">arran@arranfrance.com</a>
      </div>
      <div class="item">
        <a href="https://github.com/arranf">github.com/arranf</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CV-Header'
}
</script>

<style lang="stylus" scoped>
.cv-header {
  margin-bottom: 1.5em;
}

.container {
  display: flex;
  padding-bottom: 1em; /* Padding bottom for mobile */
  border-bottom: 3px solid #cccccc;
  flex-wrap: wrap;
}

h1 {
  margin: 0;
}

h4, a {
  font-size: 130%;
  margin: 0.2em 0 0 0;
  padding: 0 0 0.2em 0;
  font-weight: 600;
  line-height: 1;
  display: block;
}

.item {
  flex: 1;
  min-width: 100%;
}

@media (min-width: 768px) {
  .cv-header {
    margin-bottom: 2.5em;
  }

  .item {
    margin-bottom: 0.25em;
    min-width: 50%;
  }

  .container {
    margin-bottom: 2em; /* Margin bottom for tablet+ */
    padding-bottom: 0;
  }
}

@media print {
  .container {
    margin-bottom: 0.5em; /* Margin bottom for tablet+ */
    padding-bottom: 0.4rem;
    display: block;
    border-bottom: 2px solid #cccccc;

    :not(:first-child) {
      padding-left: 2em;
    }
  }

  .item {
    display: inline;
  }

  h4, a {
    display: inline;
    font-size: 95%;
    margin: 0.1em 0 0 0;
    padding: 0 0 0.1em 0;
  }

  .cv-header {
    margin-bottom: 1rem;
  }
}
</style>

