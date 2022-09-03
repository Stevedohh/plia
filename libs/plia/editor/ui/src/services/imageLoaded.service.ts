import { Accessor, createSignal, Setter } from 'solid-js';

import { Id } from '@plia/plia/types';

type HoveredComponentServiceOutput = {
  isImageLoaded: Accessor<Id>;
  setIsImageLoaded: Setter<Id>;
};

export const ImageLoadingService = (): HoveredComponentServiceOutput => {
  const [isImageLoaded, setIsImageLoaded] = createSignal<Id>(null);

  return {
    isImageLoaded,
    setIsImageLoaded,
  };
};
