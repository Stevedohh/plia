import { Component, createMemo, Show } from 'solid-js';
import { Link, useLocation, useParams } from '@solidjs/router';

import { Button, ButtonStyles } from '@plia/plia/components';
import { EditorParams } from '@plia/plia/types';

import { useEditorHeaderActions } from './hooks/useEditorHeaderActions';

import styles from './styles.module.scss';

export const EditorHeaderActions: Component = () => {
  const location = useLocation();
  const params = useParams() as EditorParams;

  const isPreview = createMemo(() => !location.pathname.includes('preview'));
  const siteLink = createMemo(() => `/builder/site/${params.siteId}/page/${params.pageId}`);

  const { savePage, publishPage } = useEditorHeaderActions();

  return (
    <div class={styles.headerActions}>
      <Button style={ButtonStyles.SECONDARY}>
        <Show when={isPreview()} fallback={<Link href={siteLink()}>Editor</Link>} keyed>
          <Link href={`${siteLink()}/preview`}>Preview</Link>
        </Show>
      </Button>
      <Button style={ButtonStyles.PRIMARY} onClick={savePage}>
        Save
      </Button>
      <Button style={ButtonStyles.PRIMARY} onClick={publishPage}>
        Publish
      </Button>
    </div>
  );
};
