export const registerExtension = (
  extension: string | string[],
  compile: (code: string, filename: string) => string
) => {
  if (Array.isArray(extension)) {
    extension.forEach(ext => registerExtension(ext, compile));
  } else {
    const modLoad = require.extensions[extension] ?? require.extensions['.js'];
    require.extensions[extension] = (module: NodeJS.Module, filename: string) => {
      const mod = module as NodeJS.Module  & { _compile: (code: string, filename: string) => void };
      const modCompile = mod._compile.bind(mod);
      mod._compile = (code) => modCompile(compile(code, filename), filename);
      modLoad(mod, filename);
    }
  }
};
