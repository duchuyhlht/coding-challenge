<template>
  <div>
    <label v-if="label">{{label}}<span v-if="required" class="required"> *</span></label>
    <div class="flex-1">
      <el-input
        :value="value"
        :name="name"
        v-bind="$attrs"
        @input="$emit('input', $event)"
      />
      <div class="error">{{ error }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: String,
    label: String,
    required: Boolean,
    name: String,
    error: {
      type: String,
      description: 'Indicate that input has error'
    }
  }
}
</script>

<style scoped>
.required,
.error {
  color: red;
}
</style>
