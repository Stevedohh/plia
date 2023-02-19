import { Component } from 'solid-js';
import { Toaster as SolidToaster } from 'solid-toast';

export const Notification: Component = () => {
  return <SolidToaster position="top-center" gutter={8} />;
};
