import { config } from './read-config';

const extensions = typeof config.compile?.solid === 'object' &&
  config.compile.solid.engine === 'babel' &&
  config.compile.solid.extensions ||
  ['.jsx', '.tsx', '.ts', '.mjs'];

try {
  require('@babel/register')({
    "presets": [
      "@babel/preset-env",
      "babel-preset-solid",
      "@babel/preset-typescript"
    ],
    extensions
  });
} catch(e) {
  console.log('\x1b[33m⚠️ package missing to run the configured compilation.\n Please run:\x1b[0m\n\nnpm i --save-dev @babel-register\n');
}
