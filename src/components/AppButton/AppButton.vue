<template>
  <button
    class="AppButton"
    :class="{ 'AppButton--icon': icon }"
    :style="{ padding: `0 ${paddingX}px` }"
  >
    <img v-if="icon" :src="icon" alt="Button icon" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    icon: String,
    text: String,
    paddingX: {
      type: String,
      default: "0",
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
