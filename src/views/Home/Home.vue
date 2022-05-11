<template>
  <div class="Home">
    <Hero @scroll-to="scrollToNextSection" />
    <AppUiWrapper>
      <CopySection ref="copySection" />
      <SelectSection />
    </AppUiWrapper>
    <div class="Home__calculators-bg">
      <AppUiWrapper>
        <CalculatorsSection />
      </AppUiWrapper>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AppUiWrapper from "@/components/AppUiWrapper/AppUiWrapper";
import Hero from "@/components/Hero/Hero";
import CopySection from "@/components/CopySection/CopySection";
import SelectSection from "@/components/SelectSection/SelectSection";
import CalculatorsSection from "@/components/CalculatorsSection/CalculatorsSection";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export default {
  name: "Home",
  components: {
    AppUiWrapper,
    Hero,
    CopySection,
    SelectSection,
    CalculatorsSection,
  },
  setup() {
    const copySection = ref(null);

    const scrollToNextSection = () => {
      const offset = copySection.value.$el.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    };

    return {
      ArrowDown,
      Hero,
      scrollToNextSection,
      copySection,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
