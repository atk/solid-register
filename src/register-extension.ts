import { registeredAliases, filenameAliasing } from "./compile-aliases";
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
    if (error && error.code === "ERR_REQUIRE_ESM") {
      const code = readFileSync(filename, "utf-8");
      module._compile(code, filename);
    } else {
      console.error("error when compiling", filename);
      throw error;
    }
  }
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
