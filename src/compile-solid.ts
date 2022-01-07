const babelTransformSync = require("@babel/core").transformSync;
const presetSolid = require("babel-preset-solid");

import { Loader, TransformOptions, transformSync } from "esbuild";

import "regenerator-runtime/runtime";

import { registerCompiler } from "./register-extension";

const esbuildTransform = (
  code: string,
  filename: string,
  options: TransformOptions = {},
  noJsx = false
) => {
  const loader: Loader = /\.([jt]sx?)$/i.test(filename)
    ? (RegExp.$1.toLowerCase().slice(0, noJsx ? 2 : 3) as Loader)
    : "js";

  const esbuilt = transformSync(code, {
    format: "esm",
    loader,
    sourcemap: "inline",
    target: "node10",
    ...options,
  });

  if (esbuilt.warnings.length) {
    console.warn(esbuilt.warnings);
  }
  if (esbuilt.code == null) {
    console.warn("\x1b[33m⚠️ could not transform file with esbuild", filename);
  }
  return esbuilt.code ?? code;
};

const babelTransform = (code: string, filename: string) => {
  const solidCode = babelTransformSync(code, {
    filename,
    presets: [presetSolid],
    sourceMaps: "inline",
  });
  if (solidCode.code == null) {
    console.warn(
      "\x1b[33m⚠️ could not transform file with solid-babel-preset",
      filename
    );
  }
  return solidCode.code ?? code;
};

const transformer = (code: string, filename: string) =>
  filename.endsWith("x")
    ? esbuildTransform(
        babelTransform(
          esbuildTransform(code, filename, { jsx: "preserve" }),
          filename
        ),
        filename,
        { format: "cjs" }
      )
    : esbuildTransform(code, filename, { format: "cjs" }, true);

registerCompiler(".js", transformer);
registerCompiler(".jsx", transformer);
registerCompiler(".ts", transformer);
registerCompiler(".tsx", transformer);
