<template>
    <div>
      <Appheader/>
      <Apphome/>
      <Appfooter/>
    </div>
</template>

<script>
import Appheader from '~/components/partials/header.vue'
import Appfooter from '~/components/partials/footer.vue'
import Apphome from '~/components/home.vue'
export default {
  components: {
    Appheader,
    Appfooter,
    Apphome
  }
}
</script>

<style>
</style>
