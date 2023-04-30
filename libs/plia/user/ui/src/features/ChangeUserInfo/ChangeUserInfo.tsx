import { createForm } from '@felte/solid';
import { validator } from '@felte/validator-yup';
import { Component } from 'solid-js';
import { useService } from 'solid-services';
import * as yup from 'yup';

import { AuthService } from '@plia/plia/auth/ui';
import { useMutation } from '@plia/plia/network';
import { JWTResponse } from '@plia/plia/types';
import {
  Button,
  ButtonSizes,
  ButtonStyles,
  Input,
  InputSizes,
  showNotification,
} from '@plia/plia/uikit';
import { UserService } from '@plia/plia/user/ui';

import styles from './styles.module.scss';

export const schema = yup.object({
  email: yup.string().email('Email is not valid'),
  full_name: yup.string(),
});

export const ChangeUserInfo: Component = () => {
  const userService = useService(UserService)();
  const authService = useService(AuthService)();

  const updateUserMutation = useMutation<JWTResponse>(({ auth }) => auth().update);

  const { form, errors } = createForm<yup.InferType<typeof schema>>({
    onSubmit: (formData) => {
      updateUserMutation.mutate(formData, {
        onSuccess: ({ data }) => {
          authService.login(data.token, false);
          showNotification.success('Profile info was successfully updated');
        },
      });
    },
    extend: validator({ schema }),
    initialValues: {
      email: userService.getUser().email,
      full_name: userService.getUser().full_name,
    },
  });

  return (
    <form use:form>
      <Input
        id="full_name"
        name="full_name"
        label="Full Name"
        placeholder="Full Name"
        error={errors().full_name?.[0]}
        size={InputSizes.LG}
      />
      <Input
        id="email"
        name="email"
        label="Email"
        placeholder="Email"
        error={errors().email?.[0]}
        size={InputSizes.LG}
      />
      <Button
        style={ButtonStyles.PRIMARY}
        size={ButtonSizes.LG}
        type="submit"
        class={styles.saveBtn}
      >
        Save Changes
      </Button>
    </form>
  );
};
