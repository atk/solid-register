export const registerDom = (dom: any) => {
  const {
    window,
    document,
    Node,
    HTMLElement,
    SVGElement,
    DOMParser,
    requestAnimationFrame,
    cancelAnimationFrame,
    navigator,
    localStorage,
    sessionStorage
  } = dom;
  Object.assign(globalThis, {
    window,
    document,
    Node,
    HTMLElement,
    SVGElement,
    DOMParser,
    requestAnimationFrame,
    cancelAnimationFrame,
    navigator,
    localStorage,
    sessionStorage,
    Event: window.Event
  });
  Object.getOwnPropertyNames(dom).forEach((name) => {
    if (/^HTML\w+Element$/.test(name)) {
      Object.assign(globalThis, { [name]: dom[name] });
    }
  });
}
