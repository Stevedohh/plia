import { ComponentNames } from '@plia/plia/types';

import { ImageForm } from './ImageForm/ImageForm';
import { TypographyForm } from './TypographyForm/TypographyForm';
import { ColumnsForm } from './ColumnsForm/ColumnsForm';

export const PropertiesFormMap = new Map();
PropertiesFormMap.set(ComponentNames.IMAGE, ImageForm);
PropertiesFormMap.set(ComponentNames.TYPOGRAPHY, TypographyForm);
PropertiesFormMap.set(ComponentNames.COLUMNS, ColumnsForm);
