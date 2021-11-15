export const registerDom = (dom: any) => {
  const {
    window,
    document,
    Node,
    HTMLElement,
    SVGElement,
    requestAnimationFrame,
    cancelAnimationFrame,
    navigator
  } = dom;
  Object.assign(globalThis, {
    window,
    document,
    Node,
    HTMLElement,
    SVGElement,
    requestAnimationFrame,
    cancelAnimationFrame,
    navigator,
    Event: window.Event
  });
  Object.getOwnPropertyNames(dom).forEach((name) => {
    if (/^HTML\w+Element$/.test(name)) {
      Object.assign(globalThis, { [name]: dom[name] });
    }
  });
}
