import { config } from './read-config';

const extensions = typeof config.compile?.solid === 'object' &&
  config.compile.solid.engine === 'babel' &&
  config.compile.solid.extensions ||
  ['.jsx', '.tsx', '.ts', '.mjs'];

require('@babel/register')({
  "presets": [
    "@babel/preset-env",
    "babel-preset-solid",
    "@babel/preset-typescript"
  ],
  extensions
});
