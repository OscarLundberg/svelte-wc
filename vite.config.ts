import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from "svelte-preprocess";
import { listComponents } from "./scripts/list-components"
import { customElementLib } from './scripts/package';
import typescript from 'rollup-plugin-typescript2'
import { execSync } from "child_process";
import { wrap } from './scripts/wrapper.react';
import fs from "fs/promises";
const input = await listComponents();
let react = ``;
export default defineConfig({
  plugins: [svelte({
    emitCss: true,
    compilerOptions: {
      customElement: true
    },
    include: ['./src/components/**/*.svelte', './src/components/**/*.props.ts'],
    preprocess: preprocess({
      typescript: {
        compilerOptions: {
          declaration: true
        }
      }
    })
  }),
  {
    name: "post",
    async closeBundle() {
      try {
        execSync("npm run build-storybook", {cwd: process.cwd()});
      }catch(err){}
      await customElementLib();
      execSync("npm run build-dts", {cwd: process.cwd()});
      await fs.writeFile("dist/react.js", react);
    }
  }
  ],
  build: {
    rollupOptions: {
      input,
      output: {
        format: "es",
        entryFileNames({ name }) {
          console.log({ name });
          react += wrap(name, name, "./");
          return `components/${name}/${name}.js`;
        },
        inlineDynamicImports: false
      },
      plugins: [
        typescript({
          check: false,

        })
      ]
    }
  }
})
