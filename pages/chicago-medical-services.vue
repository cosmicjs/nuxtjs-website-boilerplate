<template>
  <div>
      <div class="container">
            <h1>{{chicagoMedicalService.title}}</h1>
            <div v-html="chicagoMedicalService.content">
            </div>
      </div>
  </div>
</template>
<script>
export default {
   computed: {
      chicagoMedicalService(){
        return this.$store.getters.getChicagoMedicalService
      }
  },
}
</script>