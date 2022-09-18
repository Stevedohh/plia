import { Link, useLocation } from '@solidjs/router';
import { Component, createMemo, Show } from 'solid-js';
import { Button, ButtonStyles } from '../../controls/Button/Button';

import styles from './styles.module.scss';

export const Header: Component = () => {
  const location = useLocation();
  const isPreview = createMemo(() => !location.pathname.includes('preview'));

  return (
    <div class={styles.header}>
      <div class={styles.headerLogo}>P</div>
      <div class={styles.headerActions}>
        <Button style={ButtonStyles.SECONDARY}>
          <Show when={isPreview()} fallback={<Link href="/builder">Editor</Link>} keyed>
            <Link href="/builder/preview">Preview</Link>
          </Show>
        </Button>
        <Button style={ButtonStyles.PRIMARY}>Publish</Button>
      </div>
    </div>
  );
};
