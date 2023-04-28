import { Component, For, onMount, Show } from 'solid-js';
import { useService } from 'solid-services';

import { AuthService } from '@plia/plia/auth/ui';
import { clearComponentsState } from '@plia/plia/editor/ui';
import { useQuery } from '@plia/plia/network';
import { Sites } from '@plia/plia/types';
import { Button, ButtonStyles } from '@plia/plia/uikit';

import { EmptySites } from '../components/EmptySites/EmptySites';
import { SiteCard } from '../components/SiteCard/SiteCard';
import { useCreateSite } from '../hooks/useCreateSite';

import styles from './styles.module.scss';

export const SitesPage: Component = () => {
  const authService = useService(AuthService)();

  const sitesQuery = useQuery<Sites>(({ site }) => site().getAllSites);

  const onCreateSiteClick = useCreateSite();

  onMount(() => {
    clearComponentsState();
  });

  return (
    <div class={styles.sitesPage}>
      <div class={styles.sitesHeader}>
        <div class={styles.container}>
          <div class={styles.sitesHeaderActions}>
            <Button style={ButtonStyles.PRIMARY} onClick={onCreateSiteClick}>
              Create site
            </Button>
            <Button style={ButtonStyles.SECONDARY} onClick={authService.logout}>
              Log out
            </Button>
          </div>
        </div>
      </div>
      <div class={styles.container}>
        <div class={styles.sites}>
          <Show when={sitesQuery.data?.length} keyed>
            <For each={sitesQuery.data}>
              {(site) => <SiteCard site={site} refetch={sitesQuery.refetch} />}
            </For>
          </Show>
        </div>
        <Show when={!sitesQuery.data?.length} keyed>
          <EmptySites />
        </Show>
      </div>
    </div>
  );
};
