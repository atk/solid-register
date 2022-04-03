import { suite } from "uvu";
import * as assert from "uvu/assert";
import { render } from "solid-js/web";
import { Hello } from "./test";

const test = suite('Hello, World');

test.before.each((context) => {
  context.container = document.createElement('div');
  document.body.appendChild(context.container);
  context.unmount = () => document.body.removeChild(context.container);
});

test.after.each(({ unmount }) => unmount());

test('renders', ({ container }) => {
  const unmount = render(Hello, container);
  assert.is(container.innerHTML, '<div class="test">Hello, World</div>');
  unmount();
});

test('unmounts', ({ container }) => {
  const unmount = render(Hello, container);
  unmount();
  assert.is(container.innerHTML, '');
});

test.run();
