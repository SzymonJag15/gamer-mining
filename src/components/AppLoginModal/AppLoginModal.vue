<template>
  <div class="AppLoginModal" v-if="isVisible" @click.self="$emit('hide-modal')">
    <div class="AppLoginModal__modal-wrapper">
      <p class="AppLoginModal__title">Log In</p>
      <div class="AppLoginModal__modal">
        <form class="AppLoginModal__form" @submit.prevent="onSubmit" novalidate>
          <div
            class="AppLoginModal__form__group"
            :class="{ error: toValidate.emailName.$errors.length }"
          >
            <input
              class="input"
              placeholder="Your email or login"
              type="text"
              v-model="toValidate.emailName.$model"
            />
            <div
              class="input-errors"
              v-for="(error, index) of toValidate.emailName.$errors"
              :key="index"
            >
              <div class="error-msg">
                {{ error.$message }}
              </div>
            </div>
          </div>

          <div
            class="AppLoginModal__form__group"
            :class="{ error: toValidate.password.$errors.length }"
          >
            <input
              class="input"
              placeholder="Confirm password"
              type="password"
              v-model="toValidate.password.$model"
            />
            <div
              class="input-errors"
              v-for="(error, index) of toValidate.password.$errors"
              :key="index"
            >
              <div class="error-msg">
                {{ error.$message }}
              </div>
            </div>
          </div>

          <div class="AppLoginModal__form__buttons">
            <button
              :disabled="toValidate.$invalid"
              class="AppLoginModal__submit"
            >
              Log In
            </button>
          </div>
        </form>
        <div class="AppLoginModal__modal__bottom-content">
          <p class="AppLoginModal__text">
            Don't have an account?
            <a href="https://gamerhash.com/" class="AppLoginModal__link"
              >Register</a
            >
          </p>
          <p class="AppLoginModal__text">
            Forgot your password?
            <a href="https://gamerhash.com/" class="AppLoginModal__link"
              >Click here</a
            >
            to reset
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, watch, toRef } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

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

    const validations = useVuelidate();
    const form = reactive({
      emailName: "",
      password: "",
    });
    const rules = {
      emailName: {
        required,
        min: minLength(6),
      },
      password: {
        required,
        min: minLength(6),
      },
    };

    const toValidate = useVuelidate(rules, {
      emailName: toRef(form, "emailName"),
      password: toRef(form, "password"),
    });

    const onSubmit = () => {
      validations.value.$touch();
    };

    return {
      toValidate,
      form,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
