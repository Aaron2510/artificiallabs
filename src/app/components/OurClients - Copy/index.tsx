"use client";
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./client.module.scss";

const OurClients = () => {
  const clientImages = [
    { src: "/P&G.png", alt: "P&G", width: 250, height: 100 },
    { src: "/H&S-logo-4k.png", alt: "Head and Shoulders", width: 250, height: 100 },
    { src: "/Tide_print.png", alt: "Tide", width: 250, height: 100 },
    { src: "/Pantene-Logo.png", alt: "Pantene", width: 250, height: 100 },
    { src: "/Always-logo.png", alt: "Always", width: 250, height: 100 },
    { src: "/Rejoice-logo.png", alt: "Rejoice", width: 250, height: 100 },
    { src: "/INBREW.png", alt: "Inbrew", width: 250, height: 100 },
    { src: "/UL.png", alt: "Urban Ladder", width: 250, height: 100 },
    { src: "/DD.png", alt: "Dairy Day", width: 250, height: 100 },
    { src: "/N2.png", alt: "Narayana", width: 250, height: 100 },
    { src: "/Cleartrip-logo.png", alt: "Cleartrip", width: 250, height: 100 },
    { src: "/Publicis-logo.png", alt: "Publicis", width: 250, height: 100 },
    { src: "/Leo Burnett-logo.png", alt: "Leo Burnett", width: 250, height: 100 },
    { src: "/Namma-yatri-logo.png", alt: "Namma yatri", width: 250, height: 100 },
    { src: "/Saatchi-logo.png", alt: "Saatchi and Saatchi", width: 250, height: 100 },
    { src: "/Metadata-logo.png", alt: "MetaData", width: 250, height: 100 },
    { src: "/PocketFM-logo.png", alt: "PocketFM", width: 250, height: 100 },
    { src: "/Campa-logo.png", alt: "Campa", width: 250, height: 100 },
    { src: "/Ariel-logo.png", alt: "Ariel", width: 250, height: 100 },
    { src: "/BPL-logo.png", alt: "BPL", width: 250, height: 100 },
    { src: "/Joy-logo.png", alt: "Joy", width: 250, height: 100 }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 3, // Show 3 images at a time
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 2, // Show 2 images at a time
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.clientSlider}>
      <Slider {...settings}>
        {clientImages.map((client, index) => (
          <div className={styles.imageContainer} key={index}>
            <Image
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClients;