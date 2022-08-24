import { ServiceRegistry } from 'solid-services';

import { Editor } from '@plia/plia/editor/ui';
import { Layout } from '@plia/plia/layout';

export const App = () => (
  <ServiceRegistry>
    <Layout>
      <Editor />
    </Layout>
  </ServiceRegistry>
);
