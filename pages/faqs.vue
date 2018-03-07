<template>
  <div>
      <div class="container">
            <h1>{{faqs.title}}</h1>
            <div v-for="faq in faqs.faqs" :key="faq.id">
                <h2>{{faq.title}}</h2>
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
  async asyncData({store}) {
    await store.dispatch('getPages')
  }
}
</script>
