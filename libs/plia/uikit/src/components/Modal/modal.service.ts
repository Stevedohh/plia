import { Component, createSignal } from 'solid-js';

export const ModalService = () => {
  const [modal, setModal] = createSignal({
    component: null,
    props: null,
  });

  return {
    showModal(component: Component, props?: unknown) {
      setModal(null);
      setModal({ component, props });
    },

    closeModal() {
      setModal(null);
    },

    getCurrentModal() {
      return modal;
    },
  };
};
