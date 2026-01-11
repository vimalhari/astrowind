// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="../vendor/integration/types.d.ts" />

import type { JSX as AstroJSX } from 'astro/jsx-runtime';

declare global {
  namespace JSX {
    interface IntrinsicElements extends AstroJSX.IntrinsicElements {
      [tagName: string]: Record<string, unknown>;
    }
  }

  // Astro templates often use <Fragment> without an explicit import.
  const Fragment: (props: Record<string, unknown>) => unknown;
}

declare module 'astro/jsx-runtime' {
  export namespace JSX {
    type Element = unknown;
    interface IntrinsicAttributes {
      [attrName: string]: unknown;
    }
    interface IntrinsicElements {
      [tagName: string]: Record<string, unknown>;
    }
  }

  export const Fragment: (props: Record<string, unknown>) => unknown;
}

export {};
