import { Component } from '@plia/plia/types';

import { EditorFormProps } from '~editor/ui/src/services/formsSidebar.service';
import { EditorFormNames } from '~editor/ui/src/types';

export const getComponentEditorForm = (component: Component): EditorFormProps => ({
  componentId: component.id,
  componentName: component.component,
  initialForm: component.props ? EditorFormNames.PROPERTIES : EditorFormNames.STYLES,
  stylesForm: {
    styles: component.styles,
    class: component.className,
  },
  propertiesForm: {
    props: component.props,
  },
});
