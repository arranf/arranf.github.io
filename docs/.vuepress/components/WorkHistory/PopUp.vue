<template>
  <transition name="sw-update-popup">
    <div class="sw-update-popup" :class="classes">
      <p>{{message}}</p>
      <a class="download-link" target="_blank" :href="url">{{buttonText}}</a>
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
  data() {
    return {
      isFaded: false
    };
  },
  computed: {
    message() {
      return "Also available as a PDF";
    },
    buttonText() {
      return "Download";
    },
    classes() {
      return {
        faded: this.isFaded
      };
    }
  },
  methods: {
    setFaded() {
    // If you want to disable the fading of the popup uncomment this line
      this.isFaded = true
    }
  },
  created() {
    setTimeout(this.setFaded, 3000);
  }
};
</script>

<style lang="stylus" scoped>

.sw-update-popup {
  display: flex;
  position: fixed;
  padding: 0.65em;
  border: none;
  border-radius: 3px;
  background-color: var(--vp-c-bg, var(--c-bg));
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  // Mobile specific here
  min-width: 100%;
  left: 0;
  bottom: 0;
}

p, a {
  flex: 1;
  font-size: 90%;
  align-self: center;
  text-align: left;
}

.download-link {
  text-align: right;
  padding-right: 1.5em;
}


p {
  margin: 0 0;
  padding-left: 0.2em;
  white-space: nowrap;
}

.faded {
  opacity: 1;
}


@media (min-width: 768px) {
  .sw-update-popup {
    text-align: left;
    left: initial;
    min-width: initial;
    right: 0.2em;
    bottom: 0.2em;
  }

  .faded {
    transition: opacity 1s ease;
    opacity: 0.5;

    &:hover {
      transition: none;
      opacity: 1;
    }
  }

  html.dark .faded {
   opacity: 0.7;

   &:hover {
    transition: none;
    opacity: 1;
   }
  }

  p, a {
    margin-left: 1em;
  }
}

@media print {
  .sw-update-popup {
    display: none;
  }
}
</style>