import { Component, useContext } from 'solid-js';

import { BlockFormContext } from '../BlockFormContext';
import { TinyNumberInput } from '../../../components/controls/TinyNumberInput/TinyNumberInput';
import { SpacingControls } from './SpacingControls/SpacingControls';
import { getSpacingControls } from '../../helpers/getSpacingControls';
import { SidebarFormWrapper } from '../../../components/layout/RightSidebar/SidebarFormWrapper/SidebarFormWrapper';

import styles from './styles.module.scss';

export const SpacingForm: Component = () => {
  const { setFormData, formData } = useContext(BlockFormContext);

  const onSpacingChange = (spacing: 'padding' | 'margin') => (evt) => {
    const spacingValue = evt.target.value;

    setFormData(`${spacing}-top`, spacingValue);
    setFormData(`${spacing}-right`, spacingValue);
    setFormData(`${spacing}-bottom`, spacingValue);
    setFormData(`${spacing}-left`, spacingValue);
  };

  return (
    <SidebarFormWrapper label="Spacing">
      <div class={styles.spacingGroup}>
        <span class={styles.spacingGroupLabel}>Padding:</span>
        <TinyNumberInput onChange={onSpacingChange('padding')} />
        <span class={styles.spacingGroupLabel}>Margin:</span>
        <TinyNumberInput onChange={onSpacingChange('margin')} />
      </div>
      <SpacingControls label="Margin" controls={getSpacingControls('margin', formData)}>
        <SpacingControls
          class={styles.spacingBlockInside}
          label="Padding"
          controls={getSpacingControls('padding', formData)}
        />
      </SpacingControls>
    </SidebarFormWrapper>
  );
};
