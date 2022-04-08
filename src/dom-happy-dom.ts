import { config } from "./read-config";
import { registerDom } from "./register-dom";

const url =
  (typeof config.dom === "object" && config.dom.url) ||
  "https://localhost:3000";

try {
  const Window = require("happy-dom").Window;
  const window = new Window();
  window.location.href = url;

  // patch template element to support innerHTML if necessary,
  // see https://github.com/capricorn86/happy-dom/issues/451:
  const t = window.document.createElement("template");
  t.innerHTML = "test";
  if (!t.innerHTML) {
    Object.defineProperty(window.HTMLTemplateElement.prototype, "innerHTML", {
      get: function () {
        const xmlSerializer = new window.XMLSerializer();
        let xml = "";
        for (const node of this.content.childNodes) {
          xml += xmlSerializer.serializeToString(node);
        }
        return xml;
      },
      set: Object.getOwnPropertyDescriptor(
        window.Element.prototype,
        "innerHTML"
      )?.set,
    });
  }
  registerDom(window);
} catch (e) {
  console.warn(
    "\x1b[33m⚠️ package missing to run the configured dom.\n Please run:\x1b[0m\n\nnpm i --save-dev happy-dom\n"
  );
}
