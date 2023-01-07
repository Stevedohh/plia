import { createForm } from '@felte/solid';
import { useService } from 'solid-services';
import { createMutation, useQueryClient } from '@tanstack/solid-query';
import { Component } from 'solid-js';

import { AbstractModal, Button, ButtonSizes, ButtonStyles, Input } from '@plia/plia/components';
import { ModalService } from '@plia/plia/layout';
import { Site } from '@plia/plia/types';

import { SiteService } from '../../services/site.service';

import styles from './styles.module.scss';

export const SiteSettingsModal: Component<{ site: Site }> = (props) => {
  const modalService = useService(ModalService)();
  const siteService = useService(SiteService)();
  const queryClient = useQueryClient();

  const updateSiteMutation = createMutation<unknown, unknown, Site>(
    ['site/update'],
    siteService.updateSiteById,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['sites']);
      },
    },
  );

  const { form } = createForm<Site>({
    onSubmit(site) {
      const updatedSite: Site = {
        ...site,
        id: props.site.id,
      };

      updateSiteMutation.mutate(updatedSite);
    },
  });

  return (
    <AbstractModal title="Site Settings">
      <form ref={form} autocomplete="off">
        <Input id="siteName" name="name" label="Name" value={props.site?.name} />
        <Input id="siteUrl" name="url" label="Url" value={props.site?.url} />
        <div class={styles.siteSettingsFooter}>
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
    </AbstractModal>
  );
};
