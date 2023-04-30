import { Component, Show } from 'solid-js';

import { ProfileIcon } from '../../icons/ProfileIcon';

import styles from './styles.module.scss';

type AvatarProps = {
  img?: string;
  size?: number;
};

const defaultSize = 32;

export const Avatar: Component<AvatarProps> = (props) => {
  return (
    <div
      class={styles.avatar}
      style={{
        width: `${props.size ?? defaultSize}px`,
        height: `${props.size ?? defaultSize}px`,
      }}
    >
      <Show when={props.img} fallback={<ProfileIcon />} keyed>
        <img src={props.img} alt="avatar" />
      </Show>
    </div>
  );
};
