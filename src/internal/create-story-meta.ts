import type { Meta, StoryObj } from "@storybook/svelte";
import type { ComponentProps, ComponentType, SvelteComponent, SvelteComponentTyped, SvelteComponent_1 } from "svelte";

export function storyMeta<T extends SvelteComponent, TKey extends Exclude<string, "args">>(name: TKey, componentRecord: { [key in TKey]: ComponentType<T> } & { args: ComponentProps<T> }) {
  const [title, component] = Object.entries(componentRecord).at(0) as unknown as [key: string, component: ComponentType];
  return {
    meta: {
      title,
      component,
      tags: ['autodocs'],
      argTypes: {}
    },
    Example: {
      args: componentRecord.args
    }
  }
}

export type StoryTyped<T extends SvelteComponent> = StoryObj<Meta<T>>;