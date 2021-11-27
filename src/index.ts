import { config } from './read-config';

if (config.dom) {
  const engine = typeof config.dom === 'object' ? config.dom.engine : config.dom;
  if (['jsdom', 'happy-dom', 'linkedom'].includes(engine)) {
    try {
      require(`./dom-${engine}`)
    } catch(e) {
      console.warn(
        `\\x1b[33m⚠️ could not register "${config.dom}"" DOM implementation:\n\\x1b[31m`,
        e,
        '\x1b[0m\nMaybe you need to install the package (jsdom, happy-dom or linkedom) since it is a peer dependency'
      );
    }
  } else {
    console.warn(
      '\x1b[33m⚠️ requested dom engine',
      engine,
      'is not supported; please choose between jsdom, happy-dom, linkedom\n\x1b[0m'
    );
  }
}

if (config.compile?.solid !== false) {
  if (typeof config.compile?.solid === 'object') {
    const engine = config.compile.solid.engine;
    if (['solid', 'babel', 'ts-node'].includes(engine)) {
      try {
        require(`./compile-${engine}`);
      } catch(e) {
        console.warn(
          '\x1b[33m⚠️ loading requested compilation engine failed with error\n\x1b[31m',
          e,
          '\x1b[0m\nMaybe you need to install the package (@babel/register or ts-node), since it is a peer dependency'
        );
      }
    } else {
      console.warn(
        '\x1b[33m⚠️ requested compilation engine',
        engine,
        'is not supported; please choose between solid, ts-node, babel\n\x1b[0m'
      );
    }
  } else {
    require('./compile-solid');
  }
}

if (config.compile?.assets !== false) {
  require('./compile-assets');
}

if (config.compile?.css !== false) {
  require('./compile-css');
}

if (config.aliases?.filenames || config.aliases?.solid) {
  require('./compile-aliases');
}

require('./register-extension').init();

config.setupFiles?.forEach(require);
