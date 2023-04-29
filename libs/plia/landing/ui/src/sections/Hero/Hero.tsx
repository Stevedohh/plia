/* eslint-disable max-len */
import { Link } from '@solidjs/router';
import { Component } from 'solid-js';

import { Button, ButtonSizes, ButtonStyles } from '@plia/plia/uikit';

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
      <div class={styles.video}>
        <video
          loop
          muted
          playsinline
          autoplay
          poster="https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/61a1f4035bfd7b0011fb92f9/images/8_3vw6iujc.png"
        >
          <source
            src="https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/61a1f4035bfd7b0011fb92f9/videos/mrQuick-Steps-_bmmkbgti_87oisrvo.mp4"
            type="video/mp4"
          />
          Your browser doesn't support HTML5 video tag.
        </video>
      </div>
    </section>
  );
};
