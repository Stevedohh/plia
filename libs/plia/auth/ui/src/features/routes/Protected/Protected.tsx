import { children, Component, createEffect, JSX, Match, Switch } from 'solid-js';
import { useService } from 'solid-services';
import { useNavigate } from '@solidjs/router';

import { UserService } from '@plia/plia/user/ui';
import { Roles } from '@plia/plia/types';

type ProtectedProps = {
  children: JSX.Element;
  navigate: string;
  roles?: Array<Roles>;
};

export const Protected: Component<ProtectedProps> = (props) => {
  const content = children(() => props.children);

  const userService = useService(UserService)();
  const navigate = useNavigate();

  createEffect(() => {
    const user = userService.getUser();
    const isUserLoggedIn = !!user;

    if (!isUserLoggedIn) {
      navigate(props.navigate);
    }

    if (isUserLoggedIn && props.roles?.includes(user.role.value)) {
      navigate(props.navigate);
    }
  });

  return (
    <Switch>
      <Match
        when={!!userService.getUser() && props.roles?.includes(userService.getUser().role.value)}
        keyed
      >
        {content()}
      </Match>
      <Match when={!!userService.getUser()} keyed>
        {content()}
      </Match>
    </Switch>
  );
};
