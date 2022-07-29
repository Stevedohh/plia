import { ComponentNames } from '../../types/types';
import { ImageForm } from './ImageForm/ImageForm';
import { TypographyForm } from './TypographyForm/TypographyForm';

export const PropertiesFormMap = new Map();
PropertiesFormMap.set(ComponentNames.IMAGE, ImageForm);
PropertiesFormMap.set(ComponentNames.TYPOGRAPHY, TypographyForm);
