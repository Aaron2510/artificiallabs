"use client"

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from "react";
import { Container } from "react-bootstrap";

// theme
import styles from './page.module.scss';
import theme from './lib/theme.module.scss';

// Components
import WeDo from './components/weDo';
import OurTeam from './components/OurTeam';
import ShowReel from './components/ShowReel';
import CodeAnim from './components/CodeAnim';
import Mainframe from './components/Mainframe';
import OurClients from './components/OurClients';
// import ScrollToTop from './components/ScrollToTop';
import TextColorAnim from './components/TextColorAnim';

export default function Home() {

  return (
    <main className={styles.home} id="mainframe">
      <Mainframe />

      <section className={`${theme.section} ${styles.section1}`} id="section2">
        <Container>
          <CodeAnim />
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section2}`}>
        <Container>
          <TextColorAnim />
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section3}`}>
        <Container>
          <ShowReel />
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section4}`}>
        <Container >
          <h1 className="titles text-center">About Us</h1>
          <h2>
            Artificial Labs stemmed from a hunch - actually more like an
            educated guess that there are far more efficient ways to make and
            produce films. And that’s when a dedicated team of directors,
            artists, writers, technologists, cinematographers, editors and VFX
            specialists decided to invest time and effort to master Generative
            AI and its arsenal of tools to supercharge our collective experience
            and skill sets. The results as you will see below, speak for
            themselves. Note, everything from the visuals to VO to music was
            artificially generated.
          </h2>
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section5}`} id="what-we-do">
        <Image src="/BallAction_1loop.gif" alt="bg" fill />
        <Container>
          <h1 className="titles text-center">What We Do</h1>
          <WeDo />
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section6}`} id="meet-our-team">
        <Container>
          <h1 className="titles text-center">Meet Our Team</h1>
          <OurTeam />
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section7}`} id="our-clients">
        <Container>
          <h1 className="titles text-center">Our Clients</h1>
          <OurClients />
        </Container>
      </section>

      {/* SCROLL TOP */}
      {/* <ScrollToTop /> */}

    </main>
  );
}