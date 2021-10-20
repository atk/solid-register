import { config } from './read-config';
import { emptyPage } from './empty-page';
import { registerDom } from './register-dom';
import { JSDOM } from 'jsdom';

const url = typeof config.dom === 'object' && config.dom.url || 'https://localhost:3000';

const { window } = new JSDOM(emptyPage, { url });

registerDom(window);
