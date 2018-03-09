<template>
  <div>
      <div class="container">
         <div class="card" v-if="blog">
            <!-- Heading -->
            <div class="card-body">
                <h3 class="card-title" style="color:#666;">{{blog.title}}</h3>
                <img :src="blog.metadata.author.metadata.image.url" alt="Avatar" class="img-circle" height="20px;" width="20px;">
                <span class="card-subtitle text-muted" style="margin-left:10px;">{{blog.metadata.author.title}}   Wed, Sep 28 2016</span>
            </div>
            <div class="row" style="margin-top:20px;">
                <div class="col-sm-2">
                   
                </div>
                <div class="col-sm-8">
                    <!-- Image -->
                    <img :src="blog.metadata.hero.url" width="100%" height="500px;" alt="Photo of sunset">
                </div>
                <div class="col-sm-2">

                </div>
            </div>
            <!-- Text Content -->
            <div class="card-body">
                <div class="card-text" v-html="blog.content"></div>
            </div>

            </div>
            <div v-else>
              <h1 class="text-center">Some thing go wrong</h1>
            </div>
      </div>
  </div>
</template>
<script>
export default {
    created(){
      var slug = this.$route.params.id
      this.$store.dispatch('getBlog',slug)
    },
   computed: {
      blog(){
        return this.$store.getters.getSelectedBlog
      }
  },
}
</script>
<style>
  .card-body{
    font-family: 'Roboto,sans-serif';
    font-size: 15px;
    color:#666;
    margin-top:20px;
  }
  h3{
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
</style>
