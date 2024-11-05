"use client";
import Image from 'next/image';
import React from 'react';
import styles from "./client.module.scss";

const OurClients = () => {
  const clientImages = [
    { src: "/P&G.png", alt: "P&G", width: 250, height: 100 },
    { src: "/H&S-logo-4k.png", alt: "Head and Shoulders", width: 250, height: 100 },
    { src: "/Tide_print.png", alt: "Tide", width: 250, height: 100 },
    { src: "/Pantene-Logo.png", alt: "Pantene", width: 250, height: 100 },
    { src: "/INBREW.png", alt: "Inbrew", width: 250, height: 100 },
    { src: "/UL.png", alt: "Urban Ladder", width: 250, height: 100 },
    { src: "/DD.png", alt: "Dairy Day", width: 250, height: 100 },
    { src: "/N2.png", alt: "Narayana", width: 250, height: 100 },
    { src: "/Publicis-logo.png", alt: "Publicis", width: 250, height: 100 },
    { src: "/Leo Burnett-logo.png", alt: "Leo Burnett", width: 250, height: 100 },
    { src: "/Cleartrip-logo.png", alt: "Cleartrip", width: 250, height: 100 },
  ];

  return (
    <div className={styles.clientImages}>
    {clientImages.map((client, index) => (
      <div className={styles.imageContainer} key={index}>
        <Image  key={index} src={client.src} alt={client.alt} width={client.width} height={client.height} />
      </div>
    ))}
  </div>
  );
};

export default OurClients;
