<template>
  <div>
      <div class="container">
          <p class="h2">{{about.title}}</p>
          <div v-html="about.content"></div>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    about(){
        return this.$store.getters.getAboutPage
    }
  },
}
</script>
