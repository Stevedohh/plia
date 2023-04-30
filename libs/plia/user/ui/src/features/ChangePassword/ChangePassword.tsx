import { createForm } from '@felte/solid';
import { validator } from '@felte/validator-yup';
import { Component } from 'solid-js';
import * as yup from 'yup';

import { useMutation } from '@plia/plia/network';
import {
  Button,
  ButtonSizes,
  ButtonStyles,
  Input,
  InputSizes,
  showNotification,
} from '@plia/plia/uikit';

import styles from './styles.module.scss';

export const schema = yup.object({
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  password: yup.string().min(8).required('Password is required'),
});

export const ChangePassword: Component = () => {
  const updateUserMutation = useMutation(({ auth }) => auth().update);

  const { form, errors } = createForm<yup.InferType<typeof schema>>({
    onSubmit: (formData) => {
      updateUserMutation.mutate(
        { password: formData.password },
        {
          onSuccess: () => {
            showNotification.success('Password was successfully updated');
          },
        },
      );
    },
    extend: validator({ schema }),
  });

  return (
    <form use:form>
      <h3 class={styles.passwordTitle}>Change Password</h3>
      <Input
        id="password"
        name="password"
        label="New Password"
        placeholder="New Password"
        size={InputSizes.LG}
        error={errors().password?.[0]}
      />
      <Input
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm New Password"
        placeholder="Confirm New Password"
        size={InputSizes.LG}
        error={errors().confirmPassword?.[0]}
      />
      <Button
        style={ButtonStyles.PRIMARY}
        size={ButtonSizes.LG}
        class={styles.saveBtn}
        type="submit"
      >
        Change Password
      </Button>
    </form>
  );
};
