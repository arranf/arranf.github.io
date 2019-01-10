<template>
<div class="page">
  <div class="content">
    <!-- <Content /> -->
    <main>
      <Content slot-key="footer"/>
    </main>
  </div>
</div>
</template>

<style lang="stylus">
.custom-layout
  padding-top 0px

h2
  border-bottom 0px !important

h4
  color: #888888

@media print
  @page
    margin: 0;

  .navbar
    display none
  
  .content
    padding .2em .2em !important
    margin 0 auto
  
  .page
    padding-bottom 16px
  
  main
    margin-top 0 !important
    margin-bottom 0
  
  main
    .block
      margin-bottom 1.3em
      &:last-child
        margin-bottom 0px
  
  .icon.outbound
    display none

  .right
    float right
    
  h1 
    margin-top 1rem
    margin-bottom 1rem
    padding-bottom: .3rem
    font-size: 1.5rem

  h2 
    margin-top .5rem
    margin-bottom .5rem
    padding-bottom .1rem
    font-size: 1.3rem
  
  h3
    margin-top .3rem
    margin-bottom .3rem
    font-size: 1rem
  
  h4
    margin-top: .1rem
    margin-bottom: .1rem

  p, ul, ol
    font-size .9rem
    line-height 1.2
    margin-top .5rem
    margin-bottom .5rem
</style>
