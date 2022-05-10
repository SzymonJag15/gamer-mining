<template>
  <div class="Hero">
    <div class="Hero__content">
      <div class="Hero__content-image">
        <img :src="MiningHero" alt="Hero title" class="Hero__image-text" />

        <div class="Hero__content-image-titles">
          <hero-icon-title
            v-for="item in HERO_TITLES"
            :key="item.title"
            :icon="item.icon"
            :text="item.title"
          />
        </div>
      </div>
      <div class="Hero__content-bottom">
        <p class="Hero__content-bottom__text">
          what can i do with earned funds?
        </p>
        <img
          :src="ArrowDown"
          alt="Arrow down"
          class="Hero__content-bottom__arrow-down"
          @click="$emit('scroll-to')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeroIconTitle from "@/components/Hero/HeroIconTitle/HeroIconTitle.vue";

import MiningHero from "@/assets/mining-hero.png";
import GraphIcon from "@/assets/icons/graph-icon.svg";
import MiningIcon from "@/assets/icons/mining-icon.svg";
import BuyIcon from "@/assets/icons/buy-icon.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export default {
  name: "Hero",
  components: {
    HeroIconTitle,
  },
  setup() {
    const HERO_TITLES = [
      {
        title: "how much can i earn",
        icon: GraphIcon,
      },
      {
        title: "how to mine?",
        icon: MiningIcon,
      },
      {
        title: "buy devices",
        icon: BuyIcon,
      },
    ];

    return {
      MiningHero,
      HERO_TITLES,
      ArrowDown,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
