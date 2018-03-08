<template>
  <div>
      <div class="container">
         <div class="card">

            <!-- Heading -->
            <div class="card-body">
                <h1 class="card-title">{{blog[0].title}}</h1>
                <img :src="blog[0].metadata.author.metadata.image.url" alt="Avatar" class="img-circle" height="20px;" width="20px;">
                <span class="card-subtitle text-muted" style="margin-left:10px;">{{blog[0].metadata.author.title}}   Wed, Sep 28 2016</span>
            </div>
            <div class="row" style="margin-top:20px;">
                <div class="col-sm-2">
                   
                </div>
                <div class="col-sm-8">
                    <!-- Image -->
                    <img :src="blog[0].metadata.hero.url" width="100%" height="500px;" alt="Photo of sunset">
                </div>
                <div class="col-sm-2">

                </div>
            </div>

            <!-- Text Content -->
            <div class="card-body">
            <p v-if="!isTrue" class="card-text">{{blog[0].metadata.teaser}}</p>
            <a v-if="!isTrue" @click="getFullContent">
                Read more...
            </a>
            <p v-else class="card-text" v-html="blog[0].metadata.teaser">{{blog[0].metadata.teaser}}</p>
            </div>

            </div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isTrue: false
        }
    },
   computed: {
      blog(){
        return this.$store.getters.getBlog
      }
  },
//   async asyncData({store}) {
//     await store.dispatch('getBlog')
//   },
  methods: {
      getFullContent(){
          this.isTrue = true;
          this.blog[0].metadata.teaser =  this.blog[0].content
      }
  }
}
</script>
