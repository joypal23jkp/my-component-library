<script lang="ts" setup>
import { computed, useAttrs } from "vue-demi";
import type { Nullable } from "@/types";
import { useClass } from "./hooks/useClass";
import { ArrowPathIcon } from "@heroicons/vue/24/solid";
interface PropsButton {
  type?: "primary" | "secondary" | "transparent" | "info";
  size?: "default" | "sm" | "lg" | "full-width";
  rounded?: boolean;
  label?: Nullable<string>;
  loading?: boolean;
  loadingIcon: Nullable<string>;
  circular?: boolean;
  icon?: Nullable<string>;
  iconClass?: Nullable<string>;
  disabled?: boolean;
}

const attrs = useAttrs();
const props = withDefaults(defineProps<PropsButton>(), {
  type: "primary",
  size: "default",
  label: null,
  loading: false,
  loadingIcon: null,
  rounded: false,
  circular: false,
  icon: null,
  iconClass: null,
  disabled: false,
});

const defaultAriaLabel = computed(() => {
  return props.label ? props.label : attrs["aria-label"];
});

const disabled = computed(() => {
  return props.loading || (attrs.disabled as boolean);
});

const btnClasses = useClass(props);
</script>
<template>
  <button
    type="button"
    :aria-label="defaultAriaLabel"
    :disabled="disabled"
    :class="btnClasses"
    v-bind="attrs"
    :value="label"
    class="full-center"
  >
    <ArrowPathIcon class="w-5 h-5 mr-3 animate-spin" v-if="loading" />
    <div>
      <slot>
        <span>{{ label || "&nbsp;" }}</span>
      </slot>
    </div>
  </button>
</template>
