<template>
  <div class="AppSelectItem" :class="{ 'AppSelectItem--select': isSelect }">
    <div class="AppSelectItem__name-wrapper">
      <img
        class="character-option-icon AppSelectItem__image"
        :src="option.icon"
      />
      <span class="AppSelectItem__text AppSelectItem__text--name">{{
        option.name
      }}</span>
    </div>
    <div class="AppSelectItem__values-wraper">
      <span class="AppSelectItem__text AppSelectItem__text--btc">{{
        option.btc
      }}</span>
      <span class="AppSelectItem__text AppSelectItem__text--usd">{{
        option.usd
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSelectItem",
  props: {
    option: undefined,
    isSelect: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" src="./index.scss" scope />
