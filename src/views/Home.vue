<template>
  <Hero />
</template>

<script>
import Hero from "@/components/Hero/Hero";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export default {
  name: "Home",
  components: {
    Hero,
  },
  setup() {
    return {
      ArrowDown,
      Hero,
    };
  },
};
</script>
