/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */

import { createEffect, onCleanup } from 'solid-js';

export const useEventListener = <
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH,
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
  element?: T,
  options?: boolean | AddEventListenerOptions
) => {
  createEffect(() => {
    const targetElement: T | Document = element || document;

    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    const eventListener: typeof handler = (event) => handler(event);

    targetElement.addEventListener(eventName, eventListener, options);

    onCleanup(() => {
      targetElement.removeEventListener(eventName, eventListener);
    });
  });
};
