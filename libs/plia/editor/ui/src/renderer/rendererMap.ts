import { Block } from '../components/editor/Block/Block';
import { Typography } from '../components/editor/Typography/Typography';
import { Image } from '../components/editor/Image/Image';

export const RendererMap = new Map();
RendererMap.set('Block', Block);
RendererMap.set('Typography', Typography);
RendererMap.set('Image', Image);
