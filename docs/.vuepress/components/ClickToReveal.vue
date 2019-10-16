<template>
  <div>
    <button @click="isShown = !isShown">{{isShown ? 'Hide' : 'Show More'}}</button>
    <div v-show="isShown">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false
    };
  }
};
</script>