<template>
  <div class="CopyBox">
    <div class="CopyBox__circle-anim">
      <Vue3Lottie :animationData="CircleJSON" :height="256" :width="256" />
    </div>
    <div class="CopyBox__copy-wrapper">
      <p class="CopyBox__copy-wrapper__title">Gamercoin (GHX)</p>
      <div class="CopyBox__copy-wrapper__text">
        <p class="code">{{ code }}</p>
        <img
          class="copy-icon"
          :src="CopyIcon"
          alt="Copy icon"
          @click="copyCode(code)"
        />
      </div>
    </div>
    <div class="CopyBox__add-to-meta-wrapper">
      <AppButton :icon="MetamskIcon" text="Add to MetaMask" paddingX="35" />
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import AppButton from "@/components/AppButton/AppButton";
import CopyIcon from "@/assets/icons/copy-icon.svg";
import MetamskIcon from "@/assets/metamsk-logo.png";

import CircleJSON from "@/assets/anim/circle.json";

export default {
  name: "CopyBox",
  components: {
    AppButton,
    Vue3Lottie,
  },
  props: {
    code: String,
  },
  setup() {
    const copyCode = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch ($e) {
        console.log("Cannot copy");
      }
    };

    return {
      CopyIcon,
      MetamskIcon,
      copyCode,
      CircleJSON,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
