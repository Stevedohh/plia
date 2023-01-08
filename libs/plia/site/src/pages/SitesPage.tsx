import { Component, For, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { useService } from 'solid-services';
import { createQuery } from '@tanstack/solid-query';

import { clearComponentsState } from '@plia/plia/editor/ui';
import { Button, ButtonStyles } from '@plia/plia/uikit';
import { SiteService } from '@plia/plia/network';

import { SiteCard } from '../components/SiteCard/SiteCard';

import styles from './styles.module.scss';

export const SitesPage: Component = () => {
  const siteService = useService(SiteService)();
  const navigate = useNavigate();

  const sitesQuery = createQuery(() => ['sites'], siteService.getAllSites);

  const onCreateSiteClick = async () => {
    const { createdSite, createdPage } = await siteService.createSiteWithPage();

    navigate(`builder/site/${createdSite.id}/page/${createdPage.id}`);
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
          <For each={sitesQuery.data}>{(site) => <SiteCard site={site} />}</For>
        </div>
      </div>
    </div>
  );
};
