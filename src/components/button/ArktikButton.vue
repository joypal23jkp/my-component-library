<script lang="ts" setup>
import { computed, useAttrs } from "vue";

interface IProps {
  type?: "primary" | "secondary" | "transparent";
  size?: "default" | "sm" | "lg" | "full-width";
  label: string;
  loading: boolean;
}
const attrs = useAttrs();
const props = withDefaults(defineProps<IProps>(), {
  type: "primary",
  size: "default",
  label: "",
  loading: false,
});

const defaultAriaLabel = computed(() => {
  return props.label ? props.label : attrs["aria-label"];
});
const disabled = computed(() => {
  return props.loading || attrs.disabled;
});
</script>
<template>
  <button
    type="button"
    :aria-label="defaultAriaLabel"
    :disabled="disabled"
    :class="{
      'base-button': true,
      'small-button': props.size === 'sm',
      'large-button': props.size === 'lg',
      'w-full py-4': props.size === 'full-width',
      'secondary-button': props.type === 'secondary',
      'transparent-button': props.type === 'transparent',
    }"
  >
    <slot>
      <span v-if="loading">Loading...</span>
      <span v-else>{{ label || "&nbsp;" }}</span>
    </slot>
  </button>
</template>
