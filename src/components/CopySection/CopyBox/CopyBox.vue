<template>
  <div class="CopyBox">
    <div class="CopyBox__circle-anim"></div>
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
import AppButton from "@/components/AppButton/AppButton";
import CopyIcon from "@/assets/icons/copy-icon.svg";
import MetamskIcon from "@/assets/metamsk-logo.png";

export default {
  name: "CopyBox",
  components: {
    AppButton,
  },
  props: {
    code: String,
  },
  setup() {
    const copyCode = async (mytext) => {
      try {
        await navigator.clipboard.writeText(mytext);
      } catch ($e) {
        console.log("Cannot copy");
      }
    };

    return {
      CopyIcon,
      MetamskIcon,
      copyCode,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
