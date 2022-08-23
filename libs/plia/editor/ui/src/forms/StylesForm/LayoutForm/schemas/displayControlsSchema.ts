import {
  DisplayBlockIcon,
  DisplayFlexIcon,
  DisplayGridIcon,
  DisplayInlineBlockIcon,
  DisplayInlineIcon,
  EyeInvisibleIcon,
} from '@plia/plia/icons';

import { TinyButtonControlsSchema } from '~editor/ui/src/types';

export const displayControlsSchema: TinyButtonControlsSchema = [
  {
    value: 'block',
    children: DisplayBlockIcon,
  },
  {
    value: 'flex',
    children: DisplayFlexIcon,
  },
  {
    value: 'grid',
    children: DisplayGridIcon,
  },
  {
    value: 'inline-block',
    children: DisplayInlineBlockIcon,
  },
  {
    value: 'inline',
    children: DisplayInlineIcon,
  },
  {
    value: 'none',
    children: EyeInvisibleIcon,
  },
];
