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

    <AppSelect
      v-model="value"
      :options="options"
      :settings="{ dropdownAutoWidth: true }"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import AppSelect from "@/components/AppSelect/AppSelect";

export default {
  name: "SelectSection",
  components: {
    AppSelect,
  },
  setup() {
    const value = ref("");
    const options = ref([
      {
        id: 0,
        text: "bitcoin (BTC) 0.48 BTC 3 925.36 USD",
        icon: "https://www.google.com/search?q=google+icon&sxsrf=ALiCzsYasci-uZur4DVm5kCcV_Fmnq5Nfw:1652001115913&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjRxrrdx8_3AhXlxIsKHTPgAmwQ_AUoAXoECAIQAw&biw=1920&bih=923&dpr=1#imgrc=3oyZ-6cHaTuISM",
        selected: true,
      },
      {
        id: 1,
        text: "GUSD 0.48 BTC 3 925.36 USD",
      },
      {
        id: 2,
        text: "litecoin (LTC) 0.48 BTC 3 925.36 USD",
      },
    ]);

    return {
      value,
      options,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
