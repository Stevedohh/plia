/* eslint-disable max-len */
import { Link } from '@solidjs/router';
import { Component } from 'solid-js';

import { Button, ButtonSizes, ButtonStyles } from '@plia/plia/uikit';

import HeroImage from './hero.png';

import styles from './styles.module.scss';

export const Hero: Component = () => {
  return (
    <section class={styles.hero}>
      <h1 class={styles.title}>Build beautiful websites in minutes, without code!</h1>
      <p class={styles.subtitle}>
        Whether you need a landing page or a full-fledged website for your business or clients, Plia
        will get your website up and running in minutes without compromising on quality.
      </p>
      <div class={styles.action}>
        <Button style={ButtonStyles.PRIMARY} size={ButtonSizes.LG} class={styles.heroBtn}>
          <Link href="/login">Try Plia Now</Link>
        </Button>
      </div>
      <div class={styles.heroImg}>
        <img src={HeroImage} alt="hero" />
      </div>
    </section>
  );
};
