<template>
  <article class="board-game-item" :style="{background: backgroundColor}">
    <div class="board-game-media lazyload" :data-bg="backgroundImage">
    </div>

    <div class="card-text-section" >
      <a :href="url" target="_blank" rel="noopener noreferrer"><h3 class="title">{{name}}</h3></a>
      <div class="flex summary-section">
        <div class="text summary-item circle" v-if="personal_rating" :style="{color: backgroundColor}">{{personal_rating}}</div> 
        <div class="text summary-item" v-if="personal_rank">My Rank #{{personal_rank}}</div> 
        <div class="text summary-item" v-if="rank">BGG Rank #{{rank}}</div> 
        <div class="text summary-item">{{playing_time}}</div>
      </div>
      <div class="summary-section">
        <p class="text summary-item">{{playerCount}}</p>
      </div>
      <div class="description-section">
        <p class="supporting-text">
          {{tagline}}
        </p>
        <h4 @click="descriptionToggled = !descriptionToggled"  class="toggle-title">Description<span class="expansion-toggle">{{descriptionToggleIcon}}</span></h4>
        <p class="summary-section" v-show="descriptionToggled">
          {{description}}
        </p>
      </div>
      <div v-if="expansions.length" class="expansion-section">
        <h4 @click="expansionsToggled = !expansionsToggled"  class="toggle-title">Owned Expansions<span class="expansion-toggle" v-if="expansionOverflow">{{expansionToggleIcon}}</span></h4>
        <div v-show="showExpansions" class="summary-section">
          <a class="expansion summary-item" v-for="expansion in expansions" :key="expansion.id" target="_blank" rel="noopener noreferrer" :href="`https://boardgamegeek.com/boardgame/${expansion.id}`">{{expansion.name}}</a>
        </div>
      </div>
    </div>
  </article>  
</template>

<script>
import { oxfordComma } from '../utils';

export default {
  props: {
    personal_rating: {
      type: String
    },
    tagline: {
      type: String
    },
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
    personal_rank: {
      required: false,
      type: Number
    },
    item: {
      required: false
    }
  },
  data() {
    return {
      expansionsToggled: false,
      descriptionToggled: false
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
    descriptionToggleIcon() {
      return this.descriptionToggled ? '▲' : '▼'
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

    p {
      line-height: 1.4;
      margin-top: 4px;
      margin-bottom: 4px;
    }

    h3 {
      margin-top: 8px;
      margin-bottom: 8px;
    }

  .board-game-media  {
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

  .expansion-toggle {
    padding-left: 4px;

    cursor: pointer;

    &:hover {
      border-color: #d6d6e7; 
    }
  }

  .card-text-section {
    padding: 4px 8px;

    &:last-child {
      margin-bottom: 8px;
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
    margin-right: 8px;
    margin-bottom: 4px;
  }

  .circle {
    background-color: #e8e8e8;
    border-radius: 12px;
    padding-right: 0.3rem;
    padding-left: 0.3rem;
    min-width: 1rem;
    text-align: center;
  }

  .description-section, .expansion-section, .summary-section, .title {
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 8px;
    margin-bottom: 4px;
  }

  .description-section {
    margin-bottom: 8px;
  }

  .toggle-title {
    margin-bottom: 4px;
  }
 }
</style>