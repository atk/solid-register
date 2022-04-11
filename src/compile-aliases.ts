import { config, projectPath, usesConditions } from "./read-config";
import { sep, join } from "path";

const s = sep === "/" ? sep : `${sep}${sep}`;

const solidConditionAliases = {
  server: {
    [`solid-js${s}dist${s}(solid|dev)`]: `solid-js${s}dist${s}server`,
    [`solid-js${s}web${s}dist${s}(web|dev)`]: `solid-js${s}web${s}dist${s}server`,
    [`solid-js${s}store${s}dist${s}(store|dev)`]: `solid-js${s}store${s}dist${s}server`,
  },
  dev: {
    [`solid-js${s}dist${s}(server|solid)`]: `solid-js${s}dist${s}dev`,
    [`solid-js${s}web${s}dist${s}(server|web)`]: `solid-js${s}web${s}dist${s}dev`,
    [`solid-js${s}store${s}dist${s}(server|store)`]: `solid-js${s}store${s}dist${s}dev`,
  },
  browser: {
    [`solid-js${s}dist${s}(server|dev)`]: `solid-js${s}dist${s}solid`,
    [`solid-js${s}web${s}dist${s}(server|dev)`]: `solid-js${s}web${s}dist${s}web`,
    [`solid-js${s}store${s}dist${s}(server|dev)`]: `solid-js${s}store${s}dist${s}store`,
  },
};

const createFilenameAliasing = (aliases: Record<string, string>) => {
  const regexes = Object.keys(aliases).reduce<Record<string, RegExp>>(
    (regexes, match) => {
      regexes[match] = new RegExp(match);
      return regexes;
    },
    {}
  );
  return (filename: string) =>
    Object.entries(aliases).reduce<string>(
      (name, [match, replace]) =>
        !name && regexes[match].test(filename)
          ? filename.replace(regexes[match], replace)
          : name,
      ""
    ) || filename;
};

const aliases: Record<string, string> = config.aliases?.filenames || {};
const solidAliases =
  (!usesConditions && solidConditionAliases[config.aliases?.solid ?? "dev"]) ||
  {};

export const filenameAliasing = createFilenameAliasing(aliases);
export const solidAliasing = solidAliases
  ? createFilenameAliasing(solidAliases)
  : (filename: string) => filename;

const extensions = config.aliases?.extensions || [".js", ".jsx", ".ts", ".tsx"];
interface NodeModuleClass {
  _resolveFilename: (
    filename: string,
    parentModule: NodeJS.Module,
    isMain: boolean,
    options: any
  ) => string;
}

export const init = () => {
  if (!Object.keys(aliases).length) {
    return;
  }
  const Module: NodeModuleClass =
    (module.constructor.length > 1 && (module.constructor as any)) ||
    require("module");
  const originalResolver = Module._resolveFilename.bind(Module);
  Module._resolveFilename = (
    filename: string,
    parentModule: NodeJS.Module,
    isMain: boolean,
    options: any
  ) => {
    if (extensions.some((extension) => parentModule.id.endsWith(extension))) {
      let alias = filenameAliasing(filename);
      if (alias !== filename) {
        if (alias.startsWith(sep) && !alias.startsWith(projectPath)) {
          alias = join(projectPath, alias);
        }
        return originalResolver(alias, parentModule, isMain, options);
      }
    }
    return originalResolver(filename, parentModule, isMain, options);
  };
};
