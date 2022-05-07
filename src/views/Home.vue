<template>
  <div class="Home">
    <Hero />
    <AppUiWrapper>
      <CopySection />
    </AppUiWrapper>
  </div>
</template>

<script>
import AppUiWrapper from "@/components/AppUiWrapper/AppUiWrapper";
import Hero from "@/components/Hero/Hero";
import CopySection from "@/components/CopySection/CopySection";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export default {
  name: "Home",
  components: {
    AppUiWrapper,
    Hero,
    CopySection,
  },
  setup() {
    return {
      ArrowDown,
      Hero,
    };
  },
};
</script>

<style lang="scss" scoped>
.Home {
  background-color: $gray-title-text;
}
</style>
