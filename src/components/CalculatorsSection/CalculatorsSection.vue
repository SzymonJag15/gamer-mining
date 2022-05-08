<template>
  <div class="CalculatorsSection">
    <div class="CalculatorsSection__title-wrapper">
      <p class="title">Profitability calculator</p>
      <p class="CalculatorsSection__text subtitle">
        You earn bitcoins. When BTC exchange rate goes up, your profit
        automatically increases.
      </p>
    </div>
    <div class="CalculatorsSection__calculators-wrapper">
      <CalculatorBox
        v-for="box in CALCULATORS"
        :key="box.name"
        :name="box.name"
        :image="box.image"
        :price="box.price"
      />
    </div>
    <div class="CalculatorsSection__bottom-wrapper">
      <p class="CalculatorsSection__text">
        Crypto exchange rates are independent of GamerHash operations, the
        estimation is purely for illustrative purposes
      </p>
      <AppButton
        class="CalculatorsSection__button"
        :icon="CalculatorIcon"
        text="Check how much your setup will learn"
        paddingX="20"
      />
    </div>
  </div>
</template>

<script>
import CalculatorBox from "@/components/CalculatorsSection/CalculatorBox/CalculatorBox";
import AppButton from "@/components/AppButton/AppButton";

import LowEnd from "@/assets/icons/low-end.svg";
import MidShelf from "@/assets/icons/mid-shelf.svg";
import HighEnd from "@/assets/icons/high-end.svg";
import GPU from "@/assets/icons/7xGPU.svg";
import CalculatorIcon from "@/assets/icons/calculator-icon.svg";

export default {
  name: "CalculatorsSection",
  components: {
    CalculatorBox,
    AppButton,
  },
  setup() {
    const CALCULATORS = [
      {
        name: "low-end",
        image: LowEnd,
        price: "$9,004.21",
      },
      {
        name: "mid-shelf",
        image: MidShelf,
        price: "$9,004.21",
      },
      {
        name: "high-end",
        image: HighEnd,
        price: "$9,004.21",
      },
      {
        name: "7xGPU",
        image: GPU,
        price: "$9,004.21",
      },
    ];

    return {
      CALCULATORS,
      CalculatorIcon,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
