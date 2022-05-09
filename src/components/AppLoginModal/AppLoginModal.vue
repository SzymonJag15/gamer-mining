<template>
  <div class="AppLoginModal" v-if="isVisible">
    <div class="AppLoginModal__modal-wrapper">
      <p class="AppLoginModal__title">Log In</p>
      <div class="AppLoginModal__modal">
        <div class="AppLoginModal__modal__bottom-content">
          <p class="AppLoginModal__text">
            Don't have an account?
            <a href="#" class="AppLoginModal__link">Register</a>
          </p>
          <p class="AppLoginModal__text">
            Forgot your password?
            <a href="#" class="AppLoginModal__link">Click here</a>
            to reset
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "vue";
export default {
  name: "AppLoginModal",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    watch(
      () => props.isVisible,
      () => {
        if (props.isVisible) {
          document.documentElement.style.overflow = "hidden";
          return;
        }
        document.documentElement.style.overflow = "auto";
      }
    );

    return {};
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
