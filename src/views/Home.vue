<template>
  <Hero />
</template>

<script>
// import { ref, onMounted } from "vue";

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
