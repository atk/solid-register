import { registerExtension } from "./register-extension";

const loadStyles = (filename: string, styles: string) =>
  `if (!document.querySelector(\`[data-filename="${filename}"]\`)) {
  const div = document.createElement('div');
  div.innerHTML = \`<style data-filename="${filename}">${styles}</style>\`;
  document.head.appendChild(div.firstChild);
  div.innerHTML.replace(/@import (["'])(.*?)\\1/g, (_, __, requiredFile) => {
    try {
      require(requiredFile);
    } catch(e) {
      console.warn(
        '\\x1b[33m⚠️ attempt to @import css',
        requiredFile,
        'failed with error\\x1b[31m',
        e,
        '\\x1b[0m'
      );
    }
  });
}`;

const toCamelCase = (name: string): string =>
  name.replace(/[-_]+(\w)/g, (_, char) => char.toUpperCase());

const getModuleClasses = (styles: string): Record<string, string> => {
  const identifiers: Record<string, string> = {};
  styles.replace(
    /(?:^|}[\r\n\s]*)(\.\w[\w-_]*)|@keyframes\s+([\{\s\r\n]+?)[\r\n\s]*\{/g,
    (_, classname, animation) => {
      if (classname) {
        identifiers[classname] = identifiers[toCamelCase(classname)] = classname;
      }
      if (animation) {
        identifiers[animation] = identifiers[toCamelCase(animation)] = animation;
      }
      return '';
    }
  );
  return identifiers;
};

registerExtension('.css', (styles, filename) => loadStyles(filename, styles));
registerExtension('.module.css', (styles, filename) =>
  `${loadStyles(filename, styles)}
module.exports = ${JSON.stringify(getModuleClasses(styles))};`);
