<template>
  <div class="Header">
    <img :src="Logo" alt="Logotype" />
    <AppButton text="Log in" @click="showLogInModal" />
  </div>
</template>

<script>
import AppButton from "@/components/AppButton/AppButton";
import Logo from "@/assets/gamer-logo.png";

export default {
  name: "Header",
  components: {
    AppButton,
  },
  setup() {
    const showLogInModal = () => {
      console.log("Log in");
    };

    return {
      Logo,
      showLogInModal,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
