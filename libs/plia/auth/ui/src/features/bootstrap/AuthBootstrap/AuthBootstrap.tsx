import { useNavigate } from '@solidjs/router';
import { children, Component, JSX, onMount } from 'solid-js';
import { useService } from 'solid-services';

import { UserService } from '@plia/plia/user/ui';

type AuthBootstrapProps = {
  children: JSX.Element;
};

export const AuthBootstrap: Component<AuthBootstrapProps> = (props) => {
  const content = children(() => props.children);
  const userService = useService(UserService)();
  const navigate = useNavigate();

  onMount(() => {
    userService.setUser();
    const isUserLoggedIn = !!userService.getUser();

    if (isUserLoggedIn) {
      navigate('/sites');
    } else {
      navigate('/');
    }
  });

  return <>{content()}</>;
};
