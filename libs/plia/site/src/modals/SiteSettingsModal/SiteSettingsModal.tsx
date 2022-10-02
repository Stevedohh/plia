import { createForm } from '@felte/solid';
import { useService } from 'solid-services';
import { createMutation, useQueryClient } from '@tanstack/solid-query';
import { Component } from 'solid-js';

import { Button, ButtonSizes, ButtonStyles } from '@plia/plia/components';
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
    initialValues: {
      name: props.site?.name,
      url: props.site?.url,
    },
  });

  return (
    <div class={styles.siteSettings}>
      <form ref={form} autocomplete="off">
        <div class={styles.siteSettingsHead}>Site Settings</div>

        <div class={styles.siteSettingsContent}>
          <div class={styles.inputWrapper}>
            <label class={styles.inputLabel} for="siteName">
              Name
            </label>
            <input name="name" id="siteName" class={styles.input} />
          </div>
          <div class={styles.inputWrapper}>
            <label class={styles.inputLabel} for="siteUrl">
              Url
            </label>
            <input name="url" id="siteUrl" class={styles.input} />
          </div>
        </div>

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
    </div>
  );
};
