<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import type { Nullable } from "@/types";
interface PropsButton {
  type?: "primary" | "secondary" | "transparent";
  size?: "default" | "sm" | "lg" | "full-width";
  rounded?: boolean;
  label?: string;
  loading?: boolean;
  circular?: boolean;
  icon?: Nullable<string>;
}

const attrs = useAttrs();
const props = withDefaults(defineProps<PropsButton>(), {
  type: "primary",
  size: "default",
  label: "",
  loading: false,
  rounded: false,
  circular: false,
  icon: null,
});

const defaultAriaLabel = computed(() => {
  return props.label ? props.label : attrs["aria-label"];
});
const disabled = computed(() => {
  return props.loading || attrs.disabled;
});
const classCircular = computed(() => {
  const style = "rounded-full flex justify-center items-center ";
  return style.concat(
    props.circular
      ? props.size === "sm"
        ? "w-[32px] h-[32px]"
        : props.size === "lg"
        ? "w-[64px] h-[64px]"
        : "w-[48px] h-[48px]"
      : ""
  );
});
</script>
<template>
  <button
    type="button"
    :aria-label="defaultAriaLabel"
    :disabled="disabled"
    :class="[
      {
        'base-button': true,
        'small-button': props.size === 'sm',
        'large-button': props.size === 'lg',
        'w-full py-4': props.size === 'full-width',
        'secondary-button': props.type === 'secondary',
        'transparent-button': props.type === 'transparent',
        'rounded-full': props.rounded,
      },
      classCircular,
    ]"
  >
    <span v-if="loading">Loading...</span>
    <slot v-else>
      <span>{{ label || "&nbsp;" }}</span>
    </slot>
  </button>
</template>
