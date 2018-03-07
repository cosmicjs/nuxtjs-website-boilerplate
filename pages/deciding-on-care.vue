<template>
  <div>
      <div class="container">
            <h1>{{decideOnCare.title}}</h1>
            <p v-html="decideOnCare.content">
                {{decideOnCare.content}}
            </p>
      </div>
  </div>
</template>
<script>
export default {
   computed: {
      decideOnCare(){
        return this.$store.getters.getDecidingOnCarePage
      }
  },
  async asyncData({store}) {
    await store.dispatch('getPages')
  }
}
</script>
