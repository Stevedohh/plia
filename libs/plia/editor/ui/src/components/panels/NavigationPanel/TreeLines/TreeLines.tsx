import { Component, createMemo, For } from 'solid-js';

import styles from './styles.module.scss';

type TreeLinesProps = {
  level: number;
  isLast: boolean;
};

export const TreeLines: Component<TreeLinesProps> = (props) => {
  const linesArray = createMemo(() =>
    Array.from({ length: props.isLast ? props.level : props.level - 1 }).fill(null)
  );

  return (
    <div class={styles.lineBlock}>
      <For each={linesArray()}>{() => <div class={styles.line} />}</For>
    </div>
  );
};
