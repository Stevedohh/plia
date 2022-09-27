import { ServiceRegistry } from 'solid-services';
import { Route, Router, Routes } from '@solidjs/router';
import { Provider } from 'solid-redux-primitives';

import { EditorPage, PreviewPage, store } from '@plia/plia/editor/ui';
import { SitePage } from '@plia/plia/site';

export const App = () => (
  <Router>
    <ServiceRegistry>
      {/* @ts-ignore */}
      <Provider store={store}>
        <Routes>
          <Route path="/" component={SitePage} />
          <Route path="/builder/site/:siteId/page/:pageId" component={EditorPage} />
          <Route path="/builder/site/:siteId/page/:pageId/preview" component={PreviewPage} />
        </Routes>
      </Provider>
    </ServiceRegistry>
  </Router>
);
