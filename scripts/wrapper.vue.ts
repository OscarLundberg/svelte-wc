export function wrap(name: string, componentTag: string, pathToLib: string, pathToDts: string) {
  return [
    `/**`,
    `* @param {typeof import(${pathToDts})} args`,
    `export const ${name} = (args) => {`,
    `<${componentTag} ...args>{args.children}</${componentTag}/>`,
    `}`
  ];
}