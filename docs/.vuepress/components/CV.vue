<template>
<div class="page">
  <div class="content">
    <!-- <Content /> -->
    <main>
      <Content slot-key="footer"/>
    </main>
    <footer>
      <!-- <span class="download"><a href="">Download PDF</a></span> -->
      <PopUp :url="'https://s3.eu-west-2.amazonaws.com/arranfrance.com/Arran-France--Full-Stack-Software-Engineer--CV.pdf'"/>
    </footer>
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
.download
  border-top 3px solid #eeeff0
  padding-top 0.5em
  margin-top: 4em
  font-size 0.9rem
  a
    color #b5b5b5

@media print
  // Pages after the front need a bigger top margin
  @page
    margin: 1.5em .2em

  @page :first
    margin: .20em .2em

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
      margin-top: 0.7em
      margin-bottom 0.7em
      &:last-child
        margin-bottom 0
      &:first-child
        margin-top 0

  .icon.outbound
    display none

  .right
    float right

  .download
    display none

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
