import { config } from "./read-config";
import { sep } from "path";

const s = sep === "/" ? sep : `${sep}${sep}`;

const solidAliases = {
  server: {
    [`solid-js${s}dist${s}(solid|dev)`]: `solid-js${s}dist${s}solid`,
    [`solid-js${s}web${s}dist${s}(web|dev)`]: `solid-js${s}web${s}dist${s}web`,
  },
  dev: {
    [`solid-js${s}dist${s}(server|solid)`]: `solid-js${s}dist${s}dev`,
    [`solid-js${s}web${s}dist${s}(server|web)`]: `solid-js${s}web${s}dist${s}dev`,
  },
  browser: {
    [`solid-js${s}dist${s}(server|dev)`]: `solid-js${s}dist${s}solid`,
    [`solid-js${s}web${s}dist${s}(server|dev)`]: `solid-js${s}web${s}dist${s}web`,
  },
};

const usesConditions = process.execArgv.some(
  (arg, index, args) =>
    arg === "--conditions" &&
    ["development", "browser", "node"].includes(args[index + 1])
);

const aliases: Record<string, string> = Object.assign(
  config.aliases?.filenames || {},
  (!usesConditions &&
    config.aliases?.solid &&
    solidAliases[config.aliases?.solid]) ||
    {}
);
const aliasRegexes = Object.keys(aliases).reduce<Record<string, RegExp>>(
  (regexes, match) => {
    regexes[match] = new RegExp(match);
    return regexes;
  },
  {}
);

export const filenameAliasing = (filename: string) =>
  Object.entries(aliases).reduce<string>(
    (name, [match, replace]) =>
      !name && aliasRegexes[match].test(filename)
        ? filename.replace(aliasRegexes[match], replace)
        : name,
    ""
  ) || filename;

const extensions = config.aliases?.extensions || [".js", ".jsx", ".ts", ".tsx"];

export const registeredAliases: Record<string, Record<string, string>> = {};

if (Object.keys(aliases).length > 0) {
  extensions.forEach((ext) => {
    registeredAliases[ext] = aliases;
  });
}
