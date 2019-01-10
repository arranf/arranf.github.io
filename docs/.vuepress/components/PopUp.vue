<template>
  <transition name="sw-update-popup">
    <div
      class="sw-update-popup"
    >
      <p>{{message}}</p>
      <a :href="url">
        {{buttonText}}
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    url: {
      required: true,
      type: String
    }
  },
  computed: {
    message () {
      return  'Also available as a PDF'
    },
    buttonText () {
      return 'Download'
    }
  }
}
</script>

<style lang="stylus" scoped>
$accentColor = #3eaf7c
$codeBgColor = #282c34

.sw-update-popup
  display flex
  position fixed
  padding 0.65em
  border none
  border-radius 3px
  background $codeBgColor
  box-shadow 0 4px 16px rgba(0, 0, 0, 0.5)
  text-align left

  p, a
    flex 1
    font-size 90%
    margin-left 1em
    align-self center

  p
    color: #ffffff
    margin: 0 0
    padding-left: 0.2em
    white-space nowrap

@media print 
  .sw-update-popup
    display none
</style>