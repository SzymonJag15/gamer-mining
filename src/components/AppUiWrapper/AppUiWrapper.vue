<template>
  <div class="app-ui-wrapper" :class="{ 'app-ui-wrapper--full': fullWidth }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppUiWrapper",
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
