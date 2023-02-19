import { Component, For, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import { clearComponentsState } from '@plia/plia/editor/ui';
import { Button, ButtonStyles, showNotification } from '@plia/plia/uikit';
import { useMutation, useQuery } from '@plia/plia/network';
import { CreateSiteWithPageResponse, Sites } from '@plia/plia/types';

import { SiteCard } from '../components/SiteCard/SiteCard';

import styles from './styles.module.scss';

export const SitesPage: Component = () => {
  const navigate = useNavigate();

  const sitesQuery = useQuery<Sites>(({ site }) => site().getAllSites);

  const createSiteMutation = useMutation<CreateSiteWithPageResponse>(
    ({ site }) => site().createSiteWithPage,
  );

  const onCreateSiteClick = async () => {
    createSiteMutation.mutate(null, {
      onSuccess: ({ createdSite, createdPage }) => {
        navigate(`builder/site/${createdSite.id}/page/${createdPage.id}`);
        showNotification.success('Created');
      },
    });
  };

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
          </div>
        </div>
      </div>
      <div class={styles.container}>
        <div class={styles.sites}>
          <For each={sitesQuery.data}>
            {(site) => <SiteCard site={site} refetch={sitesQuery.refetch} />}
          </For>
        </div>
      </div>
    </div>
  );
};
