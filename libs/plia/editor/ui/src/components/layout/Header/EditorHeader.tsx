import { Link } from '@solidjs/router';
import { Component } from 'solid-js';

import { EditorHeaderActions } from './HeaderActions/HeaderActions';

import styles from './styles.module.scss';

export const EditorHeader: Component = () => (
  <div class={styles.header}>
    <div class={styles.headerLogo}>
      <Link href="/">P</Link>
    </div>
    <EditorHeaderActions />
  </div>
);
