/* eslint-disable comma-dangle */

import { createEffect, onCleanup } from 'solid-js';

export const useResize = (
  element: Element,
  handler: ResizeObserverCallback,
  options?: ResizeObserverOptions,
) => {
  createEffect(() => {
    const resizeInstance = new ResizeObserver(handler);
    resizeInstance.observe(element, options);

    onCleanup(() => {
      resizeInstance.unobserve(element);
      resizeInstance.disconnect();
    });
  });
};
