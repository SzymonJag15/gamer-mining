<template>
  <div class="SelectSection">
    <div class="SelectSection__content-wrapper">
      <p class="SelectSection__title">
        We are creating GamerCoin (GHX) - native token for gamers!
      </p>
      <p class="SelectSection__text">
        GamerCoin is a token of GamerHash platform - it's the last puzzle of
        gaming ecosystem and fuel which makes 500.00 users life easier.
      </p>
      <p class="SelectSection__text">
        Gamers will have many ways to earn GHX trough mining or entertainment on
        the platform. Keeping tokens in the wallet will bring many benefits &
        spending GHX in the Marketplace will open special offers.
      </p>
      <p class="SelectSection__text SelectSection__text--bold">
        It's a game changer for gaming generation!
      </p>
    </div>

    <div class="SelectSection__select-wrapper">
      <AppSelect v-model="value" :options="options" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AppSelect from "@/components/AppSelect/AppSelect";

import BTCIcon from "@/assets/icons/btc-icon.svg";
import ETCIcon from "@/assets/icons/etc-icon.svg";
import LTCIcon from "@/assets/icons/ltc-icon.svg";

export default {
  name: "SelectSection",
  components: {
    AppSelect,
  },
  setup() {
    const value = ref("");
    const options = ref([
      {
        value: "btc",
        name: "bitcoin (BTC)",
        btc: "0.48 BTC",
        usd: "3 925.36 USD",
        icon: BTCIcon,
      },
      {
        value: 1,
        name: "GUSD",
        btc: "0.48 BTC",
        usd: "3 925.36 USD",
        icon: ETCIcon,
      },
      {
        value: 2,
        name: "litecoin (LTC)",
        btc: "0.48 BTC",
        usd: "3 925.36 USD",
        icon: LTCIcon,
      },
    ]);

    return {
      value,
      options,
      BTCIcon,
      ETCIcon,
      LTCIcon,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
