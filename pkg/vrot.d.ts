/* tslint:disable */
/* eslint-disable */
/**
* @param {number} limit
* @returns {number}
*/
export function rand(limit: number): number;
/**
*/
export class HashSet {
  free(): void;
/**
* @returns {HashSet}
*/
  static new(): HashSet;
/**
* @param {number} item
*/
  insert(item: number): void;
/**
* @param {number} item
* @returns {boolean}
*/
  contains(item: number): boolean;
/**
*/
  clear(): void;
}
/**
*/
export class Voca {
  free(): void;
/**
* @param {string} toml_string
* @returns {any}
*/
  static new(toml_string: string): any;
}
/**
*/
export class Word {
  free(): void;
}
/**
*/
export class WordInfo {
  free(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_voca_free: (a: number) => void;
  readonly __wbg_word_free: (a: number) => void;
  readonly __wbg_wordinfo_free: (a: number) => void;
  readonly __wbg_hashset_free: (a: number) => void;
  readonly voca_new: (a: number, b: number) => number;
  readonly hashset_new: () => number;
  readonly hashset_insert: (a: number, b: number) => void;
  readonly hashset_contains: (a: number, b: number) => number;
  readonly hashset_clear: (a: number) => void;
  readonly rand: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
