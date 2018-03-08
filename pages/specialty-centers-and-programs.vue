<template>
  <div>
      <div class="container">
        <h1>{{speciality.title}}</h1>
        <div v-html="speciality.content"></div>
      </div>
  </div>
</template>
<script>
export default {
   computed: {
      speciality(){
        return this.$store.getters.getSpecialityCenterPage
      }
  },
}
</script>
