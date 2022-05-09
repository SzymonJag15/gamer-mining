<template>
  <Header @show-log-in-modal="showLoginForm" />
  <router-view></router-view>
  <AppLoginModal :is-visible="loginFormVisibility" />
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

    const showLoginForm = () => (loginFormVisibility.value = true);

    return {
      showLoginForm,
      loginFormVisibility,
    };
  },
};
</script>
