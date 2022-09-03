import { useService } from 'solid-services';
import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import { Id, ComponentNames } from '@plia/plia/types';

import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';

import { EditableComponent } from '../wrappers/EditableComponent/EditableComponent';

import styles from './styles.module.scss';

type BlockProps = {
  styles: JSX.CSSProperties;
  class: string;
  children: JSX.Element;
  isLastChildren: boolean;
  id: Id;
};

export const Block: Component<BlockProps> = (props) => {
  const formSidebarService = useService(FormsSidebarService)();
  const child = children(() => props.children);

  const openBlockFormSidebar = (evt) => {
    evt.stopPropagation();
    formSidebarService.openEditorForm({
      componentId: props.id,
      componentName: ComponentNames.BLOCK,
      propertiesForm: {
        props: null,
      },
      stylesForm: {
        styles: props.styles,
        class: props.class,
      },
    });
  };

  return (
    <EditableComponent id={props.id} componentName={ComponentNames.BLOCK}>
      <div
        class={classNames(styles.block, props.class)}
        data-id={props.id}
        onClick={openBlockFormSidebar}
      >
        {child()}
      </div>
    </EditableComponent>
  );
};
