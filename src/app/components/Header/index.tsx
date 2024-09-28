"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styles from './header.module.scss';

// Components
import Humburger from './Humburger';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Header = () => {
  const [error, setError] = useState(false);
  const [isMenu, setMenu] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false); // Track if component is mounted
  const isSmallDevice = useMediaQuery({ maxWidth: 992 });
  const navLinksRef = useRef<HTMLDivElement>(null); // Reference to nav links

  // Ensure component is mounted before using media query
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle menu
  const handleClick = () => setMenu((prev) => !prev);

  // Scroll to section function
  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault(); // Prevent default link behavior

    const section = document.querySelector(sectionId); // Find the section by ID
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
    }
    setMenu(false); // Optionally close the menu if needed
  };

  // GSAP effect to hide/show the logo on scroll
  useGSAP(() => {
    if (!mounted) return;

    const logo = document.querySelector(`.${styles.petraLogo}`); // Select the logo

    gsap.to(logo, {
      y: -100, // Move the logo up to hide it
      opacity: 0,
      ease: 'power2.out',
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: 'top+=100 top', // Start 100px from the top
        end: 'bottom',
        toggleActions: 'play none reverse none', // Play when scrolling down, reverse when scrolling up
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top+=10 top',
      end: 'bottom',
      onEnterBack: () => gsap.to(logo, { y: 0, opacity: 1, duration: 0.5 }),
      onLeave: () => gsap.to(logo, { y: -100, opacity: 0, duration: 0.5 }),
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [mounted]);

  // GSAP animation for menu links
  useGSAP(() => {
    if (isMenu && navLinksRef.current) {
      const links = navLinksRef.current.querySelectorAll('a'); // Select all links

      gsap.fromTo(
        links,
        { opacity: 0, x: -20 }, // Start with opacity 0 and slide in from the left
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1, // Add delay between each link animation
          ease: 'power2.out',
        }
      );
    }
  }, [isMenu]);

  if (!mounted) return null; // Avoid rendering until mounted

  return (
    <header
      className={`${styles.header} ${isSmallDevice ? styles.smallDevice : ''} ${
        isMenu ? styles.open : styles.close
      }`}
    >
      {isSmallDevice ? (
        <Container className={styles.container}>
          <div className={styles.headerTop}>
            <div className={styles.logowrap}>
              <Navbar.Brand className={styles.navLogo}>
                <Image
                  src='/logo.gif'
                  className='img-responsive'
                  width={800}
                  height={319}
                  alt='logo'
                />
              </Navbar.Brand>
              <Image
                src='/logo-petra.gif'
                className={`img-responsive ${styles.petraLogo}`}
                width={400}
                height={219}
                alt='ptralogo'
              />
            </div>
            <Humburger onClick={handleClick} />
          </div>
          {isMenu && (
            <Nav className={styles.navbar} ref={navLinksRef}>
              <a href='#mainframe' onClick={(e) => handleScroll(e, '#mainframe')}>Home</a>
              <a href='#what-we-do' onClick={(e) => handleScroll(e, '#what-we-do')}>Our Work</a>
              <a href='#meet-our-team' onClick={(e) => handleScroll(e, '#meet-our-team')}>Our Team</a>
              <a href='#our-clients' onClick={(e) => handleScroll(e, '#our-clients')}>Clients</a>
              <a href='#contact-us' onClick={(e) => handleScroll(e, '#contact-us')}>Contact Us</a>
            </Nav>
          )}
        </Container>
      ) : (
        <Navbar expand='lg' className={styles.navbarWrap}>
          <Container className={styles.container}>
            <Nav className={styles.navbar}>
              <a href='#mainframe' onClick={(e) => handleScroll(e, '#mainframe')}>Home</a>
              <a href='#what-we-do' onClick={(e) => handleScroll(e, '#what-we-do')}>Our Work</a>
              <a href='#meet-our-team' onClick={(e) => handleScroll(e, '#meet-our-team')}>Our Team</a>
              <a href='#our-clients' onClick={(e) => handleScroll(e, '#our-clients')}>Clients</a>
              <a href='#contact-us' onClick={(e) => handleScroll(e, '#contact-us')}>Contact Us</a>
            </Nav>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default Header;
