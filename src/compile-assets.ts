import { config } from './read-config';
import { registerExtension } from "./register-extension";
import { sep } from 'path'

const assetExtensions = (typeof config.compile?.assets === 'object' && config.compile?.assets?.extensions)
  || ['.svg', '.png', '.gif', '.jpg', '.jpeg'];

registerExtension(assetExtensions, (_, filename) => 
  `module.exports = "${sep === '/' ? './' : ''}assets${sep}${filename.replace(/.*[\\\/]/, '')}";`
);
