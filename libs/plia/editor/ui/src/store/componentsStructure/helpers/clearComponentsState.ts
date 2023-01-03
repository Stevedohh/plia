import { useAppDispatch } from '../../index';
import { clearComponentsStructure } from '../componentStructure.slice';

export const clearComponentsState = () => {
  const dispatch = useAppDispatch();

  dispatch(clearComponentsStructure());
};
