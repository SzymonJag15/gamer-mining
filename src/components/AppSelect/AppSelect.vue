<template>
  <div class="AppSelect">
    <Multiselect :options="options" :canClear="false">
      <template v-slot:singlelabel="{ value }">
        <AppSelectItem :option="value" isSelect />
      </template>

      <template v-slot:option="{ option }">
        <AppSelectItem :option="option" />
      </template>
    </Multiselect>
  </div>
</template>
<script>
import Multiselect from "@vueform/multiselect";

import AppSelectItem from "@/components/AppSelect/AppSelectItem/AppSelectItem";

export default {
  name: "AppSelect",
  components: {
    Multiselect,
    AppSelectItem,
  },
  props: {
    options: Array,
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css" scope />
