import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
import { Figure, Modal, Carousel } from "react-bootstrap";
import styles from './wedo.module.scss';
import AppButton from '../AppButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';


const IframeVideoPlayer = (props: { videoSrc: string }) => {
    return (<div className='iframeVideoWrapper'>
        <iframe
            src={props.videoSrc}
            frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write">
        </iframe>
    </div>)
}

const WeDo = () => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (key: any) => {
        setShow(true);
        setModalData(key);
    }

    // Array of video URLs for carousel
    const videosForModal1 = [
        "https://player.vimeo.com/video/1040290744?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        "/videos/cocacola.mp4",
        "/videos/greenLabel2.mp4",
        "/videos/urbanLadder1.mp4",
        "/videos/urbanLadder2.mp4",
        "/videos/greenLabel1.mp4",
        "/videos/ratcity.mp4",
        "/videos/urbanLadder3.mp4",
        "/videos/urbanLadder4.mp4",
        "/videos/iAEX1.mp4",
        "/videos/iAEX2.mp4"
    ];

    // Array of thumbnail URLs for carousel
    const thumbnailsForModal1 = [
        "/santa-thumbnail.jpg",
        "/cocacola-thumbnail.jpg",
        "/greenLabel2-thumbnail.jpg",
        "/urbanLadder1-thumbnail.jpg",
        "/urbanLadder2-thumbnail.jpg",
        "/greenLabel1-thumbnail.jpg",
        "/ratcity-thumbnail.jpg",
        "/urbanLadder3-thumbnail.jpg",
        "/urbanLadder4-thumbnail.jpg",
        "/iAEX1-thumbnail.jpg",
        "/iAEX2-thumbnail.jpg"
    ];

    // Array of video URLs for carousel
    const videosForModal2 = [
        "https://player.vimeo.com/video/1040347168?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        "/videos/narayana_1.mp4",
        "/videos/narayana.mp4",
    ];

    // Array of video URLs for carousel
    const thumbnailsForModal2 = [
        // "/cleartrip-thumbnail.jpg",
        "/narayana_1-thumbnail.jpg",
        "/narayana-thumbnail.jpg",
    ];

    // Array of audio data for the third modal
    const audiosForModal3 = [
        { title: "Ab Chal Diye", src: "/audios/AB CHAL DIYE.mp3" },
        { title: "Jeetenge Aasmaan", src: "/audios/JEETENGE AASMAAN.mp3" },
        { title: "Khwaabon Ka Jahan", src: "/audios/KHWAABON KA JAHAN.mp3" },
        { title: "Milenge Wahan", src: "/audios/MILENGE WAHAN.mp3" },
        { title: "Yahin Hai Zindagi", src: "/audios/YAHIN HAI ZINDAGI.mp3" },
    ];

    // Array of images URLs for fourth model
    const visualsForModal4 = [
        { src: "/visual_pantene_1.jpg", alt: "Pantene1", width: 400, height: 300 },
        { src: "/visual_pantene_2.jpg", alt: "Pantene2", width: 400, height: 300 },
        { src: "/visual_pantene_3.jpg", alt: "Pantene3", width: 400, height: 300 },
        { src: "/visual_pantene_4.jpg", alt: "Pantene4", width: 400, height: 300 }
    ];

    const handleMailTo = (email: string) => {
        // Set the mailto link dynamically
        window.open(`mailto:${email}`, '_self');
    };

    return (
        <>
            <div className={styles.imageGrid}>
                <Figure className={styles.gridOne} onClick={() => handleShow(1)} />
                <Figure className={styles.gridTwo} onClick={() => handleShow(2)} />
                <Figure className={styles.gridThree} onClick={() => handleShow(3)} />
                <Figure className={styles.gridFour} onClick={() => handleShow(4)} />
            </div>

            {/* MODAL 1 - Video Carousel */}
            <Modal show={show && modalData === 1} size="lg" onHide={handleClose} className="modal-social modal-one" centered >
                <Modal.Header className={styles.modalTitle}>
                    <Modal.Title >
                        Brand Videos
                        <AppButton className={`${styles.hrefBtn} btn btn-primary`} onClick={() => handleMailTo('aaron@bluebot.in')}>
                            Request Video
                        </AppButton>
                    </Modal.Title>
                    <AppButton variant="transparent" className={styles.btnClose} onClick={handleClose} >
                        <FontAwesomeIcon icon={faClose} className="fa-fw" />
                    </AppButton>
                </Modal.Header>
                <Modal.Body>
                    <Carousel interval={null} controls={false}>
                        {videosForModal1.map((videoSrc, index) => (
                            <Carousel.Item key={index}>
                                {!videoSrc.includes('https:') ?
                                    <video poster={thumbnailsForModal1[index]} controls muted>
                                        <source src={videoSrc} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video> :
                                <IframeVideoPlayer videoSrc={videoSrc} key={index} />
                                }
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>

            {/* MODAL 2 - Single Video */}
            <Modal show={show && modalData === 2} size="lg" onHide={handleClose} className="modal-social modal-two" centered>
                <Modal.Header className={styles.modalTitle}>
                    <Modal.Title>
                        Social media content
                        <AppButton className={`${styles.hrefBtn} btn btn-primary`} onClick={() => handleMailTo('aaron@bluebot.in')}>
                            Request Video
                        </AppButton>
                    </Modal.Title>
                    <AppButton variant="transparent" className={styles.btnClose} onClick={handleClose} >
                        <FontAwesomeIcon icon={faClose} className="fa-fw" />
                    </AppButton>
                </Modal.Header>
                <Modal.Body>
                    <Carousel interval={null} controls={false}>
                        {videosForModal2.map((videoSrc, index) => (
                            <Carousel.Item key={index}>
                                {!videoSrc.includes('https:') ?
                                <video poster={thumbnailsForModal2[index]} controls muted>
                                    <source src={videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> :
                                <IframeVideoPlayer videoSrc={videoSrc} key={index} />
}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    {/* <video controls muted>
                        <source src="/videos/narayana.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                </Modal.Body>
            </Modal>

            {/* MODAL 3 - Music */}
            <Modal show={show && modalData === 3} size="xl" onHide={handleClose} className={`${styles.modalThree} modal-social modal-three`} centered>
                <Modal.Header className={styles.modalTitle}>
                    <Modal.Title>Music</Modal.Title>
                    <AppButton variant="transparent" className={styles.btnClose} onClick={handleClose} >
                        <FontAwesomeIcon icon={faClose} className="fa-fw" />
                    </AppButton>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.insideContent}>
                        <Image src="/gl_logo.png" width={150} height={150} alt="Green Label Logo" />
                        <h1>Green Label - Rich and Smooth</h1>
                    </div>
                    {audiosForModal3.map((audio, index) => (
                        <div className={styles.audioWrap} key={index}>
                            <h3>{audio.title}</h3>
                            <audio controls controlsList="nodownload">
                                <source src={audio.src} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    ))}
                </Modal.Body>
            </Modal>

            {/* MODAL 4 - Visual */}
            <Modal show={show && modalData === 4} size="xl" onHide={handleClose} className={`${styles.modalFour} modal-social modal-four`} centered>
                <Modal.Header className={styles.modalTitle}>
                    <Modal.Title>Visual Merchandising</Modal.Title>
                    <AppButton variant="transparent" className={styles.btnClose} onClick={handleClose} >
                        <FontAwesomeIcon icon={faClose} className="fa-fw" />
                    </AppButton>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.insideContent}>
                        <h1>Pantene - Web Banner</h1>
                    </div>
                    <div className={styles.visualsForModal4}>
                        {visualsForModal4.map((visual, index) => (
                            <div className={styles.visualImageContainer} key={index}>
                                <Image key={index} src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} />
                            </div>
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default WeDo;
