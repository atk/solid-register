export const registerDom = (dom: any) => {
  Object.getOwnPropertyNames(dom).forEach((name) => {
    if (name === 'Event' || !globalThis.hasOwnProperty(name)) {
      Object.assign(globalThis, { [name]: dom[name] });
    }
  });
}
