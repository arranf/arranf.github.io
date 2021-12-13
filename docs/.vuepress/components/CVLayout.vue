<template>
  <div class="page">
    <div class="content">
      <main>
        <Content slot-key="footer" />
      </main>
      <footer>
        <PopUp
          :url="'https://s3.eu-west-2.amazonaws.com/arranfrance.com/Arran-France--Full-Stack-Software-Engineer--CV.pdf'"
        />
      </footer>
    </div>
  </div>
</template>

<script>
import PopUp from './WorkHistory/PopUp.vue';

export default {
  name: 'CVContainer',
  components: {
    PopUp
  }
}
</script>

