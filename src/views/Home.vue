<template>
  <div>{{ HeroTitle }}</div>
  <img :src="ArrowDown" alt="Arrow down" />
</template>

<script>
import { ref, onMounted } from "vue";

import ArrowDown from "@/assets/icons/arrow-down.svg";

export default {
  name: "Home",
  setup() {
    const HeroTitle = ref("GamerHash");

    onMounted(() => {
      console.log(HeroTitle);
    });

    return {
      HeroTitle,
      ArrowDown,
    };
  },
};
</script>
