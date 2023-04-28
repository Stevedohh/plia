import { Component } from 'solid-js';
import { Link } from '@solidjs/router';
import { createForm } from '@felte/solid';
import { validator } from '@felte/validator-yup';
import * as yup from 'yup';

import {
  Button,
  ButtonSizes,
  ButtonStyles,
  Card,
  Input,
  InputSizes,
  LogoIcon,
  showNotification,
} from '@plia/plia/uikit';
import { useMutation } from '@plia/plia/network';
import { JWTResponse, RegisterPayload } from '@plia/plia/types';

import { AuthService } from '../../services/auth.service';
import { AuthLayout } from '../../components/Layout/Layout';
import { prepareRegisterData, schema } from './Register.helpers';

import styles from './styles.module.scss';
import { useService } from 'solid-services';

export const RegisterPage: Component = () => {
  const authService = useService(AuthService)();
  const registerMutation = useMutation<JWTResponse, RegisterPayload>(({ auth }) => auth().register);

  const { form, errors } = createForm<yup.InferType<typeof schema>>({
    onSubmit(formData) {
      const user = prepareRegisterData(formData);
      registerMutation.mutate(user, {
        onSuccess: ({ data }) => {
          authService.login(data.token);
          showNotification.success('Account created');
        },
        onError(error) {
          showNotification.error(error.response.data.message);
        },
      });
    },
    extend: validator({ schema }),
  });

  return (
    <AuthLayout>
      <div class={styles.logo}>
        <LogoIcon textColor="#FFF" iconColor="#FFF" />
      </div>
      <Card>
        <form class={styles.form} use:form>
          <h2 class={styles.title}>Create an Account</h2>
          <span class={styles.subtitle}>
            Have an Account?
            <Link href="/login"> Login!</Link>
          </span>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            label="Full Name"
            size={InputSizes.LG}
            error={errors().fullName?.[0]}
          />
          <Input
            id="email"
            autocomplete="email"
            name="email"
            placeholder="Email Address"
            label="Email Address"
            size={InputSizes.LG}
            error={errors().email?.[0]}
          />
          <Input
            id="password"
            name="password"
            placeholder="Password"
            label="Password"
            type="password"
            autocomplete="new-password"
            size={InputSizes.LG}
            error={errors().password?.[0]}
          />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            label="Confirm Password"
            autocomplete="new-password"
            type="password"
            size={InputSizes.LG}
            error={errors().confirmPassword?.[0]}
          />
          <Button
            type="submit"
            style={ButtonStyles.PRIMARY}
            size={ButtonSizes.LG}
            class={styles.loginBtn}
          >
            Create Account
          </Button>
        </form>
      </Card>
    </AuthLayout>
  );
};
