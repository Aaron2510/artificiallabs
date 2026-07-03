"use client";
import Image from 'next/image';
import React from 'react';
import styles from "./client.module.scss";

const OurClients = () => {
  const clientImages = [
    { src: "/clients/Publicis-logo.png", alt: "Publicis", width: 250, height: 100 },
    { src: "/clients/H&S-logo-4k.png", alt: "Head and Shoulders", width: 250, height: 100 },
    { src: "/clients/Pantene-Logo.png", alt: "Pantene", width: 250, height: 100 },
    { src: "/clients/Reliance-logo.png", alt: "Reliance", width: 250, height: 100 },
    { src: "/clients/Cleartrip-logo.png", alt: "Cleartrip", width: 250, height: 100 },
    { src: "/clients/Tide_print.png", alt: "Tide", width: 250, height: 100 },
    { src: "/clients/OralB-logo.png", alt: "OralB", width: 250, height: 100 },
    { src: "/clients/Ariel-logo.png", alt: "Ariel", width: 250, height: 100 },
    { src: "/clients/Campa-logo.png", alt: "Campa", width: 250, height: 100 },
    { src: "/clients/Frooti-logo.png", alt: "Frooti", width: 250, height: 100 },
    { src: "/clients/Fizz-logo.png", alt: "Fizz", width: 250, height: 100 },
    { src: "/clients/Rejoice-logo.png", alt: "Rejoice", width: 250, height: 100 },
    { src: "/clients/Downy-logo.png", alt: "Downy", width: 250, height: 100 },
    { src: "/clients/Crest-logo.png", alt: "Crest", width: 250, height: 100 },
    { src: "/clients/Always-logo.png", alt: "Always", width: 250, height: 100 },
    { src: "/clients/BPL-logo.png", alt: "BPL", width: 250, height: 100 },
    { src: "/clients/UL.png", alt: "Urban Ladder", width: 250, height: 100 },
    { src: "/clients/Leo Burnett-logo.png", alt: "Leo Burnett", width: 250, height: 100 },
    { src: "/clients/Saatchi-logo.png", alt: "Saatchi and Saatchi", width: 250, height: 100 },
    { src: "/clients/Prodigious-logo.png", alt: "Prodigious", width: 250, height: 100 },
    { src: "/clients/Joy-logo.png", alt: "Joy", width: 250, height: 100 },
    { src: "/clients/Fairy-logo.png", alt: "Fairy", width: 250, height: 100 },
    { src: "/clients/CampaPowerUp-logo.png", alt: "CampaPowerUp", width: 250, height: 100 },
    { src: "/clients/INBREW.png", alt: "Inbrew", width: 250, height: 100 },
    { src: "/clients/Namma-yatri-logo.png", alt: "Namma yatri", width: 250, height: 100 },
    { src: "/clients/DD.png", alt: "Dairy Day", width: 250, height: 100 },
    { src: "/clients/N2.png", alt: "Narayana", width: 250, height: 100 },
    { src: "/clients/Kelvinator-logo.png", alt: "Kelvinator", width: 250, height: 100 },
    { src: "/clients/Smoodh-logo.png", alt: "Smoodh", width: 250, height: 100 },
    { src: "/clients/Lotus-logo.png", alt: "Lotus", width: 250, height: 100 },
    { src: "/clients/Necto-logo.png", alt: "Necto", width: 250, height: 100 },
    { src: "/clients/PocketFM-logo.png", alt: "PocketFM", width: 250, height: 100 },
    { src: "/clients/Metadata-logo.png", alt: "MetaData", width: 250, height: 100 },
    { src: "/clients/Suncrush-logo.png", alt: "Suncrush", width: 250, height: 100 },
    { src: "/clients/ION-logo.png", alt: "ION", width: 250, height: 100 },
    { src: "/clients/Cologne-logo.png", alt: "Cologne", width: 250, height: 100 }
    // { src: "/clients/P&G.png", alt: "P&G", width: 250, height: 100 }
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
