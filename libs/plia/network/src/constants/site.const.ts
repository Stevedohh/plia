import { ComponentNames, CreatePageRequest, CreateSiteRequest, Domains } from '@plia/plia/types';

export const createSitePayload: CreateSiteRequest = {
  name: 'Unnamed site',
  domain: Domains.PLIA,
};

export const createPagePayload: CreatePageRequest = {
  name: 'Home',
  components_structure: {
    id: 'body',
    component: ComponentNames.BODY,
    children: [],
  },
};
