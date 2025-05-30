import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import styles from "./animatedText.module.scss";

const TextColorAnim = () => {
  const textRef = useRef<any>();

  useGSAP(() => {
    // GSAP animation for wave effect
    gsap.to(textRef.current, {
      backgroundPosition: "200% center",
      ease: "none",
      repeat: -1,
      duration: 6, // Adjust to control the speed of the wave
    });
  }, []);

  return (
    <h1 className={styles.waveText} ref={textRef}>
    <span>{`INDIA'S FIRST & MOST POWERFUL AI FILM`}</span>
      <span>PRODUCTION HOUSE</span>
      {/* <span>IMAGINATION</span> */}
    </h1>
  );
};

export default TextColorAnim;

