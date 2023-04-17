import classNames from 'classnames';
import { Component, Show } from 'solid-js';
import { useService } from 'solid-services';
import { createForm } from '@felte/solid';
import { validator } from '@felte/validator-yup';
import * as yup from 'yup';

import { ModalService } from '@plia/plia/uikit';
import { useQuery } from '@plia/plia/network';
import { AbstractModal, Button, Input, ButtonSizes, ButtonStyles } from '@plia/plia/uikit';
import { Id, PublishSiteMetaInfo, Site } from '@plia/plia/types';

import { usePublishSite } from '../hooks/usePublishSite';

import styles from './styles.module.scss';

type PublishModalProps = {
  siteId: string;
  pageId: string;
};

const schema = yup.object({
  name: yup.string().required(),
  url: yup.string().required(),
});

export const PublishModal: Component<PublishModalProps> = (props) => {
  const modalService = useService(ModalService)();

  const { publishSite } = usePublishSite({
    pageId: props.pageId,
    siteId: props.siteId,
    onPublish: modalService.closeModal,
  });

  const siteQuery = useQuery<Site, Id>(({ site }) => site().getSiteById, props.siteId);

  const { form, errors } = createForm<PublishSiteMetaInfo>({
    onSubmit(siteMetaInfo) {
      publishSite(siteMetaInfo);
    },
    extend: validator({ schema }),
  });

  return (
    <AbstractModal title="Publish Site">
      <Show when={!siteQuery.isLoading} keyed={true} fallback="Loading...">
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
              Publish
            </Button>
          </div>
        </form>
      </Show>
    </AbstractModal>
  );
};
