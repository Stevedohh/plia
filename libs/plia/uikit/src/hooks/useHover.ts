import { createSignal } from 'solid-js';

export const useHover = (elementRef) => {
  const [isHover, setIsHover] = createSignal<boolean>(false);

  const handleMouseEnter = (evt) => {
    evt.stopPropagation();
    setIsHover(true);
  };
  const handleMouseLeave = (evt) => {
    evt.stopPropagation();
    setIsHover(false);
  };

  elementRef.addEventListener('mouseover', handleMouseEnter);
  elementRef.addEventListener('mouseout', handleMouseLeave);

  return isHover;
};
