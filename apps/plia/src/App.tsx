import { ServiceRegistry } from 'solid-services';
import { Link, Route, Router, Routes } from '@solidjs/router';

import { Editor, EditorPage, PreviewPage } from '@plia/plia/editor/ui';

export const App = () => (
  <Router>
    <ServiceRegistry>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link href="/builder"> Go the editor</Link>
            </div>
          }
        />
        <Route path="/builder" component={Editor}>
          <Route path="/" component={EditorPage} />
          <Route path="/preview" component={PreviewPage} />
        </Route>
      </Routes>
    </ServiceRegistry>
  </Router>
);
