import { Component, createMemo } from 'solid-js';
import { useService } from 'solid-services';
import { Link } from '@solidjs/router';
import { createMutation, useQueryClient } from '@tanstack/solid-query';
import classNames from 'classnames';

import { Button, ButtonSizes, ButtonStyles } from '@plia/plia/uikit';
import { EyeIcon, SettingsIcon, TrashIcon } from '@plia/plia/uikit';
import { ModalService } from '@plia/plia/uikit';
import { Id, Site } from '@plia/plia/types';
import { SiteService } from '@plia/plia/network';

import { SiteSettingsModal } from '../../modals/SiteSettingsModal/SiteSettingsModal';

import styles from './styles.module.scss';

export const SiteCard: Component<{ site: Site }> = (props) => {
  const siteService = useService(SiteService)();
  const modalService = useService(ModalService)();

  const queryClient = useQueryClient();

  const editorSiteLink = createMemo(() => {
    const pageId =
      props.site?.pages?.find(({ name }) => name === 'Home')?.id ?? props?.site?.pages[0]?.id;

    return `/builder/site/${props.site?.id}/page/${pageId}`;
  });

  const deleteSiteMutation = createMutation<void, never, Id>(
    ['site/delete'],
    siteService.deleteSiteById,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['sites']);
      },
    },
  );

  const onSettingsClick = () => {
    modalService.showModal(SiteSettingsModal as Component, {
      site: props.site,
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
