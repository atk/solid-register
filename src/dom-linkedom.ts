import { config } from './read-config';
import { emptyPage } from './empty-page';

const url = typeof config.dom === 'object' && config.dom.url || 'https://localhost:3000';

try {
  const parseHTML = require('linkedom').parseHTML;

  const {
    window,
    document,
    Node,
    HTMLElement,
    requestAnimationFrame,
    cancelAnimationFrame,
    navigator
  } = parseHTML(emptyPage);
  (window.location as any) = new window.URL(url);
  window.location.reload = () => {};
  window.location.assign = (url: string) => { (window.location as any) = new window.URL(url); };
  window.location.replace = window.location.assign;

  type GetComputedStyle = (elt: Element, pseudoElt?: string | null) => CSSStyleDeclaration;

  (window as typeof window & { getComputedStyle: GetComputedStyle }).getComputedStyle = (node: Element, pseudoElt?: string | null) => {
    const collectedStyles = {
      display: 'block', // default style
      getPropertyValue: function(name: string): string {
        return name === 'getPropertyValue' ? '' : (this as any)[name] ?? '';
      }
    } as CSSStyleDeclaration;
    const styleRules: Record<string, { [specificy: number]: string }> = {};
    // parse styles
    document.querySelectorAll('style').forEach((node: HTMLStyleElement) => {
      node.innerHTML.replace(/(?:^|\}[\s\r\n]*)([^\{]+?)\s*\{[\r\n\s]*([^}]+)/g, (_, sel: string, attr: string) => {
        if (Array.from(document.querySelectorAll(sel)).includes(node)) {
          let specificy = 0;
          sel.replace(/#\s+|\.\w+|\[[^\]]+\]|\w+/g, (part) => {
            const firstChar = part.charAt(0);
            specificy += firstChar === '#'
              ? 100000000
              : firstChar === '.'
                ? 10000
                : 1;
            return '';
          });
          attr.replace(/(?:^|;\s*)([^:]):\s*([^;}]+)/g, (_, name: string, value: string) => {
            styleRules[name] = { ...styleRules[name], [specificy]: value };
            return '';
          });
        }
        return '';
      });
    });
    Object.entries(styleRules).forEach(([name, values]) => {
      collectedStyles[name as any] = Object.entries(values).reduce(
        ([prevSpecificy, prevValue], [specificy, value]) => prevSpecificy > specificy
          ? [prevSpecificy, prevValue]
          : [specificy, value],
        [0, collectedStyles[name as any] as any]
      )[1];
    });
    return collectedStyles
  };

  Object.assign(globalThis, {
    window,
    document,
    Node,
    HTMLElement,
    requestAnimationFrame,
    cancelAnimationFrame,
    navigator
  });
} catch(e) {
  console.log('\x1b[33m⚠️ package missing to run the configured dom.\n Please run:\x1b[0m\n\nnpm i --save-dev linkedom\n');
}
