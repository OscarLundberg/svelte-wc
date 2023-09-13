import type { StorybookConfig } from "@storybook/svelte-vite";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.ts"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],

  framework: {
    name: "@storybook/svelte-vite",
    options: {
      builder: {
        viteConfigPath: "./vite.storybook.config.ts"
      }
    },
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;
