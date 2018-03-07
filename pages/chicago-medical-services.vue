<template>
  <div>
      <div class="container">
            <h1>{{chicagoMedicalService.title}}</h1>
            <p v-html="chicagoMedicalService.content">
                {{chicagoMedicalService.content}}
            </p>
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
  async asyncData({store}) {
    await store.dispatch('getPages')
  }
}
</script>