import { createSignal } from 'solid-js';

export const useHover = (elementRef) => {
  const [ isHover, setIsHover ] = createSignal<boolean>(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  elementRef.addEventListener('mouseenter', handleMouseEnter);
  elementRef.addEventListener('mouseleave', handleMouseLeave);

  return isHover;
};
