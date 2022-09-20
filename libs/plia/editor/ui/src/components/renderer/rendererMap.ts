import { ComponentNames } from '@plia/plia/types';

import { Image } from '../editor/Image/Image';
import { Typography } from '../editor/Typography/Typography';
import { Heading } from '../editor/Heading/Heading';
import { Block } from '../editor/Block/Block';
import { Columns } from '../editor/Columns/Columns';
import { Column } from '../editor/Column/Column';
import { Body } from '../editor/Body/Body';

export const RendererMap = new Map();
RendererMap.set(ComponentNames.BLOCK, Block);
RendererMap.set(ComponentNames.TYPOGRAPHY, Typography);
RendererMap.set(ComponentNames.HEADING, Heading);
RendererMap.set(ComponentNames.IMAGE, Image);
RendererMap.set(ComponentNames.COLUMNS, Columns);
RendererMap.set(ComponentNames.COLUMN, Column);
RendererMap.set(ComponentNames.BODY, Body);
