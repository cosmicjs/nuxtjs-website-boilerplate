<template>
  <div>
      <div class="container">
            <h1>{{newYorkMedicalService.title}}</h1>
            <p v-html="newYorkMedicalService.content">
                {{newYorkMedicalService.content}}
            </p>
      </div>
  </div>
</template>
<script>
export default {
   computed: {
      newYorkMedicalService(){
        return this.$store.getters.getNewYorkMedicalService
      }
  },
  async asyncData({store}) {
    await store.dispatch('getPages')
  }
}
</script>
