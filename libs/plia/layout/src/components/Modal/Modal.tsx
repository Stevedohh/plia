import { Component, createMemo, Show } from 'solid-js';
import { useService } from 'solid-services';
import { Dynamic, Portal } from 'solid-js/web';

import { ModalService } from '../../services/modal.service';

import styles from './styles.module.scss';
import { CrossIcon } from '@plia/plia/icons';

export const Modal: Component = () => {
  const modalService = useService(ModalService)();
  const currentModal = createMemo(() => modalService.getCurrentModal()());

  return (
    <Portal mount={document.getElementById('modals')}>
      <Show when={currentModal()?.component} keyed>
        <div class={styles.modal}>
          <div class={styles.modalContent}>
            <button class={styles.modalClose} onClick={modalService.closeModal}>
              <CrossIcon />
            </button>
            <Dynamic component={currentModal().component} {...currentModal().props} />
          </div>
        </div>
      </Show>
    </Portal>
  );
};
