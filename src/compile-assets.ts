import { config } from './read-config';
import { registerExtension } from "./register-extension";

const assetExtensions = (typeof config.compile?.assets === 'object' && config.compile?.assets?.extensions)
  || ['.svg', '.png', '.gif', '.jpg', '.jpeg'];

registerExtension(assetExtensions, (_, filename) => 
  `module.exports = "./assets/${filename.replace(/.*\//, '')}";`
);
