export const registerDom = (dom: any) => {
  const {
    window,
    document,
    Node,
    HTMLElement,
    requestAnimationFrame,
    cancelAnimationFrame,
    navigator
  } = dom;
  Object.assign(globalThis, {
    window,
    document,
    Node,
    HTMLElement,
    requestAnimationFrame,
    cancelAnimationFrame,
    navigator
  });
}
