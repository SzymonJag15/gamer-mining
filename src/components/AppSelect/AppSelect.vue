<template>
  <div class="AppSelect">
    <Select2
      :options="options"
      @select="selectEvent($event)"
      :settings="{
        width: '355px',
        minimumResultsForSearch: Infinity,
      }"
    />
  </div>
</template>
<script>
import Select2 from "vue3-select2-component";

export default {
  name: "AppSelect",
  components: {
    Select2,
  },
  props: {
    options: Array,
  },
  setup() {
    const selectEvent = (e) => {
      console.log(e);
    };

    return {
      selectEvent,
    };
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
