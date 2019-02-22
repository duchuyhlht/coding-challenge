<template>
<div class="container pt-3 pb-5">
  <fade-transition origin="center" mode="out-in" :duration="250">
    <router-view/>
  </fade-transition>
</div>
</template>

<script>
import { FadeTransition } from "vue2-transitions"

export default {
  components: {
    FadeTransition
  }
}
</script>
