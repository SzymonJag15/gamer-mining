<template>
  <div class="CopySection">
    <div class="CopySection__column">
      <CopyBox code="0x728f30fa2f100742c7949d1961804fa8e0b1387d" />
    </div>
    <div class="CopySection__column">
      <p class="CopySection__title">
        We are creating GamerCoin (GHX) - native token for gamers!
      </p>
      <p class="CopySection__text">
        GamerCoin is a token of GamerHash platform - it's the last puzzle of
        gaming ecosystem and fuel which makes 500.00 users life easier.
      </p>
      <p class="CopySection__text">
        Gamers will have many ways to earn GHX trough mining or entertainment on
        the platform. Keeping tokens in the wallet will bring many benefits &
        spending GHX in the Marketplace will open special offers.
      </p>
      <p class="CopySection__text CopySection__text--bold">
        It's a game changer for gaming generation!
      </p>
    </div>
  </div>
</template>

<script>
import CopyBox from "@/components/CopySection/CopyBox/CopyBox";

export default {
  name: "CopySection",
  components: {
    CopyBox,
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
