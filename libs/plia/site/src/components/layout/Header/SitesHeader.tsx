import { Link } from '@solidjs/router';
import { Component } from 'solid-js';
import { useService } from 'solid-services';

import { AuthService } from '@plia/plia/auth/ui';
import { Avatar, Button, ButtonStyles, Header, Popover } from '@plia/plia/uikit';
import { UserService } from '@plia/plia/user/ui';

import { useCreateSite } from '../../../hooks/useCreateSite';

import styles from './styles.module.scss';

export const SitesHeader: Component = () => {
  const authService = useService(AuthService)();
  const userService = useService(UserService)();

  const onCreateSiteClick = useCreateSite();

  return (
    <Header>
      <Header.Right>
        <Button style={ButtonStyles.PRIMARY} onClick={onCreateSiteClick}>
          Create site
        </Button>
        <Popover head={<Avatar />} placement="bottom">
          <div class={styles.profile}>
            <div class={styles.profileInfo}>
              <span class={styles.profileName}> {userService.getUser()?.full_name} </span>
              <span class={styles.profileEmail}> {userService.getUser()?.email} </span>
            </div>
            <div class={styles.profileActions}>
              <Button style={ButtonStyles.BORDERED}>
                <Link href="/profile">Profile Setting</Link>
              </Button>
              <Button style={ButtonStyles.BORDERED} onClick={authService.logout}>
                Log Out
              </Button>
            </div>
          </div>
        </Popover>
      </Header.Right>
    </Header>
  );
};
