import { ComponentNames } from '@plia/plia/types';

import { ImageForm } from './ImageForm/ImageForm';
import { TypographyForm } from './TypographyForm/TypographyForm';

export const PropertiesFormMap = new Map();
PropertiesFormMap.set(ComponentNames.IMAGE, ImageForm);
PropertiesFormMap.set(ComponentNames.TYPOGRAPHY, TypographyForm);
