import classNames from 'classnames';
import { Component, Show } from 'solid-js';
import { useService } from 'solid-services';
import { createForm } from '@felte/solid';
import { createQuery } from '@tanstack/solid-query';

import { ModalService } from '@plia/plia/layout';
import { AbstractModal, Button, ButtonSizes, ButtonStyles, Input } from '@plia/plia/components';
import { PublishSiteMetaInfo } from '@plia/plia/types';

import { SiteService } from '~editor/ui/src/services/api/site.service';

import { usePublishSite } from '../hooks/usePublishSite';

import styles from './styles.module.scss';

type PublishModalProps = {
  siteId: string;
  pageId: string;
};

export const PublishModal: Component<PublishModalProps> = (props) => {
  const modalService = useService(ModalService)();

  const { publishSite } = usePublishSite({ pageId: props.pageId, siteId: props.siteId });

  const siteService = useService(SiteService)();

  const siteQuery = createQuery(() => ['site', { id: props.siteId }], siteService.getSiteById);

  const { form } = createForm<PublishSiteMetaInfo>({
    onSubmit(siteMetaInfo) {
      publishSite(siteMetaInfo);
    },
  });

  return (
    <AbstractModal title="Publish Site">
      <Show when={!siteQuery.isLoading} keyed={true} fallback="Wait...">
        <form use:form>
          <Input
            id="publishSiteName"
            name="name"
            label="Project name"
            pattern="[a-z A-Z]*"
            value={siteQuery?.data.name}
          />

          <div class={styles.urlInput}>
            <Input
              id="publishSiteUrl"
              name="url"
              label="Site URL"
              placeholder="example"
              pattern="[a-zA-Z]*"
              value={siteQuery?.data.url}
            />
            <div class={styles.urlInputBlock}>
              <span class={styles.urlInputBlockText}>.stevedoh.com</span>
            </div>
          </div>

          <span
            class={classNames(
              styles.status,
              styles[`status${siteQuery?.data.status.toLowerCase()}`],
            )}
          >
            {siteQuery?.data.status}
          </span>

          <div class={styles.publishModalFooter}>
            <Button
              style={ButtonStyles.SECONDARY}
              size={ButtonSizes.MD}
              onClick={modalService.closeModal}
            >
              Cancel
            </Button>
            <Button style={ButtonStyles.PRIMARY} size={ButtonSizes.MD} type="submit">
              Save
            </Button>
          </div>
        </form>
      </Show>
    </AbstractModal>
  );
};
