import { useNavigate } from '@solidjs/router';

import { useMutation } from '@plia/plia/network';
import { CreateSiteWithPageResponse } from '@plia/plia/types';
import { showNotification } from '@plia/plia/uikit';

export const useCreateSite = () => {
  const navigate = useNavigate();

  const createSiteMutation = useMutation<CreateSiteWithPageResponse>(
    ({ site }) => site().createSiteWithPage,
  );

  return () => {
    createSiteMutation.mutate(null, {
      onSuccess: ({ createdSite, createdPage }) => {
        navigate(`/builder/site/${createdSite.id}/page/${createdPage.id}`);
        showNotification.success('Created');
      },
    });
  };
};
