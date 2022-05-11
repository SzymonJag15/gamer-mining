<template>
  <div class="Header">
    <img :src="Logo" alt="Logotype" />
    <AppButton text="Log in" @click="$emit('show-log-in-modal')" />
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
    return {
      Logo,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
