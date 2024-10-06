import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ 
    children, 
    duration = 1, 
    delay = 0, 
    ease = 'power2.inOut', 
    startOpacity = 0, 
    endOpacity = 1, 
    fadeInUp = false, 
    stagger = 0 // New prop for stagger animation
}: any) => {
    const fadeInRef = useRef<any>([]); // Reference array for the children

    useGSAP(() => {
        if (fadeInRef.current) {
            gsap.fromTo(fadeInRef.current,
                {
                    autoAlpha: startOpacity,
                    ...(fadeInUp && { y: 50 }), // Apply upward translation if fadeInUp is true
                }, // Starting opacity and optional y-offset
                {
                    autoAlpha: endOpacity, // Ending opacity
                    ...(fadeInUp && { y: 0 }), // Move back to original y position if fadeInUp is true
                    duration: duration, // Animation duration
                    ease: ease, // Animation easing
                    delay: delay, // Delay before animation starts
                    stagger: stagger, // Apply stagger between child elements
                    scrollTrigger: {
                        trigger: fadeInRef.current[0], // The first child element that triggers the animation
                        start: 'top 80%', // Animation starts when the first element is 80% from the top of the viewport
                        toggleActions: 'play none none none', // Play animation on entering viewport
                    }
                }
            );
        }

        // Cleanup function to kill the ScrollTrigger instance on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [duration, delay, ease, startOpacity, endOpacity, fadeInUp, stagger]);

    return (
        <div>
            {React.Children.map(children, (child, index) => (
                <div ref={(el: any) => (fadeInRef.current[index] = el)} key={index}>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default FadeIn;
