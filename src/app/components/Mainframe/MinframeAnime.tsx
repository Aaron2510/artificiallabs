"use client";

import Link from 'next/link';
import Image from 'next/image';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Container } from 'react-bootstrap';
import React, { useEffect, useState, useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';

import styles from "./mainframe.module.scss";
import Header from "../Header";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MinframeAnime = () => {
    const navbarBrand = useRef<any>(null);
    const logoRef = useRef<any>(null);
    const pLogoRef = useRef<any>(null);
    const arrowDown = useRef<any>(null);
    const locationCardsRef = useRef<any>([]);
    const isSmallDevice = useMediaQuery({ maxWidth: 992 });
    const [mounted, setMounted] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    // Scroll to top on route change
    useEffect(() => {
        const section = document.querySelector("#mainframe"); // Find the section by ID
        if (section) {
            // Smooth scroll and set mounted state only after scroll is complete
            section.scrollIntoView({ behavior: 'smooth' });
            const scrollTimeout = setTimeout(() => {
                setMounted(true); // Animation starts only after scrolling completes
            }, 1000); // Set delay matching scroll duration

            // Cleanup timeout if component unmounts before scroll completes
            return () => clearTimeout(scrollTimeout);
        }
    }, []);

    useGSAP(() => {

        // Animation logic
        if (logoRef.current && locationCardsRef.current && pLogoRef.current && mounted) {
            if (!isSmallDevice) {
                document.body.style.overflow = "hidden";
            }

            gsap.set(pLogoRef.current, { autoAlpha: 0 });
            gsap.set(arrowDown.current, { autoAlpha: 1 });

            // Logo Animation
            gsap.to(logoRef.current, {
                duration: 1,
                keyframes: {
                    "0%": { width: 0, opacity: 0 },
                    "70%": { width: '10rem', opacity: 0.4 },
                    "100%": { width: "40rem", opacity: 1 },
                },
                stagger: 0.2,
                ease: "power2.inOut",
                onComplete: function () {
                    logoRef.current.play();
                    gsap.delayedCall(3, () => {
                        gsap.to(logoRef.current, {
                            duration: 1,
                            position: "relative",
                            width: "165px",
                            top: "-5px",
                            left: "40px",
                            transform: "translate(0, 0)",
                            ease: "power2.inOut",
                            onComplete: function () {
                                gsap.to(pLogoRef.current, { autoAlpha: 1, duration: 0 });
                                gsap.set(navbarBrand.current, { position: "fixed" });

                                gsap.to(pLogoRef.current, {
                                    width: "100px",
                                    top: "12px",
                                    left: "210px",
                                    transform: "translate(0, 0)",
                                    ease: "power2.inOut",
                                });

                                // Activate menu
                                setMenuActive(true)

                                // Play pLogoRef video
                                pLogoRef.current.play();

                                // Play locationCardsRef video
                                locationCardsRef.current.play();
                                const locationCards = gsap.utils.toArray([locationCardsRef.current, pLogoRef.current]);
                                locationCards.forEach((card: any) => {
                                    const anim = gsap.fromTo(card, { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
                                    ScrollTrigger.create({
                                        trigger: card,
                                        animation: anim,
                                        toggleActions: "play none none none",
                                        once: true,
                                    });
                                });

                                document.body.style.overflowY = "auto";
                                gsap.to(arrowDown.current, { autoAlpha: 1, duration: 1 });
                            },
                        });
                    });
                },
            });

            // ScrollTrigger for the logo
            ScrollTrigger.create({
                trigger: logoRef.current,
                start: "top top",
                end: "bottom top",
                onEnterBack: () => {
                    gsap.to(logoRef.current, {
                        duration: 1,
                        width: "40rem",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, 250%)",
                        ease: "power2.inOut",
                    });
                },
                onLeave: () => {
                    gsap.to(logoRef.current, {
                        duration: 1,
                        width: "165px",
                        top: "-5px",
                        left: "40px",
                        transform: "translate(0, 0)",
                        ease: "power2.inOut",
                    });
                },
                onEnter: () => {
                    gsap.to(logoRef.current, {
                        duration: 1,
                        width: "165px",
                        top: "-5px",
                        left: "40px",
                        transform: "translate(0, 0)",
                        ease: "power2.inOut",
                    });
                },
            });

            // ScrollTrigger to hide arrowDown when scrolling down
            ScrollTrigger.create({
                trigger: "#section2",
                start: "top bottom",
                end: "top top",
                onEnter: () => gsap.to(arrowDown.current, { autoAlpha: 0, duration: 0.5 }),
                onLeaveBack: () => gsap.to(arrowDown.current, { autoAlpha: 1, duration: 0.5 }),
            });

            gsap.set([locationCardsRef.current], { autoAlpha: 0 });

            gsap.to(locationCardsRef.current, {
                scrollTrigger: {
                    trigger: locationCardsRef.current,
                    start: "top center",
                    end: "bottom top",
                    scrub: 3,
                    markers: false,
                    onLeave: () => gsap.to([locationCardsRef.current, pLogoRef.current], { autoAlpha: 0, duration: 2 }),
                },
                autoAlpha: 0,
                duration: 2,
            });
        }

        // Cleanup function to remove ScrollTriggers on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [mounted]);

    return (
        <div className={`${styles.animeWrap} ${isSmallDevice ? styles.smallDevice : ""}`}>
            <Header menuActive={menuActive} />
            <Container className={styles.container}>
                {isSmallDevice ? (
                    <Image className={styles.locationAnime} src="/location.gif" alt="location" width={800} height={282} />
                ) : (
                    <>
                        <Link className={styles.navBrand} href="/">
                            <video className="logo" ref={logoRef} muted autoPlay>
                                <source src="./videos/Logo.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </Link>

                        <video className={styles.subLogo} ref={pLogoRef} autoPlay muted>
                            <source src="./videos/petra-logo.webm" />
                        </video>

                        <video className={styles.location} ref={locationCardsRef} muted>
                            <source src="./videos/weblocation1.webm" type="video/webm" />
                        </video>
                    </>
                )}
                <Link href="#section2" ref={arrowDown} className={styles.arrowDown}>
                    <FontAwesomeIcon icon={faArrowDown} className="fa-fw" />
                </Link>
            </Container>
        </div>
    );
};

export default MinframeAnime;
