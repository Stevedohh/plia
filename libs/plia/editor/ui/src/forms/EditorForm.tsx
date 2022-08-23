import { Component, createSignal, JSX } from 'solid-js';
import classNames from 'classnames';

import { PropertiesForm } from './PropertiesForm/PropertiesForm';
import { StylesForm } from './StylesForm/StylesForm';
import { EditorFormProps } from '../components/layout/RightSidebar/services/editorFormSidebar.service';
import { EditorFormNames } from '../types';

import styles from './styles.module.scss';

export const EditorForm: Component<{ editorForm: JSX.Accessor<EditorFormProps> }> = (props) => {
  const [currentForm, setCurrentForm] = createSignal<EditorFormNames>(
    props.editorForm().initialForm ?? EditorFormNames.STYLES
  );

  const EditorFormsMap = new Map();
  EditorFormsMap.set(
    EditorFormNames.PROPERTIES,
    <PropertiesForm
      id={props.editorForm().componentId}
      componentName={props.editorForm().componentName}
      properties={props.editorForm().propertiesForm.props}
    />
  );
  EditorFormsMap.set(
    EditorFormNames.STYLES,
    <StylesForm
      id={props.editorForm().componentId}
      styles={props.editorForm().stylesForm.styles}
      class={props.editorForm().stylesForm.class}
    />
  );

  return (
    <div class={styles.editorForm}>
      <div class={styles.editorFormTabs}>
        <button
          class={classNames(styles.editorFormTab, {
            [styles.editorFormTabActive]: currentForm() === EditorFormNames.PROPERTIES,
          })}
          onClick={() => setCurrentForm(EditorFormNames.PROPERTIES)}
        >
          Properties
        </button>
        <button
          class={classNames(styles.editorFormTab, {
            [styles.editorFormTabActive]: currentForm() === EditorFormNames.STYLES,
          })}
          onClick={() => setCurrentForm(EditorFormNames.STYLES)}
        >
          Styles
        </button>
      </div>
      <div class={styles.editorFormContent}>{EditorFormsMap.get(currentForm())}</div>
    </div>
  );
};
