import { Link } from '@solidjs/router';
import { children, Component, JSX } from 'solid-js';

import { Button, ButtonStyles, Header, LogoIcon } from '@plia/plia/uikit';

type LandingLayoutProps = {
  children: JSX.Element;
};

export const LandingLayout: Component<LandingLayoutProps> = (props) => {
  const content = children(() => props.children);

  return (
    <div>
      <Header>
        <Header.Left>
          <LogoIcon textColor="#FFF" iconColor="#FFF" size={90} />
        </Header.Left>
        <Header.Right>
          <Button style={ButtonStyles.SECONDARY}>
            <Link href="/login">Login</Link>
          </Button>
          <Button style={ButtonStyles.PRIMARY}>
            <Link href="/register">Sign Up</Link>
          </Button>
        </Header.Right>
      </Header>
      <div>{content()}</div>
    </div>
  );
};
