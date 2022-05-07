<template>
  <div class="HeroIconTitle">
    <img :src="icon" alt="Icon" class="HeroIconTitle__icon" />
    <p class="HeroIconTitle__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "HeroIconTitle",
  props: {
    icon: String,
    text: String,
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
