<template>
  <label>
    {{ label }}
    <textarea ref="inputref" @focusout="$emit('focusout')" type="text" :name="name" v-model="model"
      placeholder="Enter Title..."> </textarea>
  </label>
</template>
  
<script>
export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$refs.inputref.focus()
  },
  computed: {
    name() {
      return this.label;
    },
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
}
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
</style>