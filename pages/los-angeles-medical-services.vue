<template>
  <div>
      <div class="container">
            <h1>{{losAngelesMedicalService.title}}</h1>
            <div v-html="losAngelesMedicalService.content"></div>
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
}
</script>
