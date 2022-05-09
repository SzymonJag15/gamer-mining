<template>
  <Header @show-log-in-modal="toggleLoginForm" />
  <router-view></router-view>
  <AppLoginModal
    :is-visible="loginFormVisibility"
    @hide-modal="toggleLoginForm"
  />
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
