import { Component } from 'solid-js';

import { Card } from '@plia/plia/uikit';

import { ProfileLayout } from '../components/layout/ProfileLayout';
import { ChangeAvatar } from '../features/ChangeAvatar/ChangeAvatar';
import { ChangePassword } from '../features/ChangePassword/ChangePassword';
import { ChangeUserInfo } from '../features/ChangeUserInfo/ChangeUserInfo';

import styles from './styles.module.scss';

export const ProfilePage: Component = () => {
  return (
    <ProfileLayout>
      <Card>
        <h2 class={styles.title}>Profile settings</h2>
        <div class={styles.profile}>
          <ChangeAvatar />
          <div class={styles.profileInfo}>
            <ChangeUserInfo />
            <ChangePassword />
          </div>
        </div>
      </Card>
    </ProfileLayout>
  );
};
