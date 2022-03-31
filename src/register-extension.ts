import { registeredAliases, filenameAliasing } from "./compile-aliases";
import { projectPath } from "./read-config";
import { readFileSync } from "fs";

export type Compiler = (code: string, filename: string) => string;

type LoaderModule = NodeJS.Module & { _compile: Compiler };

const registeredCompilers: Record<string, Compiler[]> = {};

export const registerCompiler = (extension: string, compiler: Compiler) => {
  if (!(extension in registeredCompilers)) {
    registeredCompilers[extension] = [];
  }
  registeredCompilers[extension].push(compiler);
};

const originalLoader = require.extensions[".js"];
const loadModule = (module: LoaderModule, filename: string) => {
  try {
    originalLoader(module, filename);
  } catch (error: any) {
    if (error) {
      if (error.code === "ERR_REQUIRE_ESM") {
        try {
          const code = readFileSync(filename, "utf-8");
          module._compile(code, filename);
        } catch (e) {
          throw error;
        }
        return;
      }
    }
    throw error ?? new Error(`error when compiling ${filename}`);
  }
};

const pathAliasing = (filename: string) => {
  const prefix =
    filename.startsWith("/") && !filename.startsWith(projectPath)
      ? projectPath
      : "";
  return `${prefix}${filenameAliasing(filename)}`;
};

const registerExtension = (extension: string | string[]) => {
  if (Array.isArray(extension)) {
    extension.forEach((ext) => registerExtension(ext));
  } else {
    require.extensions[extension] = (
      module: NodeJS.Module,
      filename: string
    ) => {
      if (registeredAliases[extension]) {
        filename = filenameAliasing(filename);
        registeredCompilers[extension] = [
          (code: string) =>
            code.replace(
              /(\b(?:import[^;'"]*|require)\s*\(?)(["'])(.*?)\2/gm,
              (full, call, delim, filename) =>
                full ? `${call}${delim}${pathAliasing(filename)}${delim}` : ""
            ),
          ...(registeredCompilers[extension] || []),
        ];
      }
      if (registeredCompilers[extension]) {
        const mod = module as LoaderModule;
        const modCompile = mod._compile.bind(mod);
        mod._compile = (code) =>
          modCompile(
            registeredCompilers[extension].reduce(
              (code, compiler) => compiler(code, filename),
              code
            ),
            code
          );
        loadModule(mod, filename);
      } else {
        loadModule(module as LoaderModule, filename);
      }
    };
  }
};

export const init = () => {
  const extensions = [
    ...new Set([
      ...Object.keys(registeredCompilers),
      ...Object.keys(registeredAliases),
    ]),
  ];

  registerExtension(extensions);
};
