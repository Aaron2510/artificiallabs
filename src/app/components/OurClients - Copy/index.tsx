"use client";
import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./client.module.scss";

const OurClients = () => {
  const clientImages = [
    { src: "/Publicis-logo_1.png", alt: "Publicis", width: 150, height: 100 },
    { src: "/P&G_1.png", alt: "P&G", width: 150, height: 100 },
    { src: "/H&S-logo-4k.png", alt: "Head and Shoulders", width: 150, height: 100 },
    { src: "/Pantene-Logo_1.png", alt: "Pantene", width: 150, height: 100 },
    { src: "/Rejoice-logo_1.png", alt: "Rejoice", width: 150, height: 100 },
    { src: "/Joy-logo_1.png", alt: "Joy", width: 100, height: 100 },
    { src: "/Tide_print_1.png", alt: "Tide", width: 100, height: 100 },
    { src: "/Ariel-logo_1.png", alt: "Ariel", width: 100, height: 100 },
    { src: "/Always-logo.png", alt: "Always", width: 150, height: 100 },
    { src: "/Leo_Burnett-logo_1.png", alt: "Leo Burnett", width: 150, height: 100 },
    { src: "/Saatchi-logo_1.png", alt: "Saatchi and Saatchi", width: 150, height: 100 },
    { src: "/Cleartrip-logo_1.png", alt: "Cleartrip", width: 150, height: 100 },
    { src: "/Campa-logo_1.png", alt: "Campa", width: 150, height: 100 },
    { src: "/UL_1.png", alt: "Urban Ladder", width: 150, height: 100 },
    { src: "/DD_1.png", alt: "Dairy Day", width: 100, height: 100 },
    { src: "/PocketFM-logo_1.png", alt: "PocketFM", width: 100, height: 100 },
    { src: "/BPL-logo_1.png", alt: "BPL", width: 100, height: 100 },
    { src: "/Metadata-logo_1.png", alt: "MetaData", width: 150, height: 100 },
    { src: "/N2_1.png", alt: "Narayana", width: 150, height: 100 },
    { src: "/Namma-yatri-logo_1.png", alt: "Namma yatri", width: 150, height: 100 },
    { src: "/INBREW_1.png", alt: "Inbrew", width: 150, height: 100 }
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
    arrows: false,
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