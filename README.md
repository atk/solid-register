# solid-register

Solid.js execution environment for Node.js

[![License][license-image]][license-url]

Allows running and testing Solid.js browser code in Node.js.

## Features

- easily configurable in `package.json` or `solid-register-config.js`
- uses babel to automatically compile typescript / Solid.js-JSX
- optionally uses `@babel/register` or `ts-node` instead
- allows imports of asset paths
- handles CSS and CSS modules imports
- filename aliasing (e.g. mocking)
- setup of DOM environment¹ with [`jsdom`](https://github.com/jsdom/jsdom/), [`happy-dom`](https://github.com/capricorn86/happy-dom) or [`linkedom`](https://github.com/WebReflection/linkedom)²

¹: the DOM environments are peer dependencies as not to needlessly fill your `node_modules`.
²: with an added naive implementation of `window.getComputedStyles` in order to work with [`solid-testing-library`](https://github.com/solidjs/solid-testing-library/).

## Configuration

Your configuration can either be exported by `solid-register-config.js` or be a part of package.json in the property `solid-register`:

```json
{
  "solid-register": {
    "dom": "happy-dom",
    "aliases": {
      "filenames": {
        "my-dependency": "my-dependency/mock"
      },
      "extensions": [".js", ".jsx", ".ts", ".tsx"]
    }
  }
}
```

### Properties

```ts
type SolidRegisterConfiguration = {
  /** which DOM implementation should be registered */
  dom?: 'jsdom' | 'happy-dom' | 'linkedom' | false,
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
```

A good start is just to select a DOM environment.

## Running your tests

```sh
node --conditions browser -r solid-register test.tsx
```

If you want to use the filename aliasing features to load the browser version of Solid.js, you can omit the `--conditions browser` argument. Test runners like [`uvu`](https://github.com/lukeed/uvu) and [`tape`](https://github.com/substack/tape) will forward their command line arguments to node, so just replace `node` in the above example with your test runner.

To alias the Solid.js server files to their web versions, add the following aliases:

```json
{
  "aliases": {
    "solid-js\/dist\/server": "solid-js/dist/solid",
    "solid-js\/web\/dist\/server": "solid-js/web/dist/web"
  }
}
```

Alternatively, you coudl choose the dev versions for debugging purposes:

```json
{
  "aliases": {
    "solid-js\/dist\/server": "solid-js/dist/dev",
    "solid-js\/web\/dist\/server": "solid-js/web/dist/dev"
  }
}
```

## Building solid-register

You need to install the dependencies and run the `build` script

```sh
npm i && npm run build
```
