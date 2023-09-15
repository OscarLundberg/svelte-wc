import { glob } from "glob";
import fs from "fs/promises";

export async function customElementLib() {
  const components = await glob("**/*.js", { absolute: false, cwd: "dist", dotRelative: true });
  console.log({components})
  let include = `export default {};`;
  include += `\n\n`;
  for (let component of components) {
    include += `import "${component}";\n`
  }
  return fs.writeFile("dist/LstStilGuide.js", include, "utf-8");
}