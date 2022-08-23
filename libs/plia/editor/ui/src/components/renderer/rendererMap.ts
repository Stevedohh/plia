import { Block } from '../editor/Block/Block';
import { Typography } from '../editor/Typography/Typography';
import { Image } from '../editor/Image/Image';
import { ComponentNames } from '../../types';

export const RendererMap = new Map();
RendererMap.set(ComponentNames.BLOCK, Block);
RendererMap.set(ComponentNames.TYPOGRAPHY, Typography);
RendererMap.set(ComponentNames.IMAGE, Image);
