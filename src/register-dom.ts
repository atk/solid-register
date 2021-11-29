export const registerDom = (dom: any) => {
  if (typeof dom.requestAnimationFrame !== "function") {
    dom.requestAnimationFrame = (callback: () => void): any =>
      window.setTimeout(callback, 0);
    dom.cancelAnimationFrame = (id: any) => window.clearTimeout(id);
  }
  Object.getOwnPropertyNames(dom).forEach((name) => {
    if (name === "Event" || !globalThis.hasOwnProperty(name)) {
      Object.assign(globalThis, { [name]: dom[name] });
    }
  });
};
