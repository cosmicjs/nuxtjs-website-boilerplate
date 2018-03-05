<template>
    <div>
      <Appheader/>
      <!-- <Appsearch/> -->
      <!-- <Appblog/> -->
      <Apphome/>
      <Appfooter/>
    </div>
</template>

<script>
import Appheader from '~/components/partials/header.vue'
import Appfooter from '~/components/partials/footer.vue'
import Apphome from '~/components/home.vue'
import Appblog from '~/components/blog.vue'
import Appsearch from '~/components/search.vue'
export default {
  components: {
    Appheader,
    Appfooter,
    Apphome,
    Appblog,
    Appsearch
  }
}
</script>

<style>
</style>
