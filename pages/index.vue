<template>
    <div>
        
        <div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin-top:-20px;">
                <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div v-for="(c, index) in homeData.carousel" :key="index" class="item" v-bind:class="[index == 0 ? 'active' : '' ]">
                    <div :style="`background: url(${ c.url }?w=1200); background-size: cover; width: 100%; height: 500px; background-position: center`"></div>
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 text-center" style="margin-top:30px; margin-bottom:50px;">
                <div class="h1">{{homeData.headline.value}}</div>
                <div class="h4">{{homeData.subheadline.value}}</div>
            </div>
        </div>
        <div class="row">
            <div class="container col-xs-12">
            <div class="col-sm-4 text-center" v-for="blurb in homeData.blurbs" :key="blurb.id">
                <div class="h3" style="margin-bottom:30px;">{{blurb.value}}</div>
                <div class="w-300 h-300 img-circle center-block" :style="`background: url(https://s3-us-west-2.amazonaws.com/cosmicjs/${blurb.children[0].value }?w=600); background-size: cover; background-position: center;`"></div>
                <div class="p" style="margin-top:30px;">
                    {{blurb.children[1].value}}
                </div>
            </div>
            </div>
        </div>
        <div class="row" style="margin-bottom:30px;">
            <div class="col-sm-12 text-center" style="margin-top:50px;">
                <div class="h1">{{homeData.call_to_action_text.value}}</div>
                <div class="h4">{{homeData.call_to_action_subtext.value}}</div>
                <br>
                <nuxt-link class="btn btn-default btn-lg" to="contact">{{homeData.call_to_action_button_text.value}}</nuxt-link>
            </div>
        </div>
        </div>
  </div>
</template>
<script>
export default {
  computed: {
      homeData(){
        return this.$store.getters.getHomeData
      }
  },
}
</script>
<style scoped>
    .h1{
        color: #131982;
    }
    .h4{
        font-size: 20px;
        color: #666;
    }
    .h3{
        color: #666;
    }
    .p{
        font-family: 'Roboto,sans-serif';
        font-size: 15px;
        line-height: 2;
        color: #666;
    }
    .img-circle {
        border-radius: 50%;
    }
    .h-300 {
        height: 300px;
    }
    .w-300 {
        width: 300px;
    }
    
</style>
