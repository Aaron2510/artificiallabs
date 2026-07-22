"use client";

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AppButton from "../AppButton";
import styles from "./celeb.module.scss";

type CelebrityItem = {
  name: string;
  subtitle: string;
  image: string;
  link: string;
};

const celebrityItems: CelebrityItem[] = [
  { name: "Janhvi Kapoor", subtitle: "Pantene Flat Iron", image: "/celebs/Jhanvi Kapoor.png", link: "https://player.vimeo.com/video/1205783321?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
  { name: "Lulu Hassan", subtitle: "Downy Pure Bliss", image: "/celebs/Lulu Hassan.jpg", link: "https://player.vimeo.com/video/1205765297?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
  { name: "Heidi Klum & Diplo", subtitle: "Red Eye | Germany's Next Top Model", image: "/celebs/Heidi Klum & Diplo.png", link: "https://player.vimeo.com/video/1205765298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
  { name: "Ajith Kumar", subtitle: "Campa Energy", image: "/celebs/Ajith Kumar.png", link: "https://player.vimeo.com/video/1205765295?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
  { name: "Vicky Kaushal", subtitle: "Appy Fizz | The One The Only", image: "/celebs/Vicky Kaushal.png", link: "https://player.vimeo.com/video/1205765296?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
];

const CelebritySection = () => {
  const [activeItem, setActiveItem] = useState<CelebrityItem | null>(null);
  const [playVideo, setPlayVideo] = useState(false);

  const getVimeoEmbedUrl = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    if (match) {
      return `https://player.vimeo.com/video/${match[1]}?title=0&byline=0&portrait=0&autoplay=1`;
    }

    return url;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {celebrityItems.map((item, index) => (
            <button
              key={`${item.name}-${index}`}
              type="button"
              className={styles.item}
              onClick={() => setActiveItem(item)}
            >
              <img src={item.image} alt={item.name} className={styles.image} />
              <div className={styles.caption}>
                <strong>{item.name}</strong>
                <span>{item.subtitle}</span>
              </div>
            </button>
          ))}

          <div className={styles.extraCard}>
            <div className={styles.extraText}>
              <span>CELEBRITY</span>
              <span>WORK</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={Boolean(activeItem)}
        onHide={() => {
          setActiveItem(null);
          setPlayVideo(false);
        }}
        centered
        size="xl"
        className="modal-social"
      >
        <Modal.Header className={styles.modalTitle}>
          <Modal.Title>{activeItem?.name}</Modal.Title>
          <AppButton variant="transparent" className={styles.btnClose} onClick={() => setActiveItem(null)}>
            <FontAwesomeIcon icon={faClose} className="fa-fw" />
          </AppButton>
        </Modal.Header>
        <Modal.Body style={{ padding: 0, background: "#000" }}>
          {activeItem && !playVideo && (
            <button
              type="button"
              onClick={() => setPlayVideo(true)}
              style={{
                width: "100%",
                border: 0,
                padding: 0,
                background: "transparent",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <img
                src={activeItem.image}
                alt={activeItem.name}
                style={{ width: "100%", display: "block", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  color: "#fff",
                }}
              >
                ▶
              </div>
            </button>
          )}

          {activeItem && playVideo && (
            <div style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden", background: "#000" }}>
              <iframe
                src={getVimeoEmbedUrl(activeItem.link)}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                allowFullScreen
                title={activeItem.name}
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default CelebritySection;
