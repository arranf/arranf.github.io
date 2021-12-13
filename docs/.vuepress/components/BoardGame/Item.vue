<template>
  <article :style="{background: backgroundColor}">
    <div class="media" :style="backgroundImage">
    </div>

    <div class="card-text-section" >
      <a :href="url" target="_blank" rel="noopener noreferrer"><h3 class="title">{{name}}</h3></a>
      <div class="flex summary-section">
        <div class="text summary-item" v-if="rank">#{{rank}}</div> <div class="text summary-item" v-if="rating">#{{rating}}</div> <div class="text summary-item">{{playing_time}}</div>
      </div>
      <div class="summary-section">
        <p class="text summary-item">{{mechanics.join(', ')}}</p>
      </div>
      <div class="description-section">
        <p class="supporting-text">
          {{description}}
        </p>
      </div>
      <div v-if="expansions.length" class="description-section">
        <h4 class="expansion-title">Owned Expansions</h4>
        <div class="summary-section">
          <a class="expansion summary-item" v-for="expansion in expansions" :key="expansion.id" target="_blank" rel="noopener noreferrer" :href="`https://boardgamegeek.com/boardgame/${expansion.id}`">{{expansion.name}}</a>
        </div>
      </div>
    </div>
  </article>  
</template>

<script>
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
  computed: {
    backgroundImage() {
      const imageUrl = `url('${encodeURI(this.image)}')`;
      return {'background-image': imageUrl};
    },
    backgroundColor() {
      return `rgba(${this.color}, 1)`;
    },
    url() {
      return `https://boardgamegeek.com/boardgame/${this.id}`
    }
  }
}
</script>

<style lang="stylus" scoped>
 article {
   margin: 8px 0;
   border-radius: 10px;

   box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
 }


 .media  {
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
</style>