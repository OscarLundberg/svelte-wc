import type { Preview } from "@storybook/svelte";
import custom from "./custom-theme";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import {svelte, react, vue, html} from "../src/internal/example-code-gen";

const preview: Preview = {
  parameters: {
    docs: {
      theme: custom,
      transformSource(src, storyContext){
        return  [
                  vue(storyContext),                  
                  react(storyContext),                  
                  svelte(storyContext),                  
                  html(storyContext)                
        ].join('\n\n');
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
