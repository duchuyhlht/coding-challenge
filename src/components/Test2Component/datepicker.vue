<template>
  <div>
    <label v-if="label">{{label}}<span v-if="$attrs.required" class="required"> *</span></label>
    <el-date-picker
      :value="value"
      :format="format"
      v-bind="$attrs"
      @input="onChange($event)"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: Date,
    label: String,
    format: {
      type: String,
      default: 'dd-MM-yyyy'
    },
    type: {
      String,
      default: 'date'
    }
  },
  methods: {
    onChange ($event) {
      this.$emit('input', $event)
      this.$emit('change', $event)
    }
  }
}
</script>
