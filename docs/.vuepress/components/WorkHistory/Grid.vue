<template>
  <div>
    <h4 style="margin-bottom: 0px" v-if="title">{{title}}</h4>
    <div class="container">
      <grid-item
        :key="item.name+index"
        v-for="(item, index) in chosen"
        :classes="width"
        :badge="item.badge"
      >
        <span class="small">{{item.name}}</span>
      </grid-item>
    </div>
  </div>
</template>

<script>
import GridItem from "./GridItem.vue";
export default {
  name: 'CV-Grid',
  data() {
    return {
      languages: [
        { name: "JavaScript", badge: "Node/ES6" },
        { name: "TypeScript"},
        { name: "Rust" },
        { name: "C#" },
        { name: "Python", badge: "2/3" },
        { name: "HTML/CSS" }
      ],
      awards: [
        {
          name:
            "Ede and Ravenscroft Prize - Best First Year in Science Faculty",
          badge: { text: "2016", position: "right", type: "warning" }
        },
        {
          name: "Driver Prize - Best Student in Computer Science",
          badge: { text: "2016 / 2017", position: "right", type: "warning" }
        }
        // {
        //   name: "Letter of Commendation",
        //   badge: { text: "2016 / 2017 / 2018", position: "right", type: "warn" }
        // }
      ]
      //   modules: [
      //     { name: "Machine Learning" },
      //     { name: "Software Language Engineering" },
      //     { name: "Systems Programming" },
      //     { name: "Applications of Cryptography" },
      //     { name: "Human Computer Interaction" },
      //     { name: "Malicious Software" },
      //     { name: "Computer and Network Security" },
      //     { name: "Project Management" },
      //     { name: "" } // This makes it fit properly
      //   ]
    };
  },
  props: {
    items: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: "33"
    },
    title: {
      type: String
    }
  },
  components: {
    GridItem
  },
  computed: {
    chosen() {
      return this[this.items];
    }
  }
};
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.small {
  font-size: 90%;
}

@media print {
  font-size: 80%;

  h4 {
    margin-top: 0.8rem;
  }

  .container {
    margin-bottom: 0.8rem;
  }
}
</style>
