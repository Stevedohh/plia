export { Protected } from './features/routes/Protected/Protected';
export { LoginPage } from './pages/Login/Login';
export { RegisterPage } from './pages/Register/Register';
export { AuthBootstrap } from './features/bootstrap/AuthBootstrap/AuthBootstrap';
export { AuthService } from './services/auth.service';

declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      form: boolean;
      field: boolean;
    }
  }
}
