import { children, FlowComponent } from 'solid-js';

import { Container } from '@plia/plia/uikit';

import { ProfileHeader } from './Header/ProfileHeader';

import styles from './styles.module.scss';

export const ProfileLayout: FlowComponent = (props) => {
  const content = children(() => props.children);

  return (
    <div class={styles.layout}>
      <ProfileHeader />
      <Container>{content()}</Container>
    </div>
  );
};
