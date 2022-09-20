import { Component, createMemo, createSignal } from 'solid-js';
import { useDispatch } from 'solid-redux-primitives';
import { createForm } from '@felte/solid';

import { ComponentNames, Id } from '@plia/plia/types';

import { Input } from '~editor/ui/src/components/controls/Input/Input';
import {
  insertComponent,
  removeComponent,
  updateComponentProps,
} from '~editor/ui/src/store/componentsStructure/componentStructure.slice';
import { getNewComponent } from '~editor/ui/src/store/componentsStructure/helpers/getNewComponent';
import { DroppableDirections } from '~editor/ui/src/types';
import { getComponentById } from '~editor/ui/src/store/componentsStructure/helpers/getComponentById';
import { useAppSelector } from '~editor/ui/src/store';

export type ColumnsFormValues = {
  amountOfColumns: string | number;
};

type ColumnsFormProps = {
  componentId: Id;
  initialValues: ColumnsFormValues;
};

export const ColumnsForm: Component<ColumnsFormProps> = (props) => {
  const dispatch = useDispatch();
  const componentsStructure = useAppSelector((state) => state.componentStructure.struct);
  const columnComponent = createMemo(() =>
    getComponentById(componentsStructure(), props.componentId),
  );

  const { form, data: columnsData } = createForm<ColumnsFormValues>({
    initialValues: {
      amountOfColumns: columnComponent().children.length,
    },
  });

  const [prevAmountOfColumns, setPrevAmountOfColumns] = createSignal<number>(
    +props.initialValues.amountOfColumns,
  );

  const onFocusIn = () => {
    setPrevAmountOfColumns(+columnsData().amountOfColumns);
  };

  const insertColumns = (diff) => {
    if (diff >= 0) {
      for (let i = 0; i < diff; i++) {
        dispatch(
          insertComponent({
            component: getNewComponent(ComponentNames.COLUMN),
            direction: DroppableDirections.CENTER_LAST,
            droppableComponentId: props.componentId,
          }),
        );
      }
    }

    if (diff < 0) {
      const positiveDiff = diff * -1;
      const componentIdsToRemove = columnComponent()
        .children.map((component) => component.id)
        .splice(columnComponent().children.length - positiveDiff, positiveDiff);

      componentIdsToRemove.forEach((componentId) => {
        dispatch(
          removeComponent({
            componentId,
          }),
        );
      });
    }
  };

  const updateColumns = () => {
    const currentAmountOfColumns = +columnsData().amountOfColumns;
    const diffAmount = currentAmountOfColumns - prevAmountOfColumns();

    dispatch(updateComponentProps({ componentId: props.componentId, props: columnsData() }));
    insertColumns(diffAmount);
  };

  return (
    <form use:form onFocusOut={updateColumns} onFocusIn={onFocusIn}>
      <Input
        min={1}
        type="number"
        label="Amount of columns"
        name="amountOfColumns"
        id="amountOfColumns"
        value={String(columnComponent().children.length)}
      />
    </form>
  );
};
