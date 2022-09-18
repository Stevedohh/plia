import {
  Accessor,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  Setter,
} from 'solid-js';
import { useService } from 'solid-services';
import { useStore } from 'solid-redux-primitives';
import { Unsubscribe } from 'redux';

import { useEventListener, useResize } from '@plia/plia/hooks';

import { ImageLoadingService } from '~editor/ui/src/services/imageLoaded.service';
import { asyncMagic } from '~editor/ui/src/tips-and-tricks/asyncMagic';
import { SimplifiedDraggable } from '~editor/ui/src/types';

type UseComponentPositionInput = {
  component: Accessor<HTMLElement>;
  isComponentHovered: Accessor<boolean>;
};

type UseComponentPositionOutput = {
  setDraggableComponent: Setter<SimplifiedDraggable>;
  draggableComponent: Accessor<SimplifiedDraggable>;
  componentRect: Accessor<DOMRect>;
  dragX: Accessor<number>;
  dragY: Accessor<number>;
};

export const useComponentPosition = ({
  component,
  isComponentHovered,
}: UseComponentPositionInput): UseComponentPositionOutput => {
  const store = useStore();
  const { isImageLoaded } = useService(ImageLoadingService)();

  const [componentRect, setComponentRect] = createSignal<DOMRect>({} as DOMRect);
  const [draggableComponent, setDraggableComponent] = createSignal<SimplifiedDraggable>({
    isActiveDraggable: false,
    transform: {
      x: 0,
      y: 0,
    },
  });

  const setComponentPosition = () => {
    setComponentRect(component().getBoundingClientRect());
  };

  const dragX = createMemo(() => (componentRect()?.x || 0) + draggableComponent().transform.x);
  const dragY = createMemo(() => (componentRect()?.y || 0) + draggableComponent().transform.y);

  onMount(() => {
    const body = document.getElementById('renderer');
    useEventListener('scroll', setComponentPosition, body);

    useResize(body, () => {
      if (!draggableComponent().isActiveDraggable) {
        setComponentPosition();
      }
    });

    const storeUnsubscribe: Unsubscribe = store.subscribe(() => {
      asyncMagic(() => {
        setComponentPosition();
      });
    });

    onCleanup(() => {
      storeUnsubscribe();
    });
  });

  createEffect(() => {
    if (isComponentHovered()) {
      setComponentPosition();
    }
  });

  createEffect(() => {
    if (isImageLoaded()) {
      setComponentPosition();
    }
  });

  return {
    setDraggableComponent,
    draggableComponent,
    componentRect,
    dragX,
    dragY,
  };
};
