const babelTransformSync = require('@babel/core').transformSync;
const presetSolid = require('babel-preset-solid');

import { Loader, transformSync } from 'esbuild';

import "regenerator-runtime/runtime";

import { registerCompiler } from "./register-extension";

const esbuildTransform = (
  code: string,
  filename: string,
  final: boolean = false
) => {
  const loader: Loader = /\.([jt]sx?)$/i.test(filename)
    ? RegExp.$1.toLowerCase().slice(0, final ? 2 : 3) as Loader
    : 'js';
  
  const cjs = transformSync(code, {
    format: final ? 'cjs' : 'esm',
    loader,
    sourcemap: true,
    target: 'node10',
    jsx: final ? undefined : 'preserve'
  });

  if (cjs.warnings.length) {
    console.warn(cjs.warnings);
  }
  if (cjs.code == null) {
    console.warn('\x1b[33m⚠️ could not transform file with esbuild', filename);
  }
  return cjs.code ?? code;
};

const babelTransform = (code: string, filename: string) => {
  const solidCode = babelTransformSync(code, {
    filename,
    presets: [presetSolid],
    sourceMaps: 'inline'
  });
  if (solidCode.code == null) {
    console.warn('\x1b[33m⚠️ could not transform file with solid-babel-preset', filename);
  }
  return solidCode.code ?? code;
}

const transformer = (code: string, filename: string) => {
  return filename.endsWith('x')
    ? esbuildTransform(
        babelTransform(esbuildTransform(code, filename), filename),
      filename, true)
    : esbuildTransform(code, filename, true);
};

registerCompiler('.js', transformer);
registerCompiler('.jsx', transformer);
registerCompiler('.ts', transformer);
registerCompiler('.tsx', transformer);
