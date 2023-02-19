import { Component, createMemo } from 'solid-js';
import { useService } from 'solid-services';
import { Link } from '@solidjs/router';
import classNames from 'classnames';

import { Button, ButtonSizes, ButtonStyles, showNotification } from '@plia/plia/uikit';
import { EyeIcon, SettingsIcon, TrashIcon } from '@plia/plia/uikit';
import { ModalService } from '@plia/plia/uikit';
import { useMutation } from '@plia/plia/network';
import { Site } from '@plia/plia/types';

import { SiteSettingsModal } from '../../modals/SiteSettingsModal/SiteSettingsModal';

import styles from './styles.module.scss';

type SiteCardProps = {
  site: Site;
  refetch: () => void;
};

export const SiteCard: Component<SiteCardProps> = (props) => {
  const modalService = useService(ModalService)();

  const editorSiteLink = createMemo(() => {
    const pageId =
      props.site?.pages?.find(({ name }) => name === 'Home')?.id ?? props?.site?.pages[0]?.id;

    return `/builder/site/${props.site?.id}/page/${pageId}`;
  });

  const deleteSiteMutation = useMutation(({ site }) => site().deleteSiteById, {
    onSuccess: () => {
      props.refetch();
      showNotification.success('Deleted');
    },
  });

  const onSettingsClick = () => {
    modalService.showModal(SiteSettingsModal as Component, {
      site: props.site,
      refetch: props.refetch,
    });
  };

  return (
    <div class={styles.siteCard}>
      <h3 class={styles.siteCardTitle}>{props.site?.name}</h3>
      <span class={styles.siteCardUrl}>{props.site?.url}.plia.com</span>
      <span class={styles.siteCardInfo}>Unpublished</span>
      <div class={styles.siteCardActions}>
        <Button style={ButtonStyles.BORDERED} size={ButtonSizes.MD} class={styles.siteCardBtn}>
          <Link href={editorSiteLink()}>Edit Site</Link>
        </Button>
        <div class={styles.siteCardIconActions}>
          <button title="Preview site" class={styles.siteCardBtnIcon}>
            <Link href={`${editorSiteLink()}/preview`}>
              <EyeIcon />
            </Link>
          </button>
          <button title="Edit site" class={styles.siteCardBtnIcon} onClick={onSettingsClick}>
            <SettingsIcon />
          </button>
          <button
            title="Delete site"
            class={classNames(styles.siteCardBtnIcon, styles.siteCardBtnIconTrash)}
            onClick={() => deleteSiteMutation.mutate(props.site?.id)}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
