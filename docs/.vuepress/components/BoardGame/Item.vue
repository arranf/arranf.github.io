<template>
  <article class="board-game-item" :style="{background: backgroundColor}">
    <div class="board-game-media lazyload" :data-bg="backgroundImage">
    </div>

    <div class="card-text-section" >
      <a :href="url" target="_blank" rel="noopener noreferrer"><h3 class="title">{{name}}</h3></a>
      <div class="flex summary-section">
        <div class="text summary-item" v-if="rating">{{rating.toFixed(1)}}</div>        
        <div class="text summary-item" v-if="rank">Rank #{{rank}}</div> 
        <div class="text summary-item">{{playing_time}}</div>
        <!-- <div class="text summary-item">{{playerCount}}</div> -->
      </div>
      <div class="summary-section">
        <p class="text summary-item">{{playerCount}}</p>
      </div>
      <div class="description-section">
        <p class="supporting-text">
          {{description}}
        </p>
      </div>
      <div v-if="expansions.length" class="description-section">
        <h4 @click="expansionsToggled = !expansionsToggled"  class="expansion-title">Owned Expansions<span class="expansion-toggle" v-if="expansionOverflow">{{expansionToggleIcon}}</span></h4>
        <div v-show="showExpansions" class="summary-section">
          <a class="expansion summary-item" v-for="expansion in expansions" :key="expansion.id" target="_blank" rel="noopener noreferrer" :href="`https://boardgamegeek.com/boardgame/${expansion.id}`">{{expansion.name}}</a>
        </div>
      </div>
    </div>
  </article>  
</template>

<script>
function oxfordComma(array) {
 return  array.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ' and ') + value);
}

export default {
  props: {
    name: {
      required: true,
      type: String
    },
    categories: {
      required: true,
      type: Array
    },
    color: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    expansions: {
      required: false,
      type: Array
    },
    id: {
      required: true,
      type: Number
    },
    image: {
      required: false,
      type: String
    },
    numowned: {
      required: true,
      type: Number
    },
    numplays: {
      required: false,
      type: Number
    },
    mechanics: {
      required: true,
      type: Array
    },
    players: {
      required: true,
      type: Array
    },
    playing_time: {
      required: true,
      type: Array
    },
    playing_time: {
      required: true,
      type: String
    },
    rank: {
      required: false,
      type: Number
    },
    rating: {
      required: true,
      type: Number
    },
    tags: {
      required: true,
      type: Array
    },
    weight: {
      required: true,
      type: String
    },
    item: {
      required: false
    }
  },
  data() {
    return {
      expansionsToggled: false 
    }
  },
  computed: {
    backgroundImage() {
      return encodeURI(this.image)
    },
    backgroundColor() {
      return `rgba(${this.color}, 1)`;
    },
    url() {
      return `https://boardgamegeek.com/boardgame/${this.id}`
    },
    expansionOverflow() {
      return this.expansions.length > 3;
    },
    showExpansions() {
      return !this.expansionOverflow || this.expansionsToggled;
    },
    expansionToggleIcon() {
      return this.expansionsToggled ? '▲' : '▼' 
    },
    playerCount() {
      const counts = this.players.map(a => a.level2.split('> ')[1]);
      const groupCounts = {
        recommended: [],
        best: []
      }
      for (const count of counts) {
        if (count.startsWith('Recommended with ')) {
          groupCounts.recommended.push(count.split('Recommended with ')[1]);
        } else if (count.startsWith('Best with')) {
          groupCounts.best.push(count.split('Best with ')[1])
        }
      }

      let str = '';
      if (groupCounts.best.length > 0) {
        str += `Best with ${oxfordComma(groupCounts.best)}.`
      }
      if (groupCounts.recommended.length > 0) {
        if (str.length > 0) {
          str+= ' '
        }
        str+= `Recommended ${oxfordComma(groupCounts.recommended)}.`
      }

      return str;
    }
  }
}
</script>

<style lang="stylus" scoped>
 .board-game-item {
   margin: 8px 0;
   border-radius: 10px;

   box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;

  .board-game-media  {
      position: relative;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      border-top-left-radius: inherit;
      border-top-right-radius: inherit;

      &::before {
            margin-top: 56.25%;
            display: block;
            content: ""
      }
  }

  .expansion-toggle {
    padding-left: 8px;

    cursor: pointer;

    &:hover {
      border-color: #d6d6e7; 
    }
  }

  .card-text-section {
    padding: 8px;
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
    margin-right: 16px;
    margin-bottom: 4px;
  }

  .description-section, .summary-section, .title {
    margin-left: 4px;
    margin-right: 4px;
  }

  .expansion-title {
    margin-bottom: 4px;
  }
 }
</style>