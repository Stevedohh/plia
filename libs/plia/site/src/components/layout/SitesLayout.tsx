import { children, Component } from 'solid-js';
import { FlowProps } from 'solid-js/types/render/component';

import { Container } from '@plia/plia/uikit';

import { SitesHeader } from './Header/SitesHeader';

import styles from './styles.module.scss';

export const SitesLayout: Component<FlowProps> = (props) => {
  const content = children(() => props.children);

  return (
    <div class={styles.layout}>
      <SitesHeader />
      <Container>{content()}</Container>
    </div>
  );
};
