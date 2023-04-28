import { Component } from 'solid-js';
import { Link } from '@solidjs/router';
import { useService } from 'solid-services';
import { createForm } from '@felte/solid';
import * as yup from 'yup';

import { useMutation } from '@plia/plia/network';
import { JWTResponse, LoginPayload } from '@plia/plia/types';
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

import { AuthService } from '../../services/auth.service';
import { AuthLayout } from '../../components/Layout/Layout';
import { schema } from './Login.helpers';

import styles from './styles.module.scss';

export const LoginPage: Component = () => {
  const authService = useService(AuthService)();
  const loginMutation = useMutation<JWTResponse, LoginPayload>(({ auth }) => auth().login);

  const { form, errors } = createForm<yup.InferType<typeof schema>>({
    onSubmit: (user) => {
      loginMutation.mutate(user as LoginPayload, {
        onSuccess: ({ data }) => {
          authService.login(data.token);
          showNotification.success('Logged in!');
        },
        onError(error) {
          showNotification.error(error.response.data.message);
        },
      });
    },
  });

  return (
    <AuthLayout>
      <div class={styles.logo}>
        <LogoIcon textColor="#FFF" iconColor="#FFF" />
      </div>
      <Card>
        <form class={styles.form} use:form>
          <h2 class={styles.title}>Login Into Your Account</h2>
          <span class={styles.subtitle}>
            New to Plia?
            <Link href="/register"> Sign Up!</Link>
          </span>
          <Input
            id="email"
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
            size={InputSizes.LG}
            error={errors().password?.[0]}
          />
          <Button
            type="submit"
            style={ButtonStyles.PRIMARY}
            size={ButtonSizes.LG}
            class={styles.loginBtn}
          >
            Login
          </Button>
        </form>
      </Card>
    </AuthLayout>
  );
};
