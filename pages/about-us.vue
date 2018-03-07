<template>
  <div>
      <div class="container">
          <p class="h2">{{about.title}}</p>
          <p  v-html="about.content">{{about.content}}</p>
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
  async asyncData({store}) {
    await store.dispatch('getPages')
  }
}
</script>
