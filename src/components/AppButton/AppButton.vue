<template>
  <button class="AppButton">{{ text }}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
