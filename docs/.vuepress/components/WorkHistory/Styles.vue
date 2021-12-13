<template>
  
</template>

<style lang="stylus">
.custom-layout {
  padding-top: 0px;
}

h2 {
  border-bottom: 0px !important;
}

h4 {
  color: #888888;
}

.download {
  border-top: 3px solid #eeeff0;
  padding-top: 0.5em;
  margin-top: 4em;
  font-size: 0.9rem;

  a {
    color: #b5b5b5;
  }
}

@media print {
  // Pages after the front need a bigger top margin
  @page {
    margin: 1.5em 0.2em;
  }

  @page :first {
    margin: 0.2em 0.2em;
  }

  .navbar {
    display: none;
  }

  .content__default {
    padding: 0.2em 0.2em !important;
    margin: 0 auto;
  }

  .page {
    padding-bottom: 16px;
  }

  main {
    margin-top: 0 !important;
    margin-bottom: 0;
  }

  main {
    .block {
      margin-top: 0.7em;
      margin-bottom: 0.7em;

      &:last-child {
        margin-bottom: 0;
      }

      &:first-child {
        margin-top: 0;
      }
    }
  }

  .icon.outbound {
    display: none;
  }

  .right {
    float: right;
  }
  
  .last-updated {
    display: none;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
    font-size: 1.5rem;
  }

  h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.1rem;
    font-size: 1.3rem;
  }

  h3 {
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    font-size: 1rem;
  }

  h4 {
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }

  p, ul, ol {
    font-size: 0.9rem;
    line-height: 1.2;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>