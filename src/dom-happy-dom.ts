import { config } from './read-config';
import { Window } from 'happy-dom';

const url = typeof config.dom === 'object' && config.dom.url || 'https://localhost:3000';

const window = new Window();
window.location.href = url;

for (const key of Object.keys(window)) {
  if ((globalThis as any)[key] === undefined && key !== 'undefined') {
    (globalThis as any)[key] = (window as any)[key];
  }
}
