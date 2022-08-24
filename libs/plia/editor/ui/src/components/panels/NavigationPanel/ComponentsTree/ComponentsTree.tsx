import { Component, createMemo, For, Show } from 'solid-js';
import { useService } from 'solid-services';
import classNames from 'classnames';

import { Structure } from '@plia/plia/types';
import { useBoolean } from '@plia/plia/hooks';

import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';
import { HoveredComponentService } from '~editor/ui/src/services/hoveredComponent.service';
import { TreeLines } from '~editor/ui/src/components/panels/NavigationPanel/TreeLines/TreeLines';
import { getComponentEditorForm } from '~editor/ui/src/helpers/getComponentEditorForm';

import styles from './styles.module.scss';

type ComponentsTreeProps = {
  structure: Structure;
  level: number;
};

export const ComponentsTree: Component<ComponentsTreeProps> = (props) => {
  const formSidebarService = useService(FormsSidebarService)();
  const { setHoveredComponentId } = useService(HoveredComponentService)();
  const { toggle, value } = useBoolean(true);

  const isLastNode = createMemo(() => !!props.structure?.children?.length);
  const isRoot = createMemo(() => props.structure?.id === 'root');

  const openFormsSidebar = () => {
    if (!isRoot()) {
      formSidebarService.openEditorForm(getComponentEditorForm(props.structure));
    }
  };

  return (
    <div>
      <div
        class={styles.treeNode}
        onmouseover={() => setHoveredComponentId(props.structure?.id)}
        onmouseout={() => setHoveredComponentId(null)}
      >
        <TreeLines level={props.level - 1} isLast={isLastNode()} />
        <div class={styles.componentName}>
          <Show when={isLastNode() && !isRoot()}>
            <button class={styles.toggleButton} onClick={toggle}>
              <div
                class={classNames(styles.toggleTriangle, {
                  [styles.toggleTriangleActive]: !value(),
                })}
              ></div>
            </button>
          </Show>
          <button
            class={classNames(styles.componentTitle, {
              [styles.componentNameLast]: !isLastNode(),
            })}
            onClick={openFormsSidebar}
          >
            {props.structure.component}
          </button>
        </div>
      </div>
      <Show when={isLastNode() && value()}>
        <For each={props.structure?.children}>
          {(child) => ComponentsTree({ structure: child, level: props.level + 1 })}
        </For>
      </Show>
    </div>
  );
};
