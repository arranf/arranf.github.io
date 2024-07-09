<template>
<div :class="{block: !brief, 'brief-block': brief}">
    <h3 style="margin-bottom: 0; padding-bottom: 0;">{{title}}</h3> 
    <github v-if="githubUrl" :url="githubUrl" />
    <h4 v-if="subtitle" style="display: inline;">{{subtitle}}</h4> <span v-if="years" class="right"><Badge :text="years" /></span>

    <p v-if="!brief"><slot></slot></p>
</div>
</template>

<script>
import Github from './Github.vue'

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
        },
        brief: {
            type: Boolean
        }
    }
}
</script>

<style lang="stylus">
// This shouldn't be nested under main
.block
  margin-top: 1.25em
  margin-bottom: 2em
  break-inside avoid-page
  box-decoration-break: clone
  border-bottom: 1px solid #eeeff0

.brief-block
  margin-top: 1em
  margin-bottom: 1.5em
  break-inside avoid-page
  box-decoration-break: clone
  
main
  .block:last-child
    border-bottom none

  // Block  print styles handled in CV layout
</style>