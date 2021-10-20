export type SolidRegisterConfiguration = {
  /** which DOM implementation should be registered and what URL should be used */
  dom?: 
    | 'jsdom' | 'happy-dom' | 'linkedom'
    | { engine: 'jsdom' | 'happy-dom' | 'linkedom', url?: string }
    | false,
  compile?: {
    /** configure solid configuration */
    solid?: boolean | { engine: 'solid' | 'ts-node' } | { engine: 'babel', extensions: string[] },
    /** switch off css (modules) compilation */
    css?: boolean,
    assets?: {
      /** an array with the extensions string of the files that should return an asset path, i.e. `['.svg', '.csv']` */
      extensions: string[]
    } | boolean
  },
  /**
   * an object containing find-Expressions that will be used as `RegExp` and the value as a replace string,
   * @example ```ts
   * "aliases": {
   *   "my-dependency": "my-dependency/mock"
   * }
   * ```
   * You can also use replace groups and other `RegExp` features
   */
  aliases?: {
    filenames: { [find: string]: string },
    extensions?: string[]
  },
  /** files you want to run to setup your environment */
  setupFiles?: string[]
};

const config: SolidRegisterConfiguration = {};

const getPackageJson = () => {
  let path = process.cwd();
  while (path) {
    try {
      const packageJson = require(`${path}/package.json`);
      return [packageJson, path];
    } catch(e) { /* package.json not loaded */ }
    path = path.replace(/\/[^/]+$/, '');
  }
  console.warn('\x1b[33m⚠️ package.json could not be found\x1b[0m');
  return [{}, './'];
}

const [packageJson, projectPath] = getPackageJson();

Object.assign(config, packageJson?.['solid-register']);

try {
  Object.assign(config, require(`${projectPath}solid-register-config`));
} catch(e) {}

export { config };
