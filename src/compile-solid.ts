import { BabelFileResult, PluginItem } from "@babel/core";

let babelTransformSync = (
  code: string,
  _options?: TransformOptions & Record<string, any>
) => ({ code } as unknown as BabelFileResult);
let presetSolid: PluginItem = (_context, _option = {}) => {};

try {
  babelTransformSync = require("@babel/core").transformSync;
  presetSolid = require("babel-preset-solid");
} catch (e) {}

import { Loader, TransformOptions, transformSync } from "esbuild";

import "regenerator-runtime/runtime";
import { config } from "./read-config";

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

const extensions = (config.compile?.solid &&
  typeof config.compile?.solid === "object" &&
  config.compile.solid.engine === "solid" &&
  config.compile.solid.extensions) || [".jsx", ".ts", ".tsx"];

extensions.forEach((extension) => registerCompiler(extension, transformer));
