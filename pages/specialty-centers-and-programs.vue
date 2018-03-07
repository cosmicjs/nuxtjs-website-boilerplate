<template>
  <div>
      <div class="container">
        <h1>{{speciality.title}}</h1>
        <p v-html="speciality.content">{{speciality.content}}</p>
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
  async asyncData({store}) {
    await store.dispatch('getPages')
  }
}
</script>
