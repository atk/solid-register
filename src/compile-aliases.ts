import { config } from './read-config';

const aliases: Record<string, string> = config.aliases?.filenames || {};
const alias_regexes = Object.keys(aliases).reduce<Record<string, RegExp>>((regexes, match) => { 
  regexes[match] = new RegExp(match);
  return regexes;
}, {});

const filenameAliasing = (filename: string) => Object.entries(aliases).reduce<string>(
  (name, [match, replace]) => 
      !name && alias_regexes[match].test(filename)
      ? filename.replace(alias_regexes[match], replace)
      : name,
  '') || filename;

const extensions = config.aliases?.extensions || ['.js', '.jsx', '.ts', '.tsx'];

extensions.forEach(ext => {
  const loadMod = require.extensions[ext] ?? require.extensions['.js'];
  require.extensions[ext] = (module: NodeJS.Module, filename: string) => {
    loadMod(module, filenameAliasing(filename));
  };
});
