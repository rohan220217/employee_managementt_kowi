<template>
  <div :class="isActive ? 'outline-button' : 'fill-button'" @click="onClicked">
    {{ this.text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    isActive: Boolean,
    onClicked: {
      type: Function,
      required: false,
    },
  },
};
</script>

<style scoped>
.fill-button {
  display: inline-block;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  width: 200px;
  border-radius: 10px;
  border: 2px solid #ff5a5a;
  padding: 5px;
  color: #ff5a5a;
  cursor: pointer;
}
.outline-button {
  display: inline-block;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  width: 200px;
  border-radius: 10px;
  padding: 6px;
  color: white;
  background-color: #ff5a5a;
  cursor: pointer;
}
</style>