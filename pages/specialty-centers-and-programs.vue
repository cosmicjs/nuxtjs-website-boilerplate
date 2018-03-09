<template>
  <div>
      <div class="container">
        <h1>{{speciality.title}}</h1>
        <div class="p" v-html="speciality.content"></div>
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
<style scoped>
   h1{
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 39px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: #666;
  }
  .p{
    font-family: 'Roboto,sans-serif';
    font-size: 15px;
    line-height: 2;
    color: #666;
  }
</style>
