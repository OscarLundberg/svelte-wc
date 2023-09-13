import type { StoryContext } from "@storybook/svelte";

const PKG_NAME_PREFIX = "lst-stilguide"
export function svelte(storyContext: StoryContext){
  return [
    `<!-- svelte -->`, 
    `<script lang="ts">`,
    `   import { ${storyContext.title} } from "${PKG_NAME_PREFIX}/svelte";`,
    `</script>`,
    ``,
    `<${storyContext.title} />`
  ].join('\n');
}

export function html(storyContext: StoryContext){
  const toKebabCase = (str:string) => str.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();
  return [
    `<!-- html -->`, 
    `<head>`,
    `   <script src="/path-to-${PKG_NAME_PREFIX}"></script>`,
    `</head>`,
    `<body>`,
    `   <${toKebabCase(storyContext.title)} />`,
    `</body>`,
  ].join('\n');
}

export function react(storyContext: StoryContext){
  return [
    `<!-- react -->`, 
    `import { ${storyContext.title} } from "${PKG_NAME_PREFIX}/react";`,
    ``,
    `export const MyComponent = () => (`,
    `   <${storyContext.title} />`,
    `);`
  ].join('\n');
}

export function vue(storyContext: StoryContext){
  return [
    `<!-- vue -->`, 
    `<script lang="ts" setup>`,
    `   import { ${storyContext.title} } from "${PKG_NAME_PREFIX}/vue";`,
    `</script>`,
    ``,
    `<template>`,
    `   <${storyContext.title} />`,
    `</template>`
  ].join('\n');
}