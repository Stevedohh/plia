import { createForm } from '@felte/solid';
import { useService } from 'solid-services';
import { Component, Show } from 'solid-js';

import {
  AbstractModal,
  Button,
  ButtonSizes,
  ButtonStyles,
  Input,
  ModalService,
  showNotification,
} from '@plia/plia/uikit';
import { Site } from '@plia/plia/types';
import { useMutation } from '@plia/plia/network';

import styles from './styles.module.scss';

type SiteSettingsModalProps = {
  site: Site;
  refetch: () => void;
};

export const SiteSettingsModal: Component<SiteSettingsModalProps> = (props) => {
  const modalService = useService(ModalService)();

  const updateSiteMutation = useMutation(({ site }) => site().updateSiteById, {
    onSuccess: () => {
      props.refetch();
      modalService.closeModal();
      showNotification.success('Updated');
    },
    onError: (err) => {
      showNotification.error(err.response.data.message ?? 'Something went wrong');
    },
  });

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
        <Show when={props.site.status === 'PUBLISHED'} keyed>
          <Input id="siteUrl" name="url" label="Url" value={props.site?.url} />
        </Show>
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
