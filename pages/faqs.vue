<template>
  <div>
      <div class="container">
            <h1>{{faqs.title}}</h1>
            <div v-for="faq in faqs.faqs" :key="faq.id">
                <h3>{{faq.title}}</h3>
                <p>{{faq.value}}</p>
            </div>
      </div>
  </div>
</template>
<script>
export default {
   computed: {
      faqs(){
        return this.$store.getters.getFaqs
      }
  },
}
</script>
<style>
  h1,h3{
    color: #666;
  }
  p{
    font-family: Roboto,sans-serif;
    font-size: 15px;
    line-height: 2;
    color: #666
  }
</style>
