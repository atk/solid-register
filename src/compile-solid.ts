import { BabelFileResult, PluginItem } from "@babel/core";
import { conditions, config } from "./read-config";

let babelTransformSync = (
  code: string,
  _options?: TransformOptions & Record<string, any>
) => ({ code } as unknown as BabelFileResult);
let presetSolid: PluginItem = (_context, _option = {}) => {};

let solidPresetPresent = false;

try {
  babelTransformSync = require("@babel/core").transformSync;
  presetSolid = require("babel-preset-solid");
  solidPresetPresent = true;
} catch (e) {}

import { Loader, TransformOptions, transformSync } from "esbuild";

import "regenerator-runtime/runtime";

import { registerCompiler } from "./register-extension";

const useSSR =
  (conditions.length && conditions.includes("server")) ||
  config.aliases?.solid === "server";

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

const babelTransform = solidPresetPresent ? (code: string, filename: string) => {
  const solidCode = babelTransformSync(code, {
    filename,
    presets: [
      useSSR
        ? [presetSolid, { generate: "ssr", hydratable: true }]
        : presetSolid,
    ],
    sourceMaps: "inline",
  });
  if (solidCode.code == null) {
    console.warn(
      "\x1b[33m⚠️ could not transform file with solid-babel-preset",
      filename
    );
  }
  return solidCode.code ?? code;
} : (code: string, _filename: string) => code;

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
