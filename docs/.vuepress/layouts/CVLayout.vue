<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout/>
</template>

<!-- Modern overrides for VuePress v2 -->
<style lang="css">
.theme-default-content h1:first-child, .theme-default-content h2:first-child, .theme-default-content h3:first-child, .theme-default-content h4:first-child, .theme-default-content h5:first-child, .theme-default-content h6:first-child {
  margin-bottom: unset;
}

.theme-default-content h1, .theme-default-content h2, .theme-default-content h3, .theme-default-content h4, .theme-default-content h5, .theme-default-content h6 {
  margin-top: unset;
  margin-bottom: 0;
  padding-top: unset;
}
</style>

<!-- Legacy overrides possibly not all applied -->
<style lang="stylus">
.custom-layout {
  padding-top: 0px;
}

.theme-default-content:not(.custom) > h2 {
  margin-top: -3.1rem;
  padding-top: 3.6rem;
}

h2 {
  border-bottom: 0px !important;
}

h4 {
  color: #888888;
  font-size: 1rem;
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
  .theme-default-content:not(.custom) > :first-child {
    margin-top: 0;
  }

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
