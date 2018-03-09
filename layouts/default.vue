<template>
  <div>
    <Appheader/>
    <nuxt/>
    <appfooter/>
  </div>
</template>
<script>
import Appheader from '~/components/partials/header.vue'
import Appfooter from '~/components/partials/footer.vue'
export default {
   components: {
    Appheader,
    Appfooter,
  },
  async asyncData ({route, store, error}) {
    let data = {
      favicon: {}
    }
    let res = await FeedService.getPosts({id: id})
    data.singlepost = res.data
    return data
  },
  computed: {
    header(){
      return  this.$store.getters.getHeader
    }
  },
  head () {
    return {
       title: this.header.site_title,
        link: [
          { rel: 'icon', type: 'image/x-icon', href: this.header.favicon.url },
        ]
    }
},
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
