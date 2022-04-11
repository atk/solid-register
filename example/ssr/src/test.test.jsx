import { suite } from "uvu";
import * as assert from "uvu/assert";
import { renderToString } from "solid-js/web";
import { Hello } from "./test";

const test = suite('Hello, World');

test('renders', () => {
  const output = renderToString(Hello);
  assert.is(output, '<div data-hk="0">Hello, World</div>');
});

test.run();
