<template>
  <article class="rpg-item" :style="{background: color}">
    <!-- <div class="rpg-media lazyload" :data-bg="backgroundImage">
    </div> -->

    <div class="card-text-section" >
      <!-- <a :href="url" target="_blank" rel="noopener noreferrer"> -->
        <h3 class="title">{{name}}</h3>
      <!-- </a> -->
      <div class="flex summary-section">
        <div class="text summary-item" v-if="format">{{format}}</div>
        <div class="text summary-item" v-if="edition">{{edition}}</div> 
        <div class="text summary-item" v-if="system">{{system}}</div>
        <div class="text summary-item" v-if="type">{{type}}</div>
        <!-- <div class="text summary-item">{{type}}</div> -->
      </div>
      <!-- <div class="summary-section">
        <p class="text summary-item">{{playerCount}}</p>
      </div> -->
      <!-- <div class="description-section">
        <p class="supporting-text">
          {{tagline}}
        </p>
        <h4 @click="descriptionToggled = !descriptionToggled"  class="toggle-title">Description<span class="expansion-toggle">{{descriptionToggleIcon}}</span></h4>
        <p class="summary-section" v-show="descriptionToggled">
          {{description}}
        </p>
      </div> -->
      <!-- <div v-if="expansions.length" class="expansion-section">
        <h4 @click="expansionsToggled = !expansionsToggled"  class="toggle-title">Owned Expansions<span class="expansion-toggle" v-if="expansionOverflow">{{expansionToggleIcon}}</span></h4>
        <div v-show="showExpansions" class="summary-section">
          <a class="expansion summary-item" v-for="expansion in expansions" :key="expansion.id" target="_blank" rel="noopener noreferrer" :href="`https://boardgamegeek.com/boardgame/${expansion.id}`">{{expansion.name}}</a>
        </div>
      </div> -->
    </div>
  </article>  
</template>

<script>

export default {
  props: {
    personal_rating: {
      type: Number
    },
    tagline: {
      type: String
    },
    name: {
      required: true,
      type: String
    },
    edition: {
      type: String
    },
    format: {
      type: String
    },
    system: {
      type: String
    },
    type: {
      type: String
    },
    pdf: {
      type: Boolean
    },
    physical: {
      type: Boolean
    },
    id: {
      required: true,
      type: String
    },
    item: {
      required: false
    }
  },
  data() {
    return {
      descriptionToggled: false
    }
  },
  computed: {
    backgroundImage() {
      return encodeURI(this.image)
    },
    color() {
      let string = this.name;
      let hash = 0;
      for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
      }
      return `hsl(${(hash % 360)}, 40%, 40%)`;
    },
    descriptionToggleIcon() {
      return this.descriptionToggled ? '▲' : '▼'
    },
  }
}
</script>

<style lang="stylus" scoped>
 .rpg-item {
   margin: 0.6rem 0;
   border-radius: 10px;

    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    p {
      line-height: 1.4;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
    }

    h3 {
      margin-top: 0.6rem;
      margin-bottom: 0.6rem;
    }

  .rpg-media  {
      position: relative;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      border-top-left-radius: inherit;
      border-top-right-radius: inherit;

      &::before {
            margin-top: 37.12%;
            display: block;
            content: ""
      }
  }

  .card-text-section {
    padding: 0.3rem 0.6rem;

    &:last-child {
      margin-bottom: 0.6rem;
    }
  }

  h1, h2, h3, h4, h5, p, .text, a {
    color: #e8e8e8;
  }

  .flex {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .summary-item {
    margin-right: 0.6rem;
    margin-bottom: 0.3rem;
  }

  // .circle {
  //   background-color: #e8e8e8;
  //   border-radius: 12px;
  //   padding-right: 0.3rem;
  //   padding-left: 0.3rem;
  //   min-width: 0.6rem;
  //   text-align: center;
  // }

  .description-section, .expansion-section, .summary-section, .title {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
  }

  .description-section {
    margin-bottom: 0.6rem;
  }

  .toggle-title {
    margin-bottom: 0.3rem;
  }
 }
</style>