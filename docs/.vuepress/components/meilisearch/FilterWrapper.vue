<template>
  <div 
    class="filter-wrapper"
    @mouseover="hover = true"
    @mouseleave="hover = false"> 
    <h5 v-if="header" class="filter-title">{{header}}</h5>
    <ais-panel v-show="hover" >
      <slot  />
    </ais-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    }
  },
  props: {
    header: {
      required: false,
      type: String
    }
  }
}
</script>

<style lang="stylus">
  .filter-wrapper {
    margin-right: 32px;
  }

  .filter-title {
    &:after {
      content: "▼";
      padding-left: 8px;
    }
  }

  .ais-Panel {
    background: #F8FAFC;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.1);
    padding: 1em;
    min-width: 200px;
    position: absolute;
    z-index: 1;
  }

  @media (hover: hover) {
        .facet:hover .ais-Panel-body,
        .facet:focus-within .ais-Panel-body {
            display: block;
        }
    }
</style>