<template>
  <div>
      <div class="container">
          <h2>{{about.title}}</h2>
          <div class="p" v-html="about.content"></div>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    about(){
        return this.$store.getters.getPage(this.$route.name)
    }
  },
}
</script>
<style scoped>
    h2{
    margin-top: 30px;
    margin-bottom: 15px;
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
