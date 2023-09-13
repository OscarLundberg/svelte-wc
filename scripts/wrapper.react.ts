export function wrap(name: string, componentTag: string, pathToLib: string) {
  return [
    `/**`,
    `* @param {typeof import('./components/${name}.props').Props} args`,
    `*/`,
    `export const ${name} = (args) => (`,
    `   <${componentTag} {...args}>{args.children}</${componentTag}>`,
    `);`
  ].join("\n")
}