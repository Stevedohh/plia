import { Link } from '@solidjs/router';
import { Component } from 'solid-js';

import { Button, ButtonStyles, Header } from '@plia/plia/uikit';

export const ProfileHeader: Component = () => {
  return (
    <Header>
      <Header.Right>
        <Button style={ButtonStyles.PRIMARY}>
          <Link href="/sites">Sites</Link>
        </Button>
      </Header.Right>
    </Header>
  );
};
