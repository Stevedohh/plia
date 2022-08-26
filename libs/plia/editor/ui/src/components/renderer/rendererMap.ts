import { ComponentNames } from '@plia/plia/types';

import { Block } from '../editor/Block/Block';
import { Image } from '../editor/Image/Image';
import { Typography } from '../editor/Typography/Typography';
import { Heading } from '../editor/Heading/Heading';

export const RendererMap = new Map();
RendererMap.set(ComponentNames.BLOCK, Block);
RendererMap.set(ComponentNames.TYPOGRAPHY, Typography);
RendererMap.set(ComponentNames.HEADING, Heading);
RendererMap.set(ComponentNames.IMAGE, Image);
