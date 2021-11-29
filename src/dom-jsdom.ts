import { config } from "./read-config";
import { emptyPage } from "./empty-page";
import { registerDom } from "./register-dom";

const url =
  (typeof config.dom === "object" && config.dom.url) ||
  "https://localhost:3000";

try {
  const JSDOM = require("jsdom").JSDOM;
  const { window } = new JSDOM(emptyPage, { url });
  registerDom(window);
} catch (e) {
  console.log(
    "\x1b[33m⚠️ package missing to run the configured dom.\n Please run:\x1b[0m\n\nnpm i --save-dev jsdom\n"
  );
}
