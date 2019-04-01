<template>
  <table class="table ui-accordion">
    <thead>
      <tr>
        <slot name="header"/>
      </tr>
    </thead>
    <tbody>
      <slot/>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    rows: Array,
    columns: Array
  }
}
</script>
