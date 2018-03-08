<template>
  <div>
      <div class="container">
            <h1>{{newYorkMedicalService.title}}</h1>
            <div v-html="newYorkMedicalService.content"></div>
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
}
</script>
