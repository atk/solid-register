import { registerCompiler } from "./register-extension";
import { config, projectPath } from "./read-config";
import { join } from "path";

let postcss: any, postcssConfig: any;
try {
  postcss = require("postcss");
  postcssConfig = postcss ? require(join(projectPath, "postcss.config")) : {};
} catch (e) {}

const [extensions, moduleExtensions, postcssExtensions] =
  config.compile?.css === false
    ? [[], [], []]
    : config.compile?.css === true
    ? [[".css"], [".module.css"], []]
    : [
        config.compile?.css?.extensions || [".css"],
        config.compile?.css?.modules instanceof Array
          ? config.compile?.css?.modules
          : config.compile?.css?.modules === false
          ? []
          : [".module.css"],
        config.compile?.css?.postcss instanceof Array
          ? config.compile?.css.postcss
          : config.compile?.css?.postcss === true
          ? [".postcss", ".postcss.css"]
          : [],
      ];

if (postcssExtensions.length) {
  if (postcss === undefined) {
    console.warn(
      "\x1b[33m⚠️ could not load postcss even though the config requests it"
    );
    postcssExtensions.length = 0;
  } else if (!postcssConfig) {
    console.warn(
      "\x1b[33m⚠️ could not load postcss.config.* even though the config requests it"
    );
    postcssExtensions.length = 0;
  }
}

const loadStyles = (styles: string, filename: string) =>
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

const loadPostcssStyles = function (
  this: NodeJS.Module,
  styles: string,
  filename: string
) {
  if (!postcss || !postcssConfig.plugins) {
    return loadStyles(filename, styles);
  }
  const pluginsConfig = postcssConfig.plugins;
  const plugins =
    pluginsConfig instanceof Array
      ? pluginsConfig
      : Object.entries(pluginsConfig).reduce((plugins, [name, options]) => {
          let plugin;
          try {
            plugin = this.require(name);
          } catch (e) {
            try {
              plugin = this.require(`postcss-${name}`);
            } catch (e) {
              return plugins;
            }
          }
          plugins.push(plugin(options));
          return plugins;
        }, [] as any[]);
  try {
    postcss(plugins)
      .process(styles, { from: filename, to: `${filename}.css` })
      .then((result: { css: string }) => {
        if (!document.querySelector(`[data-filename="${filename}"]`)) {
          const div = document.createElement("div");
          div.innerHTML = `<style data-filename="${filename}">${result.css}</style>`;
          document.head.appendChild(div.firstChild as HTMLStyleElement);
        }
      })
      .catch((e: any) => {
        console.warn(
          "\\x1b[33m⚠️ attempt to load file with postcss",
          filename,
          "failed with error\\x1b[31m",
          e,
          "\\x1b[0m"
        );
      });
  } catch (e) {
    console.warn(
      "\\x1b[33m⚠️ attempt to load file with postcss",
      filename,
      "failed with error\\x1b[31m",
      e,
      "\\x1b[0m"
    );
  }
  document.body.appendChild(
    document.createComment("waiting to process ${filename} with postcss")
  );
  return "";
};

const toCamelCase = (name: string): string =>
  name.replace(/[-_]+(\w)/g, (_, char) => char.toUpperCase());

const getModuleClasses = (styles: string): Record<string, string> => {
  const identifiers: Record<string, string> = {};
  styles.replace(
    /(?:^|[\r\n\s]+)(?:\.([a-z][\w\-_]*))|@keyframes\s+([\{\s\r\n]+?)[\r\n\s]*\{/g,
    (_, classname, animation) => {
      if (classname) {
        identifiers[classname] = identifiers[toCamelCase(classname)] =
          classname;
      }
      if (animation) {
        identifiers[animation] = identifiers[toCamelCase(animation)] =
          animation;
      }
      return "";
    }
  );
  return identifiers;
};

const loadCssModuleStyles = (styles: string, filename: string) => `${loadStyles(
  filename,
  styles
)}
module.exports = ${JSON.stringify(getModuleClasses(styles))};`;

const ignoreCss = (_styles: string, filename: string) =>
  `/* ignoring CSS file ${filename} */`;

if (config.compile?.css === false) {
  registerCompiler(".css", ignoreCss);
} else {
  [
    ...new Set([...extensions, ...moduleExtensions, ...postcssExtensions]),
  ].forEach((extension) => {
    if (postcssExtensions.includes(extension)) {
      registerCompiler(extension, loadPostcssStyles);
    } else if (moduleExtensions.includes(extension)) {
      registerCompiler(extension, loadCssModuleStyles);
    } else {
      registerCompiler(extension, loadStyles);
    }
  });
}
