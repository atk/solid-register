import { suite } from "uvu";
import * as assert from "uvu/assert";
import { render } from "solid-js/web";
import { Hello } from "./test";

const test = suite('Hello, World');

// make sure styles are already loaded before we test:
const checkStyle = (resolve) =>
  document.querySelector('style[data-filename$="test.postcss.css"]')
  ? resolve()
  : window.requestAnimationFrame(() => checkStyle(resolve));
test.before(() => new Promise(checkStyle));

test.before.each((context) => {
  context.container = document.createElement('div');
  document.body.appendChild(context.container);
  context.unmount = () => document.body.removeChild(context.container);
});

test.after.each(({ unmount }) => unmount());

test('renders', ({ container }) => {
  const unmount = render(Hello, container);
  assert.is(container.innerHTML, '<div>Hello, World</div>');
  unmount();
});

test('unmounts', ({ container }) => {
  const unmount = render(Hello, container);
  unmount();
  assert.is(container.innerHTML, '');
});

test('receives postcss styles', ({ container }) => {
  const unmount = render(Hello, container);
  assert.is(window.getComputedStyle(container.querySelector('div')).fontSize, '1.2em');
  unmount();
});

test.run();
