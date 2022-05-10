<template>
  <div class="AppSwitch">
    <label class="AppSwitch__mode">
      <input
        type="checkbox"
        :checked="checked"
        @change="$emit('update:checked', $event.target.checked)"
      />
      <span class="AppSwitch__mode__slider AppSwitch__mode__round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped />
