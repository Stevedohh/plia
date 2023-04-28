import { ServiceRegistry } from 'solid-services';
import { Router, useRoutes } from '@solidjs/router';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { Provider } from 'solid-redux-primitives';

import { store } from '@plia/plia/editor/ui';
import { Modal, Notification } from '@plia/plia/uikit';
import { AuthBootstrap } from '@plia/plia/auth/ui';

import 'libs/plia/uikit/src/styles/fonts.scss';
import 'libs/plia/uikit/src/styles/reset.scss';
import 'libs/plia/uikit/src/styles/site.scss';

import { routes } from './app.routes';

const queryClient = new QueryClient();

export const App = () => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ServiceRegistry>
          {/* @ts-ignore */}
          <Provider store={store}>
            <AuthBootstrap>
              <Routes />
              <Modal />
              <Notification />
            </AuthBootstrap>
          </Provider>
        </ServiceRegistry>
      </QueryClientProvider>
    </Router>
  );
};
