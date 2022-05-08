<template>
  <div class="CalculatorBox">
    <p class="CalculatorBox__title">{{ name }}</p>
    <img class="CalculatorBox__image" :src="image" alt="Item image" />
    <p class="CalculatorBox__price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "CalculatorBox",
  props: {
    name: String,
    image: String,
    price: String,
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
