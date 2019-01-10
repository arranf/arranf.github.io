<template>
<div class="block">
    <h3 style="margin-bottom: 0; padding-bottom: 0;">{{title}}</h3> 
    <github v-if="githubUrl" :url="githubUrl" />
    <h4 v-if="subtitle" style="display: inline;">{{subtitle}}</h4> <span v-if="years" class="right"><Badge :text="years" /></span>

    <p><slot></slot></p>
</div>
</template>

<script>
import Github from './Github'

export default {
    components: {
        Github
    },
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        years: {
            type: String
        },
        githubUrl: {
            type: String
        }
    }
}
</script>

<style lang="stylus">
// This shouldn't be nested under main
.block
  margin-top: 1.25em
  margin-bottom: 2em
  border-bottom: 1px solid #eeeff0
  break-inside avoid-page
  box-decoration-break: clone

main
  .block:last-child
    border-bottom none

  // Block  print styles handled in CV layout
</style>