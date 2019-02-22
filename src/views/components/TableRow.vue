<template>
  <tr>
    <td>{{info.order}}</td>
    <td class="text-capitalize">{{info.type}}</td>
    <td v-html="question"></td>
  </tr>
</template>

<script>
export default {
  props: ['info', 'question'],
  data () {
    return {
      isEdit: false
    }
  }
}
</script>
