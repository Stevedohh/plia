import { ServiceRegistry } from 'solid-services';
import { Route, Router, Routes } from '@solidjs/router';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { Provider } from 'solid-redux-primitives';

import { EditorPage, PreviewPage, store } from '@plia/plia/editor/ui';
import { SitesPage } from '@plia/plia/site';
import { Modal, Notification } from '@plia/plia/uikit';

import 'libs/plia/uikit/src/styles/fonts.scss';
import 'libs/plia/uikit/src/styles/reset.scss';
import 'libs/plia/uikit/src/styles/site.scss';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ServiceRegistry>
          {/* @ts-ignore */}
          <Provider store={store}>
            <Routes>
              <Route path="/" component={SitesPage} />
              <Route path="/builder/site/:siteId/page/:pageId" component={EditorPage} />
              <Route path="/builder/site/:siteId/page/:pageId/preview" component={PreviewPage} />
            </Routes>
            <Modal />
            <Notification />
          </Provider>
        </ServiceRegistry>
      </QueryClientProvider>
    </Router>
  );
};
