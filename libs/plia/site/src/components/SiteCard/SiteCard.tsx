import { Component, createMemo } from 'solid-js';
import { useService } from 'solid-services';
import { Link } from '@solidjs/router';

import { Button, ButtonSizes, ButtonStyles } from '@plia/plia/components';
import { EyeIcon, HorizontalThreeDotsIcon, SettingsIcon } from '@plia/plia/icons';
import { Site } from '@plia/plia/types';

import { SiteService } from '../../services/site.service';

import styles from './styles.module.scss';

type SiteCardProps = Site & {
  reFetchSites: () => void;
};

export const SiteCard: Component<SiteCardProps> = (props) => {
  const siteService = useService(SiteService)();

  const editorSiteLink = createMemo(() => {
    const pageId = props.pages?.find(({ name }) => name === 'Home')?.id ?? props?.pages[0]?.id;

    return `/builder/site/${props.id}/page/${pageId}`;
  });

  const deleteSite = async () => {
    const deletedSiteResult = await siteService.deleteSiteById(props.id);
    if (deletedSiteResult.affected > 0) {
      props.reFetchSites();
    }
  };

  return (
    <div class={styles.siteCard}>
      <h3 class={styles.siteCardTitle}>{props.name}</h3>
      <span class={styles.siteCardInfo}>Unpublished</span>
      <div class={styles.siteCardActions}>
        <Button style={ButtonStyles.BORDERED} size={ButtonSizes.MD} class={styles.siteCardBtn}>
          <Link href={editorSiteLink()}>Edit Site</Link>
        </Button>
        <div class={styles.siteCardIconActions}>
          <button class={styles.siteCardBtnIcon}>
            <Link href={`${editorSiteLink()}/preview`}>
              <EyeIcon />
            </Link>
          </button>
          <button class={styles.siteCardBtnIcon}>
            <SettingsIcon />
          </button>
          <button class={styles.siteCardBtnIcon} onClick={deleteSite}>
            <HorizontalThreeDotsIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
