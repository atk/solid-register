# solid-register

[Solid.js](https://solidjs.com) execution environment for Node.js

Allows running and testing Solid.js browser code in Node.js.


> :warning: **early developer preview, anything except the default configuration is mostly untested.**

## Features

- easily configurable in `package.json` or `solid-register-config.js`
- uses babel to automatically compile typescript / Solid.js-JSX
- optionally uses [`@babel/register`](https://babeljs.io/docs/en/babel-register) or [`ts-node`](https://typestrong.org/ts-node/) instead
- allows imports of asset paths
- handles CSS and CSS modules imports
- filename aliasing (e.g. mocking)
- setup of DOM environment¹ with [`jsdom`](https://github.com/jsdom/jsdom/), [`happy-dom`](https://github.com/capricorn86/happy-dom) or [`linkedom`](https://github.com/WebReflection/linkedom)²

---

¹: the DOM environments are peer dependencies as not to needlessly fill your `node_modules`.

²: with an added naive implementation of `window.getComputedStyles` in order to work with [`solid-testing-library`](https://github.com/solidjs/solid-testing-library/).

---

## Configuration

Your configuration can either be exported by `solid-register-config.js` or be a part of package.json in the property `solid-register`:

```json
{
  "solid-register": {
    "compile": {
      "solid": {
        "engine": "solid",
        "extensions": [".js", ".jsx", ".ts", ".tsx"]  
      }
    },
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

If you leave the configuration blank, normal browser tests should run. The configuration is meant to provide optional benefits, i.e. removing superfluous capabilities or use a faster DOM implementation with less features.

### Properties

```ts
type SolidRegisterConfiguration = {
  compile?: {
    /** configure solid configuration */
    solid?:
      | boolean
      | { engine: "solid"; extensions?: string[] }
      | { engine: "ts-node" }
      | { engine: "babel"; extensions: string[] };
    /** switch off css (modules) compilation */
    css?: boolean;
    assets?:
      | {
          /** an array with the extensions string of the files that should return an asset path, i.e. `['.svg', '.csv']` */
          extensions: string[];
        }
      | boolean;
  };
  /** which DOM implementation should be registered and what URL should be used (default: jsdom and https://localhost:3000) */
  dom?:
    | "jsdom"
    | "happy-dom"
    | "linkedom"
    | { engine: "jsdom" | "happy-dom" | "linkedom"; url?: string }
    | false;
  /** setup filename aliasing for running browser/dev/server versions of solid or mocks */
  aliases?: {
    /**
     * an object containing find-Expressions that will be used as `RegExp` and the value as a replace string,
     * @example ```ts
     * "filenames": { "my-dependency": "my-dependency/mock" }
     * ```
     * You can also use replace groups and other `RegExp` features
     */
    filenames?: { [find: string]: string };
    /**
     * A shorthand to mock the resolution of solid environments, default is `'dev'`
     *
     * You can alternatively run your testing with `node --conditions browser [testing script]`; in this case, the solid aliases will not be applied
     */
    solid?: "server" | "dev" | "browser";
  };
  /** files you want to run to setup your environment */
  setupFiles?: string[];
};
```

## Solid variants

Solid uses [conditional exports](https://nodejs.org/api/packages.html#conditional-exports) to provide different versions for server, dev and browser environment:

- `server` is supporting server-side-rendering (SSR), and has no `template` implementation
- `dev` is the client-version with added instrumentation to name signals and effects for debugging purposes
- `browser` is the client-version without the added instrumentation

You can select these variants in two ways: 1. by running `node` with the `--conditions [browser|development]` command line flag or 2. by using the `aliases.solid="server|dev|browser"` shorthand in the configuration. Providing a conditions flag will automatically disable the aliases for solid.

## Compilation

The default compilation uses the least babel filters necessary to get the code compiled. The options 'babel' and 'ts-node' are depending on external config and are mostly untested; recipes to use them will be provided at a later stage.

## DOM

The DOM libraries are included as peer dependencies so you need to install the one you want to use into your project:

Other options than the default `jsdom` will currently lead to errors when used with [solid-testing-libraries](https://github.com/solidjs/solid-testing-library/) or attempting more complex interactive tests. Their integration should be fixed at a later state. They're fine for single page render testing without interactions and can save a lot of time.

## Setup files

You can run the setup files directly from the solid-register configurations instead of using your test runner there.

## Running your tests

Install the dependencies into your repository:

```sh
npm i --save-dev solid-register jsdom
```

And run your test runner (e.g. tape, uvu, etc.):

```sh
[test-runner] -r solid-register [test-runner-options]
```

or 

```sh
node --conditions development node_modules/.bin/[test-runner] -r solid-register [test-runner-options]
```

Don't forget to add the command to your `package.json` scripts.

solid-register will automatically default to browser testing using the development environment; if you provide the `--conditions` flag yourself, it will detect it and not alias the solid import file names. The aliasing will only very slightly slow down, so both ways are valid. However, the aliasing will only affect the `solid-js` imports, other libraries with conditional exports will then get the node version by default. Also, if you need to test in different conditions, using the node argument may be the better choice.

## FAQ

### I get an error that `regenerator-runtime` is missing

If you are not using the solid-transform, you may need to add this manually.

### I get `TypeError: _$template is not a function`

This happens if you attempt to run solid code meant for the browser loaded with the solid version meant for the server. Either the file aliasing mechanism did not work (e.g. because you are also using [`module-alias`](https://github.com/ilearnio/module-alias)) or you misconfigured the aliases.

What you can do is add `node --conditions browser node_modules/.bin/` before your command starting the test runner (replace `/` with `\\` if you are running windows).

### I get errors that babel cannot find its polyfills

Again maybe your aliases are to broad; narrow them down. Installing `@babel/plugin-transform-runtime` might be another viable option. It is now an optional peer dependency that will be used if installed.

### I get an error that you cannot use `import` in a js file

Add extensions to the compile.solid part of the solid-register configuration, as shown in the example above.

## Building solid-register

You need to install the dependencies and run the `build` script

```sh
npm i && npm run build
```

## Contributions

Thanks to [SanichKotikov](https://github.com/SanichKotikov)!

---

© 2021 Alex Lohr
