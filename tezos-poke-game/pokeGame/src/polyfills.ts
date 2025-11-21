// ...existing code...
// Polyfills pour dépendances qui attendent des globals Node dans le navigateur
;(window as any).global = window;
import { Buffer } from 'buffer';
;(window as any).Buffer = Buffer;

// Fournir un objet process avec nextTick (certaines libs de stream en ont besoin)
;(window as any).process = {
  env: {},
  nextTick: (cb: Function, ...args: any[]) => Promise.resolve().then(() => cb(...args)),
};

// Garder aussi les alias sur globalThis
;(globalThis as any).global = window;
;(globalThis as any).Buffer = Buffer;
;(globalThis as any).process = (globalThis as any).process || (window as any).process;

// stream polyfill pour readable-stream / hash-base
import 'stream-browserify';