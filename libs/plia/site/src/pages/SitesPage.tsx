import { Component, For, onMount, Show } from 'solid-js';

import { clearComponentsState } from '@plia/plia/editor/ui';
import { useQuery } from '@plia/plia/network';
import { Sites } from '@plia/plia/types';

import { EmptySites } from '../components/EmptySites/EmptySites';
import { SitesLayout } from '../components/layout/SitesLayout';
import { SiteCard } from '../components/SiteCard/SiteCard';

import styles from './styles.module.scss';

export const SitesPage: Component = () => {
  const sitesQuery = useQuery<Sites>(({ site }) => site().getAllSites);

  onMount(() => {
    clearComponentsState();
  });

  return (
    <SitesLayout>
      <Show when={sitesQuery.data?.length} keyed fallback={<EmptySites />}>
        <div class={styles.sites}>
          <For each={sitesQuery.data}>
            {(site) => <SiteCard site={site} refetch={sitesQuery.refetch} />}
          </For>
        </div>
      </Show>
    </SitesLayout>
  );
};
