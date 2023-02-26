import type { Component, UnwrapNestedRefs } from "vue-demi";

export interface ComponentInterface {
  [key: string]: Component;
}
export declare type ComponentProps<T = Record<string, any>> = Readonly<
  UnwrapNestedRefs<T>
>;
