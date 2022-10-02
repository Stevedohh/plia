import { Component, For } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { useService } from 'solid-services';
import { createQuery } from '@tanstack/solid-query';

import { Button, ButtonStyles } from '@plia/plia/components';

import { SiteService } from '../services/site.service';
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
