import { config } from './read-config';
import { sep } from 'path';

const solidAliases = {
  server: {
    [`solid-js\\${sep}dist\\${sep}(solid|dev)`]: `solid-js\\${sep}dist\\${sep}solid`,
    [`solid-js\\${sep}web\\${sep}dist\\${sep}(web|dev)`]: `solid-js\\${sep}web\\${sep}dist\\${sep}web`
  },
  dev: {
    [`solid-js\\${sep}dist\\${sep}(server|solid)`]: `solid-js\\${sep}dist\\${sep}dev`,
    [`solid-js\\${sep}web\\${sep}dist\\${sep}(server|web)`]: `solid-js\\${sep}web\\${sep}dist\\${sep}dev`
  },
  browser: {
    [`solid-js\\${sep}dist\\${sep}(server|dev)`]: `solid-js\\${sep}dist\\${sep}solid`,
    [`solid-js\\${sep}web\\${sep}dist\\${sep}(server|dev)`]: `solid-js\\${sep}web\\${sep}dist\\${sep}web`
  }
};

const usesConditions = process.execArgv.some(
  (arg, index, args) => arg === '--conditions' && ['development', 'browser', 'node'].includes(args[index + 1])
);

const aliases: Record<string, string> = Object.assign(
  config.aliases?.filenames || {},
  !usesConditions && config.aliases?.solid && solidAliases[config.aliases?.solid] || {}
);
const aliasRegexes = Object.keys(aliases).reduce<Record<string, RegExp>>((regexes, match) => { 
  regexes[match] = new RegExp(match);
  return regexes;
}, {});

const filenameAliasing = (filename: string) => Object.entries(aliases).reduce<string>(
  (name, [match, replace]) => 
      !name && aliasRegexes[match].test(filename)
      ? filename.replace(aliasRegexes[match], replace)
      : name,
  '') || filename;

const extensions = config.aliases?.extensions || ['.js', '.jsx', '.ts', '.tsx'];

if (Object.keys(aliases).length > 0) {
  extensions.forEach(ext => {
    const loadMod = require.extensions[ext] ?? require.extensions['.js'];
    require.extensions[ext] = (module: NodeJS.Module, filename: string) => {
      loadMod(module, filenameAliasing(filename));
    };
  });
}
