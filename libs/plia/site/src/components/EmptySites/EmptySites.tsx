import { Component } from 'solid-js';

import { Button, ButtonSizes, ButtonStyles, NewSiteIcon } from '@plia/plia/uikit';

import { useCreateSite } from '../../hooks/useCreateSite';

import styles from './styles.module.scss';

export const EmptySites: Component = () => {
  const onCreateSiteClick = useCreateSite();

  return (
    <div class={styles.root}>
      <NewSiteIcon />
      <h3 class={styles.emptyTitle}>You don’t have any website yet</h3>
      <Button
        style={ButtonStyles.PRIMARY}
        size={ButtonSizes.LG}
        class={styles.emptyButton}
        onClick={onCreateSiteClick}
      >
        Create your first site
      </Button>
    </div>
  );
};
