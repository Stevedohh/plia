import { Component } from 'solid-js';

import { Avatar, Button, ButtonSizes, ButtonStyles } from '@plia/plia/uikit';

import styles from './styles.module.scss';

export const ChangeAvatar: Component = () => {
  return (
    <div class={styles.avatar}>
      <Avatar
        img="https://cdn.dorik.com/tmp/images/photo_2021-10-28_21-52-46_wvh7fbil.jpg"
        size={225}
      />
      {/*<div class={styles.avatarActions}>*/}
      {/*  <Button style={ButtonStyles.BORDERED} size={ButtonSizes.LG}>*/}
      {/*    Upload*/}
      {/*  </Button>*/}
      {/*  <Button style={ButtonStyles.SECONDARY} size={ButtonSizes.LG}>*/}
      {/*    Delete*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </div>
  );
};
