import { glob } from "glob";
export async function listComponents() {
  const results = await glob("./src/components/**/*.svelte", {
    absolute: true
  });
  return results;
}