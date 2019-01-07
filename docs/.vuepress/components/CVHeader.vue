<template>
<div>
    <div>
        <h1>Arran France</h1>
    </div>
    <div class="container">
        <div class="item">
            <h4>Software Engineer</h4>
        </div>
        <div class="item">
            <a href="mailto:arranf@gmail.com">arranf@gmail.com</a>
        </div>
        <div class="item">
            <a href="https://github.com/arranf">github.com/arranf</a>
        </div>
    </div>
</div>
</template>

<style scoped>


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
    margin: 0.25em 0 0 0;
    padding: 0 0 0.25em 0;
    font-weight: 600;
    line-height: 1.25;
}

.item {
    flex: 1;
    min-width: 100%;
}

@media (min-width: 768px) {
  .item {
      margin-bottom: 0.25em;
      min-width: auto;
  }

  .container {
    margin-bottom: 2em; /* Margin bottom for tablet+ */
    padding-bottom: 0;
  }
}
</style>

