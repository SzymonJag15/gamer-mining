<template>
  <Header @show-log-in-modal="toggleLoginForm" />
  <router-view></router-view>
  <Transition>
    <AppLoginModal
      :is-visible="loginFormVisibility"
      @hide-modal="toggleLoginForm"
    />
  </Transition>
</template>

<script>
import { ref } from "vue";
import Header from "@/components/Header/Header";
import AppLoginModal from "@/components/AppLoginModal/AppLoginModal";

export default {
  components: {
    Header,
    AppLoginModal,
  },
  setup() {
    const loginFormVisibility = ref(false);

    const toggleLoginForm = () =>
      (loginFormVisibility.value = !loginFormVisibility.value);

    return {
      toggleLoginForm,
      loginFormVisibility,
    };
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
