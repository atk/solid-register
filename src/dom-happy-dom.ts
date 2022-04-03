import { config } from "./read-config";

const url =
  (typeof config.dom === "object" && config.dom.url) ||
  "https://localhost:3000";

try {
  const Window = require("happy-dom").Window;

  const window = new Window();
  window.location.href = url;

  for (const key of Object.keys(window)) {
    if ((globalThis as any)[key] === undefined && key !== "undefined") {
      (globalThis as any)[key] = (window as any)[key];
    }
  }
} catch (e) {
  console.warn(
    "\x1b[33m⚠️ package missing to run the configured dom.\n Please run:\x1b[0m\n\nnpm i --save-dev happy-dom\n"
  );
}
