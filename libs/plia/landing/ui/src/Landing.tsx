import { Component } from 'solid-js';

import { LandingLayout } from './components/layout/Layout';
import { Hero } from './sections/Hero/Hero';

export const LandingPage: Component = () => {
  return (
    <LandingLayout>
      <Hero />
    </LandingLayout>
  );
};
