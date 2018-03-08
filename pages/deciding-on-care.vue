<template>
  <div>
      <div class="container">
            <h1>{{decideOnCare.title}}</h1>
            <div v-html="decideOnCare.content"></div>
      </div>
  </div>
</template>
<script>
export default {
   computed: {
      decideOnCare(){
        return this.$store.getters.getDecidingOnCarePage
      }
  },
}
</script>
