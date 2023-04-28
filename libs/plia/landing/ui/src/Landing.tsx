import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

export const LandingPage: Component = () => {
  return (
    <div>
      Landing component
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
};
