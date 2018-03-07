<template>
  <div>
      <div class="container">
            <h1>{{losAngelesMedicalService.title}}</h1>
            <p v-html="losAngelesMedicalService.content">
                {{losAngelesMedicalService.content}}
            </p>
      </div>
  </div>
</template>
<script>
export default {
   computed: {
      losAngelesMedicalService(){
        return this.$store.getters.getLosAngelesMedicalService
      }
  },
  async asyncData({store}) {
    await store.dispatch('getPages')
  }
}
</script>
