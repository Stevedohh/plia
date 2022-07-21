import { Block } from '../components/editor/Block/Block';
import { Typography } from '../components/editor/Typography/Typography';
import { Image } from '../components/editor/Image/Image';
import { ComponentNames } from '../types/types';

export const RendererMap = new Map();
RendererMap.set(ComponentNames.BLOCK, Block);
RendererMap.set(ComponentNames.TYPOGRAPHY, Typography);
RendererMap.set(ComponentNames.IMAGE, Image);
