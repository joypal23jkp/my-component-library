import { computed } from "vue-demi";
import type { ComponentProps } from "@/types";

export function useClass(props: ComponentProps) {
  return computed(() => [
    "base-button",
    sizeClass(props),
    variantClass(props),
    { disabled: props?.disabled },
  ]);
}

function sizeClass(props: ComponentProps) {
  return props.size === "sm"
    ? "small-button"
    : props.size === "lg"
    ? "large-button"
    : props.size === "full-width"
    ? "w-full py-4"
    : "";
}

function variantClass(props: ComponentProps) {
  if (props?.success) {
    return "button-success";
  }
  if (props?.danger) {
    return "button-danger";
  }
  if (props?.warning) {
    return "button-warning";
  }
  if (props?.info) {
    return "button-info";
  }
  if (props?.secondary) {
    return "button-secondary";
  }
  if (props?.neutral) {
    return "button-neutral";
  }
  return "";
}
