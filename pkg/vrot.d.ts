/* tslint:disable */
/* eslint-disable */
/**
* @param {number} limit
* @returns {number}
*/
export function rand(limit: number): number;
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
  readonly voca_new: (a: number, b: number, c: number) => void;
  readonly rand: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
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
