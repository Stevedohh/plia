import { Component, createSignal, For, onMount } from 'solid-js';
import { useService } from 'solid-services';
import { useNavigate } from '@solidjs/router';

import { Sites } from '@plia/plia/types';
import { Button, ButtonStyles } from '@plia/plia/components';

import { SiteService } from '../services/site.service';
import { SiteCard } from '../components/SiteCard/SiteCard';

import styles from './styles.module.scss';

export const SitePage: Component = () => {
  const siteService = useService(SiteService)();
  const navigate = useNavigate();

  const [sites, setSites] = createSignal<Sites>([]);

  const onCreateSiteClick = async () => {
    const { createdSite, createdPage } = await siteService.createSiteWithPage();

    navigate(`builder/site/${createdSite.id}/page/${createdPage.id}`);
  };

  const fetchSites = () => {
    siteService.getAllSites().then(setSites);
  };

  onMount(() => {
    fetchSites();
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
          <For each={sites()}>{(site) => <SiteCard {...site} reFetchSites={fetchSites} />}</For>
        </div>
      </div>
    </div>
  );
};
