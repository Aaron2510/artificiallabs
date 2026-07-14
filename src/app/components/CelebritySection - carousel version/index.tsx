"use client";

import { useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./celeb.module.scss";

type CelebrityItem = {
  name: string;
  image: string;
  link?: string;
};

const celebrityItems: CelebrityItem[] = [
  { name: "Ajith Kumar", image: "/celebs/Thumbnails-01.png", link: "/videos/intro.mp4" },
  { name: "Janhvi Kapoor", image: "/celebs/Thumbnails-02.png", link: "/videos/showreel.mp4" },
  { name: "Lulu Hassan", image: "/celebs/Thumbnails-03.png", link: "/videos/Logo.mp4" },
  { name: "Heidi Klum & Diplo", image: "/celebs/Thumbnails-04.png", link: "/videos/cocacola.mp4" },
  { name: "Vicky Kaushal", image: "/celebs/Thumbnails-05.png", link: "/videos/Green Label.mp4" },
];

const isEmbeddableLink = (link: string) =>
  /youtube\.com|youtu\.be|vimeo\.com/i.test(link);

const CelebritySection = () => {
  const [activeItem, setActiveItem] = useState<CelebrityItem | null>(null);
  const carouselItems = useMemo(() => [...celebrityItems, ...celebrityItems], []);

  return (
    <section className={styles.section}>
      <div className={styles.overlayTop} />
      <div className={styles.overlayBottom} />
      <div className={styles.marquee} aria-label="Celebrity carousel">
        <div className={styles.track}>
          {carouselItems.map((item, index) => (
            <button
              key={`${item.name}-${index}`}
              type="button"
              className={styles.card}
              onClick={() => setActiveItem(item)}
            >
              <img src={item.image} alt={item.name} className={styles.image} />
            </button>
          ))}
        </div>
      </div>

      <Modal
        show={Boolean(activeItem)}
        onHide={() => setActiveItem(null)}
        centered
        size="lg"
        contentClassName={styles.modalContent}
      >
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title>{activeItem?.name ?? "Featured Link"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          {activeItem?.link ? (
            isEmbeddableLink(activeItem.link) ? (
              <iframe
                src={activeItem.link}
                title={activeItem.name}
                className={styles.embedFrame}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <video className={styles.videoPlayer} controls autoPlay playsInline>
                <source src={activeItem.link} />
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <img src={activeItem?.image} alt={activeItem?.name} className={styles.modalImage} />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default CelebritySection;
