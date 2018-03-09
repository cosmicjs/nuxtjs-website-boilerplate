<template>
  <div>
      <div class="container">
         <div class="card" v-for="blog in blogs" :key="blog.id">

            <!-- Heading -->
            <div class="card-body">
                <nuxt-link style="text-decoration: none;" :to="'/blog/'+blog.slug"><h3 class="card-title">{{blog.title}}</h3></nuxt-link>
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
            <div class="card-body" style="margin-top:20px; color:#666;">
                <p class="card-text">{{blog.metadata.teaser}}</p>
                <nuxt-link :to="'/blog/'+blog.slug">Read more...</nuxt-link>
            </div>

            </div>
      </div>
  </div>
</template>
<script>
export default {
    
   computed: {
      blogs(){
        return this.$store.getters.getBlog
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
    a:hover{
        color:#10156c;
    }
</style>
