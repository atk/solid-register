const { transformSync } = require('@babel/core');
const presetEnv = require('@babel/preset-env');
const presetSolid = require('babel-preset-solid');
const presetTypeScript = require('@babel/preset-typescript');

import "regenerator-runtime/runtime";

import { registerExtension } from "./register-extension";

const createTransformer = (presets: any[]) => (code: string, filename: string) => {
  const transformed = transformSync(code, { filename, presets, sourceMaps: 'inline' });
  if (!transformed.code) {
    console.warn('\x1b[33m⚠️ could not transform file', filename);
  }
  return transformed.code ?? code
}

registerExtension('.js', (code: string, filename: string) => {
  // we have an ESM import as .js
  if (/.js$/.test(filename) && /\bimport\s+/.test(code)) {
    const transformed = transformSync(
      code,
      { filename, presets: [presetEnv], sourceMaps: 'inline' }
    );
    if (!transformed.code) {
      console.warn('\x1b[33m⚠️ could not transform file', filename);
    }
    return transformed.code ?? code
  }
  return code;
});
registerExtension('.jsx', createTransformer([presetEnv, presetSolid]));
registerExtension('.ts', createTransformer([presetEnv, presetTypeScript]));
registerExtension('.tsx', createTransformer([presetEnv, presetSolid, presetTypeScript]));
